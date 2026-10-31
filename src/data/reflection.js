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
        { title: "연구와 제품의 연결 범위", text: "연구 절차 중 개인 자기관찰에 필요한 기능을 구현했습니다. 실제 참가자 자료 수집과 효과 검증은 후속 연구이며, 화면은 가상 예시 기록을 보여 줍니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "내일을 여는 회고", text: "연구에서 시작한 일상의 기록 · 대표 이미지" },
        { image: image("research-paper.jpg"), title: "직접 작성한 연구 논문", text: "문헌고찰·연구 프로토콜 · 30페이지 웹판·PDF" },
        { image: image("home-dashboard.jpg"), title: "개인 기록 웹앱", text: "오늘의 아침·저녁 상태와 최근 활동" },
        { image: image("morning-record.jpg"), title: "연구 문항을 입력 화면으로", text: "중요 과제와 첫 행동을 시작할 자신감 기록" },
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
        { title: "배운 점", text: "논문의 개념을 그대로 화면에 옮길 수는 없었습니다. 질문의 범위, 시간 순서, 결측 기준을 데이터 모델과 화면의 표현 방식까지 연결해야 했습니다." },
      ],
      figures: [
        { image: image("linked-day-detail.jpg"), title: "저녁과 다음 날 아침 연결", text: "날짜 상세 · 예시 기록의 실제 0점과 미입력 구분" },
        { image: image("evening-record.jpg"), title: "저녁 회고", text: "사건·이유·기여 태그를 한 항목씩 작성" },
        { image: image("morning-record.jpg"), title: "아침 체크인", text: "과제·시작 자신감·선택적 수면 시간 기록" },
      ],
      sources: [{ title: "논문 원고", url: "https://github.com/gyeonggumun/positive-reflection-research-paper/blob/main/paper-content.js" }, { title: "날짜 연결 코드", url: source("src/lib/dates.js") }],
    },
    {
      layout: "case-study", dense: true,
      title: "로컬 저장 · 개인 기록을 잃거나 덮어쓰지 않도록",
      sections: [
        { title: "문제와 선택", text: "로그인·외부 DB 없이 이 브라우저의 localStorage에 기록을 저장합니다. 저장 위치를 단순하게 유지하면서 데이터 이동과 복구를 사용자가 직접 할 수 있게 구성했습니다." },
        { title: "작성 중과 완료 기록 분리", text: "입력 중에는 임시 저장하고 새로고침 후 이어 쓰게 했습니다. 저장 버튼으로 확정하기 전에는 완료 횟수에 포함하지 않으며, 건너뜀도 별도 상태로 보관합니다." },
        { title: "저장 실패와 충돌 처리", text: "손상 데이터를 빈 기록으로 덮어쓰지 않고 원본을 보호합니다. 다른 탭의 변경은 저장 버전으로 감지해 오래된 탭의 덮어쓰기를 막고, 이전 v1 기록도 정상 저장 전에는 보존합니다." },
        { title: "백업과 복원", text: "JSON은 기록·임시 저장을, CSV는 확정 기록과 전후 날짜 연결을 내보냅니다. 복원 파일을 검증·미리보기한 뒤 병합하며 충돌 날짜는 현재의 기존 내용을 우선합니다." },
      ],
      figures: [
        { image: image("draft-resume.jpg"), title: "자동 임시 저장 복원", text: "새로고침 뒤 작성 중 내용과 입력값 유지" },
        { image: image("backup-export.jpg"), title: "JSON·CSV 내보내기", text: "원본 보관과 분석용 표의 용도 분리" },
        { image: image("backup-restore.jpg"), title: "복원 미리보기와 병합", text: "파일 검증 후 확인 · 기존 기록 우선 보존" },
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
        { title: "검증과 배운 점", text: "날짜 경계·데이터 이전·손상·저장 실패·백업 병합·CSV에 대한 자동 검증 기록을 남겼습니다. 구현 초안의 성공 화면뿐 아니라 실패와 복원 상황을 검토하는 과정이 중요했습니다." },
        { title: "다시 한다면", text: "사용성 평가로 문구와 입력 부담을 조정하겠습니다. 연구용 확장 시에는 동의·철회와 참여자 코드·자료 수집 절차를 별도로 준비하고, 개인 기록 기능과 구분하겠습니다." },
      ],
      figures: [
        { image: image("confidence-chart.jpg"), title: "14일 자신감 추이", text: "가상 예시 기록 · 연구 효과나 참가자 관측 결과 아님" },
        { image: image("accessible-table.jpg"), title: "그래프를 표로 읽기", text: "날짜·점수·미입력·문항 종류를 텍스트로 제공" },
        { image: image("record-calendar.jpg"), title: "기록 달력", text: "완료·건너뜀·미입력을 기호와 문자로 구분" },
      ],
      sources: [{ title: "돌아보기 코드", url: source("src/components/WeeklyReview.jsx") }, { title: "검증 기록", url: source("docs/VERIFICATION.md") }],
    },
    { layout: "videos", title: "시연영상 · 기록 작성과 돌아보기·백업" },
  ],
};
