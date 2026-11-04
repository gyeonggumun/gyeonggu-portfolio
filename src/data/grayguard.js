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
      ],
      metrics: [
        { value: "12자", label: "DB 비밀번호 최소", note: "OS 계정 정책과 별개", url: "https://github.com/gyeonggumun/GrayGuard/blob/dec5ed06728dc40ad3938f245e3baa54d97f758e/README.md#L63-L67" },
        { value: "4종", label: "백업 계정 권한", note: "용도별 최소 권한", url: "https://github.com/gyeonggumun/GrayGuard/blob/dec5ed06728dc40ad3938f245e3baa54d97f758e/README.md#L66-L69" },
        { value: "2종", label: "감사 이벤트", note: "CONNECT · QUERY_DCL", url: "https://github.com/gyeonggumun/GrayGuard/blob/dec5ed06728dc40ad3938f245e3baa54d97f758e/README.md#L64-L65" },
      ],
      figures: [
        {
          "image": "/images/grayguard/p1-1.png",
          "title": "기업 보안 인프라 구성도",
          "text": "팀 전체 설계 · DMZ·내부 서버망·부서망 분리"
        }
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
        { title: "구현 결과 · 정책을 역할별로 분리", text: "DB는 최소 12자 비밀번호, CONNECT·QUERY_DCL의 2종 감사 이벤트, 복제·서비스·백업별 계정으로 구성했습니다. 복제 지연·승격 시간은 별도 측정 기록이 없습니다." },
      ],
      figures: [
        {
          "title": "DB 보호 정책과 적용 범위",
          "text": "GitHub 구현 기록 기준 · 실행 SQL 원문은 공개되어 있지 않음",
          "facts": {
            "file": "README.md",
            "url": "https://github.com/gyeonggumun/GrayGuard/blob/dec5ed06728dc40ad3938f245e3baa54d97f758e/README.md#L61-L69",
            "rows": [
              [
                "복제",
                "MariaDB Master–Slave"
              ],
              [
                "DB 비밀번호",
                "최소 12자 · 문자 조합 정책"
              ],
              [
                "감사 이벤트",
                "CONNECT / QUERY_DCL"
              ],
              [
                "역할",
                "서비스 / 관리 / 복제 / 백업 계정 분리"
              ]
            ]
          }
        }
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
        { title: "결과 · 백업 완료와 인증서 OK", text: "백업 파일과 completed OK!, 서버 인증서의 검증 OK를 확인했습니다. 실제 복원 소요 시간·복구 지점·DB 연결 암호화는 다른 시험이 필요하며 RTO 단축 성과로 표현하지 않았습니다." },
      ],
      figures: [
        {
          "image": "/images/grayguard/backup-completed.png",
          "title": "백업 완료와 결과 디렉터리",
          "text": "completed OK! · 날짜별 폴더 생성 확인"
        },
        {
          "title": "백업·인증서의 확인 근거",
          "text": "설정 목적과 관측 결과를 구분",
          "facts": {
            "file": "README.md",
            "url": "https://github.com/gyeonggumun/GrayGuard/blob/dec5ed06728dc40ad3938f245e3baa54d97f758e/README.md#L66-L69",
            "rows": [
              [
                "백업 권한 4종",
                "RELOAD / PROCESS / LOCK TABLES / BINLOG MONITOR"
              ],
              [
                "물리 백업",
                "mariabackup · 날짜별 결과 디렉터리"
              ],
              [
                "인증서",
                "자체 CA · OpenSSL 검증 OK"
              ],
              [
                "검증 경계",
                "복원 시간·실제 DB TLS 세션은 별도 검증"
              ]
            ]
          }
        }
      ],
      sources: [{ title: "노션 백업·인증서 기록", url: database }, { title: "DB 보안 구현 정리", url: `${repository}#1-mariadb-복제와-데이터-보호` }],
    },
    {
      layout: "case-study", dense: true,
      title: "통합 결과와 회고 · 설정에서 동작 확인까지",
      sourceLabel: "자료·작업 기록",
      sections: [
        { title: "나의 기여와 통합 확인", text: "DB 계층을 구성하고 Web–DB 연결, 비인가 출발지의 DB 직접 접근 제한을 팀과 확인했습니다. DB 로그는 팀의 중앙 수집 서버에서 수신했습니다." },
        { title: "회고 · 보안 정책과 서비스 연결", text: "접근 제한과 정상 서비스 통신을 함께 점검해야 했습니다. 연결·거부 기록과 백업 완료 로그를 남겨 설정의 동작을 설명했습니다." },
        { title: "회고 · 복원 가능한 백업으로 확장", text: "구성·연결·로그·백업 완료를 한 흐름으로 기록했습니다. 다음에는 동일 데이터셋의 복원 시간, 데이터 정합성, 장애 승격 시간과 복제 지연을 측정하겠습니다." },
      ],
      figures: [
        {
          "image": "/images/grayguard/p1-3.jpg",
          "title": "DB를 포함한 중앙 로그 수신",
          "text": "팀 통합 검증 · Web·DB·SFTP·인증 로그"
        }
      ],
      sources: [{ title: "팀 통합 결과와 회고", url: `${repository}#팀-통합-결과와-운영-증거` }, { title: "노션 팀 기록", url: notion }],
    },
    { layout: "videos", title: "GrayGuard · Infra SEC 서버 구현 시연" },
  ],
};
