# WebSec Lab 포트폴리오 자료 기준

- 소개명: **WebSec Lab · 웹 보안 워게임**. 사용자의 요청에 따라 팀명을 프로젝트 제목으로 쓰지 않았다. 실제 저장소 주소는 출처 링크로 유지했다.
- 저장소: https://github.com/gyeonggumun/ThreeLine-Wargame
- main: `239e4846ec1237ee441e5a9244c0c9e4bd359214`
- README blob: `c236e73f1761cbe05d42e3100f40ffdd66a42c20`
- 원격과 로컬 HEAD·README 해시가 같고 로컬 변경이 없음을 확인했다.
- 사용자 확인 담당: 문제 1·2, 전반적인 보안 작업. 5인 팀·팀장 정보는 저장소 역할 설명에 근거한다.

## 확인한 자료와 코드

- 첨부 워크스루 PDF: 38페이지. 개인 담당 문제에 해당하는 1~6쪽의 텍스트·전체 렌더링 화면·포함 이미지를 확인했다. 나머지 문제를 개인 성과로 사용하지 않았다.
- `reference/web/app.sanitized.py`: ch1_login의 JSON 입력·SQL 문자열 결합·응답 분기와 ch2_webhook의 URL 결합·Bash shell=True·제한 시간을 확인했다. DB 비밀번호가 제거된 공개 참조 코드만 읽었다.
- `reference/systemd/wargame.service`, `hidden-archive.service`: 실행 계정·NoNewPrivileges·PrivateTmp를 확인했다.
- `reference/apache/000-default.conf`: 문제 1·2와 별도 앱의 localhost 프록시 경로를 확인했다.
- `reference/ufw/ufw.conf`, `defaults.conf`, `user.rules`, `user6.rules`: 활성 설정, 기본 DROP·출력 ACCEPT, IPv4·IPv6의 80·22 허용을 확인했다.
- `docs/SECURITY-DESIGN.md`, `docs/VERIFICATION.md`: 파일 권한·SSH·서비스 공유 경계와 과거 OVA 정적 분석의 검증 범위를 대조했다.

이 포트폴리오 작업에서 OVA를 새로 분석하거나 VM·취약 앱을 실행한 것은 아니다. 저장소의 기존 OVA 분석 기록, 공개 참조 파일, 사용자 제공 워크스루를 대조했다. 스캔·명령 주입·플래그 획득을 재실행하지 않았다.

## 이미지 출처

저장 경로: `public/images/websec-lab/`

| 파일 | 출처 | 배치 |
| --- | --- | --- |
| cover.png | 내장 imagegen 생성 | 카드·1쪽 |
| architecture.png | 저장소 assets/images 원본 | 1쪽 · 전체 구조 |
| challenge-flows.png | 저장소 assets/images 원본 | 1쪽 · 담당 문제 흐름 |
| ch1-json-request.jpg | PDF 1쪽 포함 이미지 Im1 | 2쪽 · JSON 요청 |
| ch1-error-response.jpg | PDF 2쪽 포함 이미지 Im2 | 2쪽 · 오류 응답 |
| ch1-login.jpg | PDF 2쪽 포함 이미지 Im3 | 2쪽 · 로그인 성공 |
| ch2-webhook-request.jpg | PDF 4쪽 포함 이미지 Im6 | 3쪽 · 웹훅 요청 |
| ch2-listener.jpg | PDF 4쪽 포함 이미지 Im7 | 3쪽 · 서버 요청 수신 |
| service-boundary.svg | 공개 systemd·Apache 설정을 정리한 개념도 | 3쪽 |
| network-policy.svg | 공개 UFW·Apache 설정을 정리한 개념도 | 4쪽 |
| file-permissions.svg | 저장소 파일·계정 권한 분석을 정리한 개념도 | 4쪽 |
| verification-plan.svg | 기존 결과와 후속 시험을 구분한 개념도 | 4쪽 |

PDF 이미지는 pypdf로 원본 이미지 스트림을 추출해 그대로 복사했다. 플래그와 서명 키·세션 값·실제 DB 비밀번호가 없는 장면만 공개 이미지로 선택했다. 화면 속 주소는 워크스루의 사설 실습망 주소이며 현재 운영 주소가 아니다. PDF 원문과 플래그를 보여주는 3·6쪽 결과 이미지는 업로드하지 않았다.

## 결과와 보안 범위

- 전체 문제 9개·플래그 목표 10개는 팀 배포 구성이다. 개인 제작은 2개다.
- 담당 두 문제의 목표 달성 기록은 기존 워크스루 3·6쪽에 있다. 새 실행 시험이나 현재 운영 상태를 뜻하지 않는다.
- HTTP 500만으로 SQLi, curl User-Agent만으로 명령 주입을 단정하지 않았다. 실제 입력 결합·실행 코드와 함께 설명했다.
- nologin·localhost·NoNewPrivileges·PrivateTmp는 각각 다른 경계를 다룬다. 완전한 컨테이너 격리를 구현했다고 쓰지 않았다.
- SSH 22 출발지 제한 부재, 0777 목표 파일, 문제 1·2 계정 공유는 제출 상태의 제약으로 적었다. 최소 권한 개선과 경계 회귀 시험은 후속 계획이다.
- 플래그 값·공유 키·공격 자동화 전체 코드는 포트폴리오에 복사하지 않았다. 취약점의 학습 목적·원인·관측·방어 관점에 집중했다.
- 개발일·개선율·방어 성공률·완전 격리를 새로 주장하지 않았다.
- ‘그 밖의 작업들 → 팀 프로젝트’의 team-07로 등록했다. 시연영상은 제공되지 않아 본문 4쪽으로 구성했다.
