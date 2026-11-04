import { codeExcerpts } from "./codeExcerpts.js";

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
      ],
      metrics: [
        { value: "1 RPC", label: "설문·질문 저장 단위", note: "하나의 트랜잭션", url: "https://github.com/gyeonggumun/Survey_production/blob/2ac6cc90b60aabdf31fe5039e316a51b1df56506/supabase/migrations/20261005121903_save_survey_atomically.sql#L33-L47" },
        { value: "500행", label: "기본 조회 배치", note: "결과가 끝날 때까지 이어 읽기", url: "https://github.com/gyeonggumun/Survey_production/blob/2ac6cc90b60aabdf31fe5039e316a51b1df56506/src/surveys/resultPagination.js#L1-L14" },
        { value: "40 ID", label: "응답별 답변 조회", note: "IN 조건 묶음 크기", url: "https://github.com/gyeonggumun/Survey_production/blob/2ac6cc90b60aabdf31fe5039e316a51b1df56506/src/surveys/resultPagination.js#L17-L27" },
      ],
      figures: [
        {
          "image": "/images/moa-survey/dashboard.jpg",
          "title": "제작자 대시보드",
          "text": "내 설문과 발행·응답 현황 확인"
        }
      ],
      sources: [{ title: "README", url: source("README.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "설문 제작 · 질문과 설문 정보를 함께 저장",
      sections: [
        { title: "문제와 구현 범위", text: "설문 제목만 저장되고 질문 저장은 실패하면 화면과 데이터가 어긋날 수 있습니다. 질문 유형·선택지·필수 여부·순서 편집을 저장·미리보기·발행과 연결했습니다." },
        { title: "의사결정 · 원자 저장", text: "save_survey RPC에서 설문 정보와 질문을 한 트랜잭션으로 저장합니다. 질문 검증·저장에 실패하면 설문 정보 변경도 함께 되돌립니다." },
        { title: "응답 이력 보호", text: "응답이 있는 설문의 질문 내용을 바꾸면 기존 답의 의미가 달라질 수 있습니다. 내용 변경을 제한하면서 질문 순서 변경은 허용하도록 DB 검증을 구성했습니다." },
        { title: "구현 결과 · 저장 단위 1개", text: "설문 메타데이터와 질문 변경을 save_survey RPC 1회로 전달합니다. 질문 저장 검증이 실패하면 같은 트랜잭션의 메타데이터 변경도 롤백하므로 부분 저장을 방지합니다." },
      ],
      figures: [
        {
          "image": "/images/moa-survey/survey-editor.jpg",
          "title": "질문 편집·발행",
          "text": "세 가지 질문 유형과 필수 설정·선택지 관리"
        },
        codeExcerpts.moaRpc
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
        { title: "조회 결과의 누락 방지", text: "기본 500행씩 페이지를 읽고, 답변 조회의 응답 ID는 40개씩 나눕니다. 전체 건수 또는 빈 페이지까지 이어 읽어 단일 응답 상한으로 결과가 잘리는 경우를 다룹니다." },
      ],
      figures: [
        {
          "image": "/images/moa-survey/public-survey.jpg",
          "title": "공개 설문 참여",
          "text": "단일 선택·복수 선택·주관식 응답"
        },
        codeExcerpts.moaPaging
      ],
      sources: [{ title: "제출·질문 변경 검증", url: source("supabase/migrations/20261002023721_serialize_responses_and_preserve_reordering.sql") }, { title: "테이블 권한", url: source("supabase/migrations/20261002024231_restrict_survey_table_grants.sql") }],
    },
    {
      layout: "case-study", dense: true,
      title: "결과와 회고 · 집계의 기준과 데이터 누락을 점검",
      sections: [
        { title: "집계 기준 · 응답자 수를 분모로", text: "공백 주관식·건너뛴 답은 유효 응답에서 제외합니다. 복수 선택은 선택 횟수가 아닌 응답자 수가 분모여서 항목별 비율의 합계가 100%를 넘을 수 있습니다." },
        { title: "CSV · 4종 수식 접두 문자 처리", text: "공백 뒤 =·+·-·@로 시작하는 응답을 문자열로 내보내고, 큰따옴표를 이스케이프합니다. UTF-8 BOM과 CRLF를 적용해 한글과 행 구분을 보존합니다." },
        { title: "검증할 수 있는 결과", text: "설문 제작·제출·집계의 3개 질문 유형과 CSV를 연결했습니다. 처리 속도 개선 수치는 측정하지 않았고, 저장 원자성·조회 범위·집계 기준을 구현 결과로 남겼습니다." },
        { title: "회고", text: "화면의 수치를 만드는 분모·조회 범위·권한을 함께 설계했습니다. 다음에는 다중 계정과 비로그인 제출을 포함한 통합 시험을 보완하겠습니다." },
      ],
      figures: [
        codeExcerpts.moaCsv
      ],
      sources: [{ title: "집계·테스트", url: source("src/surveys/resultAnalytics.test.js") }, { title: "페이지네이션", url: source("src/surveys/resultPagination.js") }, { title: "CSV", url: source("src/surveys/resultExport.js") }],
    },
    { layout: "videos", title: "시연영상 · 설문 관리와 응답 분석" },
  ],
};
