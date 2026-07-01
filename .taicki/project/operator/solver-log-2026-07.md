## 2026-07-01 14:30 KST — 이슈 #0020: robots.txt 추가 — 사이트맵 발견 및 크롤링 지시
- **결과**: 성공
- **변경 파일**:
  - `site/src/pages/robots.txt.ts` (신규)
  - `.taicki/project/issues/0020.yml` (신규 이슈 + closed)
- **커밋**: fe42445, 9344a8c
- **빌드**: 통과 ✓ (33 pages)
- **사유**: 기존 open 이슈(#0002, #0003, #0006) 모두 호스팅/외부계정/사용자결정 제외 기준 해당. `site/dist/`에 sitemap-index.xml은 생성되나 robots.txt가 없어 크롤러의 사이트맵 발견이 느려질 수 있는 문제 발견 → 신규 이슈 #0020 생성 후 처리. SITE_URL + BASE_URL 조합으로 sitemap 절대 URL 생성(BaseHead.astro와 동일 패턴, DRY 유지). code-reviewer 리뷰 통과(Critical/High 없음, Low 1건 반영 — prerender 명시).
