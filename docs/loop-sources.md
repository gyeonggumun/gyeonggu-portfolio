# LOOP 통신사 프로젝트 분석 근거

2026년 11월 10일에 조회한 팀 저장소의 `main`은 `015d60fcef1ceeb7319c24ff9b736c8775e622e1`입니다. 제출 PPT는 4인 팀의 업무 분담, 배치 구조, 시연 영상을 확인하는 데 사용했습니다. 팀장 역할은 사용자 확인에 따르고, 인프라 담당 범위는 PPT 5쪽과 팀 저장소의 역할표를 대조했습니다. [팀 저장소 README](https://github.com/telecom-carrier-Loop/telecom-security-project/blob/015d60fcef1ceeb7319c24ff9b736c8775e622e1/README.md)

## 커밋과 PR

공개 브랜치 32개에서 도달 가능한 커밋을 SHA로 중복 제거해 246개를 확인했습니다. 이 중 `main`에서 도달 가능한 커밋은 237개입니다. 초기 컨테이너와 복제 기반, 학원망 통합, 웹 노드 분산, Primary 전환과 예약 백업, 배포 검증 및 발표 자료 정리 순으로 변경을 대조했습니다. [커밋 이력](https://github.com/telecom-carrier-Loop/telecom-security-project/commits/main/)

PR 62개 중 60개가 병합됐고 #57·#59는 병합 없이 종료됐습니다. `gyeonggumun` 계정이 작성한 PR은 29개이며 모두 병합됐습니다. PR 작성 계정과 발표자료의 담당 영역을 기준으로 인프라 기여를 설명했습니다. [전체 PR](https://github.com/telecom-carrier-Loop/telecom-security-project/pulls?q=is%3Apr) · [문경구 작성 PR](https://github.com/telecom-carrier-Loop/telecom-security-project/pulls?q=is%3Apr+author%3Agyeonggumun)

| 변경 묶음 | 문경구 작성 PR | 구현 및 검증 내용 |
| --- | --- | --- |
| 실행 환경과 DB 기초 | #1, #3, #4, #6, #8, #10, #23 | Docker·k3s 기반, 두 PC MySQL, PowerShell 5.1 호환, MySQL 8.4 전환과 TLS·GTID 복제 |
| 예약 백업과 복원 | #11, #12, #13, #25, #26, #47, #58 | 수동·시간당 백업, 복원 시험, Discord 감시, PC2 Primary 전환 이후 재검증 |
| 접속 경계와 통합 인계 | #29, #30, #34, #37, #38, #39, #41, #42, #43 | 학원망 연결과 복구 기록, DB 접근 제한, 자동화 전용 입구, 관리자 접근 정책 변경 |
| 웹 배포와 이중화 | #22, #48, #51, #55 | 프론트 빌드 수정, 두 웹 노드 배치, VM 중단 시험, 실행 이미지와 설정을 대조하는 재배포 도구 |
| 증거와 발표 | #64, #66 | 시연·검증 자료, 담당 발표 대본, 팀 README |

접속 정책은 시점에 따라 바뀌었습니다. #41의 공유 경로는 당시 이력으로 분류하고, 이후 #63의 공개 고객 경로와 관리자 경로 분리, #65의 실제 출발지 전달 보완을 후속 팀 변경으로 구분했습니다. 고객·관리자 업무 화면, 네트워크 장비와 접근 정책, 관제 도구 통합은 각각의 담당 영역으로 설명했습니다. [관리자 정책 PR #63](https://github.com/telecom-carrier-Loop/telecom-security-project/pull/63) · [출발지 전달 PR #65](https://github.com/telecom-carrier-Loop/telecom-security-project/pull/65)

## 이슈

조회 당시 이슈 4개는 모두 열려 있었습니다. 이슈의 초기 판정과 후속 운영 기록을 함께 읽어 확인 범위를 구분했습니다.

| 이슈 | 검토 결과 |
| --- | --- |
| [#33 공통 HTTPS 접속](https://github.com/telecom-carrier-Loop/telecom-security-project/issues/33) | 학원망 접속 장애와 공통 주소 적용을 추적합니다. 후속 HAProxy 이중 노드 연결은 별도 운영 기록에서 확인했습니다. |
| [#36 VM 네트워크 복구](https://github.com/telecom-carrier-Loop/telecom-security-project/issues/36) | 스위치 재연결 이후 VM 주소 미수신과 노드 준비 상태를 기록했습니다. 해당 이슈의 당시 장애 원인과 복구 범위는 로그로 확인한 수준까지 표시했습니다. |
| [#40 DB 접근 보완](https://github.com/telecom-carrier-Loop/telecom-security-project/issues/40) | 웹 API의 제한 계정 전환과 DB 접근 경계를 추적합니다. 관리 계정과 업무 계정의 용도를 구분했습니다. |
| [#44 PC1 전체 장애 대응](https://github.com/telecom-carrier-Loop/telecom-security-project/issues/44) | 웹 실행본 분산, 접속 장비, DB 역할, 제어부와 백업을 별도 항목으로 관리합니다. 이후 VM 중단 시험으로 확인된 범위는 기존 PC2 웹 실행본의 서비스 지속입니다. |

## 수치와 시연 출처

- **HTTP 200 응답 224건**은 10월 30일 PC2 DB 유지 상태에서 PC1 Ubuntu VM을 중단한 시험의 웹 112건과 API 112건입니다. 요청의 범위는 해당 관측 구간이며 전환 소요 시간은 측정값이 없습니다. [웹 장애 전환 기록](https://github.com/telecom-carrier-Loop/telecom-security-project/blob/015d60fcef1ceeb7319c24ff9b736c8775e622e1/docs/operations/2026-10-30-web-ha-failover.md)
- **테이블 26개 검사 통과**는 11월 3일 선정한 Primary 백업을 격리된 시험 MySQL에 복원한 결과입니다. 제출 화면과 팀 저장소 캡처에서 검사 문구를 확인했습니다. [최종 백업 검증](https://github.com/telecom-carrier-Loop/telecom-security-project/blob/015d60fcef1ceeb7319c24ff9b736c8775e622e1/docs/operations/2026-11-03-final-backup-validation.md)
- **시연 영상 두 편**은 제출 PPT의 HAProxy 트래픽 분산 영상과 PC1 Ubuntu VM 중단 영상입니다. 공개용으로 브라우저 주소와 작업 창을 제외하고 HAProxy 상태 표를 발췌했습니다. VM 중단 영상은 중단 전후 장면을 이어 붙였습니다. 영상의 11월 4일 시연과 224건의 10월 30일 시험 기록은 서로 다른 자료입니다. [인프라 시연 증거 PR #64](https://github.com/telecom-carrier-Loop/telecom-security-project/pull/64)
