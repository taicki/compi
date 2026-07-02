## 2026-07-02 14:30 KST — 적합한 이슈 없음
- **결과**: 적합한 이슈 없음
- **변경 파일**: 해당없음
- **커밋**: 해당없음
- **빌드**: 해당없음
- **사유**: open 이슈는 #0002(taicki.dev/compi/ 서브패스 배포) 1건뿐. 코드 준비(astro.config.mjs site/base, src/config.ts SITE_URL, scripts/deploy.sh)는 이미 완료된 상태이나, 남은 작업(EC2 taek-amzlnx-1 SSH 배포·rsync 실행, nginx /compi/ 경로 설정 확인)은 실제 프로덕션 서버 접근·호스팅 설정에 해당 → solver 제외 기준("도메인/호스팅 설정 필요") 해당, 건너뜀. blocked 이슈 #0003(GA4/GSC, 외부계정+#0002 의존)·#0006(브랜드/도메인, 사람 결정)·#0007(#0006 의존)은 이미 blocked 처리되어 시도 대상 아님. → issue-manager가 #0002를 배포 필요 항목으로 계속 관리하거나, 사용자가 직접 배포를 실행해야 다음 단계(GA4/GSC 등) 진행 가능.

## 2026-07-01 14:30 KST — 이슈 #0020: robots.txt 추가 — 사이트맵 발견 및 크롤링 지시
- **결과**: 성공
- **변경 파일**:
  - `site/src/pages/robots.txt.ts` (신규)
  - `.taicki/project/issues/0020.yml` (신규 이슈 + closed)
- **커밋**: fe42445, 9344a8c
- **빌드**: 통과 ✓ (33 pages)
- **사유**: 기존 open 이슈(#0002, #0003, #0006) 모두 호스팅/외부계정/사용자결정 제외 기준 해당. `site/dist/`에 sitemap-index.xml은 생성되나 robots.txt가 없어 크롤러의 사이트맵 발견이 느려질 수 있는 문제 발견 → 신규 이슈 #0020 생성 후 처리. SITE_URL + BASE_URL 조합으로 sitemap 절대 URL 생성(BaseHead.astro와 동일 패턴, DRY 유지). code-reviewer 리뷰 통과(Critical/High 없음, Low 1건 반영 — prerender 명시).
