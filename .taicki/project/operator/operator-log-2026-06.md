# Operator Log — 2026-06

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
