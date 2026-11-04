// GitHub의 고정 커밋에서 원문 그대로 발췌합니다. 블록 사이 생략은 뷰어에서 표시합니다.
export const codeExcerpts = {
  "mongCart": {
    "title": "상세 조회를 병렬로 묶고 공유 상태 갱신",
    "text": "동시 조회 가드와 Promise.all · 완료 후 구독자 알림",
    "snippet": {
      "file": "CartStore.ts",
      "path": "components/Cart/CartStore.ts",
      "language": "TypeScript",
      "commit": "d1c91cbd95666da36c702ea20e200b064d2ec71a",
      "blob": "96f1789d0f036f73fcb9e0d91a080b69e16ba5ee",
      "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/d1c91cbd95666da36c702ea20e200b064d2ec71a/components/Cart/CartStore.ts#L35-L63",
      "blocks": [
        {
          "start": 35,
          "lines": [
            "  if (isFetching) return;",
            "  isFetching = true;",
            "  try {",
            "    const cartList = await getMyCart();"
          ]
        },
        {
          "start": 44,
          "lines": [
            "    const itemsWithDetails = await Promise.all(",
            "      cartList.map(async (item) => {",
            "        try {",
            "          const productDetail = await getProductById(item.product_id);",
            "          if (!productDetail) return null;"
          ]
        },
        {
          "start": 62,
          "lines": [
            "    globalCartItems = itemsWithDetails.filter((item): item is CartItem => item !== null);",
            "    notifyCartChange();"
          ]
        }
      ]
    }
  },
  "mongOrder": {
    "title": "배열·문자열·multipart 요청 규격 처리",
    "text": "같은 cart_id 키 반복 전송 · 4개 문자열 정리 · 헤더 자동 생성",
    "snippet": {
      "file": "orderApi.ts",
      "path": "utils/orderApi.ts",
      "language": "TypeScript",
      "commit": "d1c91cbd95666da36c702ea20e200b064d2ec71a",
      "blob": "dba0dad4eff3f774a35c1883aa7c72302b5f0750",
      "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/d1c91cbd95666da36c702ea20e200b064d2ec71a/utils/orderApi.ts#L24-L40",
      "blocks": [
        {
          "start": 24,
          "lines": [
            "  if (data.cart_id && data.cart_id.length > 0) {",
            "    data.cart_id.forEach((id) => {",
            "      formData.append('cart_id', String(id));",
            "    });",
            "  }"
          ]
        },
        {
          "start": 31,
          "lines": [
            "  formData.append('payer_name', (data.payer_name || '').trim());",
            "  formData.append('payer_phone', (data.payer_phone || '').trim());",
            "  formData.append('address', (data.address || '').trim());",
            "  formData.append('address_detail', (data.address_detail || '').trim());"
          ]
        },
        {
          "start": 38,
          "lines": [
            "  const response = await apiClient.post('/api/orders/prepare', formData, {",
            "    params: { userId }",
            "  });"
          ]
        }
      ]
    }
  },
  "mongReserve": {
    "title": "예약 불가 날짜와 잔여석 구분",
    "text": "예약 불가 날짜는 선택 거부 · 잔여석 0과 미조회 상태 구분",
    "snippet": {
      "file": "ReservationCalendar.tsx",
      "path": "components/ExperienceReservation/ReservationCalendar/ReservationCalendar.tsx",
      "language": "TSX",
      "commit": "d1c91cbd95666da36c702ea20e200b064d2ec71a",
      "blob": "7ff96804d715ffa109e98794c408171a8a388d27",
      "url": "https://github.com/Dreamlike-Forest/monghyang-frontend/blob/d1c91cbd95666da36c702ea20e200b064d2ec71a/components/ExperienceReservation/ReservationCalendar/ReservationCalendar.tsx#L98-L163",
      "blocks": [
        {
          "start": 98,
          "lines": [
            "  const isUnavailable = (date: Date): boolean => {",
            "    const dateStr = formatDateString(date);",
            "    return unavailableDates.includes(dateStr);",
            "  };",
            "",
            "  const handleDateClick = (date: Date) => {",
            "    if (isPastDate(date) || isUnavailable(date)) return;",
            "    onDateSelect(formatDateString(date));"
          ]
        },
        {
          "start": 160,
          "lines": [
            "              {availableTimeSlots.map((time) => {",
            "                const remaining = timeSlotCounts[time];",
            "                // [핵심] 잔여석이 0인 경우에만 마감 처리 (undefined는 정보가 없는 것이므로 예약 가능)",
            "                const isSoldOut = remaining !== undefined && remaining === 0;"
          ]
        }
      ]
    }
  },
  "moaRpc": {
    "title": "설문·질문을 하나의 트랜잭션으로 저장",
    "text": "소유자 조건으로 수정 · 하위 질문 저장 실패 시 함께 롤백",
    "snippet": {
      "file": "20261005121903_save_survey_atomically.sql",
      "path": "supabase/migrations/20261005121903_save_survey_atomically.sql",
      "language": "SQL",
      "commit": "2ac6cc90b60aabdf31fe5039e316a51b1df56506",
      "blob": "91be59b90da8bcc2d30d4c09c71394fee4364fe3",
      "url": "https://github.com/gyeonggumun/Survey_production/blob/2ac6cc90b60aabdf31fe5039e316a51b1df56506/supabase/migrations/20261005121903_save_survey_atomically.sql#L33-L47",
      "blocks": [
        {
          "start": 33,
          "lines": [
            "    update public.surveys",
            "    set title = coalesce(nullif(btrim(p_title), ''), '제목 없는 설문'),",
            "        description = coalesce(btrim(p_description), '')",
            "    where id = p_survey_id and owner_id = v_owner_id",
            "    returning id into v_survey_id;"
          ]
        },
        {
          "start": 44,
          "lines": [
            "  -- 하위 함수의 검증 또는 질문 저장이 실패하면 위 변경도 함께 롤백됩니다.",
            "  perform public.save_survey_questions(v_survey_id, p_questions);",
            "  return v_survey_id;",
            "end;"
          ]
        }
      ]
    }
  },
  "moaPaging": {
    "title": "500행 단위로 끝까지 읽는 조회 함수",
    "text": "응답 행 수로 offset 이동 · 빈 페이지 또는 전체 건수에서 종료",
    "snippet": {
      "file": "resultPagination.js",
      "path": "src/surveys/resultPagination.js",
      "language": "JavaScript",
      "commit": "2ac6cc90b60aabdf31fe5039e316a51b1df56506",
      "blob": "9ee1704f571e65c3fc1101ab4573776504e7c686",
      "url": "https://github.com/gyeonggumun/Survey_production/blob/2ac6cc90b60aabdf31fe5039e316a51b1df56506/src/surveys/resultPagination.js#L5-L14",
      "blocks": [
        {
          "start": 5,
          "lines": [
            "export async function loadAllRows(makeQuery, batchSize = ROW_BATCH_SIZE) {",
            "  const rows = [];",
            "  for (let offset = 0; ;) {",
            "    const { data, error, count } = await makeQuery().range(offset, offset + batchSize - 1);",
            "    if (error) throw error;",
            "    const page = data ?? [];",
            "    rows.push(...page);",
            "    if (!page.length || (typeof count === 'number' && rows.length >= count)) return rows;",
            "    offset += page.length;",
            "  }"
          ]
        }
      ]
    }
  },
  "moaCsv": {
    "title": "CSV 수식 방지·따옴표 처리·UTF-8 BOM",
    "text": "= · + · - · @로 시작하는 입력을 문자열로 내보내기",
    "snippet": {
      "file": "resultExport.js",
      "path": "src/surveys/resultExport.js",
      "language": "JavaScript",
      "commit": "2ac6cc90b60aabdf31fe5039e316a51b1df56506",
      "blob": "7c19ed96880046add7618cf0930c8f82f6d52834",
      "url": "https://github.com/gyeonggumun/Survey_production/blob/2ac6cc90b60aabdf31fe5039e316a51b1df56506/src/surveys/resultExport.js#L1-L23",
      "blocks": [
        {
          "start": 1,
          "lines": [
            "function csvCell(value) {",
            "  const text = Array.isArray(value) ? value.join(' | ') : String(value ?? '');",
            "  // 응답자가 입력한 값이 스프레드시트 수식으로 실행되지 않게 합니다.",
            "  const safeText = /^[\\s]*[=+\\-@]/.test(text) ? `'${text}` : text;",
            "  return `\"${safeText.replace(/\"/g, '\"\"')}\"`;",
            "}"
          ]
        },
        {
          "start": 23,
          "lines": [
            "  return `\\uFEFF${rows.map((row) => row.map(csvCell).join(',')).join('\\r\\n')}\\r\\n`;"
          ]
        }
      ]
    }
  },
  "reflectionPair": {
    "title": "저녁 D와 다음 아침 D+1 연결",
    "text": "실제 날짜 14개를 생성 · 다음 날의 아침 기록 조회",
    "snippet": {
      "file": "dates.js",
      "path": "src/lib/dates.js",
      "language": "JavaScript",
      "commit": "286c53d8a5f59cbe173fd5405b3cef252d81c0f2",
      "blob": "9a11be6692781d9fdf0446a2c63f10cfd0994e00",
      "url": "https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/286c53d8a5f59cbe173fd5405b3cef252d81c0f2/src/lib/dates.js#L23-L34",
      "blocks": [
        {
          "start": 23,
          "lines": [
            "export function pairFor(entries, date) {",
            "  return {",
            "    date,",
            "    evening: entries.find((entry) => entry.date === date),",
            "    morningDate: shiftDate(date, 1),",
            "    morning: entries.find((entry) => entry.date === shiftDate(date, 1))?.morning,",
            "  };"
          ]
        },
        {
          "start": 32,
          "lines": [
            "export function recentDays(end, count = 14) {",
            "  return Array.from({ length: count }, (_, index) => shiftDate(end, index - count + 1));",
            "}"
          ]
        }
      ]
    }
  },
  "reflectionSave": {
    "title": "저장 revision을 비교해 오래된 탭의 쓰기 거부",
    "text": "손상·변경 상태 검사 후 다음 버전 저장 · 다중 탭 완전한 잠금은 아님",
    "snippet": {
      "file": "storage.js",
      "path": "src/lib/storage.js",
      "language": "JavaScript",
      "commit": "286c53d8a5f59cbe173fd5405b3cef252d81c0f2",
      "blob": "3c93ea5059634ce7b1fb70a7379b06b862b35a5d",
      "url": "https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/286c53d8a5f59cbe173fd5405b3cef252d81c0f2/src/lib/storage.js#L52-L60",
      "blocks": [
        {
          "start": 52,
          "lines": [
            "export function saveStore(next, storage = window.localStorage) {",
            "  if (next.error) throw new Error(next.error);",
            "  const current = loadStore(storage);",
            "  if (current.error) throw new Error(current.error);",
            "  if (current.revision !== next.revision) throw new Error('다른 탭에서 기록이 변경되었습니다. 새로고침 후 다시 시도해 주세요. 현재 입력은 화면에 남아 있습니다.');",
            "  validateEntries(next.entries);",
            "  validateDrafts(next.drafts);",
            "  const stored = { schemaVersion: 2, revision: next.revision + 1, entries: next.entries, drafts: next.drafts };",
            "  storage.setItem(STORAGE_KEY, JSON.stringify(stored));"
          ]
        }
      ]
    }
  },
  "reflectionMerge": {
    "title": "날짜 Map으로 백업 병합과 충돌 집계",
    "text": "발췌 사이의 원문에서 아침·저녁 섹션별 보존 처리",
    "snippet": {
      "file": "storage.js",
      "path": "src/lib/storage.js",
      "language": "JavaScript",
      "commit": "286c53d8a5f59cbe173fd5405b3cef252d81c0f2",
      "blob": "3c93ea5059634ce7b1fb70a7379b06b862b35a5d",
      "url": "https://github.com/gyeonggumun/retrospective-that-opens-up-tomorrow/blob/286c53d8a5f59cbe173fd5405b3cef252d81c0f2/src/lib/storage.js#L72-L89",
      "blocks": [
        {
          "start": 72,
          "lines": [
            "export function mergeBackup(current, incoming) {",
            "  const merged = new Map(current.entries.map((entry) => [entry.date, entry]));",
            "  let conflicts = 0;",
            "  for (const entry of incoming.entries) {",
            "    const existing = merged.get(entry.date);",
            "    if (existing) {",
            "      conflicts += 1;",
            "      const combined = { ...entry, ...existing };"
          ]
        },
        {
          "start": 86,
          "lines": [
            "      merged.set(entry.date, combined);",
            "    } else merged.set(entry.date, entry);",
            "  }",
            "  return { entries: [...merged.values()], drafts: { ...incoming.drafts, ...current.drafts }, conflicts };"
          ]
        }
      ]
    }
  },
  "studyHistory": {
    "title": "풀이 기록을 500행씩 조회",
    "text": "계정 필터·안정적인 정렬·AbortSignal로 조회 범위 관리",
    "snippet": {
      "file": "practiceHistory.js",
      "path": "src/lib/practiceHistory.js",
      "language": "JavaScript",
      "commit": "253f7c4dcb101aaad4a6178a4d5660d47dd1c690",
      "blob": "7f0fefa9e35c8978ea0d72fd2029ef0a60eed7d8",
      "url": "https://github.com/gyeonggumun/information-processing-study/blob/253f7c4dcb101aaad4a6178a4d5660d47dd1c690/src/lib/practiceHistory.js#L27-L36",
      "blocks": [
        {
          "start": 27,
          "lines": [
            "export async function loadPracticeAttempts(client, userId, signal) {",
            "  const all = [];",
            "  for (let offset = 0; ; offset += 500) {",
            "    const { data, error } = await client.from('practice_attempts').select(ATTEMPT_COLUMNS)",
            "      .eq('user_id', userId).order('created_at', { ascending: false }).order('id', { ascending: false })",
            "      .range(offset, offset + 499).abortSignal(signal);",
            "    if (error) throw error;",
            "    all.push(...(data ?? []));",
            "    if (!data || data.length < 500) return mergeAttempts(all);",
            "  }"
          ]
        }
      ]
    }
  },
  "studySave": {
    "title": "응답 유실 뒤 재시도에서 같은 UUID 확인",
    "text": "23505 중복 오류는 본인의 기존 기록으로 조회 · 중복 insert 결과 구분",
    "snippet": {
      "file": "practiceHistory.js",
      "path": "src/lib/practiceHistory.js",
      "language": "JavaScript",
      "commit": "253f7c4dcb101aaad4a6178a4d5660d47dd1c690",
      "blob": "7f0fefa9e35c8978ea0d72fd2029ef0a60eed7d8",
      "url": "https://github.com/gyeonggumun/information-processing-study/blob/253f7c4dcb101aaad4a6178a4d5660d47dd1c690/src/lib/practiceHistory.js#L39-L46",
      "blocks": [
        {
          "start": 39,
          "lines": [
            "export async function savePracticeAttempt(client, attempt) {",
            "  let result = await client.from('practice_attempts').insert(attempt).select(ATTEMPT_COLUMNS).single();",
            "  // 저장 응답만 유실된 재시도는 본인의 동일 UUID 기록을 확인합니다.",
            "  if (result.error?.code === '23505') {",
            "    result = await client.from('practice_attempts').select(ATTEMPT_COLUMNS).eq('user_id', attempt.user_id).eq('id', attempt.id).single();",
            "  }",
            "  if (result.error) throw result.error;",
            "  if (!result.data) throw new Error('풀이 기록 저장 결과가 없습니다.');"
          ]
        }
      ]
    }
  },
  "studyPdf": {
    "title": "SHA-256 검증 후 선택 카드만 PDF에 삽입",
    "text": "manifest와 원본 PDF의 버전 확인 · 제외한 카드 본문은 삽입하지 않음",
    "snippet": {
      "file": "personalSummaryPdf.js",
      "path": "src/lib/personalSummaryPdf.js",
      "language": "JavaScript",
      "commit": "253f7c4dcb101aaad4a6178a4d5660d47dd1c690",
      "blob": "aec64ee9a77af202bfc9fb5d9ecd4ff4b39e67fa",
      "url": "https://github.com/gyeonggumun/information-processing-study/blob/253f7c4dcb101aaad4a6178a4d5660d47dd1c690/src/lib/personalSummaryPdf.js#L53-L70",
      "blocks": [
        {
          "start": 53,
          "lines": [
            "export async function composePersonalSummaryPdf(cards, manifest, atlasBytes, { signal } = {}) {",
            "  assertActive(signal);",
            "  const entries = selectSummaryPdfCards(cards, manifest);",
            "  const digest = await crypto.subtle.digest('SHA-256', atlasBytes);",
            "  const hash = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');",
            "  if (hash !== manifest.sha256) throw new Error('PDF 자료 버전이 일치하지 않습니다. 페이지를 새로고침한 뒤 다시 시도해주세요.');"
          ]
        },
        {
          "start": 69,
          "lines": [
            "  // 선택한 카드 페이지만 삽입하므로 삭제된 카드의 본문은 결과 파일에 포함되지 않습니다.",
            "  const [header, footer, intro, ...embedded] = await document.embedPages(parts.map((part) => source.getPage(part.page)));"
          ]
        }
      ]
    }
  },
  "tutorModal": {
    "title": "6종 모달 중 하나만 열리는 상태 전환",
    "text": "로그인 모달을 열면 나머지 5개를 닫는 Zustand 액션",
    "snippet": {
      "file": "modalStore.js",
      "path": "Tutoroo_project_front/src/stores/modalStore.js",
      "language": "JavaScript",
      "commit": "e011b21e64b2a88c6f01cc55bf96f6917fdfc6ae",
      "blob": "287e9a332b59997baca2930575fe419119564f57",
      "url": "https://github.com/Tutoroo-project/Tutoroo_project/blob/e011b21e64b2a88c6f01cc55bf96f6917fdfc6ae/Tutoroo_project_front/src/stores/modalStore.js#L19-L27",
      "blocks": [
        {
          "start": 19,
          "lines": [
            "  openLogin: () =>",
            "    set({",
            "      isLoginOpen: true,",
            "      isFindIdOpen: false,",
            "      isFindPwOpen: false,",
            "      isSignUpOpen: false,",
            "      isStudyPlanOpen: false,",
            "      isSocialSignupOpen: false,",
            "    }),"
          ]
        }
      ]
    }
  },
  "tutorModes": {
    "title": "수업부터 복습까지 8단계 상태 흐름",
    "text": "진행 순서를 공통 배열로 정의 · 화면과 세션 상태 연결",
    "snippet": {
      "file": "useStudyStore.js",
      "path": "Tutoroo_project_front/src/stores/useStudyStore.js",
      "language": "JavaScript",
      "commit": "e011b21e64b2a88c6f01cc55bf96f6917fdfc6ae",
      "blob": "e49435a8bbc8185f25dc9006906db6d86f7f9397",
      "url": "https://github.com/Tutoroo-project/Tutoroo_project/blob/e011b21e64b2a88c6f01cc55bf96f6917fdfc6ae/Tutoroo_project_front/src/stores/useStudyStore.js#L4-L13",
      "blocks": [
        {
          "start": 4,
          "lines": [
            "const SESSION_SEQUENCE = [",
            "  \"CLASS\",           ",
            "  \"BREAK\",            ",
            "  \"TEST\",             ",
            "  \"GRADING\",          ",
            "  \"EXPLANATION\",     ",
            "  \"AI_FEEDBACK\",     ",
            "  \"STUDENT_FEEDBACK\", ",
            "  \"REVIEW\"            ",
            "];"
          ]
        }
      ]
    }
  },
  "tutorParallel": {
    "title": "해당 주에 필요한 월만 중복 제거·병렬 조회",
    "text": "7일 구간은 최대 2개 월 · 연·월 Set → Promise.all",
    "snippet": {
      "file": "DashboardPage.jsx",
      "path": "Tutoroo_project_front/src/pages/dashboards/DashboardPage.jsx",
      "language": "JSX",
      "commit": "e011b21e64b2a88c6f01cc55bf96f6917fdfc6ae",
      "blob": "024bb01c4cfbe010cd6fd976e15c0d5606657d47",
      "url": "https://github.com/Tutoroo-project/Tutoroo_project/blob/e011b21e64b2a88c6f01cc55bf96f6917fdfc6ae/Tutoroo_project_front/src/pages/dashboards/DashboardPage.jsx#L361-L375",
      "blocks": [
        {
          "start": 361,
          "lines": [
            "        const ymSet = new Set(dates.map((d) => `${d.year}-${d.month}`));",
            "        const ymList = Array.from(ymSet).map((k) => {",
            "          const [year, month] = k.split(\"-\").map(Number);",
            "          return { year, month };",
            "        });"
          ]
        },
        {
          "start": 367,
          "lines": [
            "        const results = await Promise.all(",
            "          ymList.map(({ year, month }) =>",
            "            studyApi.getMonthlyCalendar({",
            "              year,",
            "              month,",
            "              planId: Number(selectedStudyId),",
            "            }),",
            "          ),",
            "        );"
          ]
        }
      ]
    }
  },
  "websecSql": {
    "title": "문제 1 · 입력이 SQL로 해석되는 경계",
    "text": "교육용 의도적 취약 코드 · 입력 문자열 결합 후 쿼리 실행",
    "snippet": {
      "file": "app.sanitized.py",
      "path": "reference/web/app.sanitized.py",
      "language": "Python",
      "commit": "239e4846ec1237ee441e5a9244c0c9e4bd359214",
      "blob": "6877e5e6027fc21818be72b1d5ef6c78fea7c09b",
      "url": "https://github.com/gyeonggumun/ThreeLine-Wargame/blob/239e4846ec1237ee441e5a9244c0c9e4bd359214/reference/web/app.sanitized.py#L170-L186",
      "blocks": [
        {
          "start": 170,
          "lines": [
            "    # 의도적인 SQL Injection 취약점",
            "    query = (",
            "        \"SELECT * FROM users \"",
            "        f\"WHERE username = '{username}' \"",
            "        f\"AND password = '{password}'\"",
            "    )"
          ]
        },
        {
          "start": 184,
          "lines": [
            "        with connection.cursor() as cursor:",
            "            cursor.execute(query)",
            "            result = cursor.fetchone()"
          ]
        }
      ]
    }
  },
  "websecShell": {
    "title": "문제 2 · URL이 Bash 명령으로 전달되는 경계",
    "text": "교육용 의도적 취약 코드 · shell=True 호출 지점",
    "snippet": {
      "file": "app.sanitized.py",
      "path": "reference/web/app.sanitized.py",
      "language": "Python",
      "commit": "239e4846ec1237ee441e5a9244c0c9e4bd359214",
      "blob": "6877e5e6027fc21818be72b1d5ef6c78fea7c09b",
      "url": "https://github.com/gyeonggumun/ThreeLine-Wargame/blob/239e4846ec1237ee441e5a9244c0c9e4bd359214/reference/web/app.sanitized.py#L284-L300",
      "blocks": [
        {
          "start": 284,
          "lines": [
            "    command = (",
            "        \"/usr/bin/curl -v \"",
            "        \"--connect-timeout 3 \"",
            "        \"--max-time 10 \"",
            "        f\"-X GET {webhook_url}\"",
            "    )"
          ]
        },
        {
          "start": 297,
          "lines": [
            "        result = subprocess.run(",
            "            command,",
            "            shell=True,",
            "            executable=\"/bin/bash\","
          ]
        }
      ]
    }
  },
  "websecService": {
    "title": "실습 앱의 실행 계정과 systemd 제한",
    "text": "전용 계정 · 실패 후 3초 재시작 설정 · 권한 상승·임시 영역 제한",
    "snippet": {
      "file": "wargame.service",
      "path": "reference/systemd/wargame.service",
      "language": "systemd",
      "commit": "239e4846ec1237ee441e5a9244c0c9e4bd359214",
      "blob": "9525b1b03984be7544bd3a0b141f8b64f43614d1",
      "url": "https://github.com/gyeonggumun/ThreeLine-Wargame/blob/239e4846ec1237ee441e5a9244c0c9e4bd359214/reference/systemd/wargame.service#L9-L24",
      "blocks": [
        {
          "start": 9,
          "lines": [
            "User=wargame",
            "Group=wargame"
          ]
        },
        {
          "start": 17,
          "lines": [
            "ExecStart=/var/www/wargame/venv/bin/python \\",
            "/var/www/wargame/app.py",
            "",
            "Restart=on-failure",
            "RestartSec=3",
            "",
            "NoNewPrivileges=true",
            "PrivateTmp=true"
          ]
        }
      ]
    }
  },
  "kaliSsti": {
    "title": "입력을 HTML에 합친 뒤 템플릿으로 해석",
    "text": "교육용 의도적 취약 코드 · f-string → replace → render_template_string",
    "snippet": {
      "file": "wsgi.py",
      "path": "reference/web/wsgi.py",
      "language": "Python",
      "commit": "28053053d1daf0bee45065313d2b9fb512d01ee9",
      "blob": "ef13c04945155eede4c595d67bbe9585948f1fa4",
      "url": "https://github.com/gyeonggumun/KaliCTF/blob/28053053d1daf0bee45065313d2b9fb512d01ee9/reference/web/wsgi.py#L44-L54",
      "blocks": [
        {
          "start": 44,
          "lines": [
            "@app.route('/')",
            "def index():",
            "    name = request.args.get('name')",
            "    ",
            "    if name:",
            "        content = f\"\"\"",
            "        <h2>Diagnostic Ping Mode</h2>",
            "        <p>Checking connectivity for node: <strong>{name}</strong></p>",
            "        \"\"\"",
            "        final_html = base_html.replace('__MAIN_CONTENT__', content)",
            "        return render_template_string(final_html)"
          ]
        }
      ]
    }
  },
  "kaliService": {
    "title": "웹 실행 계정과 자동 재시작 설정",
    "text": "www-data 실행 · Restart=always · 서비스 실행 경로 명시",
    "snippet": {
      "file": "ctf-web.service",
      "path": "reference/systemd/ctf-web.service",
      "language": "systemd",
      "commit": "28053053d1daf0bee45065313d2b9fb512d01ee9",
      "blob": "c1c3ac35b62602ce6a937514ef9346079a3055f4",
      "url": "https://github.com/gyeonggumun/KaliCTF/blob/28053053d1daf0bee45065313d2b9fb512d01ee9/reference/systemd/ctf-web.service#L5-L10",
      "blocks": [
        {
          "start": 5,
          "lines": [
            "[Service]",
            "Type=simple",
            "User=www-data",
            "WorkingDirectory=/var/www/internal_api",
            "ExecStart=/usr/bin/python3 /var/www/internal_api/wsgi.py",
            "Restart=always"
          ]
        }
      ]
    }
  },
  "kaliNetwork": {
    "title": "5000 직접 요청과 HTTP 진입 경로 분리",
    "text": "raw DROP과 80→5000 NAT · 원본의 중복 NAT 규칙도 그대로 표시",
    "snippet": {
      "file": "rules.v4",
      "path": "reference/network/rules.v4",
      "language": "iptables",
      "commit": "28053053d1daf0bee45065313d2b9fb512d01ee9",
      "blob": "c14d3c0670c5f61828a40eeea13c0d1eb6a795a5",
      "url": "https://github.com/gyeonggumun/KaliCTF/blob/28053053d1daf0bee45065313d2b9fb512d01ee9/reference/network/rules.v4#L2-L25",
      "blocks": [
        {
          "start": 2,
          "lines": [
            "*raw",
            ":PREROUTING ACCEPT [0:0]",
            ":OUTPUT ACCEPT [0:0]",
            "-A PREROUTING -p tcp -m tcp --dport 5000 -j DROP",
            "COMMIT"
          ]
        },
        {
          "start": 24,
          "lines": [
            "-A PREROUTING -p tcp -m tcp --dport 80 -j REDIRECT --to-ports 5000",
            "-A PREROUTING -p tcp -m tcp --dport 80 -j REDIRECT --to-ports 5000"
          ]
        }
      ]
    }
  }
};
