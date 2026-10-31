# 모아 설문 콘텐츠 근거

개인 프로젝트 01은 `src/data/moaSurvey.js`에서 관리합니다. 본문 4페이지와 두 시연영상을 좌우로 배치한 5페이지로 구성했습니다. 기존 프로젝트의 이미지 원본 보기·모바일 확대 기능을 사용합니다.

## 자료와 확인 범위

- [Survey_production README](https://github.com/gyeonggumun/Survey_production/blob/main/README.md), 확인한 blob: `52b64272fc6876848cdeeb714f3e78875b8647ab`.
- [package.json](https://github.com/gyeonggumun/Survey_production/blob/main/package.json): React 18, Vite 6, React Router 7, supabase-js와 Node 22, 테스트를 선행하는 빌드 스크립트.
- 개발 기간은 README에 명시되지 않아 날짜를 추정하지 않고 ‘개인 개발 · 운영 서비스’로 표기했습니다.
- 개인 프로젝트의 범위는 README의 설문 제작·발행·공개 응답·분석·배포 설명과 실제 소스에서 확인했습니다. 원본 저장소와 운영 DB는 수정하지 않았습니다.

## 구현 근거

| 내용 | 확인한 경로 |
| --- | --- |
| 편집기의 RPC 호출, 저장·발행 UI | `src/surveys/SurveyEditorPage.jsx` |
| 설문 정보와 질문을 한 트랜잭션에 저장, 실패 시 롤백 | `supabase/migrations/20261005121903_save_survey_atomically.sql` |
| 설문·질문 소유자 RLS | `supabase/migrations/20261001020541_create_survey_schema.sql` |
| 응답·답변 소유자 RLS와 제출 RPC | `supabase/migrations/20261001075705_add_public_survey_responses.sql` |
| 질문 변경과 제출의 행 잠금, 응답 이력 보호·순서 변경 허용, 제출 검증 | `supabase/migrations/20261002023721_serialize_responses_and_preserve_reordering.sql` |
| 공개 역할과 로그인 역할의 테이블 접근 제한 | `supabase/migrations/20261002024231_restrict_survey_table_grants.sql` |
| 빈 답 제외, 복수 선택의 응답자 기준 분모·제출 시간 연결 | `src/surveys/resultAnalytics.js`, `src/surveys/resultAnalytics.test.js` |
| 결과 이어 읽기와 응답 ID 묶음 조회 | `src/surveys/resultPagination.js` |
| UTF-8 BOM, CSV 이스케이프와 수식형 응답 문자열 처리 | `src/surveys/resultExport.js` |

테스트 통과 이력은 README의 기록이며, 이번 작업에서 원본 서비스의 전체 테스트·DB 권한 검증을 재실행한 것은 아닙니다. 포트폴리오는 구현된 동작과 자료에 남은 검증 범위를 설명합니다. 실제 비로그인 브라우저의 제출·다중 계정 접근과 봇 방지·요청 제한은 후속 검증·개선으로 표현했습니다. 운영 화면의 체험·점검용 응답 수는 서비스 이용 성과로 표현하지 않았습니다.

## 이미지와 시연영상

`public/images/moa-survey/`의 JPG 8개는 원본 저장소의 `docs/screenshots/`에 공개된 전체 화면 캡처입니다. README에 따르면 2026-10-30 운영 사이트를 캡처한 자료입니다. 대시보드, 편집기, 공개 설문, 결과 분석, 설문 목록, 개별 응답, 비회원 체험·예시 결과를 설명 옆에 배치했습니다.

`cover.png`는 built-in image_gen으로 제작한 대표 일러스트입니다. 실제 화면과 구분해 카드 앞면과 개요에 사용합니다. [제작 프롬프트](moa-survey-cover-prompt.md)를 보관했습니다.

YouTube oEmbed로 영상 제목과 작성자(문경구)를 확인했습니다.

- [설문 관리·편집·공유 시연](https://youtu.be/9syMd9yiGvY)
- [공개 응답·결과 분석 시연](https://youtu.be/zSFhofXrP-4)

운영 서비스 링크는 README에 있는 [모아 설문](https://survey-production.vercel.app/)을 사용합니다. 이번 포트폴리오 검증에서는 외부 서비스에 응답을 제출하지 않았습니다.
