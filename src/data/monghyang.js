import { codeExcerpts } from "./codeExcerpts.js";

const image = (name) => `/images/monghyang/${name}.png`;
const source = (path) => `https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/${path}`;

export const monghyang = {
  id: "team-01",
  category: "team",
  featured: true,
  number: "01",
  title: "몽향 · Monghyang",
  description: "전통주 탐색부터 상품 구매와 양조장 체험 예약까지 연결하는 플랫폼. 프론트엔드 UI와 API 연동을 담당했습니다.",
  image: image("cover"),
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
      "layout": "case-study",
      "dense": true,
      "title": "몽향 · 전통주와 양조장을 잇다",
      "sections": [
        {
          "title": "문제 정의 · 프로젝트 목표",
          "text": "전통주 상품과 양조장·체험 정보를 함께 탐색하고, 구매와 예약까지 한 흐름으로 이어지는 플랫폼을 만들고자 했습니다."
        },
        {
          "title": "나의 역할 · 5인 팀 / 프론트엔드",
          "text": "2025.07 ~ 2026.04 · Next.js·TypeScript 기반 UI와 API 연동을 담당했습니다. 상품 상세, 장바구니, 주문·결제, 체험 예약 화면을 구현했습니다."
        },
        {
          "title": "접근과 핵심 관점",
          "text": "탐색 → 상세 → 구매·예약 흐름을 연결하고, 화면을 이동해도 선택한 상품·수량·예약 정보가 일관되게 이어지도록 구성했습니다."
        }
      ],
      metrics: [
        {
          "value": "4개",
          "label": "주문 문자열 정리",
          "note": "공백·빈 값 정규화",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/d1c91cbd95666da36c702ea20e200b064d2ec71a/utils/orderApi.ts#L31-L34"
        },
        {
          "value": "2단계",
          "label": "주문 API",
          "note": "준비 → 승인 요청",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/d1c91cbd95666da36c702ea20e200b064d2ec71a/utils/orderApi.ts#L19-L55"
        },
        {
          "value": "1개",
          "label": "장바구니 조회 가드",
          "note": "진행 중 중복 진입 제한",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/d1c91cbd95666da36c702ea20e200b064d2ec71a/components/Cart/CartStore.ts#L35-L38"
        }
      ],
      "figures": [
        {
          "image": "/images/monghyang/brewery-detail.png",
          "title": "양조장 상세",
          "text": "소개에서 상품·체험 정보로 이동"
        }
      ],
      "sources": [
        {
          "title": "README",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/README.md"
        }
      ]
    },
    {
      "layout": "case-study",
      "dense": true,
      "title": "상품구매 · 장바구니 상태와 주문 데이터 연결",
      "sections": [
        {
          "title": "문제와 나의 구현",
          "text": "장바구니 변경 시 헤더 수량과 상품 목록을 함께 갱신하고, 선택한 항목을 배송 정보와 함께 주문 API로 보내야 했습니다."
        },
        {
          "title": "의사결정 · 공유 상태 관리",
          "text": "별도 상태 라이브러리 대신 CartStore의 모듈 상태와 구독 함수를 사용했습니다. API 변경 후 서버 목록을 재조회하고 구독자에게 알립니다."
        },
        {
          "title": "문제 해결 · 요청 규격 정합성",
          "text": "cart_id를 같은 키로 반복 append하고 입력 문자열을 정리했습니다. 주문 API의 Content-Type 수동 지정을 제거해 multipart boundary 생성을 브라우저에 맡겼습니다."
        },
        {
          "title": "구현 결과 · 입력 규격을 코드로 고정",
          "text": "선택한 N개 cart_id를 같은 키로 전송하고, 주문자·연락처·주소·상세 주소 4개 문자열을 정리했습니다. 준비·승인 2개 API의 multipart boundary는 브라우저가 생성하도록 했습니다."
        }
      ],
      "figures": [
        {
          "image": "/images/monghyang/cart.png",
          "title": "02 장바구니",
          "text": "수량 변경·삭제와 주문 요약"
        },
        codeExcerpts.mongOrder
      ],
      "sources": [
        {
          "title": "CartStore.ts",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/components/Cart/CartStore.ts"
        },
        {
          "title": "orderApi.ts",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/utils/orderApi.ts"
        }
      ]
    },
    {
      "layout": "case-study",
      "dense": true,
      "title": "체험예약 · 탐색부터 예약 내역까지",
      "sections": [
        {
          "title": "문제 정의",
          "text": "체험마다 예약 가능한 날짜·시간·인원이 달라, 고정 선택지만으로는 예약 상태를 정확히 안내하기 어려웠습니다."
        },
        {
          "title": "접근과 의사결정",
          "text": "예약 불가 날짜와 시간대별 잔여 인원을 API로 조회했습니다. 날짜 변경 시 시간 선택과 인원을 초기화하고 새 조건을 불러옵니다."
        },
        {
          "title": "나의 구현과 결과",
          "text": "마감 날짜·시간 선택을 제한하고 신청 인원을 잔여석과 비교했습니다. 예약 준비 → 테스트 결제 승인 요청 → 완료 안내와 예약 내역으로 흐름을 연결했습니다."
        },
        {
          "title": "검증 경계와 개선",
          "text": "과거 날짜·예약 불가 날짜·잔여석 0인 시간대를 제한했습니다. 현재 코드는 잔여석 미조회(undefined)를 마감으로 처리하지 않으므로, 조회 실패 시 선택을 보류하고 재시도하는 흐름을 보완하겠습니다."
        }
      ],
      "figures": [
        {
          "image": "/images/monghyang/reservation-history.png",
          "title": "04 예약 내역",
          "text": "예약한 일정과 상태 확인"
        },
        codeExcerpts.mongReserve
      ],
      "sources": [
        {
          "title": "예약 컴포넌트",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/components/ExperienceReservation/ExperienceReservation.tsx"
        },
        {
          "title": "예약 API",
          "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/utils/reservationApi.ts"
        }
      ]
    },
    {
      "layout": "case-study",
      "dense": true,
      "title": "구현 결과 · 병렬 조회와 상태 동기화",
      "sections": [
        {
          "title": "기술 선택 · 장바구니 상세 병렬 조회",
          "text": "장바구니 목록을 받은 뒤 상품별 상세 조회를 Promise.all로 함께 실행합니다. isFetching으로 진행 중인 조회의 중복 진입을 막고, 완료 후 구독자에게 변경을 알립니다."
        },
        {
          "title": "구현 수치 · N개 요청을 병렬 묶음으로",
          "text": "상품 N개라면 상세 API 호출도 N개입니다. 순차 대기 대신 한 묶음으로 요청하지만 호출 수를 줄인 캐시는 아닙니다. 실제 로딩 시간과 개선 전후 지연은 측정 기록이 없습니다."
        },
        {
          "title": "결과와 회고",
          "text": "구매·체험 예약 2개 흐름을 시연으로 남겼습니다. 요청 규격과 상태 동기화를 함께 검토했고, 다음에는 전체 재조회 비용과 실패 시 복구를 측정하겠습니다."
        }
      ],
      "figures": [
        codeExcerpts.mongCart
      ]
    },
    { layout: "videos", title: "시연영상 · 체험예약과 상품구매" },
  ],
};
