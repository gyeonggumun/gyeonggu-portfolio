import { codeExcerpts } from "./codeExcerpts.js";

const image = (name) => `/images/websec-lab/${name}`;
const repository = "https://github.com/gyeonggumun/ThreeLine-Wargame";
const doc = (name) => `${repository}/blob/main/docs/${name}`;

export const websecLab = {
  id: "team-07",
  category: "team",
  featured: false,
  number: "07",
  title: "WebSec Lab · 웹 보안 워게임",
  description: "웹 취약점을 학습하는 통합 워게임. 1·2번 SQL Injection·명령 주입 문제를 제작하고, 서비스 계정·방화벽·파일 권한과 문제 간 접근 경계 등 전반적인 보안 작업을 담당했습니다.",
  image: image("cover.png"),
  period: "5인 팀 워게임 · 문제 제작·통합 환경 보안",
  role: "팀장 / 1·2번 문제 제작 / 전반적인 보안 설정",
  technologies: ["Flask", "MariaDB", "Apache", "UFW", "systemd", "Linux"],
  repository,
  website: null,
  slides: [
    {
      layout: "case-study", dense: true,
      title: "WebSec Lab · 취약점 학습과 운영 경계를 함께 설계",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "문제 정의 · 프로젝트 목표", text: "요청이 SQL·셸에서 해석되는 과정과 결과를 직접 관찰하는 워게임을 만들었습니다. 여러 문제를 한 VM에 통합하면서, 의도한 취약점이 다른 문제나 관리 영역으로 확산되는 위험도 함께 검토했습니다." },
        { title: "나의 역할 · 1·2번 문제와 보안 작업", text: "5인 팀의 팀장으로 1번 JSON Blind SQL Injection과 2번 웹훅 기반 명령 주입 문제를 담당했습니다. SSH·방화벽·sudo·파일 권한·서비스 계정과 문제 간 접근 통제도 구성했습니다." },
        { title: "접근과 의사결정", text: "Apache를 외부 웹 진입점으로 두고 Flask는 localhost에서 수신하도록 구성했습니다. 전용 서비스 계정과 systemd 제한을 적용해 문제 풀이 기능과 운영 권한의 경계를 나눴습니다." },
      ],
      metrics: [
        { value: "2개", label: "직접 제작한 문제", note: "JSON SQLi · 웹훅 명령 주입", url: "https://github.com/gyeonggumun/ThreeLine-Wargame/blob/239e4846ec1237ee441e5a9244c0c9e4bd359214/reference/web/app.sanitized.py#L138-L175" },
        { value: "3초", label: "재시작 대기 설정", note: "RestartSec · 복구 실측 아님", url: "https://github.com/gyeonggumun/ThreeLine-Wargame/blob/239e4846ec1237ee441e5a9244c0c9e4bd359214/reference/systemd/wargame.service#L20-L24" },
        { value: "2개", label: "systemd 제한", note: "NoNewPrivileges · PrivateTmp", url: "https://github.com/gyeonggumun/ThreeLine-Wargame/blob/239e4846ec1237ee441e5a9244c0c9e4bd359214/reference/systemd/wargame.service#L23-L24" },
      ],
      figures: [
        {
          "image": "/images/websec-lab/architecture.png",
          "title": "통합 실습 환경의 구조",
          "text": "저장소 도식 · Apache·Flask·DB·진행도 경로"
        }
      ],
      sources: [{ title: "프로젝트 저장소", url: repository }, { title: "전체 구조와 문제 구성", url: doc("ARCHITECTURE.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "문제 1 · JSON 로그인과 Blind SQL Injection",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "문제 설계와 나의 구현", text: "JSON 로그인 API에서 username·password를 SQL 문자열에 결합하도록 구성했습니다. 조회한 행은 직접 보여주지 않고 success·fail·error를 구분해 조건에 따른 결과를 관찰하도록 만들었습니다." },
        { title: "학습 흐름 · 요청에서 조건 추론까지", text: "로그인 요청 구조를 확인하고 입력에 따른 응답 변화를 비교한 뒤, 참·거짓 결과로 데이터를 추론하도록 설계했습니다. 단순 로그인 우회에서 끝나지 않고 데이터가 직접 보이지 않는 상황을 다루게 했습니다." },
        { title: "코드 근거와 결과 · 응답 3종", text: "문자열 결합 SQL의 실행 결과를 success·fail·error로 구분한 코드와 기존 풀이 기록을 대조했습니다. 입력 조건에 따른 응답 변화를 통해 Blind SQLi를 학습하도록 구성했습니다." },
        { title: "보안 관점과 배운 점", text: "취약점의 핵심은 입력을 SQL 코드와 분리하지 않은 데 있습니다. 실제 서비스에서는 매개변수화 쿼리와 비밀번호 해시 검증을 적용하고, 오류 응답과 계정 권한도 함께 검토해야 합니다." },
      ],
      figures: [
        {
          "image": "/images/websec-lab/ch1-login.jpg",
          "title": "조건 변화와 로그인 성공",
          "text": "조회 데이터는 직접 출력되지 않음"
        },
        codeExcerpts.websecSql
      ],
      sources: [{ title: "문제 1 기술 설명", url: doc("CHALLENGE-01.md") }, { title: "담당 앱 참조 코드", url: `${repository}/blob/main/reference/web/app.sanitized.py` }],
    },
    {
      layout: "case-study", dense: true,
      title: "문제 2 · 웹훅 요청과 서버 측 명령 실행 관측",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "문제 설계와 나의 구현", text: "웹훅 URL을 curl 명령 문자열에 결합하고 Bash의 shell=True 실행으로 전달하는 문제를 제작했습니다. 일반 화면에서 명령 출력을 직접 보여주지 않아, 실습망의 수신 기록으로 동작을 관찰하도록 했습니다." },
        { title: "접근 · 코드와 외부 요청을 연결", text: "워크스루는 웹훅 요청을 캡처하고 리스너에 도달한 HTTP 요청을 확인합니다. curl User-Agent만으로 명령 주입을 확정하지 않고, 입력 결합과 셸 실행 코드를 함께 확인했습니다." },
        { title: "확인 결과와 운영 경계", text: "워크스루에 수신 기록과 목표 달성 결과가 남아 있습니다. 전용 계정·systemd 제한을 적용했지만 문제 1·2는 계정을 공유해 파일 접근 경계에 제약이 남았습니다." },
        { title: "시간 제한과 보안 경계", text: "curl 연결 제한 3초·최대 10초, subprocess 제한 12초를 설정했습니다. 이는 실행 대기 제한이며 명령 주입을 차단하는 설정은 아닙니다. 실제 서비스는 셸 없는 HTTP 클라이언트와 목적지 제한이 필요합니다." },
      ],
      figures: [
        {
          "image": "/images/websec-lab/ch2-listener.jpg",
          "title": "서버 요청의 수신 기록",
          "text": "서버 요청 관측, 플래그 값 없음"
        },
        codeExcerpts.websecShell
      ],
      sources: [{ title: "문제 2 기술 설명", url: doc("CHALLENGE-02.md") }, { title: "실행 서비스 설정", url: `${repository}/blob/main/reference/systemd/wargame.service` }],
    },
    {
      layout: "case-study", dense: true,
      title: "보안 설정과 회고 · 의도한 취약점 밖의 접근 줄이기",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "나의 보안 작업", text: "수신 진입점과 서비스 계정, sudo·파일 권한을 정리하고 문제 간 접근 범위를 조정했습니다. UFW 기본 수신·전달 차단, localhost 바인딩, 서비스 계정 로그인 제한과 systemd 실행 제한을 구성했습니다." },
        { title: "정량 설정 · 재시작 3초와 제한 2개", text: "실패 시 3초 대기 후 재시작하고, NoNewPrivileges·PrivateTmp의 2개 systemd 제한을 적용했습니다. 설정값이며 복구 완료 시간이나 공격 차단 성능의 실측값은 아닙니다." },
        { title: "결과와 남은 과제", text: "문제 1·2의 기존 풀이 기록과 참조 설정을 대조했습니다. 제출 상태에는 SSH 출발지 제한 부재, 목표 파일의 0777 권한, 문제 1·2 계정 공유가 남아 있어 최소 권한과 문제별 경계를 보완해야 했습니다." },
        { title: "다시 한다면 · 경계 실패도 검증", text: "문제별 계정·DB 자격 증명 또는 컨테이너 경계를 검토하겠습니다. 담당 문제 풀이 성공과 함께 타 문제 파일·완료 기록 접근 실패를 시험하고, 관리망·인증 정책도 반복 검증하겠습니다." },
      ],
      figures: [
        codeExcerpts.websecService
      ],
      sources: [{ title: "보안 설계와 개선 과제", url: doc("SECURITY-DESIGN.md") }, { title: "원본 분석·검증 범위", url: doc("VERIFICATION.md") }],
    },
  ],
};
