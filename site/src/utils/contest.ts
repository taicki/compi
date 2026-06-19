// 경시대회 공통 유틸리티 — index.astro / [id].astro 공유

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
