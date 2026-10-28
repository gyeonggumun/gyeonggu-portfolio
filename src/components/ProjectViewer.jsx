import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { projectName } from "../data/portfolio";

function EmptyField({ label, children, className = "" }) {
  return (
    <div className={`slide-field ${className}`}>
      <span className="field-label">{label}</span>
      {children ? (
        <p>{children}</p>
      ) : (
        <div className="placeholder-lines" aria-label="내용 추가 예정">
          <i />
          <i />
          <i />
        </div>
      )}
    </div>
  );
}

function SlideImage({ src, label = "이미지를 추가할 자리" }) {
  return src ? (
    <img className="slide-image" src={src} alt={label} />
  ) : (
    <div className="slide-image slide-image-empty">
      <Icon name="image" size={30} />
      <span>{label}</span>
    </div>
  );
}

function SlideContent({ project, slide }) {
  switch (slide.layout) {
    case "overview":
      return (
        <div className="slide-overview">
          <SlideImage
            src={slide.image || project.image}
            label="프로젝트 대표 이미지"
          />
          <div className="overview-copy">
            <EmptyField label="PROJECT">{project.title}</EmptyField>
            <EmptyField label="INTRODUCTION">
              {slide.text || project.description}
            </EmptyField>
            <div className="slide-mini-grid">
              <EmptyField label="PERIOD">{project.period}</EmptyField>
              <EmptyField label="ROLE">{project.role}</EmptyField>
            </div>
          </div>
        </div>
      );
    case "split":
      return (
        <div className="slide-split">
          <div>
            <EmptyField label="주요 내용">{slide.text}</EmptyField>
            <EmptyField label="담당 역할 / 구현 내용">
              {slide.items[0]?.text}
            </EmptyField>
          </div>
          <SlideImage src={slide.image} label="설계도 또는 구현 화면" />
        </div>
      );
    case "gallery":
      return (
        <div className="slide-gallery">
          {[0, 1].map((i) => (
            <div key={i}>
              <SlideImage
                src={slide.items[i]?.image}
                label={`화면 ${String(i + 1).padStart(2, "0")}`}
              />
              <EmptyField label={slide.items[i]?.title || "화면 설명"}>
                {slide.items[i]?.text}
              </EmptyField>
            </div>
          ))}
        </div>
      );
    case "process":
      return (
        <div className="slide-process">
          {["문제 발견", "접근과 해결", "변화와 확인"].map((label, i) => (
            <div className="process-step" key={label}>
              <span className="step-number">0{i + 1}</span>
              <EmptyField label={slide.items[i]?.title || label}>
                {slide.items[i]?.text}
              </EmptyField>
            </div>
          ))}
        </div>
      );
    case "results":
      return (
        <div className="slide-results">
          <div className="result-main">
            <span className="field-label">RESULT</span>
            <EmptyField label="결과와 성과">{slide.text}</EmptyField>
          </div>
          <div>
            <EmptyField label="배운 점">{slide.items[0]?.text}</EmptyField>
            <EmptyField label="다음 단계">{slide.items[1]?.text}</EmptyField>
          </div>
        </div>
      );
    default:
      return <EmptyField label="내용">{slide.text}</EmptyField>;
  }
}

export default function ProjectViewer({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const dialogRef = useRef(null);
  const touch = useRef(null);
  const slide = project.slides[index];
  const move = (delta) =>
    setIndex((value) =>
      Math.max(0, Math.min(project.slides.length - 1, value + delta)),
    );

  useEffect(() => {
    const dialog = dialogRef.current;
    const focused = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
      dialog.close();
      focused?.focus();
    };
  }, []);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      move(1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      move(-1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      setIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      setIndex(project.slides.length - 1);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-dialog"
      aria-labelledby="viewer-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="viewer-shell">
        <header className="viewer-header">
          <div>
            <span className="eyebrow">
              {project.category === "team"
                ? "TEAM PROJECT"
                : "PERSONAL PROJECT"}
            </span>
            <h2 id="viewer-title">{projectName(project)}</h2>
          </div>
          <button
            className="icon-button viewer-close"
            onClick={onClose}
            aria-label="프로젝트 닫기"
          >
            <Icon name="close" />
          </button>
        </header>
        <div
          className={`slide-stage${zoomed ? " is-zoomed" : ""}`}
          onTouchStart={(event) => {
            const point = event.changedTouches[0];
            touch.current = { x: point.clientX, y: point.clientY };
          }}
          onTouchEnd={(event) => {
            if (!touch.current || zoomed) return;
            const point = event.changedTouches[0];
            const dx = point.clientX - touch.current.x;
            const dy = point.clientY - touch.current.y;
            if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy))
              move(dx < 0 ? 1 : -1);
            touch.current = null;
          }}
        >
          <div className="slide-canvas">
            <article
              className={`presentation-slide layout-${slide.layout}`}
              key={index}
              aria-label={`${index + 1}페이지: ${slide.title}`}
            >
              <div className="slide-topline">
                <span>{projectName(project)}</span>
                <span>
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(project.slides.length).padStart(2, "0")}
                </span>
              </div>
              <h3>{slide.title}</h3>
              <div className="slide-content">
                <SlideContent project={project} slide={slide} />
              </div>
              <div className="slide-footer">
                <span>
                  {project.category === "team"
                    ? "TEAM PROJECT"
                    : "PERSONAL PROJECT"}
                </span>
                <span>문경구 · PORTFOLIO</span>
              </div>
            </article>
          </div>
        </div>
        <div className="viewer-controls">
          <span className="keyboard-hint">키보드 ← → 또는 좌우로 넘기기</span>
          <button
            className="zoom-toggle"
            onClick={() => setZoomed((value) => !value)}
            aria-pressed={zoomed}
          >
            {zoomed ? "화면에 맞추기" : "확대 보기"}
            <Icon name="diagonal" size={13} />
          </button>
          <div className="slide-navigation">
            <button
              className="icon-button"
              onClick={() => move(-1)}
              disabled={index === 0}
              aria-label="이전 슬라이드"
            >
              <Icon name="left" size={18} />
            </button>
            <span className="slide-counter" aria-live="polite">
              {index + 1} <i>/</i> {project.slides.length}
            </span>
            <button
              className="icon-button"
              onClick={() => move(1)}
              disabled={index === project.slides.length - 1}
              aria-label="다음 슬라이드"
            >
              <Icon name="right" size={18} />
            </button>
          </div>
        </div>
        <nav className="slide-tabs" aria-label="프로젝트 페이지 선택">
          {project.slides.map((item, i) => (
            <button
              key={`${item.layout}-${i}`}
              className={i === index ? "selected" : ""}
              aria-current={i === index ? "page" : undefined}
              onClick={() => setIndex(i)}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {item.title}
            </button>
          ))}
        </nav>
        {(project.repository || project.website) && (
          <div className="viewer-links">
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noreferrer">
                GitHub <Icon name="diagonal" size={14} />
              </a>
            )}
            {project.website && (
              <a href={project.website} target="_blank" rel="noreferrer">
                웹사이트 <Icon name="diagonal" size={14} />
              </a>
            )}
          </div>
        )}
      </div>
    </dialog>
  );
}
