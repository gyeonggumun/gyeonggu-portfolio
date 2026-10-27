import { useState } from 'react';
import { profile, awards, education, experience, projects } from './data/portfolio';
import Icon from './components/Icon';
import ProjectCard from './components/ProjectCard';
import ProjectViewer from './components/ProjectViewer';

function SectionHeading({ number, label, title, description }) {
  return <div className="section-heading"><div><span className="eyebrow"><span className="section-number">{number}</span>{label}</span><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}

function CredentialRow({ entry, type, number }) {
  const isAward = type === 'award';
  return <details className="credential-row"><summary><span className="credential-icon"><Icon name={isAward ? 'award' : 'book'} size={18} /></span><div className="credential-copy"><h4>{entry.title || (isAward ? `수상 · 선정 내역 ${number}` : `교육 과정 ${number}`)}</h4><span>{[entry.organization, entry.date || entry.period].filter(Boolean).join(' · ') || '내용 추가 예정'}</span></div><span className="credential-action">{isAward ? '인증서' : '수료증'}<Icon name="down" size={16} /></span></summary><div className="credential-body">{entry.image ? <a href={entry.image} target="_blank" rel="noreferrer"><img src={entry.image} alt={`${entry.title} 증빙 자료`} loading="lazy" /></a> : <div className="credential-placeholder"><Icon name="file" size={30} /><p>{isAward ? '상장 또는 인증서' : '수료증'} 이미지가 들어갈 자리입니다.</p></div>}</div></details>;
}

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const featuredTeam = projects.filter(project => project.featured && project.category === 'team');
  const featuredPersonal = projects.filter(project => project.featured && project.category === 'personal');
  return <>
    <a className="skip-link" href="#main">본문으로 건너뛰기</a>
    <header className="site-header"><div className="container header-inner"><a className="wordmark" href="#about" aria-label="포트폴리오 처음으로">PORTFOLIO<span>.</span></a><nav aria-label="주 메뉴"><a href="#about">About</a><a href="#journey">Experience</a><a href="#projects">Projects</a><a href="#contact">Contact</a></nav></div></header>
    <main id="main">
      <section className="hero container" id="about" aria-labelledby="intro-name">
        <div className="hero-main"><div className="portrait">{profile.photo ? <img src={profile.photo} alt={`${profile.name} 프로필 사진`} /> : <><div className="portrait-placeholder"><Icon name="user" size={46} /><span>프로필 사진</span></div><span className="portrait-caption">GYEONGGU MUN</span></>}</div><div className="hero-copy"><p className="eyebrow">HELLO, I'M</p><div className="name-line"><h1 id="intro-name">{profile.name}</h1><span>{profile.role}</span></div><p className="introduction">{profile.introduction}</p><ul className="highlights">{profile.highlights.map(item => <li key={item}>{item}</li>)}</ul></div></div>
        <div className="hero-bottom"><div className="hero-actions"><a className="button button-primary" href="#projects">프로젝트 보기<Icon name="arrow" size={16} /></a><a className="button" href={profile.github} target="_blank" rel="noreferrer">GitHub<Icon name="diagonal" size={15} /></a>{profile.resume ? <a className="button" href={profile.resume} target="_blank" rel="noreferrer">이력서<Icon name="file" size={15} /></a> : <button className="button resume-button" disabled title="이력서 준비 중">이력서<span className="soon">준비 중</span></button>}</div><span className="hero-note">배우고, 만들고, 기록합니다.</span></div>
        <div className="tech-stack"><span className="eyebrow">TECH STACK</span><ul>{profile.stack.map(item => <li key={item}>{item}</li>)}</ul></div>
      </section>

      <section className="journey section container" id="journey" aria-labelledby="journey-heading">
        <div id="journey-heading"><SectionHeading number="01" label="BACKGROUND" title="경험과 배움" description="지금까지의 발자취를 차곡차곡." /></div>
        <div className="journey-group"><div className="group-label"><h3>상장 · 인증</h3><span>AWARDS</span></div><div className="credential-list">{awards.map((entry, i) => <CredentialRow key={entry.id} entry={entry} type="award" number={String(i + 1).padStart(2, '0')} />)}</div></div>
        <div className="journey-group"><div className="group-label"><h3>교육 경력</h3><span>EDUCATION</span></div><div className="credential-list">{education.map((entry, i) => <CredentialRow key={entry.id} entry={entry} type="education" number={String(i + 1).padStart(2, '0')} />)}</div></div>
        <div className="journey-group"><div className="group-label"><h3>경력</h3><span>EXPERIENCE</span></div><div className="experience-list">{experience.length ? experience.map(entry => <article className="experience-entry" key={entry.id}><span>{entry.period}</span><h4>{entry.company}</h4><p>{entry.role}</p><p>{entry.description}</p></article>) : <div className="experience-empty"><Icon name="briefcase" size={21} /><div><h4>다음 경험을 기록할 공간</h4><p>경력 사항은 추후 추가할 예정입니다.</p></div></div>}</div></div>
      </section>

      <section className="project-section section" id="projects"><div className="container"><SectionHeading number="02" label="SELECTED TEAM PROJECTS" title="함께 만든 프로젝트" description="대표 팀 프로젝트 3개" /><div className="project-grid">{featuredTeam.map(project => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}</div></div></section>
      <section className="project-section personal-section section"><div className="container"><SectionHeading number="03" label="SELECTED PERSONAL PROJECTS" title="스스로 만든 프로젝트" description="대표 개인 프로젝트 3개" /><div className="project-grid">{featuredPersonal.map(project => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}</div></div></section>

      <section className="archive section container" aria-labelledby="archive-title"><div className="section-heading"><div><span className="eyebrow"><span className="section-number">04</span>MORE WORKS</span><h2 id="archive-title">그 밖의 작업들</h2></div><p>더 많은 프로젝트를 펼쳐 보세요.</p></div>{['team', 'personal'].map(category => { const remaining = projects.filter(project => !project.featured && project.category === category); return <details className="archive-group" key={category}><summary><span>{category === 'team' ? '팀 프로젝트' : '개인 프로젝트'}<span className="archive-count">{String(remaining.length).padStart(2, '0')}</span></span><span className="archive-toggle"><span className="when-closed">펼쳐 보기</span><span className="when-open">접기</span><Icon name="down" size={18} /></span></summary><div className="project-grid archive-grid">{remaining.map(project => <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />)}</div></details>; })}</section>
    </main>
    <footer className="site-footer" id="contact"><div className="container"><div className="footer-main"><div><span className="eyebrow">CONTACT</span><h2>이야기를 나눠요.</h2><p>새로운 만남과 협업을 기다립니다.</p></div><div className="contact-links"><a href={`mailto:${profile.email}`}>{profile.email}<Icon name="diagonal" size={19} /></a><a href={profile.github} target="_blank" rel="noreferrer">GitHub<Icon name="diagonal" size={19} /></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {profile.name}</span><a href="#about">Back to top<Icon name="arrow" size={14} /></a></div></div></footer>
    {activeProject && <ProjectViewer key={activeProject.id} project={activeProject} onClose={() => setActiveProject(null)} />}
  </>;
}
