# SafeStay 프로젝트 콘텐츠 근거

팀 프로젝트 02는 `src/data/safestay.js`에서 관리합니다. 몽향과 같이 본문 4페이지와 시연영상 전용 5페이지로 구성합니다. 캡처가 3개인 페이지는 이미지 비율에 맞춰 배경을 정리하고, 영상이 하나인 5페이지는 큰 단일 플레이어를 중앙에 배치합니다.

## 확인한 자료와 역할

- [SafeStay README](https://github.com/gyeonggumun/SafeStay): 계획서·결과보고서·노션 기록을 정리한 공개 프로젝트 문서입니다. 연결된 GitHub의 README와 로컬 자료가 동일한 Git blob(`4b582c7a3112b69f746798ccfe08a4c6d2adea83`)임을 확인했습니다.
- [노션 팀 기록](https://app.notion.com/p/oreumi/3-3-389ebaa8982b8030af22da166cde08a0): 브라우저에서 역할 표를 읽었습니다. 문경구는 팀장, DB·Slave·PMM 구축과 연동, 악성 파일 분석, Shell Script 담당으로 기재돼 있습니다.
- [DB·Slave·PMM 기록](https://app.notion.com/p/oreumi/db-Slave-pmm-3a6ebaa8982b80baa33ae1e80f235e46): 구축·자동 장애 조치·복구 테스트·테이블 생성 기록의 연결을 확인했습니다. 비밀번호와 인증 설정은 공개 콘텐츠로 옮기지 않았습니다.
- [자동 복구 테스트](https://app.notion.com/p/oreumi/master-slave-3a6ebaa8982b80ec802de4a20c5836e2): Master MariaDB 중지 → `maxctrl list servers`로 Slave 승격 확인 → Master 재기동 후 Slave 복귀 확인이 기록돼 있습니다.
- 기간과 팀 규모는 공개 README의 2026.07.23~08.05, 5인 팀을 사용했습니다. 웹·네트워크·IPS·WAF·Graylog의 전체 구축을 개인 성과로 표현하지 않았습니다.

## 페이지 구성과 표현 범위

1. 서비스 목표, 팀장·DB 담당 범위, 팀의 전체 아키텍처.
2. MariaDB 복제·PMM 관찰·MaxScale 역할 전환과 노션의 테스트 기록. 복구 시간·데이터 손실량은 측정값이 없어 성과 수치에 넣지 않았습니다.
3. 5개 범주의 보안 점검 Shell Script와 EICAR 65/67 탐지 기록. 전체 U-01~U-67의 통과·완전 자동 조치를 주장하지 않으며, EICAR 탐지와 서버 업로드 차단을 구분했습니다.
4. 팀의 초기 명령 실행·후속 403 화면, Slowloris 로그 수집과 회고. 탐지·차단·로그 수집 및 서비스 가용성을 구분했습니다.
5. [SafeStay 시연영상](https://youtu.be/s6fb6bkrD3I)을 크게 볼 수 있는 단일 영상 페이지.

복제와 장애 전환은 별도의 백업·재해복구 체계를 대체하지 않습니다. 반복 장애 전환 시험, 백업·복원, 관리 접근 강화와 로그 보존 정책은 후속 과제로 표현했습니다.

## 이미지

`public/images/safestay/`의 화면 9개는 사용자가 지정한 SafeStay 공개 저장소의 `images/` 원본을 복사했습니다. 공격 검증·업로드 검사 흐름은 결과보고서에서 추출된 이미지입니다. 화면을 자르지 않고 표시하며 클릭하면 원본을 엽니다.

- `p2-1.jpg`: 네트워크·접근 정책 / `p2-2.jpg`: 계층별 보안·관제 구성 / `p2-3.jpg`: 네트워크 토폴로지
- `p2-4.png`: Graylog의 Slowloris 이벤트 / `p2-5.jpg`: 서비스 관리 보안 점검 / `p2-6.png`: EICAR 분석
- `upload-flow.png`: 업로드 검사 설계
- `waf-before.png`, `waf-after.png`: 초기 명령 실행과 후속 403 응답
- `db-flow.svg`: 노션 구축·테스트 기록을 바탕으로 새로 그린 개념도이며 원본 테스트 화면이 아닙니다.
- `cover.png`: imagegen으로 제작한 대표 일러스트. 실제 서비스 화면과 구분해 표지로 사용합니다. [제작 프롬프트](safestay-cover-prompt.md)를 보관했습니다.
