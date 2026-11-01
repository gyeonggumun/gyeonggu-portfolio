# KaliCTF 포트폴리오 자료 기준

- 저장소: https://github.com/gyeonggumun/KaliCTF
- main: `28053053d1daf0bee45065313d2b9fb512d01ee9`
- README blob: `cad2c05561ab4d44d4da0cb17a88f9ec27daca0a`
- 로컬 HEAD·README 해시가 원격과 같고 작업 사본에 변경이 없음을 확인했다.
- 개인 제작 CTF 환경과 5인 공동 실습을 구분했다. 개인 프로젝트 04로 등록했으며 팀 프로젝트나 5인 공동 제작으로 표시하지 않았다.

## 이번 작업에서 직접 대조한 근거

| 자료 | 확인한 내용 |
| --- | --- |
| 사용자 제공 워크스루 PDF 3쪽 전체의 본문·이미지 | 매뉴얼 단서, 산술식 49 출력, 기존 파일 읽기·SSH 접근·SUID 조사·PATH 조작·User/Root 결과 |
| reference/web/wsgi.py | name 수신, f-string·replace로 HTML 구성 후 render_template_string 실행, 단계별 탐색 경로, 0.0.0.0:5000 수신 |
| reference/systemd/ctf-web.service | www-data 계정, Python 실행, Restart=always |
| reference/systemd/ctf-fake-ports.service | ncat으로 21·3306·8080 리스너 구성 |
| reference/network/rules.v4 | raw 테이블의 원래 목적지 5000 차단, nat의 80→5000 리다이렉션, 중복 저장 규칙 |
| docs/evidence.json의 netcheck 항목 | UID/GID 0, mode 4755, system·setuid·setgid·경로 없는 curl 문자열의 기존 분석 기록 |
| docs/ANALYSIS.md | 원본 VM 정적 분석의 범위와 한계, 위장 포트·웹 연출 문구의 실제 의미 |

현재 포트폴리오 작업은 공개 참조 파일과 기존 분석·실습 기록의 대조다. VM/VDI를 새로 분석하거나 게스트 OS 부팅·스캔·SSH·취약점 실행·권한 상승을 재수행하지 않았다. 이 작업에서 검증한 실행 화면은 포트폴리오 사이트의 렌더링이다.

## 이미지 출처

저장 경로: `public/images/kalictf/`

| 파일 | 출처 | 배치 |
| --- | --- | --- |
| cover.png | 내장 imagegen 생성 | 카드·1쪽 |
| manual-hint.jpg | PDF 1쪽 포함 이미지 Im1 | 2쪽 · name 파라미터 안내 |
| ssti-result.jpg | PDF 1쪽 포함 이미지 Im3 | 2쪽 · 산술식 49 출력 |
| suid-discovery.jpg | PDF 2쪽 포함 이미지 Im5 | 3쪽 · SUID 목록의 netcheck |
| path-observation.jpg | PDF 3쪽 포함 이미지 Im7 | 3쪽 · PATH 의존 실행의 기존 기록 |
| scenario-flow.svg | 저장소와 워크스루를 요약한 개념도 | 1쪽 |
| network-flow.svg | 웹·서비스·저장 규칙을 요약한 개념도 | 1쪽 |
| template-boundary.svg | wsgi.py의 입력 결합·렌더링 순서를 요약 | 2쪽 |
| privilege-boundary.svg | 기존 바이너리 메타데이터·문자열 분석을 요약 | 3쪽 |
| service-config.svg | 실행 계정·설정 파일의 신뢰 경계 요약 | 4쪽 |
| fake-ports.svg | 위장 리스너와 서비스 식별 개념 요약 | 4쪽 |
| verification.svg | 기존 기록·정적 근거·후속 시험을 구분 | 4쪽 |

PDF는 pypdf로 본문·원본 이미지를 추출하고 Poppler로 렌더링해 확인했다. 선택 이미지는 원본 그대로 복사했으며 계정 비밀번호·User/Root 플래그가 있는 이미지는 공개하지 않았다. PDF 원본과 전체 VM도 업로드하지 않았다. 개념도는 실제 시험 화면과 구분해 캡션을 적었다.

## 기술 설명의 범위

- 환경·시나리오는 개인 제작, 실습은 5인 공동 진행이라는 저장소 설명을 기준으로 했다.
- 49 출력은 템플릿 평가의 기존 관찰 결과다. 이를 모든 서버 코드 실행 기능의 검증으로 확대하지 않았다.
- Diagnostic Ping 표기는 연출된 기능명이다. wsgi.py에 실제 ping 실행이나 안내 문구에 대응하는 탐지·차단 구현이 있다고 쓰지 않았다.
- 설정 파일 접근은 SSTI를 통한 읽기 기록이다. .env의 HTTP 직접 다운로드를 주장하지 않았다.
- netcheck의 원본 C 소스·바이너리 전체 제어 흐름을 확인한 것은 아니다. 문자열·심볼·권한 기록과 워크스루를 구분했다.
- ncat 리스너를 FTP·MySQL·별도 HTTP 서비스 구현으로 설명하지 않았다.
- 저장 규칙에는 중복 리다이렉션이 있고 filter 기본 정책은 ACCEPT다. 전체 수신 기본 차단이나 완전한 격리를 주장하지 않았다.
- 자동 구축, 초기화, 수정 전후 비교, 경계 반복 시험은 후속 계획이며 이미 완료한 기능으로 쓰지 않았다.
- 개발일·응답 성능·성공률 수치를 임의로 추가하지 않았다.
- 기존 개인 프로젝트 04 자리에 본문 4쪽으로 추가했다. ‘그 밖의 작업들 → 개인 프로젝트’를 펼치면 확인할 수 있다. 시연영상은 제공되지 않아 빈 영상 페이지는 만들지 않았다.
