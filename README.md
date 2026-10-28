# 문경구 포트폴리오

소개, 이력, 프로젝트를 정리하는 React 웹사이트입니다. 현재는 페이지 구성과 상호작용을 먼저 만들었으며, 상장·교육·경력 및 프로젝트 상세 내용은 비워 두었습니다.

## 실행

Node.js 22.12 이상 또는 24 이상을 사용합니다.

```bash
npm ci
npm run dev
```

```bash
npm run build
npm run preview
```

## 페이지 구성

- 사진과 자기소개, GitHub·이력서 링크, 기술 스택
- 상장·인증 2개와 교육 경력 3개의 입력 자리 및 증빙 이미지 접기·펼치기
- 경력 입력 자리
- 대표 팀 프로젝트 3개와 대표 개인 프로젝트 3개
- 나머지 팀·개인 프로젝트를 펼쳐 보는 목록
- 프로젝트별 16:9 슬라이드와 페이지 선택, 이전·다음 버튼
- 키보드 방향키 / Home / End / Escape, 모바일 스와이프
- 모바일 슬라이드 확대 보기와 화면에 맞추기
- 연락처와 맨 위로 이동

## 내용을 추가하는 곳

실제 표시 내용은 [`src/data/portfolio.js`](src/data/portfolio.js)에 모았습니다. 각 배열의 순서가 화면의 순서가 됩니다. 빈 값은 준비 중 표시로 렌더링합니다. 프로젝트 이미지는 실제 이미지가 들어오기 전까지 안내용 영역을 보여 줍니다.

| 수정 대상 | 데이터 |
| --- | --- |
| 소개·사진·기술·연락처 | `profile` |
| 상장과 인증 | `awards` |
| 교육 경력 | `education` |
| 경력 | `experience` |
| 대표·추가 프로젝트와 슬라이드 | `projects` |

이미지는 `public/images/` 안에 넣고 `/images/파일명.jpg`처럼 경로를 입력합니다. 공개할 증빙 이미지에는 불필요한 개인정보가 포함되지 않도록 준비합니다. 이력서 파일 경로를 `profile.resume`에 지정하면 준비 중 버튼이 다운로드 링크로 바뀝니다.

### 프로젝트 설정

`projects`의 항목 하나가 프로젝트 하나입니다. `id`는 중복 없이 유지합니다.

| 필드 | 설명 |
| --- | --- |
| `category` | `team` 또는 `personal` |
| `featured` | `true`이면 대표 프로젝트, `false`이면 접힌 추가 목록 |
| `number` | 제목을 입력하기 전 표시되는 순서 번호 |
| `title`, `description`, `image` | 프로젝트명, 카드의 한 줄 설명, 대표 이미지 |
| `period`, `role` | 기간, 담당 역할 |
| `repository`, `website` | 입력했을 때만 표시하는 외부 링크 |
| `slides` | 해당 프로젝트의 페이지 목록. 최소 1개 필요 |

대표 프로젝트는 종류별로 3개씩 설정했습니다. 나머지 목록에는 종류별 2개의 빈 항목이 있고, 항목을 추가하면 목록과 개수가 자동 반영됩니다. 프로젝트를 선정할 때 `featured`와 배열 순서를 변경하면 됩니다.

### 프로젝트별 슬라이드 구성

`slides` 배열을 추가·삭제·재배열해 페이지 수와 순서를 바꿉니다. 프로젝트끼리 페이지 수나 구성을 맞출 필요가 없습니다.

| `layout` | 구성 | 사용하는 값 |
| --- | --- | --- |
| `overview` | 대표 이미지 + 개요·기간·역할 | 프로젝트 정보, `text`, `image` |
| `split` | 설명 + 화면 또는 설계도 | `text`, `image`, `items[0].text` |
| `gallery` | 이미지 2개와 각각의 설명 | `items[].image`, `items[].title`, `items[].text` |
| `process` | 문제·접근·변화를 3단계로 표시 | `items[].title`, `items[].text` |
| `results` | 결과·배운 점·다음 단계 | `text`, `items[0].text`, `items[1].text` |

```js
{
  layout: 'split',
  title: '페이지 제목',
  text: '',
  image: null,
  items: [{ text: '' }],
}
```

새 레이아웃은 [`src/components/ProjectViewer.jsx`](src/components/ProjectViewer.jsx)의 `SlideContent`에 추가할 수 있습니다. 스타일은 [`src/styles.css`](src/styles.css)에서 관리합니다.

### 경력 추가

`experience` 배열에 `id`, `period`, `company`, `role`, `description`을 가진 객체를 추가합니다. 비어 있을 때는 경력 준비 중 영역만 표시합니다.

## 배포

GitHub: [gyeonggumun/gyeonggu-portfolio](https://github.com/gyeonggumun/gyeonggu-portfolio)

Vercel: [gyeonggu-portfolio.vercel.app](https://gyeonggu-portfolio.vercel.app)

Vercel 설정은 [`vercel.json`](vercel.json)에 있습니다. 빌드 명령은 `npm run build`, 출력 폴더는 `dist`입니다. 환경 변수나 별도 서버는 필요하지 않습니다.

Vercel 프로젝트 이름은 `gyeonggu-portfolio`이며, 현재 배포는 소스 직접 업로드 방식으로 진행합니다. GitHub 저장소 연동은 Vercel GitHub 통합 권한 설정 후 별도로 연결해야 하며, 현재 GitHub 푸시만으로 자동 배포되지는 않습니다.

## 확인한 동작

- 프로덕션 빌드
- 데스크톱 1440px / 모바일 390px 화면 및 가로 넘침 여부
- 대표 카드 6개와 추가 프로젝트 목록 접기·펼치기
- 프로젝트별 2~5페이지 구성 및 16:9 비율
- 버튼·키보드·모바일 스와이프 전환과 첫 페이지·마지막 페이지 경계
- 닫을 때 스크롤 복원과 기존 카드로 키보드 포커스 복귀
- 모바일 확대 상태의 가로 탐색과 화면 맞춤 복귀
- 브라우저 실행 오류 없음
