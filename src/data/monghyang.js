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
        },
        {
          "title": "핵심 교훈",
          "text": "사용자 화면과 데이터 흐름을 함께 살펴야 했습니다. API 요청 형식과 오류 응답을 백엔드와 맞추는 과정이 UI 구현만큼 중요했습니다."
        }
      ],
      "figures": [
        {
          "image": "/images/monghyang/cover.png",
          "title": "몽향 · 프로젝트 대표 이미지",
          "text": "전통주 쇼핑과 양조장 체험을 연결하는 서비스"
        },
        {
          "image": "/images/monghyang/brewery-search.png",
          "title": "양조장 탐색",
          "text": "지역과 조건을 확인하며 양조장 검색"
        },
        {
          "image": "/images/monghyang/brewery-detail.png",
          "title": "양조장 상세",
          "text": "소개에서 상품·체험 정보로 이동"
        },
        {
          "image": "/images/monghyang/product-detail.png",
          "title": "전통주 상품 상세",
          "text": "상품 정보와 구매 옵션 확인"
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
          "title": "결과와 배운 점",
          "text": "상품 선택 → 장바구니 → 주문 준비·승인 요청을 연결했습니다. 요청 배열·헤더·응답 구조까지 확인해야 화면과 서버가 같은 데이터를 다룰 수 있었습니다."
        }
      ],
      "figures": [
        {
          "image": "/images/monghyang/product-detail.png",
          "title": "01 상품 상세",
          "text": "상품과 구매 옵션 선택"
        },
        {
          "image": "/images/monghyang/cart.png",
          "title": "02 장바구니",
          "text": "수량 변경·삭제와 주문 요약"
        },
        {
          "image": "/images/monghyang/checkout.png",
          "title": "03 주문·결제 · 테스트 화면",
          "text": "배송 정보와 최종 금액을 확인하고 주문 요청"
        }
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
          "title": "회고 · 개선 방향",
          "text": "조회 실패와 실제 예약 마감을 구분해 안내하고, 잔여석 조회 실패 시 재시도를 제공하겠습니다. 실제 PG 연동은 테스트 결제 흐름과 별도로 검증해야 합니다."
        }
      ],
      "figures": [
        {
          "image": "/images/monghyang/brewery-search.png",
          "title": "01 양조장 탐색",
          "text": "지역과 체험 조건으로 검색"
        },
        {
          "image": "/images/monghyang/brewery-detail.png",
          "title": "02 상세 정보",
          "text": "방문할 양조장 정보 확인"
        },
        {
          "image": "/images/monghyang/experience-list.png",
          "title": "03 체험 선택",
          "text": "프로그램 선택 후 예약으로 이동"
        },
        {
          "image": "/images/monghyang/reservation-history.png",
          "title": "04 예약 내역",
          "text": "예약한 일정과 상태 확인"
        }
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
      "title": "결과와 회고 · 시연으로 확인하는 구현",
      "sections": [
        {
          "title": "구현 결과",
          "text": "상품구매와 체험예약, 두 가지 주요 사용자 흐름의 프론트엔드 화면과 API 연동을 구성했습니다. 다음 페이지의 시연영상 2개에서 테스트 환경의 동작을 확인할 수 있습니다."
        },
        {
          "title": "팀 성과",
          "text": "몽향의 숲 팀으로 2025 학생 창업유망팀 300+ 성장트랙에 최종 선정되었으며, 2025 BDIA 사이드 프로젝트 아이디어 상을 수상했습니다."
        },
        {
          "title": "핵심 교훈",
          "text": "UI 완성도와 함께 상태 공유, 요청 형식, 실패 상황을 다뤄야 했습니다. 여러 화면에 걸친 데이터 흐름을 이해하며 프론트엔드와 백엔드의 연결 지점을 배웠습니다."
        },
        {
          "title": "다시 한다면",
          "text": "API 규격과 오류 응답을 먼저 합의하고 수량 변경·예약 마감·승인 실패 시나리오를 자동 검증하겠습니다. 장바구니 전체 재조회 비용도 개선할 계획입니다."
        }
      ],
      "figures": [
        {
          "image": "/images/recognition-u300-2025.jpg",
          "title": "학생 창업유망팀 300+",
          "text": "2025.10.17 · 성장트랙 최종 선정"
        },
        {
          "image": "/images/award-bdia-2025.png",
          "title": "BDIA 사이드 프로젝트",
          "text": "2025.12.12 · 아이디어 상"
        }
      ]
    },
    { layout: "videos", title: "시연영상 · 체험예약과 상품구매" },
  ],
};
