const image = (name) => `/images/tutoroo/${name}`;
const repository = "https://github.com/Tutoroo-project/Tutoroo_project";
const front = `${repository}/tree/main/Tutoroo_project_front`;
const code = (path) => `${repository}/blob/main/Tutoroo_project_front/${path}`;

export const tutoroo = {
  id: "team-06",
  category: "team",
  featured: false,
  number: "06",
  title: "Tutoroo · 튜터루",
  description: "레벨테스트부터 로드맵·수업·피드백을 연결한 AI 맞춤 학습 플랫폼. 초기 Figma 화면 흐름을 설계하고, 공통 UI부터 학습·대시보드까지 전반적인 프론트엔드 작업을 전담했습니다.",
  image: image("cover.png"),
  period: "4인 팀 프로젝트 · 프론트엔드 전담",
  role: "초기 Figma 화면 설계 / 전반적인 프론트엔드 구현",
  technologies: ["React", "Emotion", "Zustand", "Axios", "Recharts"],
  repository,
  website: null,
  slides: [
    {
      layout: "case-study", dense: true,
      title: "Tutoroo · 학습 계획부터 실행·피드백까지 한 흐름으로",
      sourceLabel: "자료·구현 코드",
      sections: [
        { title: "문제 정의 · 프로젝트 목표", text: "무엇을 어떤 순서로 공부할지 정하기 어렵고, 계획과 학습 기록·피드백이 분리되면 학습을 이어가기 어렵습니다. 팀은 수준 진단과 맞춤 로드맵, 학습 기록을 연결하는 플랫폼을 만들었습니다." },
        { title: "나의 역할 · 전반적인 프론트엔드 전담", text: "초기 Figma에서 로그인·계정 관리·수준 진단·학습·결제·대시보드의 화면 흐름을 설계했습니다. 이를 바탕으로 공통 컴포넌트와 주요 페이지, 상태관리·API 연동을 구현했습니다." },
        { title: "접근과 의사결정", text: "인증과 계정 찾기는 공통 모달, 학습·마이페이지·랭킹은 라우트로 나눴습니다. React Router와 Emotion으로 화면 구조를 구성하고 Zustand로 페이지 간 필요한 상태를 공유했습니다." },
        { title: "팀과의 연결", text: "프론트에서는 입력·화면 전환·결과 표시를 담당하고, AI 생성·백엔드 인증·DB·결제 검증은 팀의 서버 기능과 연결했습니다. 초기 설계와 최종 화면의 차이를 반영하며 구현했습니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "Tutoroo · 프로젝트 표지", text: "맞춤 학습과 튜터를 표현한 생성 이미지" },
        { image: image("figma-initial.png"), title: "직접 제작한 Figma 초기 화면 흐름", text: "인증·계정·학습·결제·랭킹의 초기 설계 자료" },
        { image: image("dashboard.png"), title: "구현한 학습 대시보드", text: "발표 PPT 29쪽 · 목표·주간 학습·이동 경로" },
      ],
      sources: [{ title: "GitHub 프로젝트", url: repository }, { title: "프론트엔드 구성", url: front }],
    },
    {
      layout: "case-study", dense: true,
      title: "공통 UI와 온보딩 · 로그인에서 맞춤 로드맵까지",
      sourceLabel: "자료·구현 코드",
      sections: [
        { title: "문제와 나의 구현", text: "로그인·회원가입·계정 찾기 화면이 겹치지 않고 자연스럽게 전환되도록 구성했습니다. 입력 검증과 제출 중 상태, 성공·실패 안내를 각 폼의 API 호출과 연결했습니다." },
        { title: "의사결정 · 공통 모달 상태 분리", text: "Zustand의 modalStore에서 로그인·회원가입·아이디 찾기·비밀번호 찾기·학습 목표·소셜 추가정보 모달을 관리했습니다. 하나를 열 때 나머지를 닫고, 전체 초기화 액션을 두었습니다." },
        { title: "수준 진단과 결과 연결", text: "목표 입력 후 문답 이력을 누적해 레벨테스트 API에 전달하고, 완료되면 로드맵 생성을 요청했습니다. 결과는 전역 상태에 저장해 결과 화면에서 과목·레벨·로드맵을 표시했습니다." },
        { title: "사용자 경험과 회고", text: "진단·생성 중 입력과 전송을 비활성화하고 로딩·오류를 표시했습니다. 다음에는 새로고침 시 결과 복구와 재시도 경로, 인증 만료 후 이동까지 하나의 시나리오로 검증하겠습니다." },
      ],
      figures: [
        { image: image("login.png"), title: "로그인 공통 모달", text: "PPT 17쪽 · 입력 폼과 소셜 로그인 진입" },
        { image: image("signup.png"), title: "회원가입 UI", text: "PPT 20쪽 · 입력 검증·이메일 인증 흐름" },
        { image: image("level-test.png"), title: "대화형 수준 진단", text: "PPT 32쪽 · 답변 이력을 이어가는 온보딩" },
        { image: image("roadmap-result.png"), title: "레벨·로드맵 결과", text: "PPT 32쪽 · 진단 결과와 다음 학습 연결" },
      ],
      sources: [{ title: "공통 모달 상태관리", url: code("src/stores/modalStore.js") }, { title: "레벨테스트 구현", url: code("src/pages/leveltests/LevelTestPage.jsx") }],
    },
    {
      layout: "case-study", dense: true,
      title: "학습 화면 · 튜터 선택과 수업 상태를 연결",
      sourceLabel: "자료·구현 코드",
      sections: [
        { title: "문제와 나의 역할", text: "튜터 선택, 채팅, 문제 풀이, 피드백이 각각 분리되면 사용자가 현재 진행 단계를 알기 어렵습니다. 선택한 튜터와 학습 플랜을 연결하고, 단계별 화면과 입력 상태를 구성했습니다." },
        { title: "접근 · 학습 상태를 한곳에서 관리", text: "useStudyStore에 수업·휴식·테스트·채점·해설·AI 피드백·수업 평가·복습의 8단계 순서를 정의했습니다. 현재 단계와 남은 시간, 메시지·결과를 상태에 두고 화면에 반영했습니다." },
        { title: "API 응답과 학습 마무리", text: "StudyPage는 메시지를 렌더링하고, 빈 메시지나 응답 대기 중 중복 전송을 제한합니다. 학습 마무리에서는 로그 저장 후 AI 피드백을 요청하고 완료·오류 상태를 표시하도록 연결했습니다." },
        { title: "배운 점 · 비동기 상태의 경계", text: "화면 전환과 서버 응답이 동시에 일어나는 흐름에서 상태 초기화가 중요했습니다. 다음에는 중복 완료·응답 지연·세션 이탈·재접속을 반복 검증하고, 서버 기록과 UI 상태의 정합성을 보완하겠습니다." },
      ],
      figures: [
        { image: image("tutor-selection.png"), title: "튜터 성향 선택 화면", text: "PPT 36쪽 · 선택한 튜터를 학습에 연결" },
        { image: image("study-chat.png"), title: "AI 튜터 학습 UI", text: "PPT 36쪽 · 대화·현재 단계·타이머·입력" },
        { image: image("study-example.png"), title: "발표자료의 응답 처리 예시", text: "PPT 38쪽 설명용 코드 · 현재 제어는 Zustand 구현 참조" },
      ],
      sources: [{ title: "학습 세션 상태관리", url: code("src/stores/useStudyStore.js") }, { title: "학습 페이지 구현", url: code("src/pages/studys/StudyPage.jsx") }],
    },
    {
      layout: "case-study", dense: true,
      title: "대시보드와 부가 기능 · 학습 결과를 다시 다음 행동으로",
      sourceLabel: "자료·구현 코드",
      sections: [
        { title: "구현 · 주간 기록과 차트", text: "플랜 시작일과 일차별 로드맵을 날짜에 매핑하고, 월간 로그를 모아 주간 완료율·점수 차트를 표시했습니다. 월 경계를 넘는 주는 필요한 월별 요청을 병렬로 보내고, 로그가 없으면 기본값으로 구성했습니다." },
        { title: "전반적인 UI 범위", text: "학습 외에도 회원정보 수정·비밀번호 변경·탈퇴, 구독 상품 선택·결제 결과, 랭킹과 펫 화면을 구성했습니다. 결제 검증·순위 계산·AI 생성은 서버 결과를 받아 UI에서 표시하는 범위로 연결했습니다." },
        { title: "결과 · 코드에서 확인한 구성", text: "프론트엔드에 16개 라우트, 6종 공통 모달 상태와 8단계 학습 흐름을 구성했습니다. 발표자료에는 학습 현황·피드백·구독·랭킹·펫 화면을 남겼습니다. 학습 완주율 향상은 향후 측정할 목표입니다." },
        { title: "회고 · 초기 설계에서 통합 화면까지", text: "여러 페이지를 같은 흐름과 스타일로 연결하며 공통 UI·상태·API 계약을 함께 관리하는 경험을 했습니다. 다음에는 재사용 가능한 폼, 요청 취소·캐시, 모바일·접근성 검증을 보완하겠습니다." },
      ],
      figures: [
        { image: image("chart-feedback.png"), title: "학습 기록 차트와 피드백", text: "PPT 29쪽 · 표시된 점수·71%는 시연 데이터" },
        { image: image("ranking.png"), title: "랭킹·내 포인트 화면", text: "PPT 45쪽 · 서버 집계 결과를 시각화" },
        { image: image("subscription.png"), title: "구독 플랜 선택 UI", text: "PPT 43쪽 · 상품·이용 상태 표시" },
        { image: image("pet.png"), title: "학습 동기부여를 위한 펫 UI", text: "PPT 47쪽 · 상태·돌보기·성장 화면" },
      ],
      sources: [{ title: "대시보드 날짜·로그 매핑", url: code("src/pages/dashboards/DashboardPage.jsx") }, { title: "화면 라우트 구성", url: code("src/routes/Router.jsx") }],
    },
  ],
};
