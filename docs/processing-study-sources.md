# 정처기학습 플랫폼 콘텐츠 근거

개인 프로젝트 03은 `src/data/processingStudy.js`에서 관리합니다. 학습·문제 풀이·복습·개인 요약을 중심으로 본문 4페이지와 두 시연영상을 크게 배치한 5페이지로 구성했습니다.

## 확인한 자료

- [원격 저장소](https://github.com/gyeonggumun/information-processing-study), 확인한 main commit: `253f7c4dcb101aaad4a6178a4d5660d47dd1c690`.
- [README](https://github.com/gyeonggumun/information-processing-study/blob/main/README.md), 확인한 blob: `e3b86fbd4cde72c2623bd3a225503772ace186e0`. 개발 기록은 2026.09.22 첫 커밋 이후 지속 개선으로 기재돼 있습니다.
- 최신 원격 코드와 공개 캡처를 사용했습니다. 원본 저장소·서비스·DB는 변경하지 않았습니다.
- 개인 기획·운영과 AI 도구를 활용한 개발·검토 방식은 README의 역할 설명을 따랐습니다. 모든 코드를 도구 도움 없이 직접 작성했다고 표현하지 않았습니다.

## 코드로 확인한 내용

| 주제 | 경로와 근거 |
| --- | --- |
| 기록 없는 문제 출제 | `src/lib/practiceHistory.js`의 유형·문제 ID 키와 `getUnseenQuestions` |
| 풀이 기록 조회·저장 | 같은 파일의 500행 단위 이어 읽기, 동일 UUID 저장 재시도 확인, 저장 이벤트·탭 간 알림 |
| 화면과 기록 갱신 | `src/hooks/usePracticeAttempts.js`의 계정별 상태, 요청 취소와 저장 중 발생한 기록 병합 |
| 개인 요약 설정 | `src/hooks/useExamSummaryPreferences.js`의 계정별 카드 순서·숨김 목록과 요청 세대·사용자 검사 |
| 개인 PDF 구성 | `src/lib/personalSummaryPdf.js`의 카드 버전·해시 확인, 과목별 구성·과목 안의 개인 순서, 관련 계산 예제와 취소 검사 |
| 권한 모델 | `src/lib/appRoles.js`의 User·Pro·Admin 계층 |
| 풀이 기록 소유권 | `supabase/migrations/20260923021001_create_practice_attempts.sql`의 select·insert RLS |

코드 해설·SQL 표·모바일 이동·기능별 검수의 설계 이유는 README와 검증 스크립트 경로를 참고했습니다. 이번 포트폴리오 작업에서 원본 서비스의 대규모 문항 검수나 DB 권한 테스트를 새로 실행한 것은 아닙니다.

## 수치와 화면의 범위

5개 과목, 377개 학습 카드, 1,861개 출제용 등록 문항은 2026.10.31 README의 소스 집계입니다. 변형 문제를 포함한 등록 규모이며 합격률·회원 수·서비스 성능이나 독립 개념 수를 의미하지 않습니다. Pro는 접근 등급으로 결제·구독을 뜻하지 않습니다.

`public/images/study/`의 JPG 12개는 원격 저장소 `docs/portfolio/screenshots/`의 공개 원본입니다. README에 따르면 실제 React 컴포넌트를 로컬 데모 환경에서 촬영했고 계정·문의·풀이 기록은 예시 데이터입니다. 긴 페이지와 모달 전체를 펼친 캡처이므로, 원본 보기 링크를 제공하고 실제 앱의 내부 스크롤과 구분했습니다.

사용한 캡처: `01-home`, `02-study`, `03-study-summary`, `04-study-detail`, `05-code-levels`, `06-code-solution`, `07-sql-solution`, `09-wrong-answers`, `10-practice-history`, `11-statistics`, `12-favorites`, `13-personal-summary`.

`cover.png`는 built-in image_gen으로 제작한 대표 일러스트이며, 실제 화면은 별도 캡처로 제시합니다. [제작 프롬프트](processing-study-cover-prompt.md)를 저장했습니다.

## 시연영상과 서비스

YouTube oEmbed에서 제목과 작성자(문경구)를 확인했습니다.

- [개념 학습·문제 풀이](https://youtu.be/umGb9LcRiWg)
- [오답 복습·개인 요약](https://youtu.be/lI_SB-jELwA)
- [운영 서비스](https://information-processing-study.vercel.app/)
