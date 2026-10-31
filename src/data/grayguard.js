const image = (name) => `/images/grayguard/${name}`;
const repository = "https://github.com/gyeonggumun/GrayGuard";
const notion = "https://app.notion.com/p/oreumi/1-Infra-SEC-336ebaa8982b803e82bfcea7438cd298";
const database = "https://app.notion.com/p/oreumi/DB-344ebaa8982b803f9f9aca6be4d7c534";

export const grayguard = {
  id: "team-04",
  category: "team",
  featured: false,
  number: "04",
  title: "GrayGuard",
  description: "기업 보안 인프라를 구축한 팀 프로젝트. DB 담당으로 MariaDB 복제와 계정·감사 로그·백업·TLS를 구성하고, 내부망의 Web–DB 연결을 확인했습니다.",
  image: image("cover.png"),
  period: "2026.04.13 ~ 2026.04.24",
  role: "최종 3인 팀 · 서버 담당 / DB 중심",
  technologies: ["MariaDB", "Rocky Linux", "mariabackup", "TLS", "Shell Script"],
  repository,
  website: null,
  videos: [
    { id: "Go_emZm931w", title: "GrayGuard · Infra SEC 서버 구현 시연", description: "기업 보안 인프라의 서버 구현 시연", url: "https://youtu.be/Go_emZm931w", poster: image("cover.png") },
  ],
  slides: [
    {
      layout: "case-study", dense: true,
      title: "GrayGuard · 서비스 연결과 데이터 보호를 함께 설계",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제 정의 · 프로젝트 목표", text: "가상의 기업에서 부서별 사용자망과 서버망을 분리하고, 서비스에 필요한 통신을 허용하는 보안 인프라를 구축했습니다. Web은 DMZ에, DB는 내부 서버망에 배치했습니다." },
        { title: "나의 역할 · DB 구축과 보호", text: "서버 담당으로 MariaDB Master–Slave 복제, 용도별 계정·접근 제어, 비밀번호 정책, 감사 로그, 전체 백업과 TLS 설정을 맡았습니다. 이 소개는 DB 작업을 중심으로 정리했습니다." },
        { title: "접근과 의사결정", text: "DB 설치에서 끝내지 않고 접근 경로·계정 권한·감사 기록·복제·백업을 함께 구성했습니다. 네트워크 담당자와 Web·관리·복제에 필요한 통신 경로를 맞췄습니다." },
        { title: "핵심 경험", text: "서비스가 연결되면서도 불필요한 접근은 제한되도록 조정했습니다. 팀의 망 분리와 로그 수집 구조 안에서 DB 설정과 실제 동작을 함께 확인했습니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "GrayGuard · 프로젝트 표지", text: "DB 복제와 데이터 보호를 표현한 생성 이미지" },
        { image: image("p1-1.png"), title: "기업 보안 인프라 구성도", text: "팀 전체 설계 · DMZ·내부 서버망·부서망 분리" },
        { image: image("p1-2.jpg"), title: "네트워크·서버 연결", text: "팀 토폴로지 · DB를 포함한 서비스 간 경로" },
      ],
      sources: [{ title: "GitHub 프로젝트 문서", url: repository }, { title: "노션 팀 기록", url: notion }],
    },
    {
      layout: "case-study", dense: true,
      title: "MariaDB · 복제와 용도별 계정으로 DB 계층 구성",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제와 나의 구현", text: "데이터를 한 서버에만 두는 구성과 서비스 계정의 과도한 권한을 줄이고자 했습니다. 전용 DB·테이블을 만들고 Master–Slave 복제와 계정별 접근 범위를 구성했습니다." },
        { title: "접근 제어 · 역할과 출발지 분리", text: "서비스·관리·복제·백업 계정을 용도별로 나눴습니다. DB 포트는 필요한 시스템에 제한하고, 복제 계정은 Slave 서버에서 접근하도록 설정했습니다." },
        { title: "계정 정책과 감사 기록", text: "simple_password_check로 DB 계정의 최소 12자와 문자 조합 정책을 설정했습니다. server_audit로 접속과 권한 변경 등을 기록해 누가 DB를 사용했는지 추적하도록 했습니다." },
        { title: "배운 점 · 복제와 복구를 나눠 검증", text: "복제 구성과 Web–DB 연결을 수행했습니다. 다음에는 복제 지연·데이터 정합성과 장애 시 승격을 별도로 측정해, 가용성 목표를 실제 시험으로 확인하겠습니다." },
      ],
      figures: [
        { image: image("db-flow.svg"), title: "DB 계층의 역할 분리", text: "구축 기록을 정리한 개념도 · 복제·백업 흐름" },
        { image: image("db-accounts.svg"), title: "용도별 계정과 보안 정책", text: "노션 DB 작업 기록을 정리한 개념도" },
        { image: image("p1-1.png"), title: "내부 서버망의 DB 위치", text: "Web·관리·복제에 필요한 접근 경로 조율" },
      ],
      sources: [{ title: "노션 DB 서버 작업", url: database }, { title: "DB 복제·보호 정리", url: `${repository}#1-mariadb-복제와-데이터-보호` }],
    },
    {
      layout: "case-study", dense: true,
      title: "백업·TLS · 실행 결과와 인증서 검증을 기록",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제와 구현 · 최소 권한 백업", text: "백업 계정에 RELOAD·PROCESS·LOCK TABLES·BINLOG MONITOR 권한을 부여했습니다. 인증 파일은 600, 백업 디렉터리와 실행 스크립트는 700으로 접근을 제한했습니다." },
        { title: "실행과 결과 · 전체 백업", text: "full_backup.sh에서 mariabackup을 실행했습니다. 테이블스페이스 복사 과정과 completed OK! 메시지, 날짜별 백업 디렉터리를 확인하고 cron 등록 절차를 정리했습니다." },
        { title: "전송 보호 · 인증서 확인", text: "자체 CA로 서버 인증서를 발급하고 OpenSSL의 server-cert.pem: OK 결과를 확인했습니다. MariaDB TLS 설정을 적용한 뒤 서비스를 재시작했습니다." },
        { title: "다음 검증 · 복원과 암호화 세션", text: "백업 생성 다음에는 별도 환경에서 복원·정합성 시험이 필요합니다. TLS도 인증서 검증에 이어 실제 DB 접속 세션의 암호화와 인증서 갱신 절차를 확인하겠습니다." },
      ],
      figures: [
        { image: image("backup-permissions.png"), title: "백업 경로·파일 권한 설정", text: "노션 원본 · 인증 파일 600, 디렉터리·스크립트 700" },
        { image: image("backup-running.png"), title: "물리 백업 실행", text: "mariabackup의 테이블스페이스 복사 로그" },
        { image: image("backup-completed.png"), title: "백업 완료와 결과 디렉터리", text: "completed OK! · 날짜별 폴더 생성 확인" },
        { image: image("tls-verification.png"), title: "서버 인증서 검증", text: "server-cert.pem: OK · 설정 적용 후 재시작" },
      ],
      sources: [{ title: "노션 백업·인증서 기록", url: database }, { title: "DB 보안 구현 정리", url: `${repository}#1-mariadb-복제와-데이터-보호` }],
    },
    {
      layout: "case-study", dense: true,
      title: "통합 결과와 회고 · 설정에서 동작 확인까지",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "나의 기여와 통합 확인", text: "DB 계층을 구성하고 팀과 Web–DB 연결, 비인가 출발지의 DB 직접 접근 제한을 확인했습니다. DB 로그도 팀의 중앙 로그 수집 경로에서 확인했습니다." },
        { title: "팀 결과 · 서비스별 로그 수집", text: "Web·DB·SFTP·인증 로그를 중앙 서버에서 받아 서비스별로 분리했습니다. pfSense·Web·Graylog와 Log 서버의 기초 구축은 각 팀원의 작업입니다." },
        { title: "회고 · 보안 정책과 서비스 연결", text: "접근을 제한하는 정책은 서비스 통신과 함께 검토해야 했습니다. 설정 파일뿐 아니라 연결 결과·거부 기록·백업 완료 로그를 함께 남기는 것이 인계와 검증에 도움이 됐습니다." },
        { title: "다시 한다면 · 복구부터 시험", text: "DB 복원과 장애 전환 시험을 초기에 계획하겠습니다. 이번 확인 범위는 내부 실습망이며, 외부 연결·실트래픽 부하 시험과 자동 장애 전환은 후속 과제로 남았습니다." },
      ],
      figures: [
        { image: image("p1-3.jpg"), title: "DB를 포함한 중앙 로그 수신", text: "팀 통합 검증 · Web·DB·SFTP·인증 로그" },
        { image: image("p1-4.jpg"), title: "서비스별 로그 분류", text: "팀의 Log 서버 구성 · DB 로그 경로 확인" },
      ],
      sources: [{ title: "팀 통합 결과와 회고", url: `${repository}#팀-통합-결과와-운영-증거` }, { title: "노션 팀 기록", url: notion }],
    },
    { layout: "videos", title: "GrayGuard · Infra SEC 서버 구현 시연" },
  ],
};
