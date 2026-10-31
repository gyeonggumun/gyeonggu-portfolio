const image = (name) => `/images/study/${name}`;
const repository = "https://github.com/gyeonggumun/information-processing-study";
const source = (path) => `${repository}/blob/main/${path}`;

export const processingStudy = {
  id: "personal-03", category: "personal", featured: true, number: "03",
  title: "정처기학습 플랫폼",
  description: "정보처리기사 실기 개념 학습부터 코드·SQL 문제 풀이, 오답 복습과 개인 요약·PDF까지 연결한 개인 학습 플랫폼입니다.",
  image: image("cover.png"),
  period: "2026.09.22 ~ 지속 개선 중",
  role: "개인 기획·운영·AI 활용 개발·검증",
  technologies: ["React 19", "Vite 8", "Supabase", "PostgreSQL", "pdf-lib"],
  repository,
  website: "https://information-processing-study.vercel.app/",
  videos: [
    { id: "umGb9LcRiWg", title: "개념 학습·문제 풀이", description: "주제별 학습과 코드·SQL 연습 흐름", url: "https://youtu.be/umGb9LcRiWg", poster: image("02-study.jpg") },
    { id: "lI_SB-jELwA", title: "오답 복습·개인 요약", description: "오답노트에서 개인 요약과 PDF로 이어지는 흐름", url: "https://youtu.be/lI_SB-jELwA", poster: image("09-wrong-answers.jpg") },
  ],
  slides: [
    {
      layout: "case-study", dense: true,
      title: "흩어진 실기 자료를 학습·풀이·복습의 흐름으로",
      sourceLabel: "프로젝트 자료",
      sections: [
        { title: "문제 정의 · 프로젝트 목표", text: "자료를 읽는 곳과 문제를 푸는 곳이 나뉘면 틀린 문제를 다시 찾고 시험 전 필요한 개념을 모으기 번거롭습니다. 개념 학습 → 문제 풀이 → 오답 복습 → 개인 요약을 한 서비스로 연결했습니다." },
        { title: "나의 역할 · 개인 프로젝트", text: "사용자 흐름, 기능 우선순위와 학습·권한 정책을 정했습니다. AI 개발 도구로 코드·문서·검증 초안을 만들고, 실제 화면과 답안·해설을 검토하며 개선 방향을 결정했습니다." },
        { title: "접근과 의사결정", text: "5개 과목을 주제 카드로 나누고 같은 자료를 빠른 요약·상세 정리로 제공합니다. 새 문제를 푸는 경로와 이미 푼 문제를 복습하는 경로를 분리했습니다." },
        { title: "핵심 관점", text: "개별 기능의 수보다 학습 맥락을 유지하는 데 집중했습니다. 화면에 보이는 계정·문의·풀이 수치는 로컬 데모 환경의 예시이며 실제 이용 성과가 아닙니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "정처기학습 · 대표 이미지", text: "개념부터 풀이·복습까지 연결한 학습 서비스" },
        { image: image("01-home.jpg"), title: "서비스 홈", text: "학습 순서와 주요 기능으로 이동" },
        { image: image("02-study.jpg"), title: "5개 과목의 학습 진입", text: "과목 → 주제 카드 → 요약·상세 정리" },
        { image: image("05-code-levels.jpg"), title: "코드 연습 범위 선택", text: "언어와 난이도 선택 후 문제에 집중" },
      ],
      sources: [{ title: "목표·역할·구현 정리", url: source("README.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "개념과 문제 풀이 · 정답보다 실행 과정을 설명",
      sourceLabel: "설계·구현 근거",
      sections: [
        { title: "문제와 접근", text: "긴 문서와 정답만으로는 비슷한 개념이나 코드 실행 흐름을 구분하기 어려웠습니다. 요약은 핵심 정의·차이점, 상세는 예시·비교 표로 깊이를 나눴습니다." },
        { title: "코드·SQL 해설 구성", text: "C·Java·Python·SQL 연습에 원문 코드, 주석과 단계별 풀이를 제공합니다. SQL은 원본 표와 중간·최종 결과 표를 함께 보여주어 행과 그룹의 변화를 추적하게 했습니다." },
        { title: "의사결정 · 힌트와 학습 구분", text: "문제 제목은 언어 중심으로 통일해 풀이 방법을 미리 드러내지 않도록 했습니다. 제시된 코드의 출력 결과나 SQL 답안을 작성하는 실기형 연습으로 구성했습니다." },
        { title: "배운 점", text: "답이 맞아도 주석이나 중간 표가 어긋나면 설명을 신뢰하기 어렵습니다. 실행 결과·표·자연어 해설을 서로 다른 검증 대상으로 나눠 점검하는 구조를 사용했습니다." },
      ],
      figures: [
        { image: image("04-study-detail.jpg"), title: "주제별 상세 정리", text: "학습 모달 전체 캡처 · 실제 화면은 내부 스크롤" },
        { image: image("06-code-solution.jpg"), title: "코드와 단계별 해설", text: "원문·주석·실행 순서를 함께 확인" },
        { image: image("07-sql-solution.jpg"), title: "SQL 중간·최종 결과 표", text: "JOIN·그룹 조건에 따른 처리 과정 설명" },
      ],
      sources: [{ title: "코드 연습 패널", url: source("src/components/CodePracticePanel.jsx") }, { title: "SQL 풀이 표 검증", url: source("scripts/verify-sql-solution-tables.mjs") }],
    },
    {
      layout: "case-study", dense: true,
      title: "복습과 개인 PDF · 기록을 다음 학습으로 연결",
      sections: [
        { title: "문제와 의사결정", text: "푼 문제를 새 출제에서 빼더라도 해설은 다시 볼 수 있어야 했습니다. 새 출제·오답 재풀이·전체 풀이 기록의 책임을 나누고 문제 유형과 ID로 기록을 연결했습니다." },
        { title: "풀이 기록의 일관성", text: "기록을 페이지 단위로 끝까지 조회하고, 저장 이벤트와 탭 변경 시 목록을 갱신합니다. 계정 변경 시 이전 요청을 취소하며, 동일 UUID 저장 재시도는 본인 기록을 확인합니다." },
        { title: "개인 요약과 PDF 구성", text: "계정별로 남긴 카드·순서를 저장하고 pdf-lib로 새 PDF를 구성합니다. 과목별로 묶되 과목 안의 개인 순서는 유지하고, 관련 카드가 있을 때만 계산 예제를 포함합니다." },
        { title: "배운 점", text: "공통 파일을 내려주는 것과 사용자의 현재 목록을 문서로 만드는 것은 달랐습니다. 계정 전환·작업 취소와 자료 버전을 확인해 웹 목록과 다운로드 결과가 어긋나지 않게 해야 했습니다." },
      ],
      figures: [
        { image: image("13-personal-summary.jpg"), title: "개인 실기 요약과 PDF", text: "다운로드 시점의 전체 남은 카드로 개인 문서 구성" },
        { image: image("09-wrong-answers.jpg"), title: "오답노트", text: "최신 풀이가 오답인 문제를 다시 연습" },
        { image: image("10-practice-history.jpg"), title: "풀이 기록", text: "정답·오답과 관계없이 이전 해설을 다시 확인" },
      ],
      sources: [{ title: "풀이 기록 로직", url: source("src/lib/practiceHistory.js") }, { title: "개인 PDF 생성", url: source("src/lib/personalSummaryPdf.js") }],
    },
    {
      layout: "case-study", dense: true,
      title: "결과와 회고 · 콘텐츠 규모보다 일관성과 학습 흐름",
      sourceLabel: "구현·검수 근거",
      sections: [
        { title: "구현 결과 · 문서 집계 기준", text: "2026.10.31 README 집계는 5개 과목, 학습 카드 377개, 출제용 등록 문항 1,861개입니다. 같은 유형의 변형을 포함한 콘텐츠 수이며 합격률·이용자 수·서로 다른 개념의 수가 아닙니다." },
        { title: "권한과 개인화", text: "User·Pro·Admin의 기능 범위를 나누고 풀이 기록에는 소유자 RLS를 적용했습니다. Pro는 접근 등급이며 결제·구독 기능을 의미하지 않습니다." },
        { title: "검수와 사용자 흐름", text: "코드 실행·SQL 표·답안과 해설을 범위별로 점검하는 스크립트를 두었습니다. 모바일 뒤로가기는 모달부터 닫고, 페이지 이동과 모달의 기존 스크롤 복원을 구분하도록 개선했습니다." },
        { title: "다시 한다면", text: "학습 → 풀이 → 복습의 작은 흐름을 먼저 완성하고 콘텐츠를 확장하겠습니다. 문항마다 출제 의도·정답 근거·검증 방식·검수 상태를 일관되게 관리하며 실제 사용 지표로 우선순위를 정하겠습니다." },
      ],
      figures: [
        { image: image("11-statistics.jpg"), title: "유형별 풀이 통계", text: "데모 풀이 기록 집계 · 학습 효과나 이용 성과 아님" },
        { image: image("12-favorites.jpg"), title: "즐겨찾기 카드", text: "자주 보는 주제를 모아 순서 조정·반복 학습" },
        { image: image("03-study-summary.jpg"), title: "빠른 요약", text: "정의와 구별점을 짧게 다시 확인" },
      ],
      sources: [{ title: "규모·회고", url: source("README.md") }, { title: "권한 모델", url: source("src/lib/appRoles.js") }, { title: "풀이 기록 RLS", url: source("supabase/migrations/20260923021001_create_practice_attempts.sql") }],
    },
    { layout: "videos", title: "시연영상 · 개념 학습에서 오답·개인 요약까지" },
  ],
};
