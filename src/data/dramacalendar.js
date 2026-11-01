const image = (name) => `/images/dramacalendar/${name}`;
const repository = "https://github.com/DramaCalendar-Project/DramaCalendar";
const research = "https://github.com/gyeonggumun/gyeonggu-portfolio/blob/main/docs/dramacalendar-research.md";

export const dramacalendar = {
  id: "team-05",
  category: "team",
  featured: false,
  number: "05",
  title: "DramaCalendar",
  description: "흩어진 드라마 정보를 달력·장르·배우 탐색으로 연결한 졸업작품. 3인 팀의 프론트엔드 팀원으로 UI와 API 데이터 매핑을 구현하고, 개발 배경과 설계를 졸업논문으로 공동 정리했습니다.",
  image: image("cover.png"),
  period: "2025 · 졸업작품 / 졸업논문 공동 작성",
  role: "3인 팀 · 팀원 / 프론트엔드 담당",
  technologies: ["React", "TypeScript", "React Router", "CSS", "REST API"],
  repository,
  website: null,
  research: { title: "졸업논문 요약", url: research },
  slides: [
    {
      layout: "case-study", dense: true,
      title: "DramaCalendar · 흩어진 드라마 정보를 한곳에서 탐색",
      sourceLabel: "자료·연구 기록",
      sections: [
        { title: "문제 정의 · 만들게 된 이유", text: "방영 일정과 장르·출연진 정보가 방송사·포털·위키·OTT에 흩어져 있어 사용자가 여러 사이트를 오가야 했습니다. 날짜와 관심 작품을 기준으로 정보를 함께 확인할 수 있는 화면이 필요했습니다." },
        { title: "프로젝트 목표 · 졸업작품", text: "팀은 드라마 정보를 수집·정규화해 API로 제공하고, 이를 캘린더와 탐색 UI로 연결했습니다. 기획 배경과 시스템 설계·구현·검증 내용을 졸업논문으로 공동 작성했습니다." },
        { title: "나의 역할 · 3인 팀의 프론트엔드 팀원", text: "React·TypeScript로 페이지 구조와 UI를 구성하고, 모달·슬라이더·페이지네이션·이미지 예외 처리를 맡았습니다. 크롤링과 DB·ETL·백엔드 API는 팀원들의 담당 영역입니다." },
        { title: "접근과 의사결정", text: "Home·장르·배우·캘린더로 탐색 목적을 나누고, 작품과 배우 상세는 모달로 연결했습니다. 사용자가 목록 화면을 유지하면서 관련 정보를 이어서 볼 수 있도록 구성했습니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "DramaCalendar · 졸업작품 표지", text: "드라마 편성 탐색과 연구를 표현한 생성 이미지" },
        { image: image("problem-reference.png"), title: "편성 정보 탐색의 출발점", text: "발표 PPT 3쪽 · 기존 정보 제공 화면 참고 자료" },
        { image: image("architecture.png"), title: "전체 시스템 구조", text: "보고서 원본 · 수집·DB·API·React의 팀 구성" },
      ],
      sources: [{ title: "GitHub 프로젝트 소개", url: repository }, { title: "졸업논문·연구 요약", url: research }],
    },
    {
      layout: "case-study", dense: true,
      title: "캘린더 · API 편성 데이터를 날짜별 화면으로 매핑",
      sourceLabel: "자료·연구 기록",
      sections: [
        { title: "문제와 나의 구현", text: "화면의 Mock 데이터와 실제 편성 데이터의 구조가 달랐습니다. API의 air_date를 기준으로 날짜별 드라마 목록을 모으고, 캘린더가 해당 날짜의 정보를 읽도록 연결했습니다." },
        { title: "접근 · 날짜별 Map 구성", text: "toDateKey에서 로컬 연·월·일로 YYYY-MM-DD 키를 만들고 buildDailyBucket에서 Map에 작품을 모았습니다. API 응답을 화면에서 사용할 최소 객체로 변환해 렌더링에 연결했습니다." },
        { title: "의사결정 · 날짜 경계의 일관성", text: "UTC 변환 때문에 표시 날짜가 하루 달라지는 문제를 다루기 위해 로컬 날짜 키를 사용했습니다. 백엔드 담당자와 날짜·작품 ID·필드 형식을 맞추는 작업이 중요했습니다." },
        { title: "확인 결과와 다음 검증", text: "논문에는 월·일별 편성 표시와 날짜 선택 시 모달 연동을 확인한 과정이 기록돼 있습니다. 다음에는 자정·월말·연말과 시간대가 다른 응답을 고정 데이터로 반복 검증하겠습니다." },
      ],
      figures: [
        { image: image("calendar-mapping.png"), title: "프론트엔드 날짜별 데이터 구성", text: "보고서 코드 캡처 · toDateKey와 buildDailyBucket" },
        { image: image("api-routes.png"), title: "화면과 연결한 API 영역", text: "팀 백엔드 코드 · Home·Calendar·Genre·Actors" },
        { image: image("erd.png"), title: "작품·장르·배우·편성의 관계", text: "팀 ERD · 프론트 데이터 계약을 이해한 기반" },
      ],
      sources: [{ title: "데이터 매핑·트러블슈팅", url: `${repository}#-트러블슈팅` }, { title: "논문 구현 내용 요약", url: research }],
    },
    {
      layout: "case-study", dense: true,
      title: "탐색 UI · 모달 전환과 누락 데이터 처리",
      sourceLabel: "자료·연구 기록",
      sections: [
        { title: "문제와 나의 역할", text: "드라마에서 배우·출연작으로 이동할 때 탐색 흐름이 끊기지 않도록 UI를 구성했습니다. 장르 페이지와 카드, 배우·드라마 모달을 구현하고 슬라이더·페이지네이션을 직접 다뤘습니다." },
        { title: "모달 제어 · 열기부터 정리까지", text: "isOpen에 따라 body 스크롤을 잠그고 Escape 키로 닫도록 useEffect를 구성했습니다. 닫기·컴포넌트 해제 시 스크롤을 복원하고 키 이벤트 리스너를 제거했습니다." },
        { title: "불완전한 데이터에 대응", text: "크롤링 데이터에는 이미지 URL이 없거나 로딩이 실패하는 경우가 있었습니다. placeholder를 표시해 카드 구조와 작품명을 유지하고, 출연작은 평점 정렬과 3개 단위 탐색으로 구성했습니다." },
        { title: "결과와 회고", text: "논문·보고서에 모달 전환과 이미지 예외 처리 동작을 정리했습니다. 다음에는 키보드 포커스 복귀, 중첩 모달의 스크롤 복원, 빈 응답·오류·로딩 상태를 더 명확히 검증하겠습니다." },
      ],
      figures: [
        { image: image("modal-control.png"), title: "내 담당 모달 UI 제어", text: "보고서 코드 캡처 · 스크롤 잠금·ESC·이벤트 해제" },
        { image: image("genre-screen.png"), title: "장르별 드라마 탐색 화면", text: "사용자 제공 실행 화면 · 이미지 대체 UI와 카드 목록" },
        { image: image("actor-api.png"), title: "배우 탐색의 데이터 연결", text: "팀 백엔드 코드 · 배우 이름 목록 응답" },
      ],
      sources: [{ title: "프론트 기능 소개", url: `${repository}#-주요-기능` }, { title: "졸업논문 UI 설계 요약", url: research }],
    },
    {
      layout: "case-study", dense: true,
      title: "졸업논문 · 개발 동기에서 설계·구현·검증까지",
      sourceLabel: "자료·연구 기록",
      sections: [
        { title: "공동 작성 논문과 연구 목적", text: "『웹 기반 통합 드라마 일정 관리 시스템 DramaCalendar』를 김윤열·문경구·임채환이 공동 작성했습니다. 분산된 정보 탐색의 불편을 정의하고, 통합 데이터와 캘린더 UI로 해결하는 과정을 정리했습니다." },
        { title: "졸업작품과 논문의 연결", text: "서론의 정보 분산 문제를 시스템 설계와 연결하고, 수집·정규화·API·프론트엔드의 구현을 기술했습니다. 제 담당인 모달 제어와 날짜별 데이터 매핑 코드를 논문의 구현 근거로 담았습니다." },
        { title: "결과 · 기능 검증과 자체 평가", text: "팀은 편성·장르·출연진 조회, 모달 이동과 이미지 오류 처리, 데이터 연동을 확인한 내용을 보고했습니다. 탐색 시간 감소나 응답 속도 개선을 수치로 측정한 성과는 제시하지 않았습니다." },
        { title: "배운 점과 다음 연구", text: "화면 완성과 연구 주장의 근거를 함께 정리하는 경험을 했습니다. 다음에는 탐색 과제의 완료 시간·오류율을 측정하고, 추천 기능과 실시간 편성 갱신은 별도 후속 연구로 검증하겠습니다." },
      ],
      figures: [
        { image: image("crawler-parser.png"), title: "연구의 입력 · 다중 출처 수집", text: "팀 크롤러 코드 · 출처별 구조 차이를 처리" },
        { image: image("tmdb-search.png"), title: "외부 메타데이터 조회", text: "팀 TMDB 연동 코드 · 논문·보고서의 구현 자료" },
      ],
      sources: [{ title: "졸업논문 요약 읽기", url: research }, { title: "프로젝트 산출물", url: `${repository}#-프로젝트-산출물` }],
    },
  ],
};
