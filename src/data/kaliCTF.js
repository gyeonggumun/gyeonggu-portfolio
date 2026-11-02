const image = (name) => `/images/kalictf/${name}`;
const repository = "https://github.com/gyeonggumun/KaliCTF";
const code = (path) => `${repository}/blob/main/${path}`;

export const kaliCTF = {
  id: "personal-04",
  category: "personal",
  featured: false,
  number: "04",
  title: "KaliCTF · 단계형 보안 실습 VM",
  description: "SSTI부터 SSH·SUID·PATH 기반 권한 상승까지 연결한 CTF 환경을 개인 제작했습니다. Flask 입력 처리와 Linux 권한 경계를 단계별로 설계하고, 제작한 환경에서 5인 공동 보안 실습을 진행했습니다.",
  image: image("cover.png"),
  period: "개인 제작 CTF VM · 5인 공동 실습",
  role: "환경·시나리오 전체 개인 제작 / 공동 실습 참여",
  technologies: ["Flask", "Jinja2", "Linux", "iptables", "systemd", "VirtualBox"],
  repository,
  website: null,
  slides: [
    {
      layout: "case-study", dense: true,
      title: "KaliCTF · 웹 취약점에서 시스템 권한까지 연결한 VM",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "문제 정의 · 제작 목적", text: "개별 취약점의 성공 여부에서 끝나지 않고, 입력 처리·파일 읽기·계정 접근·관리자 권한의 연결을 학습하도록 설계했습니다. 앞 단계에서 얻은 단서가 다음 권한 경계로 이어지는 흐름을 만들었습니다." },
        { title: "나의 역할 · 개인 제작과 공동 실습", text: "기업 포털, 힌트 경로, 취약한 입력 처리, 계정·SUID 단계와 서비스 구성을 포함해 CTF 환경과 시나리오를 개인 제작했습니다. 이후 이 환경을 바탕으로 5인이 공동 보안 실습을 진행했습니다." },
        { title: "접근과 의사결정", text: "Flask 포털의 Services·Support·Manual 경로로 탐색을 유도하고, SSTI에서 설정 파일·SSH 사용자·SUID 프로그램으로 이어지도록 구성했습니다. 웹과 Linux 권한 모델을 한 흐름으로 다루는 데 초점을 뒀습니다." },
        { title: "실습 환경과 결과", text: "Ubuntu 22.04.5·VirtualBox·메모리 2GB 환경에 웹 서비스와 위장 리스너를 구성했습니다. 기존 워크스루에 User·Root 목표 달성 기록이 있으며, 제작 기여와 공동 실습 결과를 구분했습니다." },
      ],
      figures: [
        { image: image("scenario-flow.svg"), title: "단계형 학습 시나리오", text: "저장소와 워크스루를 정리한 개념도" },
        { image: image("network-flow.svg"), title: "HTTP 진입점과 서비스 구성", text: "공개 웹 코드·systemd·저장 규칙 기반 개념도" },
      ],
      sources: [{ title: "프로젝트 저장소", url: repository }, { title: "구현·분석 근거", url: code("docs/ANALYSIS.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "SSTI · 입력이 템플릿 코드가 되는 지점",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "구현 · 입력과 렌더링 경계", text: "name 파라미터를 f-string으로 HTML 문자열에 먼저 삽입하고, 완성된 문자열을 render_template_string에 전달하도록 구성했습니다. 입력이 출력 데이터가 아닌 서버 측 템플릿의 일부가 되는 문제입니다." },
        { title: "학습 흐름과 확인 결과", text: "내부 매뉴얼에서 입력 지점을 찾고, 템플릿 산술식에 대한 49 출력을 관찰하도록 설계했습니다. 워크스루의 서버 반응을 실제 wsgi.py의 문자열 결합·렌더링 순서와 대조했습니다." },
        { title: "영향 · 파일 읽기와 계정 경계", text: "워크스루에는 SSTI로 내부 설정을 읽고 SSH 사용자 단계로 넘어간 기록이 있습니다. 웹 계정이 읽을 수 있는 파일에 로그인 정보가 있으면, 하나의 웹 결함이 OS 계정 접근으로 확장될 수 있습니다." },
        { title: "개선 방향과 배운 점", text: "입력을 템플릿 소스에 합치지 않고 고정 템플릿의 데이터로 전달해야 합니다. 웹 프로세스가 읽는 비밀정보도 분리해 취약점이 OS 계정 접근으로 확장되지 않도록 해야 합니다." },
      ],
      figures: [
        { image: image("ssti-result.jpg"), title: "서버 측 산술식 평가 결과", text: "문자열 대신 49가 출력된 화면" },
        { image: image("template-boundary.svg"), title: "입력·템플릿 소스의 결합 순서", text: "공개 wsgi.py의 처리 구조를 정리한 개념도" },
      ],
      sources: [{ title: "Flask 원본 참조 코드", url: code("reference/web/wsgi.py") }, { title: "분석 근거와 해석", url: code("docs/ANALYSIS.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "Linux 권한 · SUID와 PATH 의존 명령 실행",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "구현 · 사용자에서 관리자 단계로", text: "SSH 사용자 접근 다음에 root 소유 SUID netcheck를 조사하도록 구성했습니다. 파일 메타데이터는 UID·GID 0, 모드 4755이며, 웹 접근과 특권 실행의 서로 다른 경계를 학습 요소로 사용했습니다." },
        { title: "기술적 원인 · 명령 탐색 환경 신뢰", text: "바이너리 분석 기록에는 system·setuid·setgid 심볼과 절대 경로 없는 curl 명령 문자열이 있습니다. 특권 프로그램이 사용자 제어 PATH에 의존하면 의도하지 않은 실행 파일로 연결될 수 있습니다." },
        { title: "워크스루 결과와 근거 범위", text: "워크스루의 SUID 조사·PATH 조작·Root 전환 기록을 바이너리 메타데이터와 대조했습니다. 원본 C 소스가 없어 전체 제어 흐름까지 확정하지는 않았습니다." },
        { title: "방어 관점과 다음 검증", text: "불필요한 SUID를 제거하고, 외부 명령은 신뢰할 수 있는 절대 경로와 제한된 환경으로 실행해야 합니다. 다음에는 수정 전후를 비교해 사용자의 PATH 변경이 관리자 명령 실행에 영향을 주지 않는지 검증하겠습니다." },
      ],
      figures: [
        { image: image("suid-discovery.jpg"), title: "SUID 실행 파일 조사", text: "netcheck 탐색, 플래그 값 없음" },
        { image: image("path-observation.jpg"), title: "PATH 의존 동작의 기존 실습 기록", text: "재실행 결과와 구분" },
      ],
      sources: [{ title: "netcheck 메타데이터·문자열", url: code("docs/evidence.json") }, { title: "권한 상승 분석 범위", url: code("docs/ANALYSIS.md") }],
    },
    {
      layout: "case-study", dense: true,
      title: "환경 구성과 회고 · 코드·설정·실습 결과를 연결",
      sourceLabel: "자료·구현 근거",
      sections: [
        { title: "서비스 구성 · systemd와 네트워크", text: "웹을 www-data 계정으로 실행하고 systemd 자동 재시작을 설정했습니다. 저장 규칙은 HTTP 80을 5000으로 전달하고, 5000 직접 진입을 차단하도록 구성했습니다." },
        { title: "정찰 요소 · 포트 번호와 실제 서비스", text: "21·3306·8080에는 ncat 위장 리스너를 구성했습니다. FTP·DB·별도 HTTP 서비스를 실제 구현한 것은 아니며, 열린 포트만 보고 서비스 종류를 단정하지 않도록 하는 학습 요소입니다." },
        { title: "결과 · 개인 제작과 기술 문서화", text: "웹 입력부터 User·Root 목표까지 이어지는 환경을 제작하고 공동 실습을 진행했습니다. 핵심 웹 코드·서비스·네트워크 설정과 분석 근거를 저장소에 정리했습니다." },
        { title: "회고 · 재현과 수정 비교", text: "단서를 배치하는 것과 실제 권한 경계가 성립하는지는 별도로 확인해야 했습니다. 다음에는 VM 자동 구축·비밀정보 초기화·전체 흐름 반복 시험과 함께, 취약한 구현과 수정한 구현을 비교하는 실습을 보완하겠습니다." },
      ],
      figures: [
        { image: image("service-config.svg"), title: "웹 실행 계정과 비밀정보 경계", text: "서비스 설정·분석 내용을 정리한 개념도" },
        { image: image("fake-ports.svg"), title: "위장 리스너의 학습 목적", text: "ctf-fake-ports.service 참조 · 실제 DB 서비스 아님" },
      ],
      sources: [{ title: "웹 서비스 설정", url: code("reference/systemd/ctf-web.service") }, { title: "저장된 네트워크 규칙", url: code("reference/network/rules.v4") }],
    },
  ],
};
