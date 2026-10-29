// 실제 내용은 이 파일에서 교체합니다. 빈 값은 화면에서 준비 중 상태로 표시됩니다.
export const profile = {
  name: "문경구",
  role: "Web Developer",
  school: "동서대학교 컴퓨터공학과",
  introduction:
    "사용자 경험과 서비스 안정성을 함께 고민하는 개발자입니다. 웹 개발과 DB·보안 인프라 경험을 바탕으로, 개발 단계부터 보안을 고려하는 시큐어 코딩 분야에서 성장하고 싶습니다.",
  highlights: [
    "React·TypeScript 기반 UI 개발과 API 연동",
    "팀장 경험을 바탕으로 한 역할 조율과 진행 상황 공유",
    "구현·테스트·회고를 기록하며 개선하는 개발 습관",
  ],
  photo: "/images/profile.jpeg",
  resume: null,
  github: "https://github.com/gyeonggumun",
  email: "lion989072@gmail.com",
  stack: ["React", "TypeScript", "Java", "Python", "MySQL", "Docker", "k3s"],
};

export const awards = [
  {
    id: "award-01",
    title: "2025 BDIA 사이드 프로젝트 아이디어 상",
    organization: "부산광역시 주최 · 부산정보산업진흥원 주관",
    date: "2025.12.12",
    description: "몽향의 숲 팀으로 수상했습니다.",
    image: "/images/award-bdia-2025.png",
  },
  {
    id: "award-02",
    title: "2025 학생 창업유망팀 300+ 성장트랙 최종 선정",
    organization: "교육부 장관 인증",
    date: "2025.10.17",
    description: "몽향의 숲 팀으로 성장트랙에 최종 선정되었습니다.",
    image: "/images/recognition-u300-2025.jpg",
  },
];

export const education = [
  {
    id: "education-03",
    title: "SKT 알래프 교육",
    organization: "SKT",
    period: "진행 중 · 2026.11.12 수료 예정",
    description: "현재 교육에 참여하고 있으며, 수료 후 수료증을 추가할 예정입니다.",
    image: null,
    pendingLabel: "수료 후 수료증 추가 예정",
  },
  {
    id: "education-02",
    title: "[이스트캠프] 가디언즈 정보보호 및 보안 인프라 운영 관리",
    organization: "",
    period: "2026.03.24 ~ 2026.08.07 · 수료",
    description: "정보보호와 보안 인프라 운영·관리를 학습했습니다.",
    image: "/images/completion-guardian-2026.png",
  },
  {
    id: "education-01",
    title: "검색증강생성(RAG) AI 기반 문화관광 스마트 콘텐츠 플랫폼 개발자 양성",
    organization: "",
    period: "2025.09.18 ~ 2026.02.05 · 수료",
    description: "RAG AI 기반 문화관광 콘텐츠 플랫폼 개발 과정을 수료했습니다.",
    image: "/images/completion-rag-2026.png",
  },
  {
    id: "education-04",
    title: "지역 ICT이노베이션스퀘어 인공지능 교육",
    organization: "(재)부산정보산업진흥원",
    period: "2024.07.02 ~ 2024.08.23 · 160시간 수료",
    description: "신기술 동향 분석을 위한 데이터 분석 기반 인공지능 모델 설계·구축 과정을 수료했습니다.",
    image: null,
    pendingLabel: "수료증 추가 예정",
  },
];

export const experience = [
  {
    id: "caredoc",
    period: "2024.09 ~ 2024.12",
    company: "주식회사 케어닥",
    role: "웹 페이지 제작 · 데이터 정리 · 디자인 지원",
    responsibilities: [
      "엑셀 기반 데이터 정리 및 병원 입찰 일정 조사",
      "설문조사 페이지와 장기요양등급 계산기 랜딩 페이지 제작",
      "Figma 디자인, 명함 및 판촉물 제작 지원",
    ],
  },
];

export const skills = [
  { title: "React / TypeScript", description: "UI·컴포넌트 구성, 반응형 화면과 설문 제작 서비스 구현" },
  { title: "Java / Spring", description: "Java·Spring MVC와 REST API 학습 및 구현 실습" },
  { title: "Python / Flask", description: "Python 실습, Flask API와 웹서비스 연동" },
  { title: "MySQL / MariaDB", description: "DB 계정 권한·스키마 설계, 복제·백업·모니터링 구성" },
  { title: "Docker / k3s", description: "컨테이너 기반 웹·API 환경 구성과 k3s 배포 실습" },
  { title: "Snort / Graylog", description: "IDS/IPS 탐지 규칙 작성, 로그 수집과 관제 연동" },
  { title: "Git / GitHub", description: "브랜치·PR·커밋을 활용한 협업과 작업 문서화" },
  { title: "AI 활용", description: "AI가 생성한 코드와 문서 초안을 검토하고 직접 테스트·검증" },
];

const emptySlide = (layout, title) => ({
  layout,
  title,
  text: "",
  image: null,
  items: [],
});
const makeProject = (id, category, featured, number, layouts) => ({
  id,
  category,
  featured,
  number,
  title: "",
  description: "",
  image: null,
  period: "",
  role: "",
  technologies: [],
  repository: null,
  website: null,
  // 슬라이드를 추가·삭제하거나 layout을 바꾸면 프로젝트마다 다른 페이지 구성이 됩니다.
  slides: layouts.map(([layout, title]) => emptySlide(layout, title)),
});

export const projects = [
  makeProject("team-01", "team", true, "01", [
    ["overview", "프로젝트 개요"],
    ["split", "담당 역할과 구현"],
    ["gallery", "주요 화면"],
    ["results", "결과와 회고"],
  ]),
  makeProject("team-02", "team", true, "02", [
    ["overview", "프로젝트 개요"],
    ["process", "문제 해결 과정"],
    ["results", "결과와 회고"],
  ]),
  makeProject("team-03", "team", true, "03", [
    ["overview", "프로젝트 개요"],
    ["split", "설계와 구조"],
    ["gallery", "주요 화면"],
    ["process", "구현 과정"],
    ["results", "결과와 회고"],
  ]),
  makeProject("personal-01", "personal", true, "01", [
    ["overview", "프로젝트 개요"],
    ["gallery", "주요 화면"],
    ["results", "배운 점과 다음 단계"],
  ]),
  makeProject("personal-02", "personal", true, "02", [
    ["overview", "프로젝트 개요"],
    ["split", "핵심 기능"],
    ["process", "개선 과정"],
    ["results", "배운 점과 다음 단계"],
  ]),
  makeProject("personal-03", "personal", true, "03", [
    ["overview", "프로젝트 개요"],
    ["gallery", "주요 화면"],
    ["results", "배운 점과 다음 단계"],
  ]),
  makeProject("team-04", "team", false, "04", [
    ["overview", "프로젝트 개요"],
    ["split", "주요 작업"],
  ]),
  makeProject("team-05", "team", false, "05", [
    ["overview", "프로젝트 개요"],
    ["gallery", "주요 화면"],
    ["results", "결과와 회고"],
  ]),
  makeProject("personal-04", "personal", false, "04", [
    ["overview", "프로젝트 개요"],
    ["split", "주요 작업"],
  ]),
  makeProject("personal-05", "personal", false, "05", [
    ["overview", "프로젝트 개요"],
    ["gallery", "주요 화면"],
  ]),
];

export const projectName = (project) =>
  project.title ||
  `${project.category === "team" ? "팀" : "개인"} 프로젝트 ${project.number}`;
