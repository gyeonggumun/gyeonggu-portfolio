# 내일을 여는 회고 콘텐츠 근거

개인 프로젝트 02는 `src/data/reflection.js`에서 관리합니다. 논문 작성과 연구 기준 설계가 웹앱의 문항·날짜·기록 처리로 이어졌다는 점을 중심으로, 본문 4페이지와 시연영상 전용 5페이지로 구성했습니다.

## 연구와 구현의 연결

- [앱 README](https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/main/README.md), 확인한 blob `c15647f5a4cc47098327b94ece022223f2a2ac36`.
- [프로젝트 포트폴리오](https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/main/PORTFOLIO.md): 개인 기획·연구·개발, AI 활용 구현과 직접 검토 범위, 문항·날짜 연결의 변경 이유를 확인했습니다.
- [논문 웹사이트](https://positive-reflection-research-paper.vercel.app/): HTTP 200과 ‘긍정적 회고와 다음 날 자기효능감 연구 프로토콜’ 제목을 확인했습니다.
- [논문 README](https://github.com/gyeonggumun/positive-reflection-research-paper/blob/main/README.md)와 [한국어 원고](https://github.com/gyeonggumun/positive-reflection-research-paper/blob/main/paper-content.js): 30페이지의 문헌고찰·연구 프로토콜이며, 14일 기록과 과제 시작 자신감, 결측·문항 버전 구분을 다룹니다.
- 원고에 기재된 논문 제목은 「대학생의 저녁 긍정적 회고와 다음 날 과제 시작 자기효능감의 시간적 연관성」입니다. 실제 참가자 자료 수집·효과 검증 전 단계이며 학위 수여·학술지 게재·윤리 승인 완료를 주장하지 않습니다.

프로젝트 소개는 연구 설계와 제품 구현의 관계를 설명합니다. 기존 앱 화면도 논문 자료에 사용되어 있어 ‘모든 앱 기능을 논문 완성 이후 처음 개발했다’는 시간적 순서는 주장하지 않았습니다.

## 확인한 코드와 문서

| 주제 | 근거 |
| --- | --- |
| 현지 날짜, 02:00 경계, 저녁 D와 다음 아침 D+1 | `src/lib/dates.js` |
| 스키마·문항 버전, 손상 보호, 저장 버전 비교, v1 보존 | `src/lib/storage.js` |
| JSON 검증·기존 섹션 우선 병합, 임시 저장 보존, CSV 날짜 연결 | `src/lib/storage.js` |
| 14일 실제 날짜, 누락 구간·문항 버전별 선 구분, 접근성 표·달력·검색 | `src/components/WeeklyReview.jsx` |
| 테스트와 브라우저 확인 범위 | `docs/VERIFICATION.md` |
| React 19·Vite 7·Node 테스트 | `package.json` |

저장 관련 자동 테스트 8개 통과는 원본 검증 문서의 기록입니다. 이번 작업은 원본 앱의 연구·구현 자료 분석과 포트폴리오 통합이며, 실제 심리적 효과·사용 시간 개선률을 검증하지 않았습니다. 입력·내보내기 화면은 `[예시]` 가상 기록을 사용한 캡처입니다. 브라우저 저장을 암호화·기기 간 동기화로 표현하지 않았습니다.

## 이미지와 영상

`public/images/reflection/`의 JPG 13개는 원본 저장소의 공개된 기능 캡처 10개, 논문 웹판 캡처 1개, 시연영상 포스터 2개를 복사한 자료입니다. 출처는 `docs/images/features/`, `docs/images/research-paper.jpg`, `docs/videos/`입니다. 이미지를 자르지 않고 원본 보기 링크를 제공합니다.

`cover.png`는 built-in image_gen으로 제작한 대표 표지입니다. 연구 원고·노트·다음 아침을 표현한 일러스트로, 실제 논문 화면은 별도 캡처로 제시합니다. [제작 프롬프트](reflection-cover-prompt.md)를 보관했습니다.

YouTube oEmbed로 제목과 작성자(문경구)를 확인했습니다.

- [회고 작성·아침 체크인](https://youtu.be/hb56TF9Tes4)
- [그래프·달력·검색·백업과 복원](https://youtu.be/b-y0jiuLO3E)

앱의 운영 주소는 README에 있는 [내일을 여는 회고](https://retrospective-that-opens-up-tomorro.vercel.app/)를 사용합니다. 논문 링크는 프로젝트 상세 하단에서도 별도로 열 수 있습니다.
