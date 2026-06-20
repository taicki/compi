# Operator Log — 2026-06

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
