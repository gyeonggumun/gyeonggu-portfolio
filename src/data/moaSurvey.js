const image = (name) => `/images/moa-survey/${name}`;
const repository = "https://github.com/gyeonggumun/Survey_production";
const source = (path) => `${repository}/blob/main/${path}`;

export const moaSurvey = {
  id: "personal-01",
  category: "personal",
  featured: true,
  number: "01",
  title: "모아 설문 · Moa Survey",
  description: "설문 제작·공유·공개 응답·결과 분석을 연결한 개인 프로젝트. React와 Supabase로 편집 흐름, 데이터 검증과 소유자별 접근 제어를 구현했습니다.",
  image: image("cover.png"),
  period: "개인 개발 · 운영 서비스",
  role: "개인 프로젝트 · UI·데이터·권한·배포 구현",
  technologies: ["React 18", "Vite 6", "React Router", "Supabase", "Vercel"],
  repository,
  website: "https://survey-production.vercel.app/",
  videos: [
    { id: "9syMd9yiGvY", title: "설문 관리·편집·공유", description: "대시보드부터 질문 편집과 링크 공유까지", url: "https://youtu.be/9syMd9yiGvY", poster: image("survey-list.jpg") },
    { id: "zSFhofXrP-4", title: "공개 응답·결과 분석", description: "세 가지 질문 유형에 응답하고 소유자 결과 확인", url: "https://youtu.be/zSFhofXrP-4", poster: image("analytics.jpg") },
  ],
  slides: [
    {
      layout: "case-study", dense: true,
      title: "모아 설문 · 제작부터 응답 분석까지 한곳에서",
      sections: [
        { title: "문제 정의 · 사용자 흐름", text: "제작자에게는 질문 편집·발행·분석이 이어지는 작업 공간이, 응답자에게는 계정 없이 참여할 수 있는 간단한 입력 화면이 필요했습니다." },
        { title: "나의 역할 · 개인 프로젝트", text: "React 화면, 설문 편집과 공개 응답, Supabase 인증·DB·접근 정책, 결과 분석·CSV와 Vercel 배포까지 서비스 흐름을 구현했습니다." },
        { title: "접근과 의사결정", text: "제작자 관리와 공개 응답 경로를 분리했습니다. 작성·발행·응답·분석은 하나의 서비스로 연결하고 데이터 권한과 검증은 DB에서도 확인하도록 구성했습니다." },
        { title: "핵심 관점", text: "사용하기 쉬운 화면과 신뢰할 수 있는 데이터 흐름을 함께 다뤘습니다. 화면에 보이는 수치와 설문은 기능 체험·운영 점검용 데이터입니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "모아 설문 · 대표 이미지", text: "질문 작성과 응답 수집·분석을 표현한 표지" },
        { image: image("dashboard.jpg"), title: "제작자 대시보드", text: "내 설문과 발행·응답 현황 확인" },
        { image: image("survey-editor.jpg"), title: "설문 편집기", text: "질문 작성부터 발행·공유까지 연결" },
        { image: image("public-survey.jpg"), title: "공개 응답 화면", text: "단일·복수 선택과 주관식 입력" },
      ],
      sources: [{ title: "README", url: source("README.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "설문 제작 · 질문과 설문 정보를 함께 저장",
      sections: [
        { title: "문제와 구현 범위", text: "설문 제목만 저장되고 질문 저장은 실패하면 화면과 데이터가 어긋날 수 있습니다. 질문 유형·선택지·필수 여부·순서 편집을 저장·미리보기·발행과 연결했습니다." },
        { title: "의사결정 · 원자 저장", text: "클라이언트의 순차 저장 대신 save_survey RPC에서 설문 정보와 질문을 한 트랜잭션으로 저장합니다. 질문 검증·저장에 실패하면 설문 정보 변경도 함께 롤백됩니다." },
        { title: "응답 이력 보호", text: "응답이 있는 설문의 질문 내용을 바꾸면 기존 답의 의미가 달라질 수 있습니다. 내용 변경을 제한하면서 질문 순서 변경은 허용하도록 DB 검증을 구성했습니다." },
        { title: "배운 점", text: "저장 성공 안내만으로 데이터 일관성을 보장할 수 없었습니다. 저장 단위와 실패 시 되돌릴 범위를 설계하고, 발행 조건도 서버에서 검증해야 했습니다." },
      ],
      figures: [
        { image: image("survey-editor.jpg"), title: "질문 편집·발행", text: "세 가지 질문 유형과 필수 설정·선택지 관리" },
        { image: image("survey-list.jpg"), title: "내 설문 목록", text: "검색·상태 필터와 복제·수정·삭제" },
        { image: image("guest-demo.jpg"), title: "비회원 체험", text: "저장하지 않는 예시 흐름으로 입력 경험 제공" },
      ],
      sources: [{ title: "편집기", url: source("src/surveys/SurveyEditorPage.jsx") }, { title: "원자 저장 RPC", url: source("supabase/migrations/20261005121903_save_survey_atomically.sql") }],
    },
    {
      layout: "case-study", dense: true,
      title: "공개 응답 · 참여는 쉽게, 관리와 결과는 소유자에게",
      sections: [
        { title: "문제 정의", text: "공개 링크로는 로그인 없이 응답할 수 있어야 하지만, 설문 수정과 제출된 답의 조회는 설문 소유자에게만 허용해야 했습니다." },
        { title: "접근 · RLS와 역할별 권한", text: "테이블의 RLS로 소유자별 접근을 제한하고, 공개 역할은 발행 설문·질문을 조회하도록 구성했습니다. 응답 테이블을 직접 쓰는 대신 제출 RPC를 호출합니다." },
        { title: "서버에서 다시 검증", text: "submit_survey_response에서 발행 상태, 질문·답변 형식, 필수 여부와 선택지 값을 확인한 뒤 저장합니다. 응답 제출과 질문 변경을 직렬화해 충돌을 다룹니다." },
        { title: "결과와 후속 과제", text: "제작자 관리와 공개 참여의 권한 경계를 DB 정책과 함수로 표현했습니다. 공개 규모가 커지면 봇 방지·요청 제한과 비로그인 환경의 제출 검증을 더 보완할 계획입니다." },
      ],
      figures: [
        { image: image("public-survey.jpg"), title: "공개 설문 참여", text: "단일 선택·복수 선택·주관식 응답" },
        { image: image("results.jpg"), title: "소유자 개별 응답 확인", text: "제출된 답과 시간을 건별로 조회" },
        { image: image("analytics.jpg"), title: "소유자 결과 분석", text: "질문별 집계와 응답 현황·CSV" },
      ],
      sources: [{ title: "제출·질문 변경 검증", url: source("supabase/migrations/20261002023721_serialize_responses_and_preserve_reordering.sql") }, { title: "테이블 권한", url: source("supabase/migrations/20261002024231_restrict_survey_table_grants.sql") }],
    },
    {
      layout: "case-study", dense: true,
      title: "결과와 회고 · 집계의 기준과 데이터 누락을 점검",
      sections: [
        { title: "문제 해결 · 집계 기준", text: "건너뛴 선택형 답과 공백 주관식은 유효 응답에서 제외합니다. 복수 선택은 선택 횟수가 아닌 응답자 수를 분모로 사용하므로 항목 비율 합계가 100%를 넘을 수 있습니다." },
        { title: "누락 방지와 CSV", text: "결과는 한 페이지 상한에서 끝내지 않고 이어서 조회합니다. CSV는 UTF-8 BOM과 따옴표 이스케이프를 적용하고, 수식처럼 시작하는 응답값을 문자열로 처리합니다." },
        { title: "구현 결과", text: "세 가지 질문 유형의 제작·응답·분석과 CSV를 연결했습니다. 집계·페이지네이션·내보내기 로직을 함수와 테스트로 분리했고, 두 시연영상은 다음 페이지에서 볼 수 있습니다." },
        { title: "회고 · 다시 한다면", text: "화면의 수치를 만드는 분모·조회 범위·권한까지 함께 확인하는 관점을 배웠습니다. 다중 계정 접근과 비로그인 제출을 포함한 브라우저 자동 검증을 보완하겠습니다." },
      ],
      figures: [
        { image: image("analytics.jpg"), title: "질문별 집계", text: "운영 점검용 데이터 · 서비스 성과 지표와 구분" },
        { image: image("guest-demo-result.jpg"), title: "비회원 체험 결과", text: "저장되지 않는 예시 데이터의 집계 화면" },
        { image: image("results.jpg"), title: "응답 원본 조회", text: "개별 답·제출 시간과 집계 결과 확인" },
      ],
      sources: [{ title: "집계·테스트", url: source("src/surveys/resultAnalytics.test.js") }, { title: "페이지네이션", url: source("src/surveys/resultPagination.js") }, { title: "CSV", url: source("src/surveys/resultExport.js") }],
    },
    { layout: "videos", title: "시연영상 · 설문 관리와 응답 분석" },
  ],
};
