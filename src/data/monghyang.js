const image = (name) => `/images/monghyang/${name}.png`;
const source = (path) => `https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/${path}`;

export const monghyang = {
  id: "team-01",
  category: "team",
  featured: true,
  number: "01",
  title: "몽향 · Monghyang",
  description: "전통주 탐색부터 상품 구매와 양조장 체험 예약까지 연결하는 플랫폼. 프론트엔드 UI와 API 연동을 담당했습니다.",
  image: image("brewery-detail"),
  period: "2025.07 ~ 2026.04",
  role: "5인 팀 · 프론트엔드 개발",
  technologies: ["Next.js 14", "React 18", "TypeScript", "Axios", "CSS"],
  repository: "https://github.com/Dreamlike-Forest/monghyang-frontend",
  website: null,
  videos: [
    { id: "FiOXuFh-ta4", title: "체험예약 시연", description: "양조장 체험을 선택하고 예약하는 사용자 흐름", url: "https://youtu.be/FiOXuFh-ta4", poster: image("experience-list") },
    { id: "FYPLNX5cRTs", title: "상품구매 시연", description: "상품 선택부터 장바구니와 주문으로 이어지는 흐름", url: "https://youtu.be/FYPLNX5cRTs", poster: image("checkout") },
  ],
  slides: [
    {
      layout: "case-study",
      title: "전통주를 발견하고, 양조장 경험으로 이어지도록",
      sections: [
        { title: "문제 정의 · 목표", text: "전통주 상품 정보와 양조장·체험 정보를 함께 살펴보고, 구매와 예약까지 이어갈 수 있는 사용자 흐름을 만들고자 했습니다." },
        { title: "나의 역할", text: "5인 팀의 프론트엔드 개발자로 참여했습니다. Next.js·TypeScript 기반 UI, 장바구니·주문/결제·체험 예약 화면과 API 연동을 담당했습니다." },
        { title: "핵심 관점", text: "화면을 각각 구현하는 데서 나아가, 선택한 상품·수량·예약 정보가 다음 단계에서도 일관되게 이어지도록 구성했습니다." },
      ],
      figures: [{ image: image("brewery-detail"), title: "양조장 상세", text: "양조장 소개에서 체험 프로그램과 판매 상품을 탐색하는 출발점입니다." }],
      sources: [{ title: "프로젝트 README", url: source("README.md") }],
    },
    {
      layout: "gallery",
      title: "나의 구현 범위 · 상품 탐색에서 장바구니까지",
      items: [
        { image: image("product-detail"), title: "상품 상세 · 구매 정보 전달", text: "상품 정보와 구매 옵션을 확인하고 장바구니로 이동하는 화면입니다. 사용자가 선택한 상품과 수량을 구매 흐름에 연결했습니다." },
        { image: image("cart"), title: "장바구니 · 수량과 주문 요약", text: "장바구니 항목 조회·수량 변경·삭제를 API에 연결하고, 상품 목록과 주문 요약을 함께 확인하도록 구성했습니다." },
      ],
    },
    {
      layout: "case-study",
      title: "접근과 의사결정 · 장바구니 상태를 함께 갱신",
      sections: [
        { title: "해결할 문제", text: "상품을 추가하거나 수량을 바꾼 뒤에도 헤더의 장바구니 수량과 장바구니 화면이 같은 상태를 보여줘야 했습니다." },
        { title: "선택과 구현", text: "별도 상태 관리 라이브러리 대신 CartStore에 상태와 구독 함수를 두었습니다. API 변경 후 장바구니를 다시 조회하고 등록된 구독자에게 변경을 알립니다." },
        { title: "고려한 한계", text: "단순한 공유 상태에 맞는 구조이지만, 데이터가 커지면 전체 재조회 비용도 늘어납니다. 이후에는 부분 갱신과 서버 상태 캐시를 검토할 수 있습니다." },
      ],
      figures: [{ image: image("cart"), title: "서버 데이터와 연결한 장바구니", text: "수량 변경·삭제 후 서버 목록을 다시 조회해 화면 상태를 맞추는 구조입니다." }],
      sources: [{ title: "CartStore.ts", url: source("components/Cart/CartStore.ts") }],
    },
    {
      layout: "case-study",
      title: "문제 해결 · 주문 데이터를 백엔드 규격에 맞추기",
      sections: [
        { title: "문제", text: "주문 준비 요청에는 여러 장바구니 ID와 배송 정보가 함께 필요했습니다. 배열과 multipart 요청 형식을 백엔드가 받을 수 있게 맞춰야 했습니다." },
        { title: "접근과 수정", text: "cart_id를 같은 키로 반복 append하고 문자열 입력값을 정리했습니다. 주문 API의 Content-Type 수동 지정을 제거해 multipart boundary 처리를 브라우저에 맡겼습니다." },
        { title: "결과와 배운 점", text: "주문 준비와 결제 승인 요청 함수를 분리했습니다. 화면 입력뿐 아니라 실제 요청 형식과 서버 바인딩 규칙까지 함께 확인해야 한다는 점을 배웠습니다." },
      ],
      figures: [{ image: image("checkout"), title: "주문·결제 화면 · 테스트 데이터", text: "배송 정보와 주문 상품, 최종 금액을 한 화면에서 확인합니다. 화면은 테스트 환경의 예시입니다." }],
      sources: [{ title: "orderApi.ts", url: source("utils/orderApi.ts") }],
    },
    {
      layout: "case-study",
      title: "체험 예약 · 날짜·시간·인원 조건을 연결",
      sections: [
        { title: "접근과 의사결정", text: "고정된 예약 선택지 대신 API에서 예약 불가 날짜와 시간대별 잔여 인원을 조회했습니다. 날짜를 바꾸면 선택 시간을 초기화하고 해당 날짜의 정보를 다시 불러옵니다." },
        { title: "나의 구현", text: "마감 날짜·시간 선택을 제한하고 신청 인원을 잔여 인원과 비교합니다. 예약 준비 → 테스트 결제 승인 요청 → 완료 안내로 이어지는 화면을 연결했습니다." },
        { title: "후속 개선", text: "조회 실패와 실제 예약 마감을 구분해 안내하고, 잔여석 조회 실패 시 재시도를 제공하는 방향으로 개선할 수 있습니다." },
      ],
      figures: [
        { image: image("experience-list"), title: "체험 프로그램 선택", text: "양조장 상세에서 원하는 체험을 선택해 예약으로 이동합니다." },
        { image: image("reservation-history"), title: "체험 예약 내역", text: "예약 후 일정과 상태를 확인하는 사용자 화면입니다." },
      ],
      sources: [{ title: "예약 컴포넌트", url: source("components/ExperienceReservation/ExperienceReservation.tsx") }, { title: "예약 API", url: source("utils/reservationApi.ts") }],
    },
    {
      layout: "case-study",
      title: "결과와 회고 · 두 가지 사용자 흐름을 구현",
      sections: [
        { title: "구현 결과", text: "상품구매와 체험예약, 두 가지 주요 흐름의 프론트엔드 화면과 API 연동을 구성했습니다. 테스트 환경의 동작은 다음 페이지의 시연영상 2개로 확인할 수 있습니다." },
        { title: "팀의 성과", text: "몽향의 숲 팀으로 2025 학생 창업유망팀 300+ 성장트랙에 최종 선정되었으며, 2025 BDIA 사이드 프로젝트 아이디어 상을 수상했습니다." },
        { title: "회고 · 다시 한다면", text: "API 규격과 오류 응답을 먼저 합의하고, 수량 변경·예약 마감·승인 실패 시나리오를 자동 검증하겠습니다. 테스트 결제 흐름은 실제 PG 연동과 별도로 검증해야 합니다." },
      ],
      figures: [{ image: image("brewery-search"), title: "양조장 탐색 화면", text: "양조장 탐색과 상세 조회를 상품·체험 선택으로 이어가는 서비스 화면입니다." }],
    },
    {
      layout: "videos",
      title: "시연영상 · 체험예약과 상품구매",
    },
  ],
};
