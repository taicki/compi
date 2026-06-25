// 경시대회 공통 유틸리티 — index.astro / [id].astro / [subject].astro 공유

export const subjectColors: Record<string, string> = {
  수학: "bg-blue-100 text-blue-800",
  과학: "bg-green-100 text-green-800",
  영어: "bg-yellow-100 text-yellow-800",
  코딩: "bg-purple-100 text-purple-800",
  국어: "bg-red-100 text-red-800",
  역사: "bg-orange-100 text-orange-800",
  종합: "bg-gray-100 text-gray-800",
};

export const levelLabels: Record<string, string> = {
  입문: "🌱 입문",
  중급: "⭐ 중급",
  심화: "🔥 심화",
};

/** 오늘(자정 기준) Date 객체 — 빌드 시 1회 생성 */
export const TODAY = (() => {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
})();

export const todayStr: string = TODAY.toISOString().split("T")[0];

/**
 * 과목명(한글) → URL 슬러그 매핑.
 * 페이지가 실제 존재하는 과목만 포함 — 여기에 없는 과목은 /subjects/ 링크를 생성하지 않는다.
 */
export const subjectSlugMap: Record<string, string> = {
  수학: "math",
  과학: "science",
  영어: "english",
  코딩: "coding",
};

/** 슬러그 → 과목명(한글) 역방향 맵 — subjectSlugMap에서 파생 (중복 선언 금지) */
export const slugToSubject: Record<string, string> = Object.fromEntries(
  Object.entries(subjectSlugMap).map(([ko, slug]) => [slug, ko]),
);

/**
 * 학년(한글) → URL 슬러그 매핑.
 * 페이지가 실제 존재하는 학년만 포함.
 */
export const gradeSlugMap: Record<string, string> = {
  초등: "elementary",
  중등: "middle",
  고등: "high",
};

/** 슬러그 → 학년(한글) 역방향 맵 */
export const slugToGrade: Record<string, string> = Object.fromEntries(
  Object.entries(gradeSlugMap).map(([ko, slug]) => [slug, ko]),
);

/**
 * dateStr 로부터 D-day 문자열을 반환한다.
 * falsy 값이 들어오면 빈 문자열을 반환한다.
 */
export function getDday(dateStr: string | null | undefined): string {
  if (!dateStr) return "";
  const diff = Math.ceil(
    (new Date(dateStr).getTime() - TODAY.getTime()) / 86400000,
  );
  if (diff === 0) return "D-Day";
  if (diff > 0) return `D-${diff}`;
  return `D+${Math.abs(diff)}`;
}

/**
 * 일정 배열에서 오늘 이후 가장 가까운 시험 일정을 반환한다.
 * 없으면 null.
 */
export function getNextExam<T extends { exam_date?: string | null }>(
  schedule: T[],
): T | null {
  return (
    schedule
      .filter((s) => s.exam_date && s.exam_date >= todayStr)
      .sort((a, b) => (a.exam_date! > b.exam_date! ? 1 : -1))[0] ?? null
  );
}
