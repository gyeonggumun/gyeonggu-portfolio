# Tutoroo 포트폴리오 자료 기준

- 저장소: https://github.com/Tutoroo-project/Tutoroo_project
- 확인한 main: `e011b21e64b2a88c6f01cc55bf96f6917fdfc6ae`
- 사용자 확인: 초기 Figma 화면 설계 제작, 전반적인 프론트엔드 작업 전담.
- 팀 인원은 PPT 5쪽의 4명을 기준으로 표기했다. 발표자료에 Full-Stack·공동 작업 표기가 있으나, 개인 소개는 사용자가 확인한 프론트엔드 전담 범위에 맞췄다. AI·백엔드·DB·결제 검증·배포를 단독 구현 성과로 확대하지 않았다.

## 확인한 코드

모든 경로는 `Tutoroo_project_front/` 기준이다.

| 파일 | 확인 내용 |
| --- | --- |
| package.json | React 19.2, Vite 7, Emotion, Zustand, Axios, TanStack Query, Recharts, Swiper, SweetAlert2 |
| src/routes/Router.jsx | 대시보드·인증·마이페이지·구독·수준 진단·튜터·학습·무한 실습·펫 등 Route 선언 16개 |
| src/stores/modalStore.js | 로그인·가입·ID 찾기·PW 찾기·학습 목표·소셜 추가정보의 6종 열림 상태, 상호 배타적 열기와 closeAll |
| src/apis/configs/axiosConfig.js | 환경별 API 주소, 인증 제외 경로, 요청 헤더, 401 재발급·재요청 흐름. 토큰 값 자체를 읽은 것이 아니다. |
| src/pages/leveltests/LevelTestPage.jsx | 문답 이력, 진단·로드맵 API 호출, 결과 상태 저장, 생성 중 입력 제한·오류 안내 |
| src/stores/useLevelTestStore.js | 과목·레벨·로드맵 결과와 초기화. 메모리 상태이며 새로고침 복구를 보장하지 않는다. |
| src/stores/useStudyStore.js | CLASS·BREAK·TEST·GRADING·EXPLANATION·AI_FEEDBACK·STUDENT_FEEDBACK·REVIEW의 8단계, 로그 저장 후 피드백 요청 |
| src/pages/studys/StudyPage.jsx | 메시지 렌더링, 중복·빈 전송 제한, 이미지 경로 처리, 해제 시 오디오·녹음 정리 |
| src/pages/dashboards/DashboardPage.jsx | 시작일·일차 기반 날짜 매핑, 월 경계를 넘는 주의 월별 로그 병렬 조회, 완료율·점수 구성, 오래된 결과 반영 방지용 alive 플래그 |
| src/components/charts/StudyChart.jsx | Recharts 차트와 툴팁·포인트 표시 |

16개 라우트·6종 모달·8단계는 확인한 코드의 구성 개수다. 사용자 수나 품질 개선율이 아니다. 실제 소스 앱을 백엔드와 함께 실행한 것은 아니며, 포트폴리오의 렌더링·링크·이미지를 별도로 검증했다.

## 발표자료와 초기 설계

- `Team-Tutoroo-발표자료.pptx`: 53장. 기획·역할·개발 환경·화면 구현·코드 리뷰·시사점 중 관련 내용을 대조했다. python-pptx로 본문과 원본 이미지를 추출했으며 PPT 자체를 수정하지 않았다.
- `튜터루 초기 디자인.png`: 사용자가 직접 만든 Figma 초기 화면 흐름. 네트워크 장비 토폴로지가 아니라 인증·계정·수준 진단·학습·결제·랭킹 화면 구성 자료로 설명했다.
- PPT의 React 18 표기와 현재 package.json의 React 19가 다르므로 소개 기술은 React로 쓰고 실제 코드 버전은 이 문서에 구분했다.
- PPT의 API 명세 예시와 코드 일부는 설명용·이전 버전이다. 예를 들어 PPT 38쪽은 로컬 메시지 상태로 설명하지만 현재 StudyPage는 Zustand의 메시지를 사용한다. 이미지 캡션에 설명용 코드임을 명시했다.
- 일부 슬라이드의 작성용 안내 문구·템플릿 빈 항목은 완성된 구현 내용으로 사용하지 않았다.

## 이미지 매핑

저장 경로: `public/images/tutoroo/`. PPT 포함 이미지와 초기 Figma 이미지는 원본을 그대로 복사했다.

| 파일 | 출처 | 배치 |
| --- | --- | --- |
| cover.png | 내장 imagegen 생성 | 카드·1쪽 |
| figma-initial.png | 사용자 제작 초기 디자인 PNG | 1쪽 · 화면 흐름 설계 |
| dashboard.png | PPT 29쪽 s29-07 | 1쪽 · 실제 대시보드 |
| login.png | PPT 17쪽 s17-08 | 2쪽 · 로그인 |
| signup.png | PPT 20쪽 s20-08 | 2쪽 · 회원가입 |
| level-test.png | PPT 32쪽 s32-09 | 2쪽 · 대화형 진단 |
| roadmap-result.png | PPT 32쪽 s32-10 | 2쪽 · 로드맵 결과 |
| tutor-selection.png | PPT 36쪽 s36-09 | 3쪽 · 튜터 선택 |
| study-chat.png | PPT 36쪽 s36-08 | 3쪽 · 학습 UI |
| study-example.png | PPT 38쪽 s38-09 | 3쪽 · 발표자료의 설명용 응답 처리 예시 |
| chart-feedback.png | PPT 29쪽 s29-08 | 4쪽 · 기록 차트와 AI 피드백 |
| ranking.png | PPT 45쪽 s45-08 | 4쪽 · 랭킹 |
| subscription.png | PPT 43쪽 s43-08 | 4쪽 · 구독 플랜 선택 |
| pet.png | PPT 47쪽 s47-08 | 4쪽 · 펫 화면 |

## 결과 해석과 노출 위치

- 71%·점수·포인트·순위·가격·펫 상태는 발표 시연 화면 값이다. 학습 성과, 실제 사용자 증가, 매출 실적, 현재 판매 가격으로 주장하지 않았다.
- 학습 습관 형성·완주율 향상은 기획 목표이며 실제 개선 측정값이 아니다.
- 구독 UI는 프론트 범위, 금액 검증·결제 저장은 서버 역할로 구분했다. 실제 결제를 실행하지 않았다.
- 녹음 시작 핸들러는 현재 StudyPage에 생략 표기가 있어, 완성된 음성 입력 기능을 개인 성과로 소개하지 않았다.
- 구체적인 개발 시작·종료일이나 현재 운영 상태는 임의로 정하지 않았다. 별도 운영 웹사이트 링크도 추가하지 않았다.
- 추가 팀 프로젝트 `team-06`으로 등록해 ‘그 밖의 작업들 → 팀 프로젝트’에서 확인하도록 했다. 대표 팀 프로젝트 3개 구성은 유지했다.
- 시연영상이 제공되지 않아 빈 영상 페이지 없이 본문 4쪽으로 구성했다.
