import { monghyang } from "./monghyang";
import { safestay } from "./safestay";
import { loop } from "./loop";
import { cleanticket } from "./cleanticket";
import { grayguard } from "./grayguard";
import { dramacalendar } from "./dramacalendar";
import { tutoroo } from "./tutoroo";
import { websecLab } from "./websecLab";
import { kaliCTF } from "./kaliCTF";
import { moaSurvey } from "./moaSurvey";
import { reflection } from "./reflection";
import { processingStudy } from "./processingStudy";

// 실제 내용은 이 파일에서 교체합니다. 빈 값은 화면에서 준비 중 상태로 표시됩니다.
export const profile = {
  name: "문경구",
  role: "Web Developer",
  school: "동서대학교 컴퓨터공학과",
  introduction:
    "사용자 경험과 서비스 안정성을 함께 설계하는 개발자입니다. 웹 개발과 DB·보안 인프라 경험을 바탕으로, 개발 단계부터 보안을 구현하는 시큐어 코딩에 도전합니다.",
  highlights: [
    "누가 어떤 데이터를 읽고 바꿀 수 있는지 정의하고, 그 권한을 DB에서 검증합니다.",
    "서버를 직접 중단해 요청이 이어지는지 확인하고, 백업을 복원해 데이터 복구를 검증합니다.",
    "팀장으로서 개발·보안·인프라 담당자와 서비스 연결 방식과 배포 책임을 조율합니다.",
  ],
  photo: "/images/profile.jpeg",
  resume: null,
  github: "https://github.com/gyeonggumun",
  email: "lion989072@gmail.com",
  stack: ["React", "Node.js", "Java", "Python", "MySQL", "Docker", "k3s"],
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
    image: "/images/recognition-u300-2025.png",
  },
];

export const education = [
  {
    id: "education-03",
    title: "SKT 알래프 교육",
    organization: "SKT",
    period: "2026.08.11 ~ 2026.11.12 · 수료",
    description: "AI 보안 에이전트 개발 과정을 수료하고 케테르(최고 등급) 인증을 받았습니다.",
    image: "/images/completion-skt-aleph.png",
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
    image: "/images/completion-ict-ai-2024.png",
  },
];

export const experience = [
  {
    id: "caredoc",
    period: "2024.09 ~ 2024.12",
    company: "주식회사 케어닥",
    role: "웹 페이지 제작 · 데이터 정리 · 디자인 지원",
    responsibilities: [
      "설문조사 페이지와 장기요양등급 계산기 랜딩 페이지 제작",
      "엑셀 기반 데이터 정리 및 병원 입찰 일정 조사",
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

export const projects = [
  monghyang,
  safestay,
  loop,
  moaSurvey,
  reflection,
  processingStudy,
  cleanticket,
  grayguard,
  dramacalendar,
  tutoroo,
  websecLab,
  kaliCTF,
];

export const projectName = (project) =>
  project.title ||
  `${project.category === "team" ? "팀" : "개인"} 프로젝트 ${project.number}`;
