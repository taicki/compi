# Operator Log — 2026-06

## 2026-06-28 05:21 KST — 이슈 #0014: 대회 상세 페이지 BreadcrumbList JSON-LD 추가
- **결과**: 성공
- **변경 파일**: `site/src/pages/contests/[id].astro` (BreadcrumbList @graph 병합), `site/src/utils/contest.ts` (safeJsonLd 유틸), `site/src/pages/subjects/[subject].astro`, `site/src/pages/grades/[grade].astro` (safeJsonLd 적용)
- **커밋**: 578169d (feat), f9b835c (chore)
- **빌드**: 통과 ✓ (28페이지)
- **소요**: 8분
- **내용**: 대회 상세 페이지에 BreadcrumbList JSON-LD 추가. 홈 > 과목 경시대회 > 대회명 3단 구조. safeJsonLd() 유틸로 3개 페이지 HTML 인코딩 통일. 코드 리뷰어가 단일 패스 정규식·baseUrl 상수 추출 등 추가 정리 반영.

## 2026-06-27 05:32 KST — 이슈 #0012: 대회 목록 즉시 필터링 — 과목/학년/텍스트 검색으로 찾기
- **결과**: 성공
- **변경 파일**: `site/src/pages/index.astro` (필터 패널 + data 속성 + JS 스크립트)
- **커밋**: e55b6dd (feat), 23edcec (chore), 9331346 (chore)
- **빌드**: 통과 ✓ (28페이지)
- **소요**: 19분
- **내용**: 홈 페이지 '전체 경시대회' 섹션에 과목/학년 버튼 + 텍스트 검색 필터 패널 추가. 바닐라 JS로 페이지 이동 없이 즉시 필터링. 교차 필터(수학+초등) 동작 확인. playwright 검증 완료.

## 2026-06-26 05:23 KST — 이슈 #0010: 학년별 필터 페이지 생성 — 초등·중등·고등 SEO 진입점
- **결과**: 성공
- **변경 파일**:
  - `site/src/utils/contest.ts` (gradeSlugMap, slugToGrade 추가)
  - `site/src/pages/grades/[grade].astro` (신규)
  - `site/src/pages/index.astro` ("🔍 빠른 찾기" 섹션 추가)
  - `site/src/pages/contests/[id].astro` (대상 학년 태그 → 학년 페이지 링크)
- **커밋**: b0d2082
- **빌드**: 통과 ✓ (25페이지 → 28페이지)
- **소요**: 10분
- **생성 페이지**: /grades/elementary/, /grades/middle/, /grades/high/
- **내용**: target 배열 포함 여부로 필터. 인덱스에 과목·학년 통합 "빠른 찾기" 패널 추가. 대회 상세 페이지의 대상 학년 태그에 링크 연결.

## 2026-06-22 05:18 KST — 이슈 #0008: Schema.org Event JSON-LD 구조화 데이터 추가
- **결과**: 성공
- **변경 파일**:
  - `site/src/pages/contests/[id].astro` (JSON-LD 생성 로직 + `<script type="application/ld+json">` 삽입)
- **커밋**: 9db4aa1
- **빌드**: 통과 ✓ (25페이지)
- **소요**: 8분
- **내용**: 시험일 있는 회차를 Schema.org Event 타입으로 마크업. fee=null 시 price 생략, 여러 회차는 @graph 배열로 직렬화.

## 2026-06-21 05:25 KST — 이슈 #0002: taicki.dev/compi/ 서브패스 배포 준비
- **결과**: 부분 완료 (코드 준비 완료, rsync 배포 대기)
- **변경 파일**:
  - `site/astro.config.mjs` (base: '/compi' 추가)
  - `site/src/config.ts` (SITE_URL → https://taicki.dev)
  - `site/src/pages/index.astro` (BASE_URL 내부 링크 처리)
  - `site/src/pages/contests/[id].astro` (동일)
  - `site/src/pages/subjects/[subject].astro` (동일)
  - `scripts/deploy.sh` (신규: build + rsync 배포 스크립트)
- **커밋**: 3a82242
- **빌드**: 통과 ✓ (25페이지, /compi/ prefix 링크 정상)
- **소요**: 12분
- **사유**: rsync 배포(프로덕션 EC2)는 auto-approve 거부 → 티제이님이 `bash scripts/deploy.sh` 실행 필요

## 2026-06-20 05:10 KST — 이슈 #0004: 과목별 필러 페이지 + 학년별 필터 페이지 생성
- **결과**: 성공
- **변경 파일**:
  - `site/src/pages/subjects/[subject].astro` (신규)
  - `site/src/utils/contest.ts` (getNextExam, slugToSubject 추출)
  - `site/src/pages/contests/[id].astro` (브레드크럼 + 과목 태그 내부 링크)
  - `site/src/pages/index.astro` (과목 태그 내부 링크)
- **커밋**: 4cdf665
- **빌드**: 통과 ✓ (21페이지 → 25페이지)
- **소요**: 10분
- **생성 페이지**: /subjects/math/, /subjects/science/, /subjects/english/, /subjects/coding/
