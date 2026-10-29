const image = (name) => `/images/safestay/${name}`;
const repository = "https://github.com/gyeonggumun/SafeStay";
const notion = "https://app.notion.com/p/oreumi/3-3-389ebaa8982b8030af22da166cde08a0";

export const safestay = {
  id: "team-02",
  category: "team",
  featured: true,
  number: "02",
  title: "SafeStay",
  description: "호텔 예약 서비스를 가정한 보안 인프라 실습. 팀장으로 DB 복제·모니터링·장애 전환과 Linux 보안 점검 자동화를 담당했습니다.",
  image: image("cover.png"),
  period: "2026.07.23 ~ 2026.08.05",
  role: "5인 팀 · 팀장 / DB·보안 점검 담당",
  technologies: ["MariaDB", "PMM", "MaxScale", "Shell Script", "Ubuntu"],
  repository,
  website: null,
  videos: [
    { id: "s6fb6bkrD3I", title: "SafeStay 시연영상", description: "SafeStay 프로젝트 시연", url: "https://youtu.be/s6fb6bkrD3I", poster: image("cover.png") },
  ],
  slides: [
    {
      layout: "case-study", dense: true,
      title: "SafeStay · 호텔 예약 서비스의 보안 인프라",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제 정의 · 프로젝트 목표", text: "호텔 예약 웹서비스의 고객·예약 데이터를 보호하고, 공격 요청과 DB 이상 상태를 확인할 수 있는 가상 실습 환경을 구축했습니다." },
        { title: "나의 역할 · 5인 팀 / 팀장", text: "일정과 역할을 조율하고 DB Master·Slave·PMM 구축, MaxScale 장애 전환, 보안 점검 Shell Script와 EICAR 분석을 담당했습니다." },
        { title: "접근과 의사결정", text: "웹·DB·보안·관리자 구간을 VLAN으로 나누고 필요한 경로만 허용했습니다. 저는 DB 계층의 접근 요구사항을 네트워크 담당자와 맞췄습니다." },
        { title: "핵심 관점", text: "팀의 pfSense·IPS·WAF·Graylog와 제가 담당한 DB·PMM을 연결했습니다. 보안 로그 분석과 DB 지표 관찰의 역할을 구분했습니다." },
      ],
      figures: [
        { image: image("cover.png"), title: "SafeStay · 프로젝트 표지", text: "호텔 서비스와 DB 보안 인프라를 표현한 대표 이미지" },
        { image: image("p2-2.jpg"), title: "보안·모니터링 구성", text: "팀 전체 설계 · 계층별 검사와 상태 관찰" },
        { image: image("p2-3.jpg"), title: "네트워크 토폴로지", text: "팀 전체 구성 · 웹·DB·관리 구간 분리" },
      ],
      sources: [{ title: "GitHub 프로젝트 문서", url: repository }, { title: "노션 역할 분담", url: notion }],
    },
    {
      layout: "case-study", dense: true,
      title: "DB 계층 · 복제·관찰·장애 전환을 나누어 설계",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제와 나의 구현", text: "고객·예약 데이터를 저장할 MariaDB Master–Slave를 구성했습니다. 바이너리 로그·서버 ID를 설정하고 복제 상태를 확인했으며, PMM에 양쪽 DB를 연결했습니다." },
        { title: "의사결정 · 도구별 역할 분리", text: "데이터 복제는 MariaDB, DB 지표 관찰은 PMM, 접속·역할 전환은 MaxScale로 분리했습니다. GTID와 mariadbmon의 자동 장애 조치·재합류 설정을 실습했습니다." },
        { title: "확인한 결과", text: "Master의 MariaDB를 중지한 뒤 maxctrl list servers로 Slave 승격을 확인했습니다. 원래 Master를 재기동한 뒤 Slave로 복귀하는 동작도 노션에 기록했습니다." },
        { title: "회고 · 다음 검증", text: "역할 전환 확인과 운영 수준의 고가용성 보장은 구분해야 합니다. 전환 시간·데이터 손실·반복 시험을 측정하고, 별도의 백업·복원 검증을 보완하겠습니다." },
      ],
      figures: [
        { image: image("db-flow.svg"), title: "내가 담당한 DB 흐름", text: "구축 기록을 바탕으로 정리한 개념도 · 측정 화면 아님" },
        { image: image("p2-2.jpg"), title: "DB와 관제의 연결 위치", text: "PMM은 DB 지표, Graylog는 보안 로그를 담당" },
        { image: image("p2-1.jpg"), title: "네트워크·접근 통제 정책", text: "팀 설계 · Web→DB 등 필요한 접근만 허용" },
      ],
      sources: [{ title: "DB 자동 복구 테스트", url: "https://app.notion.com/p/oreumi/master-slave-3a6ebaa8982b80ec802de4a20c5836e2" }, { title: "DB 구현 정리", url: `${repository}#내가-맡은-구현` }],
    },
    {
      layout: "case-study", dense: true,
      title: "보안 점검 자동화와 EICAR 파일 분석",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "문제와 나의 역할", text: "서버 설정을 반복 점검할 수 있도록 계정·파일·서비스·패치·로그의 5개 범주로 Shell Script를 작성하고, EICAR 테스트 파일을 분석했습니다." },
        { title: "접근과 구현", text: "KISA U-01~U-67을 진단 범위로 정리하고, 주요 파일·로그 권한 등 일부 항목의 조치를 자동화했습니다. 항목별 정상·취약 판정과 조치 결과를 확인했습니다." },
        { title: "분석 결과 · 65/67 엔진 탐지", text: "파일 형식·시그니처·SHA-256을 확인하고 VirusTotal 기록과 대조했습니다. 65/67은 EICAR 테스트 파일의 탐지 결과이며 서버 업로드 차단율은 아닙니다." },
        { title: "배운 점", text: "파일 확장자만으로 안전성을 판단할 수 없었습니다. 팀의 MIME·Magic Number·해시·AV 검사 흐름과 분석 근거를 구분하고, 자동 조치의 예외 처리도 보완할 필요가 있었습니다." },
      ],
      figures: [
        { image: image("p2-5.jpg"), title: "보안 점검 스크립트 실행", text: "서비스 점검과 일부 권한 조치 · 전 항목 통과 증거 아님" },
        { image: image("p2-6.png"), title: "EICAR 분석 결과", text: "VirusTotal 65/67 · 백신 확인용 테스트 파일" },
        { image: image("upload-flow.png"), title: "파일 업로드 검사 흐름", text: "팀 설계 · 형식·시그니처·해시·AV 검사" },
      ],
      sources: [{ title: "구현·분석 정리", url: `${repository}#내가-맡은-구현` }, { title: "노션 작업 기록", url: notion }],
    },
    {
      layout: "case-study", dense: true,
      title: "공격 검증 결과와 회고 · 계층별 근거를 확인",
      includeVideos: true,
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "나의 기여 · 팀 검증과 연결", text: "WAF 규칙 문서를 공동 정리하고 IPS 테스트 시나리오를 작성했습니다. 웹·방화벽·IPS 구축과 공격 시연은 각 담당 팀원의 작업입니다." },
        { title: "팀의 확인 결과", text: "OS Command Injection 초기 요청에서 서버 실행 계정을 확인한 뒤, 후속 요청의 403 응답을 확인했습니다. Slowloris 시나리오는 Graylog에 탐지 이벤트가 수집됐습니다." },
        { title: "핵심 교훈", text: "403 응답, IPS 탐지, 중앙 로그 수집은 서로 다른 근거입니다. 한 화면을 전체 보안 효과로 확대하지 않고 요청·응답·기록을 함께 확인해야 합니다." },
        { title: "다시 한다면", text: "장애 전환 반복 시험과 백업·복원, 자동 조치 전후 기록을 보완하겠습니다. 관리 시스템 MFA·권한 분리와 로그 보존·용량 정책도 후속 과제로 남았습니다." },
      ],
      figures: [
        { image: image("p2-4.png"), title: "Slowloris 탐지 이벤트", text: "팀 검증 · Graylog 수집 근거, 가용성 측정과 구분" },
        { image: image("waf-before.png"), title: "초기 명령 실행 확인", text: "팀 검증 · 서버 실행 계정 반환" },
        { image: image("waf-after.png"), title: "후속 요청의 403 응답", text: "팀 검증 · 보고서에 남은 차단 확인 화면" },
      ],
      sources: [{ title: "공격 검증·회고", url: `${repository}#팀-공격-시나리오와-확인-결과` }],
    },
  ],
};
