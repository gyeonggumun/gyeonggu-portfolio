# 몽향 프로젝트 콘텐츠 근거

팀 프로젝트 01은 `src/data/monghyang.js`에서 관리합니다. 문제 정의 → 나의 역할 → 접근과 의사결정 → 결과 → 회고를 7개의 16:9 페이지에 나누었습니다. 설명과 관련 화면을 같은 페이지에 배치했습니다.

## 담당 범위와 프로젝트 정보

- 프로젝트 기간(2025.07 ~ 2026.04), 5인 팀, 프론트엔드 담당 범위는 사용자가 제공한 이력서의 몽향 항목을 기준으로 정리했습니다.
- 프로젝트 전체 목적은 [저장소 README](https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/README.md)를 참고했습니다.
- 기술 버전은 [package.json](https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/package.json)의 Next.js 14, React 18, TypeScript 5.3을 확인했습니다.
- 팀 수상·선정 내역은 기존 GitHub 프로필과 공개용 상장 자료를 참고했습니다. 개인 단독 성과로 표현하지 않았습니다.
- 화면·코드 분석은 구현 내용을 설명하기 위한 근거이며, 모든 저장소 코드를 개인이 단독 작성했다는 의미는 아닙니다.

## 코드로 확인한 동작

| 내용 | 확인한 코드 | 포트폴리오 표현 |
| --- | --- | --- |
| 장바구니 상태 | [CartStore.ts](https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/components/Cart/CartStore.ts) | 모듈 상태와 구독 목록, API 변경 후 재조회·알림 |
| 주문 데이터 연동 | [orderApi.ts](https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/utils/orderApi.ts) | `cart_id` 반복 append, 입력 문자열 정리, 주문 API의 multipart 헤더 자동 처리 |
| 예약 조건과 완료 안내 | [ExperienceReservation.tsx](https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/components/ExperienceReservation/ExperienceReservation.tsx) | 날짜·시간·잔여 인원 검증, 준비·승인 요청, 완료 모달 |
| 달력 선택 제한 | [ReservationCalendar.tsx](https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/components/ExperienceReservation/ReservationCalendar/ReservationCalendar.tsx) | 과거·예약 불가 날짜, 잔여 인원이 0인 시간대 선택 제한 |
| 예약 API | [reservationApi.ts](https://github.com/Dreamlike-Forest/monghyang-frontend/blob/main/utils/reservationApi.ts) | 예약 준비·승인·내역 조회 등의 API 분리 |

예약 제출 코드의 결제 키는 `test_` 접두사를 사용합니다. 실제 PG 운영 결제나 매출 성과로 표현하지 않았습니다. 주문 API의 헤더 수정 내용을 예약 API 전체에 일반화하지 않았습니다. 성능 개선율·전환율 등 측정 근거가 없는 수치는 포함하지 않았습니다. 캐시·자동 검증·오류 안내에 관한 문구는 후속 개선안입니다.

## 이미지 원본

사용자가 제공한 [몽향 사진자료 폴더](https://drive.google.com/drive/folders/17o_XVSiuaMlgyJOdacFxyyCkbeeHPWZ7)의 원본 화면을 사용했습니다. 선택한 7개 이미지는 `public/images/monghyang/`에 보관하며, 잘라내지 않고 전체 화면을 표시합니다.

| 파일 | Drive 파일 ID | 내용 |
| --- | --- | --- |
| brewery-detail.png | 1Vir99yuoK__G4RHAdkRVyny9rdZ0yzXl | 양조장 상세·대표 이미지 |
| product-detail.png | 1RjrtnMqhS3nZfX8vzVmm7k9IYpPIGwKY | 상품 상세 |
| cart.png | 1HTI59qdKvRRhY6Mwc21bHhvKcJU4_nAF | 장바구니 |
| checkout.png | 1RHDMgxmCkG5LDk1MDsXfovqNlnIBSKz3 | 테스트 주문·결제 화면 |
| experience-list.png | 1XpI_XlD5aP-HpKFPBkCyEX2YI57lkncP | 체험 프로그램 |
| reservation-history.png | 1pRNjwW02LqRu7J7pdCQrZ7FgzFD3rDsa | 예약 내역 |
| brewery-search.png | 1TQYswGnRTCHyVvuaS_Jb2eXCiqGZp7H_ | 양조장 탐색 |

## 시연영상

YouTube oEmbed로 제목과 작성자를 확인했습니다. 동영상은 마지막 페이지에서 버튼을 누르면 플레이어를 불러오고, 하단의 직접 링크로도 열 수 있습니다.

- [몽향 체험예약 시연영상](https://youtu.be/FiOXuFh-ta4) · 문경구
- [몽향 상품구매 시연영상](https://youtu.be/FYPLNX5cRTs) · 문경구
