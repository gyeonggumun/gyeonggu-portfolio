# GrayGuard 포트폴리오 자료 기준

- 저장소: https://github.com/gyeonggumun/GrayGuard
- 확인한 main: `dec5ed06728dc40ad3938f245e3baa54d97f758e`
- README blob: `cebeb780629b9d3d4d8670dfece7edb04266db74`
- 원격과 로컬 HEAD·README 해시가 동일하며 로컬 변경이 없음을 확인했다. 저장소는 README와 실습 이미지 중심이고 실행 가능한 DB 구성 소스는 포함하지 않는다.
- 사용자 확인 담당은 DB다. README의 서버 업무 중 MariaDB를 중심으로 작성했고, DNS·SFTP를 개인 핵심 성과로 확대하지 않았다.
- 기간: 2026.04.13~04.24, Infra SEC 최종 3명. 노션 초기 역할 표에는 4명이 있으나 현재 팀 구성원과 README의 최종 인원을 기준으로 적었다.

## 직접 확인한 노션

- [팀 1 Infra SEC](https://app.notion.com/p/oreumi/1-Infra-SEC-336ebaa8982b803e82bfcea7438cd298): DB 서버 작업이 문경구에게 지정되었고 Done 상태임을 확인했다.
- [DB 서버](https://app.notion.com/p/oreumi/DB-344ebaa8982b803f9f9aca6be4d7c534): MariaDB, 포트 접근 제한, 전용 DB·테이블, Master–Slave 이중화, 용도별 계정, 최소 12자 비밀번호 정책, 감사 기록, 최소 권한 백업, 파일 권한, 백업 실행·완료, 인증서 검증 기록을 읽었다.
- 백업 계정은 RELOAD·PROCESS·LOCK TABLES·BINLOG MONITOR 권한으로 설명되어 있다. 인증 파일 권한 600, 디렉터리·스크립트 700은 실제 터미널 화면에서 확인했다.
- 실제 화면에서 테이블스페이스 복사, `completed OK!`, 날짜별 백업 폴더와 cron 설치 메시지, `server-cert.pem: OK`, 설정 적용 후 MariaDB 재시작을 확인했다.
- 감사 이벤트는 자료에 QUERY·DCL 설명과 QUERY_DCL 설정 표기가 혼재하므로 소개에는 접속·권한 변경 등 감사 기록으로 표현했다.
- 노션은 브라우저에서 읽기만 했다. 계정 비밀번호·인증 파일 내용·키 내용은 복사하지 않았다.

## 이미지 출처

저장 경로: `public/images/grayguard/`

| 파일 | 출처·의미 | 배치 |
| --- | --- | --- |
| p1-1.png | 저장소 images 원본 · 팀 인프라 구성도 | 1·2쪽 |
| p1-2.jpg | 저장소 images 원본 · 팀 토폴로지 | 1쪽 |
| p1-3.jpg | 저장소 images 원본 · Web·DB·SFTP·인증 로그 수신 | 4쪽 |
| p1-4.jpg | 저장소 images 원본 · 서비스별 중앙 로그 분류 | 4쪽 |
| backup-permissions.png | DB 노션 이미지 블록 `34bebaa8-982b-8001-98a5-e82498037c71` · 600/700 권한 설정 | 3쪽 |
| backup-running.png | DB 노션 이미지 블록 `34bebaa8-982b-80c9-9b8d-e7d2295abdae` · 백업 복사 로그 | 3쪽 |
| backup-completed.png | DB 노션 이미지 블록 `34bebaa8-982b-80fb-85ea-d666817730a3` · 완료·폴더·cron | 3쪽 |
| tls-verification.png | DB 노션 이미지 attachment `878dcd27-8d24-4921-8ef3-6c938f35e510` · 인증서 검증·재시작 | 3쪽 |
| db-flow.svg / db-accounts.svg | 확인한 설정을 정리한 개념도 · 실습 캡처와 구분 | 2쪽 |
| cover.png | 내장 imagegen으로 생성한 대표 이미지 | 카드·1·5쪽 |

노션에 실제 표시된 이미지들을 브라우저 pageAssets로 내려받고 원본 그대로 복사했다. 계정 생성 화면 대신 인증값이 없는 실행·결과 이미지를 선택했다. Log 서버 백업·상태 점검 이미지는 DB 개인 작업과 혼동되지 않도록 사용하지 않았다.

## 결과 해석

- DB 복제 구성은 작업 기록에 있으나 자동 장애 전환·복제 지연·장기 정합성의 측정값은 없다.
- 전체 백업 파일 생성은 확인된다. 복원 성공·복구 시간·무손실 복구는 주장하지 않았다.
- 인증서 검증과 TLS 설정 적용은 확인된다. 실제 접속 세션 암호화 시험은 후속 항목으로 적었다.
- cron 등록 화면은 있으나 장기간 매일 실행된 증거는 아니므로 등록 절차로 표현했다.
- Web–DB 연결·접근 제한·중앙 로그 수신은 README의 팀 통합 확인 범위다. Web·방화벽·Log 서버·Graylog의 구축을 개인 성과로 쓰지 않았다.
- 내부 실습망 검증과 외부 공개 운영을 구분했다. 외부 연결·실트래픽 부하 시험·자동 장애 전환은 후속 과제다.

## 시연영상

- https://youtu.be/Go_emZm931w
- YouTube oEmbed 확인: `Infra SEC 서버 구현영상`, 작성자 `문경구`.
- 마지막 5쪽에 단일 대형 영상으로 배치했다. 전체 영상을 별도로 전사·검증한 것은 아니다.

## 노출 위치

대표 팀 프로젝트 3개는 유지하고, 기존 `team-04` 슬롯을 채웠다. ‘그 밖의 작업들 → 팀 프로젝트’를 펼치면 GrayGuard 카드가 표시된다.
