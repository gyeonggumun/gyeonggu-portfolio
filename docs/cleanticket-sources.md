# CleanTicket 포트폴리오 자료 기준

- 저장소: https://github.com/gyeonggumun/CleanTicket
- 확인한 main: `0bcd5d396be728f4756c0af74db05bc9b951a4b9`
- README blob: `110ed31e694649d6340ed6b6c084ce3447683699`
- 저장소는 README와 보고서 추출 이미지로 구성되어 있으며, 실행 가능한 서비스 소스코드나 배포 설정은 제공하지 않는다. 로컬 사본의 HEAD·README 해시가 원격과 동일함을 확인했다.
- 사용자 확인 담당: Graylog, IDS/IPS. README와 노션 팀 페이지에는 팀장으로 기록되어 있다.
- 기간: 2026.06.01~06.22, 5인 팀 KALI KALI.

## 직접 대조한 노션

- [팀 페이지](https://app.notion.com/p/oreumi/team5-KALI-KALI-352ebaa8982b807f8f37d18e1f012b84): 팀 구성원 5명, 문경구 팀장, 시나리오·회의록·작업 기록.
- [IDS/IPS 설정](https://app.notion.com/p/oreumi/IDS-IPS-376ebaa8982b8041bb78e2b613274b55): HOME_NET·EXTERNAL_NET·HTTP_SERVERS·HTTP_PORTS 설정 확인. 규칙별 상세 내용은 README 및 보고서 규칙 이미지와 대조했다.
- [Graylog 연동 설정](https://app.notion.com/p/oreumi/Graylog-379ebaa8982b805db188d1dda8f48b43): alert_syslog, rsyslog의 snort 프로그램 필터, UDP(@)·TCP(@@) 전송 방식, snort -T 검사와 서비스 재시작 절차 확인. 두 전송 방식을 모두 운영했다는 의미는 아니다.
- [IPS/IDS 테스트 자료](https://app.notion.com/p/oreumi/IPS-IDS-384ebaa8982b80669d12ff48819eb77e): IDS 규칙과 동일 IP의 포트 반복 접속 시나리오 확인.
- [6월 9일 회의록](https://app.notion.com/p/oreumi/06-09-379ebaa8982b807f9daffc56ea5e8b5d): 로그 서버와 웹 서버가 합쳐져 있어 분리가 필요하다는 논의 확인.

노션은 로그인된 브라우저에서 읽기만 수행했다. 서버 계정·인증값·세션 정보는 자료에 복사하지 않았다.

## 이미지 출처와 배치

`public/images/cleanticket/`의 실습 이미지 11개는 위 커밋의 `CleanTicket/images/` 원본 파일을 그대로 복사했다.

| 파일 | 원문 근거 | 포트폴리오 위치 |
| --- | --- | --- |
| architecture-plan.jpg | 계획서 6쪽 | 1쪽 · 초기 설계 |
| topology-final.png | 결과보고서 7쪽 | 1쪽 · 팀 전체 구조 |
| ips-rules.png | 결과보고서 21쪽 | 2쪽 · 내 담당 규칙 |
| ids-scan-graylog.png | 결과보고서 17쪽 | 2쪽 · SID 1000001 |
| ids-admin-graylog.png | 결과보고서 18쪽 | 2쪽 · SID 1000002 |
| ips-macro-graylog.png | 결과보고서 23쪽 | 3쪽 · SID 1000103 |
| ips-headless-graylog.png | 결과보고서 24쪽 | 3쪽 · SID 1000110 |
| macro-requests.png / macro-reservations.png | 결과보고서 15쪽 | 4쪽 · 팀의 공격 재현 |
| pmm-before.png / pmm-after.png | 결과보고서 14쪽 | 4쪽 · 팀의 부하 관찰 |

`log-flow.svg`는 노션 연동 절차를 정리한 개념도이고, `cover.png`는 생성한 대표 이미지다. 실제 실습 화면과 구분해 캡션을 적었다.

## 수치와 기여 범위

- 7건 HTTP 200·예약 7건은 대응 전 매크로 시연 결과다. 차단 후 성공률이나 차단율을 뜻하지 않는다.
- PMM Load Average 0.00→1.11은 보고서 캡처 시점 관찰값이다. 통제된 반복 부하 시험 수치가 아니다.
- Graylog 이벤트 수집은 확인할 수 있으나 같은 요청의 실제 패킷 드롭을 별도로 입증하지는 않는다. 차단율·오탐률·가용성 성능은 새로 주장하지 않았다.
- 노션 초안과 보고서의 요청 경로·임계값은 서로 다른 버전으로 다뤘다. 이미지의 주석과 코드에 적힌 값도 차이가 있다.
- 웹·DB·pfSense·PMM·Shell Script는 팀의 작업으로 구분했다. 개인 담당은 Snort 규칙과 Graylog 서버·연동이다.
- 개선·회고 항목은 다음 검증 계획이며 완료한 구현으로 쓰지 않았다.

## 시연영상

- https://youtu.be/C8zeX99weVM
- YouTube oEmbed 확인: `티켓팅 웹 서버 시연영상`, 작성자 `문경구`.
- 5페이지에 단일 대형 영상으로 배치. 영상 전체 내용을 별도로 전사·검증한 것은 아니다.
