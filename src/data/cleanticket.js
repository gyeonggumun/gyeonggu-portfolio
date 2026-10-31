const image = (name) => `/images/cleanticket/${name}`;
const repository = "https://github.com/gyeonggumun/CleanTicket";
const notion = "https://app.notion.com/p/oreumi/team5-KALI-KALI-352ebaa8982b807f8f37d18e1f012b84";
const rules = "https://app.notion.com/p/oreumi/IDS-IPS-376ebaa8982b8041bb78e2b613274b55";
const graylog = "https://app.notion.com/p/oreumi/Graylog-379ebaa8982b805db188d1dda8f48b43";

export const cleanticket = {
  id: "team-03",
  category: "team",
  featured: true,
  number: "03",
  title: "CleanTicket",
  description: "공연 예매 서비스를 대상으로 한 보안 관제 프로젝트. Snort IDS/IPS 규칙과 Graylog 서버·로그 연동을 맡아 공격 징후를 중앙 관제에서 확인했습니다.",
  image: image("cover.png"),
  period: "2026.06.01 ~ 2026.06.22",
  role: "5인 팀 · 팀장 / Graylog·IDS/IPS 담당",
  technologies: ["Graylog", "Snort", "IDS/IPS", "rsyslog", "Linux"],
  repository,
  website: null,
  videos: [
    { id: "C8zeX99weVM", title: "CleanTicket · 티켓팅 웹 서버 시연", description: "공연 예매 웹서비스와 프로젝트 시연", url: "https://youtu.be/C8zeX99weVM", poster: image("cover.png") },
  ],
  slides: [
    {
      layout: "case-study", dense: true,
      title: "CleanTicket · 예매 서비스의 공격 징후를 관제로 연결",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제 정의 · 프로젝트 목표", text: "예매 시작 시 접속이 집중되는 공연 티켓팅 환경에서 매크로 예매, 비인가 접근과 대량 트래픽을 확인하고 대응할 수 있는 보안 실습 환경을 구축했습니다." },
        { title: "나의 역할 · 5인 팀 / 팀장", text: "팀 일정과 연결 작업을 조율하고 Snort IDS/IPS 규칙 작성, Graylog 서버 구축, Snort 경보 전달과 중앙 로그 확인을 담당했습니다." },
        { title: "접근과 의사결정", text: "팀은 pfSense·VLAN으로 서비스와 보안 영역을 나눴습니다. 저는 트래픽을 검사하는 Snort와 이벤트를 검색하는 Graylog를 연결해 공격 시나리오별 확인 경로를 구성했습니다." },
        { title: "구현 범위와 핵심 경험", text: "웹·DB·방화벽 담당자와 서비스 주소와 요청 경로를 맞췄습니다. 규칙 작성부터 경보 전달, SID별 로그 확인까지 관제 흐름을 경험했습니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "CleanTicket · 프로젝트 표지", text: "티켓팅 보안 관제를 표현한 생성 이미지" },
        { image: image("architecture-plan.jpg"), title: "초기 보안 인프라 설계", text: "계획서 6쪽 · 공격 경로와 Graylog 수집 구상" },
        { image: image("topology-final.png"), title: "최종 네트워크 토폴로지", text: "결과보고서 7쪽 · 팀 전체의 영역 분리 구성" },
      ],
      sources: [{ title: "GitHub 프로젝트 문서", url: repository }, { title: "노션 팀 기록", url: notion }],
    },
    {
      layout: "case-study", dense: true,
      title: "IDS/IPS · 서비스 경로에 맞춰 탐지·차단 규칙 작성",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제와 나의 구현", text: "Snort의 HOME_NET·HTTP_SERVERS·HTTP 포트를 실습 환경에 맞추고, 기록을 남기는 alert 규칙과 패킷 차단을 위한 drop 규칙을 나눠 작성했습니다." },
        { title: "시나리오별 규칙", text: "포트 스캔·관리자 URL·시스템 파일 탐색·Nikto는 IDS 경보로, SYN Flood·반복 예매·결제 값 변조·XSS·HeadlessChrome 패턴은 IPS 규칙으로 구성했습니다." },
        { title: "의사결정 · 실제 요청과 규칙을 일치", text: "매크로 탐지는 실제 예매 처리 경로와 요청 빈도를 기준으로 설정했습니다. 보고서 규칙의 /reserve_process.php와 노션 초안의 경로·임계값 차이를 확인했습니다." },
        { title: "확인 결과 · SID로 규칙 추적", text: "Graylog에서 포트 스캔 SID 1000001과 관리자 경로 접근 SID 1000002 이벤트를 확인했습니다. 규칙마다 고유 SID를 두어 어떤 조건이 경보를 만들었는지 추적했습니다." },
      ],
      figures: [
        { image: image("ips-rules.png"), title: "Snort IPS 규칙", text: "보고서 21쪽 · SYN·매크로·값 변조·XSS·봇 헤더" },
        { image: image("ids-scan-graylog.png"), title: "포트 스캔 IDS 경보", text: "보고서 17쪽 · SID 1000001의 시각·출발지·목적지" },
        { image: image("ids-admin-graylog.png"), title: "관리자 경로 접근 경보", text: "보고서 18쪽 · SID 1000002 수집 확인" },
      ],
      sources: [{ title: "노션 IDS/IPS 설정", url: rules }, { title: "규칙 작성 정리", url: `${repository}#1-idsips-규칙-작성` }],
    },
    {
      layout: "case-study", dense: true,
      title: "Graylog · 분산된 Snort 경보를 한곳에서 확인",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제와 나의 역할", text: "검사 서버의 경보를 개별 터미널에서만 확인하면 공격 흐름을 파악하기 어려웠습니다. Graylog 서버를 구축하고 Snort 경보를 중앙 로그로 모으는 경로를 연결했습니다." },
        { title: "접근과 구현", text: "Snort의 alert_syslog 출력을 설정하고 rsyslog에서 snort 프로그램의 로그를 Graylog 입력으로 전달했습니다. 입력 프로토콜에 따라 UDP(@)·TCP(@@) 전달 설정을 구분했습니다." },
        { title: "검증 과정과 결과", text: "snort -T로 설정 문법을 검사하고 Snort·rsyslog를 재시작했습니다. ipsserver에서 전달된 SID·시각·주소를 검색하고 시간대별 이벤트 분포를 확인했습니다." },
        { title: "핵심 교훈 · 경보와 실제 동작을 연결", text: "매크로 SID 1000103과 Headless Browser SID 1000110의 수집을 확인했습니다. 실제 차단 효과는 같은 요청의 응답·패킷·예약 DB 기록까지 연결해 검증할 필요가 있습니다." },
      ],
      figures: [
        { image: image("log-flow.svg"), title: "내가 구성한 경보 전달 흐름", text: "노션 설정 기록을 바탕으로 정리한 개념도" },
        { image: image("ips-macro-graylog.png"), title: "매크로 봇 IPS 경보", text: "보고서 23쪽 · SID 1000103 중앙 수집" },
        { image: image("ips-headless-graylog.png"), title: "Headless Browser 경보", text: "보고서 24쪽 · SID 1000110 중앙 수집" },
      ],
      sources: [{ title: "노션 Graylog 연동 설정", url: graylog }, { title: "로그 연동 정리", url: `${repository}#2-graylog-서버와-snort-경보-연동` }],
    },
    {
      layout: "case-study", dense: true,
      title: "결과와 회고 · 관제 기록을 재현 가능한 검증으로",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "팀 시연 결과 · 매크로 예매 7건", text: "대응 전 매크로 요청 7건의 HTTP 200 응답과 DB 예약 7건이 보고서에 남았습니다. 이를 공격 재현의 기준으로 삼고, 제 담당 규칙의 경보가 Graylog까지 전달되는 것을 확인했습니다." },
        { title: "팀 부하 관찰 · Load Average 0.00 → 1.11", text: "SYN Flood 전후 PMM 화면에서 부하 변화가 관찰됐습니다. 웹·DB·PMM은 팀의 구성이고, 저는 침입 탐지·차단 규칙과 로그 연동을 담당했습니다." },
        { title: "회고 · 규칙과 서비스 변경을 함께 관리", text: "초안과 최종 캡처의 URL·임계값이 달랐습니다. 다음에는 규칙 파일, 서비스 경로, SID와 테스트 요청을 같은 버전으로 묶어 변경 전후 결과를 재현하겠습니다." },
        { title: "다음 개선 · 정상 부하와 비교", text: "예매 시작 시 정상 이용자의 반복 요청도 늘어납니다. 정상·공격 트래픽을 나눠 오탐률과 차단 후 예약 성공 여부를 반복 측정하고, 관제 이벤트와 실제 차단의 상관관계를 보완하겠습니다." },
      ],
      figures: [
        { image: image("macro-requests.png"), title: "대응 전 매크로 요청", text: "보고서 15쪽 · 연속 7건 HTTP 200" },
        { image: image("macro-reservations.png"), title: "예약 테이블 확인", text: "같은 시연의 예약 레코드 7건" },
        { image: image("pmm-before.png"), title: "SYN Flood 전 부하", text: "보고서 14쪽 · Load Average 0.00" },
        { image: image("pmm-after.png"), title: "SYN Flood 후 부하", text: "Load Average 1.11 · 시연 시점 관찰값" },
      ],
      sources: [{ title: "공격 시나리오와 결과", url: `${repository}#공격-시나리오와-확인-결과` }, { title: "노션 테스트 자료", url: "https://app.notion.com/p/oreumi/IPS-IDS-384ebaa8982b80669d12ff48819eb77e" }],
    },
    { layout: "videos", title: "CleanTicket · 티켓팅 웹 서버 시연" },
  ],
};
