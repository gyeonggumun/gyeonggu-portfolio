import Icon from './Icon';
import { projectName } from '../data/portfolio';

export function ProjectImage({ project, className = '' }) {
  if (project.image) return <img className={`project-image ${className}`} src={project.image} alt={`${projectName(project)} 대표 이미지`} loading="lazy" />;
  return <div className={`project-image image-placeholder tone-${Number(project.number) % 3} ${className}`}>
    <span className="image-corner">{project.category === 'team' ? 'TEAM' : 'PERSONAL'} / {project.number}</span>
    <div className="placeholder-center"><Icon name="image" size={26} /><span>대표 이미지</span></div>
    <span className="image-bottom">IMAGE TO COME</span>
  </div>;
}

export default function ProjectCard({ project, onOpen }) {
  return <button className="project-card" onClick={() => onOpen(project)} aria-label={`${projectName(project)} 슬라이드 열기`}>
    <ProjectImage project={project} />
    <div className="card-copy">
      <div className="card-heading"><h3>{projectName(project)}</h3><span className="card-arrow"><Icon name="diagonal" size={19} /></span></div>
      <p>{project.description || '프로젝트의 한 줄 소개를 추가할 자리입니다.'}</p>
      <span className="card-meta">{project.period || '내용 준비 중'}<span>{String(project.slides.length).padStart(2, '0')} PAGES</span></span>
    </div>
  </button>;
}
