import { codeExcerpts } from "./codeExcerpts.js";

const image = (name) => `/images/reflection/${name}`;
const repository = "https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow";
const source = (path) => `${repository}/blob/main/${path}`;
const paper = "https://positive-reflection-research-paper.vercel.app/";

export const reflection = {
  id: "personal-02", category: "personal", featured: true, number: "02",
  title: "내일을 여는 회고",
  description: "긍정적 회고와 다음 날 과제 시작 자신감에 관한 연구 논문을 작성하고, 문항·날짜·기록 기준을 React 웹앱으로 구현한 개인 프로젝트입니다.",
  image: image("cover.png"),
  period: "연구 기반 개인 프로젝트",
  role: "연구·기록 기준 설계·AI 활용 구현·검증",
  technologies: ["React 19", "JavaScript", "Vite 7", "localStorage", "SVG"],
  repository,
  website: "https://retrospective-that-opens-up-tomorro.vercel.app/",
  research: { title: "연구 논문 읽기", url: paper },
  videos: [
    { id: "hb56TF9Tes4", title: "회고 작성·아침 체크인", description: "저녁 회고와 다음 날 과제·시작 자신감 기록", url: "https://youtu.be/hb56TF9Tes4", poster: image("daily-ritual-poster.jpg") },
    { id: "b-y0jiuLO3E", title: "그래프·검색·백업과 복원", description: "기록 돌아보기와 데이터 보관·복원 흐름", url: "https://youtu.be/b-y0jiuLO3E", poster: image("review-backup-poster.jpg") },
  ],
  slides: [
    {
      layout: "case-study", dense: true,
      title: "연구 질문에서 출발해, 일상의 기록 도구로",
      sourceLabel: "논문·프로젝트 자료",
      sections: [
        { title: "문제 정의 · 프로젝트 목표", text: "짧은 긍정적 회고를 일상에서도 이어가고, 다음 날 과제를 시작할 자신감을 날짜별로 돌아볼 수 있는 기록 경험을 만들고자 했습니다." },
        { title: "나의 역할 · 개인 연구·개발", text: "문헌 검토와 연구 질문 정리, 기록 기준과 사용자 흐름 설계를 진행했습니다. AI로 React 구현 초안을 만들고 저장·입력·날짜 처리와 실제 동작을 검토하며 보완했습니다." },
        { title: "논문 작성 → 웹서비스 구현", text: "30페이지의 문헌고찰·연구 프로토콜을 작성하고, 저녁 사건·이유 기록과 다음 아침 자신감 점검을 웹앱의 문항·날짜 연결·데이터 구분에 반영했습니다." },
      ],
      metrics: [
        { value: "14일", label: "조회 기간", note: "실제 날짜 기준 연속 구간", url: "https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/286c53d8a5f59cbe173fd5405b3cef252d81c0f2/src/lib/dates.js#L32-L34" },
        { value: "8개", label: "자동 테스트", note: "원본 검증 문서의 통과 기록", url: "https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/286c53d8a5f59cbe173fd5405b3cef252d81c0f2/docs/VERIFICATION.md#L7-L20" },
        { value: "약 6.6초", label: "배포 빌드 기록", note: "해당 검증 버전 · 단축량 아님", url: "https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/286c53d8a5f59cbe173fd5405b3cef252d81c0f2/docs/VERIFICATION.md#L64-L76" },
      ],
      figures: [
        {
          "image": "/images/reflection/research-paper.jpg",
          "title": "직접 작성한 연구 논문",
          "text": "문헌고찰·연구 프로토콜 · 30페이지 웹판·PDF"
        }
      ],
      sources: [{ title: "연구 논문 웹판", url: paper }, { title: "프로젝트 포트폴리오", url: source("PORTFOLIO.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "연구 설계를 문항과 날짜의 규칙으로 옮기기",
      sourceLabel: "설계·구현 근거",
      sections: [
        { title: "연구 개념을 구체적인 질문으로", text: "자기효능감의 범위를 ‘중요한 과제의 첫 행동을 시작할 자신감’으로 좁혔습니다. 저녁에는 잘된 사건과 이유·기여 태그, 아침에는 과제와 자신감 0~10점을 입력합니다." },
        { title: "의사결정 · 저녁 D → 아침 D+1", text: "같은 날짜의 아침을 붙이지 않고 다음 날 아침과 연결합니다. 새벽 02:00까지는 전날 저녁을 기본 날짜로 선택하며, 기록 날짜와 실제 저장 시각은 따로 보관합니다." },
        { title: "기록의 의미를 보존", text: "0점·미입력·건너뜀·임시 저장을 구분합니다. 문항을 수정한 뒤에도 이전 기록을 같은 척도로 바꾸지 않고, 현재·이전 문항 버전을 함께 보관합니다." },
        { title: "구현 결과 · 날짜와 문항 구분", text: "저녁 D와 아침 D+1을 연결하고 14개 실제 날짜를 생성합니다. 0점은 유효값, 미입력·건너뜀은 별도 상태로 유지해 그래프가 결측을 실제 점수로 오해하지 않게 했습니다." },
      ],
      figures: [
        {
          "image": "/images/reflection/linked-day-detail.jpg",
          "title": "저녁과 다음 날 아침 연결",
          "text": "날짜 상세 · 예시 기록의 실제 0점과 미입력 구분"
        },
        codeExcerpts.reflectionPair
      ],
      sources: [{ title: "논문 원고", url: "https://github.com/gyeonggumun/positive-reflection-research-paper/blob/main/paper-content.js" }, { title: "날짜 연결 코드", url: source("src/lib/dates.js") }],
    },
    {
      layout: "case-study", dense: true,
      title: "로컬 저장 · 개인 기록을 잃거나 덮어쓰지 않도록",
      sections: [
        { title: "문제와 선택", text: "로그인·외부 DB 없이 이 브라우저의 localStorage에 기록을 저장합니다. 저장 위치를 단순하게 유지하면서 데이터 이동과 복구를 사용자가 직접 할 수 있게 구성했습니다." },
        { title: "작성 중과 완료 기록 분리", text: "입력 중에는 임시 저장하고 새로고침 후 이어 쓰게 했습니다. 저장 버튼으로 확정하기 전에는 완료 횟수에 포함하지 않으며, 건너뜀도 별도 상태로 보관합니다." },
        { title: "충돌 검사 · revision 1씩 증가", text: "저장 직전에 현재 revision을 다시 읽어 이전 탭의 쓰기를 거부하고, 성공 시 1 증가시킵니다. 손상 데이터는 덮어쓰지 않으며, 이 검사는 다중 탭의 완전한 원자적 잠금과는 다릅니다." },
        { title: "백업과 복원", text: "JSON은 기록·임시 저장을, CSV는 확정 기록과 전후 날짜 연결을 내보냅니다. 복원 파일을 검증·미리보기한 뒤 병합하며 충돌 날짜는 현재의 기존 내용을 우선합니다." },
      ],
      figures: [
        {
          "image": "/images/reflection/backup-restore.jpg",
          "title": "복원 미리보기와 병합",
          "text": "파일 검증 후 확인 · 기존 기록 우선 보존"
        },
        codeExcerpts.reflectionSave
      ],
      sources: [{ title: "저장·파일 관리", url: source("src/lib/storage.js") }, { title: "상태·탭 변경 처리", url: source("src/App.jsx") }],
    },
    {
      layout: "case-study", dense: true,
      title: "결과와 회고 · 보기 좋은 그래프보다 정확한 기록",
      sourceLabel: "구현·검증 근거",
      sections: [
        { title: "구현 결과", text: "논문 웹판·PDF와 개인 기록 웹앱을 함께 공개했습니다. 저녁·아침 입력, 날짜 연결, 14일 그래프·표·달력, 검색과 파일 관리까지 하나의 흐름으로 구성했습니다." },
        { title: "의사결정 · 관찰값을 정확하게", text: "14개의 실제 날짜를 기준으로 누락 구간은 선을 끊고, 다른 문항 버전 사이도 연결하지 않습니다. 0점은 유효한 점으로 남기고 그래프를 날짜별 표로도 읽게 했습니다." },
        { title: "검증 기록 · 8개 자동 테스트", text: "날짜 경계·D+1 연결·v1 보존·손상·쓰기 실패·백업 병합·파일 검증·CSV의 8개 테스트 통과 기록이 있습니다. 해당 배포의 빌드는 약 6.6초로 기록했으며 전후 단축 비교값은 아닙니다." },
        { title: "회고와 연구 범위", text: "정상 입력뿐 아니라 손상·충돌·복원 실패 시의 원본 보존을 설계했습니다. 연구는 문헌고찰·프로토콜 단계이며, 참가자 실험과 심리적 효과·사용 시간 개선은 후속 검증입니다." },
      ],
      figures: [
        {
          "image": "/images/reflection/confidence-chart.jpg",
          "title": "14일 자신감 추이",
          "text": "가상 예시 기록 · 연구 효과나 참가자 관측 결과 아님"
        },
        codeExcerpts.reflectionMerge
      ],
      sources: [{ title: "돌아보기 코드", url: source("src/components/WeeklyReview.jsx") }, { title: "검증 기록", url: source("docs/VERIFICATION.md") }],
    },
    { layout: "videos", title: "시연영상 · 기록 작성과 돌아보기·백업" },
  ],
};
