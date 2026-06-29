## 2026-06-29 14:37 KST — 이슈 #0017: 대회 상세 페이지 — 같은 과목 관련 대회 추천 섹션 추가
- **결과**: 성공
- **변경 파일**: `site/src/pages/contests/[id].astro`
- **커밋**: 023c9d8
- **빌드**: 통과 ✓ (32 pages)
- **사유**: 대회 상세 페이지 하단에 같은 과목 다른 대회 최대 3개 추천. getStaticPaths에서 relatedContests 미리 계산 → props 전달. 내부 링크 강화(SEO) + 탐색 UX 개선.

## 2026-06-28 14:34 KST — 이슈 #0015: 콩쿨 캘린더 추가 — 피아노/바이올린 등 전국 음악 콩쿨 일정 데이터 파일럿
- **결과**: 성공
- **변경 파일**:
  - `site/src/utils/contest.ts` (subjectColors·subjectSlugMap에 음악 추가)
  - `site/src/pages/subjects/[subject].astro` (SUBJECT_CONFIG에 music 추가)
- **커밋**: 57c78f9
- **빌드**: 통과 ✓ (32 pages)
- **사유**: subjectSlugMap에 음악이 누락돼 /subjects/music/ 페이지가 생성되지 않던 문제 해결. 3개 음악 콩쿨(이화경향·삼익자일러·음협) 필터링 동작 확인. DoD(10개 이상) 부분 달성 — 데이터 추가는 신규 이슈로 분리 가능.


## 2026-06-27 14:37 KST — 이슈 #0013: 과목별·학년별 페이지 ItemList JSON-LD 추가
- **결과**: 성공
- **변경 파일**:
  - `site/src/pages/subjects/[subject].astro` (ItemList + BreadcrumbList JSON-LD 추가)
  - `site/src/pages/grades/[grade].astro` (동일)
- **커밋**: 9631118
- **빌드**: 통과 ✓ (28 pages)
- **사유**: 기존 open 이슈 모두 외부 의존. 목록 페이지 JSON-LD 누락 발견 → 신규 이슈 #0013 생성 후 처리

## 2026-06-26 14:35 KST — 이슈 #0011: 홈 페이지 '지금 확인하세요' 섹션 추가
- **결과**: 성공
- **변경 파일**:
  - `site/src/pages/index.astro` (urgentContests 계산 로직 + 섹션 UI 추가)
  - `.taicki/project/issues/0011.yml` (신규 이슈 + closed)
  - `.taicki/project/issues/0001~0010.yml` (id 정수형 변환 + created 복구)
- **커밋**: 46aae3f, b81cf92, cf20100
- **빌드**: 통과 ✓ (28 pages)
- **사유**: 기존 open 이슈 전부 외부의존/blocked. 홈 페이지에 접수 중 대회 표시 기능 없음 발견 → 신규 이슈 #0011 생성 후 처리

## 2026-06-22 14:37 KST — 이슈 #0009: OGP / Twitter Card 메타태그 전 페이지 통일
- **결과**: 성공
- **변경 파일**:
  - `site/src/components/BaseHead.astro` (신규)
  - `site/src/pages/index.astro` (BaseHead 적용, OGP 전체 추가)
  - `site/src/pages/contests/[id].astro` (BaseHead 교체, og:url/image/twitter:* 보완)
  - `site/src/pages/subjects/[subject].astro` (BaseHead 교체, 동일)
  - `.taicki/project/issues/0009.yml` (신규 이슈 + closed)
- **커밋**: f8dd9b9, 85201f8
- **빌드**: 통과 ✓ (25 pages)
- **사유**: 기존 open 이슈 전부 blocked/외부의존. 사이트에서 OGP 미구현 발견 → 신규 이슈 #0009 생성 후 처리

## 2026-06-21 14:31 KST — 적합한 이슈 없음
- **결과**: 적합한 이슈 없음
- **변경 파일**: 해당없음
- **커밋**: 해당없음
- **빌드**: 해당없음
- **사유**:
  - #0003 (GA4+GSC): 외부 서비스 계정 설정 필요
  - #0006 (브랜드 확정): 티제이님 결정 필요
  - #0002 (배포): 코드 준비 완료, 배포는 티제이님 직접 실행
  - #0007 (도메인): blocked

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
