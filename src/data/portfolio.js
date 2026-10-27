// 실제 내용은 이 파일에서 교체합니다. 빈 값은 화면에서 준비 중 상태로 표시됩니다.
export const profile = {
  name: '문경구',
  role: 'Web Developer',
  introduction: '사용자 경험과 안정적인 서비스 구현을 함께 고민하는 개발자입니다.',
  highlights: ['React 기반 웹 개발', '팀 프로젝트 및 협업 경험', '인프라·보안 기술 학습 경험'],
  photo: null,
  resume: null,
  github: 'https://github.com/gyeonggumun',
  email: 'lion989072@gmail.com',
  stack: ['React', 'Python', 'Docker', 'Kubernetes'],
};

export const awards = [
  { id: 'award-01', title: '', organization: '', date: '', image: null },
  { id: 'award-02', title: '', organization: '', date: '', image: null },
];

export const education = [
  { id: 'education-01', title: '', organization: '', period: '', image: null },
  { id: 'education-02', title: '', organization: '', period: '', image: null },
  { id: 'education-03', title: '', organization: '', period: '', image: null },
];

export const experience = [];

const emptySlide = (layout, title) => ({ layout, title, text: '', image: null, items: [] });
const makeProject = (id, category, featured, number, layouts) => ({
  id,
  category,
  featured,
  number,
  title: '',
  description: '',
  image: null,
  period: '',
  role: '',
  technologies: [],
  repository: null,
  website: null,
  // 슬라이드를 추가·삭제하거나 layout을 바꾸면 프로젝트마다 다른 페이지 구성이 됩니다.
  slides: layouts.map(([layout, title]) => emptySlide(layout, title)),
});

export const projects = [
  makeProject('team-01', 'team', true, '01', [['overview', '프로젝트 개요'], ['split', '담당 역할과 구현'], ['gallery', '주요 화면'], ['results', '결과와 회고']]),
  makeProject('team-02', 'team', true, '02', [['overview', '프로젝트 개요'], ['process', '문제 해결 과정'], ['results', '결과와 회고']]),
  makeProject('team-03', 'team', true, '03', [['overview', '프로젝트 개요'], ['split', '설계와 구조'], ['gallery', '주요 화면'], ['process', '구현 과정'], ['results', '결과와 회고']]),
  makeProject('personal-01', 'personal', true, '01', [['overview', '프로젝트 개요'], ['gallery', '주요 화면'], ['results', '배운 점과 다음 단계']]),
  makeProject('personal-02', 'personal', true, '02', [['overview', '프로젝트 개요'], ['split', '핵심 기능'], ['process', '개선 과정'], ['results', '배운 점과 다음 단계']]),
  makeProject('personal-03', 'personal', true, '03', [['overview', '프로젝트 개요'], ['gallery', '주요 화면'], ['results', '배운 점과 다음 단계']]),
  makeProject('team-04', 'team', false, '04', [['overview', '프로젝트 개요'], ['split', '주요 작업']]),
  makeProject('team-05', 'team', false, '05', [['overview', '프로젝트 개요'], ['gallery', '주요 화면'], ['results', '결과와 회고']]),
  makeProject('personal-04', 'personal', false, '04', [['overview', '프로젝트 개요'], ['split', '주요 작업']]),
  makeProject('personal-05', 'personal', false, '05', [['overview', '프로젝트 개요'], ['gallery', '주요 화면']]),
];

export const projectName = (project) => project.title || `${project.category === 'team' ? '팀' : '개인'} 프로젝트 ${project.number}`;
