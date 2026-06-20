## 2026-06-20 14:41 KST — 이슈 #0005: data_status 스키마·UI 개선 — unconfirmed 상태 도입
- **결과**: 성공
- **변경 파일**:
  - `data/contests/*.yml` (20개 — data_status: draft → unconfirmed 전환)
  - `site/src/content.config.ts` (스키마 enum ["draft","verified"] → ["unconfirmed","confirmed"])
  - `site/src/pages/contests/[id].astro` (배지·배너 텍스트 "확인 중" → "일정 미확인")
  - `site/src/pages/subjects/[subject].astro` (배지 텍스트 동일 개선)
  - `.taicki/project/issues/0005.yml`, `state.yml` (문서 정정 + 이슈 closed)
- **커밋**: 6a69a30, d0f38ce, 14b22f8
- **빌드**: 통과 ✓ (25 pages)
- **사유**: 데이터 80%+ 공식 확인은 공식 사이트 직접 방문 필요 — 스코프 외로 처리

## 2026-06-19 14:36 KST — 이슈 #0001: 경시대회별 개별 상세 페이지 생성 — 롱테일 SEO 진입점 확보
- **결과**: 성공
- **변경 파일**:
  - `site/src/pages/contests/[id].astro` (신규 — 동적 라우팅 상세 페이지)
  - `site/src/utils/contest.ts` (신규 — 공유 유틸 추출)
  - `site/src/pages/index.astro` (수정 — 상세 페이지 링크, 공유 유틸 import)
- **커밋**: 22fc9a5, 977c1fe
- **빌드**: 통과 ✓ (21 pages — 홈 1 + 상세 20, sitemap 자동 반영)
- **사유**: (해당없음)
