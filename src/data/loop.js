import { codeExcerpts } from "./codeExcerpts.js";

const repository = "https://github.com/telecom-carrier-Loop/telecom-security-project";
const revision = "015d60fcef1ceeb7319c24ff9b736c8775e622e1";
const source = (path) => `${repository}/blob/${revision}/${path}`;
const pull = (number) => `${repository}/pull/${number}`;
const issue = (number) => `${repository}/issues/${number}`;
const image = (name) => `/images/loop/${name}`;
const webTest = source("docs/operations/2026-10-30-web-ha-failover.md");
const backupTest = source("docs/operations/2026-11-03-final-backup-validation.md");
const evidence = "https://github.com/gyeonggumun/gyeonggu-portfolio/blob/main/docs/loop-sources.md";

export const loop = {
  id: "team-03",
  category: "team",
  featured: true,
  number: "03",
  title: "LOOP · 통신사 서비스 연속성",
  description: "가상 통신사 보안 관제 프로젝트. 4인 팀의 팀장으로 Docker·k3s 배포, HAProxy 웹 이중화, MySQL 복제·백업·복원 검증을 담당했습니다.",
  image: image("cover.svg"),
  period: "2026.10 ~ 2026.11",
  role: "4인 팀 · 팀장 / 인프라·이중화",
  technologies: ["Docker", "k3s", "HAProxy", "Nginx", "MySQL 8.4", "PowerShell"],
  repository,
  website: null,
  research: { title: "커밋·이슈·PR 분석", url: evidence },
  videos: [
    {
      id: "loop-distribution",
      kind: "file",
      title: "HAProxy 연결 분산",
      description: "발표자료 시연 발췌 · 두 노드 UP과 세션 집계 변화",
      url: "/videos/loop/distribution.mp4",
      poster: image("distribution.jpg"),
    },
    {
      id: "loop-failover",
      kind: "file",
      title: "웹 노드 중단 전후",
      description: "발표자료 시연 발췌 · PC1 DOWN, PC2 UP 전환 비교",
      url: "/videos/loop/failover.mp4",
      poster: image("failover.jpg"),
    },
  ],
  slides: [
    {
      layout: "case-study",
      dense: true,
      title: "LOOP · 가상 통신사 운영 인프라 구축",
      sourceLabel: "프로젝트 근거",
      sections: [
        { title: "프로젝트 목표", text: "고객 웹과 관리자 포털을 운영하면서 웹 노드 장애, 보안 이벤트와 데이터 복구에 대응하는 통신사 실습 환경을 만들었습니다." },
        { title: "나의 역할 · 팀장과 인프라 담당", text: "웹·DB 개발, 네트워크 보안, 관제 자동화 담당자와 접속·배포 경계를 조율했습니다. Docker 이미지와 k3s 배포, HAProxy 연동, MySQL 복제와 백업·복원을 맡았습니다." },
        { title: "설계 선택", text: "두 Ubuntu VM에 Nginx Edge·Web·API를 배치하고 HAProxy에서 정상 웹 노드로 연결을 분산했습니다. 업무 DB는 단일 쓰기 Primary와 읽기 전용 Replica로 구성했습니다." },
      ],
      metrics: [
        { value: "2대", label: "웹 실행 노드", note: "각 VM에 Web·API·Edge 배치", url: webTest },
        { value: "224건", label: "HTTP 200", note: "10/30 PC1 VM 중단 시험", url: webTest },
        { value: "26개", label: "테이블 검사 통과", note: "11/03 격리 복원 기록", url: backupTest },
      ],
      figures: [
        { image: image("architecture.svg"), title: "공개 HTTPS, 웹 두 노드, MySQL 복제", text: "제출 PPT와 저장소 운영 기록을 바탕으로 정리한 구조도" },
      ],
      sources: [{ title: "팀 저장소와 역할", url: source("README.md") }, { title: "시연과 검증 기록", url: pull(64) }],
    },
    {
      layout: "case-study",
      dense: true,
      title: "웹 이중 배치와 장애 전환 검증",
      sections: [
        { title: "k3s 배포와 노드 내부 라우팅", text: "Web·API 이미지를 두 VM에 전달하고 각 Edge가 같은 노드의 Web·API로 요청을 보냅니다. HAProxy는 HTTPS 준비 상태를 확인하고 장애 노드를 새 연결의 대상에서 제외합니다." },
        { title: "배포 전에 실행 상태 대조", text: "릴리스 도구에 Web·API 실행본 2개의 준비 상태와 양쪽 API의 DB·토큰 설정 일치 여부를 확인하는 검사를 추가했습니다. 배포 기록에는 이미지와 런타임 설정을 대조한 결과를 남겼습니다." },
        { title: "10월 30일 시험 · 웹 112건과 API 112건", text: "PC2 DB가 살아 있는 상태에서 PC1 Ubuntu VM을 중단했습니다. HAProxy의 PC1 DOWN·PC2 UP과 관측 요청 224건의 HTTP 200을 확인했습니다. 영상은 11월 4일 시연 발췌입니다." },
      ],
      figures: [
        { image: image("failover.jpg"), title: "노드 중단 후 HAProxy 백엔드 상태", text: "11월 4일 영상 프레임 · PC1 DOWN / PC2 UP" },
        codeExcerpts.loopRelease,
      ],
      sources: [{ title: "10월 30일 장애 시험", url: webTest }, { title: "장애 전환 검증 PR", url: pull(51) }, { title: "재배포 도구 PR", url: pull(55) }],
    },
    {
      layout: "case-study",
      dense: true,
      title: "MySQL 복제·예약 백업·격리 복원",
      sections: [
        { title: "단일 쓰기와 복제", text: "PC2를 수동으로 Primary로 승격하고 PC1을 읽기 전용 Replica로 전환했습니다. GTID 자동 위치 지정과 TLS 서버 인증서 검증으로 복제 채널을 구성했습니다." },
        { title: "예약 백업과 실패 감시", text: "Primary의 백업을 1시간마다 실행하고 같은 작업의 중복 실행을 막았습니다. 감시 작업은 실패와 정상화를 Discord에 알리고 반복되는 같은 장애의 알림을 억제했습니다." },
        { title: "11월 3일 격리 복원", text: "선택한 백업을 별도 시험 MySQL 컨테이너에 복원했습니다. 26개 테이블의 CHECK TABLE 검사와 복원 상태를 확인하고, 원본 볼륨과 운영 복제는 유지했습니다." },
      ],
      figures: [
        { image: image("restore-check.png"), title: "격리 복원 검사 결과", text: "팀 저장소 검증 캡처 · 26개 테이블 CHECK TABLE OK" },
        codeExcerpts.loopBackup,
      ],
      sources: [{ title: "TLS·GTID 복제 PR", url: pull(8) }, { title: "Primary 전환·백업 PR", url: pull(47) }, { title: "복원·감시 검증", url: backupTest }],
    },
    {
      layout: "case-study",
      dense: true,
      title: "팀 리딩 · 장애 기록과 인프라 인계",
      sourceLabel: "협업 근거",
      sections: [
        { title: "문제를 이슈로 남기고 변경은 PR로 관리", text: "학원망 HTTPS 접속과 VM 네트워크 장애, DB 접근 보완, PC1 전체 장애 대응을 각각 이슈로 추적했습니다. 인프라 변경을 PR로 공유하고 웹·네트워크·관제 담당자와 적용 범위를 맞췄습니다." },
        { title: "기여 범위", text: "문경구 계정으로 작성한 PR 29개가 병합됐습니다. MySQL 전환·백업, 웹 장애 시험, 배포 도구와 발표 검증 자료를 포함합니다. 최종 실제 출발지 전달 보완은 네트워크 담당 PR로 구분했습니다." },
        { title: "후속 과제", text: "PC1 제어부와 HAProxy 접속 장비는 각각 단일 구성입니다. DB 승격은 수동이며, 물리 호스트 전체 장애와 장비 밖 백업은 별도 검증이 필요합니다." },
      ],
      figures: [
        {
          title: "저장소 검토 범위",
          text: "2026.11.10 조회 기준 · 중복 커밋과 PR·이슈를 구분",
          facts: {
            file: "커밋·이슈·PR 분석",
            url: evidence,
            rows: [
              ["공개 브랜치", "32개 · 도달 가능한 커밋 246개"],
              ["이슈", "4개 · HTTPS, VM 연결, DB 접근, 전체 장애"],
              ["팀 PR", "62개 · 60개 병합"],
              ["내 작성 PR", "29개 · 29개 병합"],
            ],
          },
        },
      ],
      sources: [{ title: "HTTPS 이슈", url: issue(33) }, { title: "VM 복구 이슈", url: issue(36) }, { title: "DB 접근 이슈", url: issue(40) }, { title: "전체 장애 대응 이슈", url: issue(44) }, { title: "출발지 보완 PR", url: pull(65) }],
    },
    { layout: "videos", title: "인프라 시연 · 연결 분산과 웹 노드 중단 전후" },
  ],
};
