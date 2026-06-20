import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const contests = defineCollection({
  loader: glob({ pattern: "**/*.yml", base: "../data/contests" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    name_en: z.string().optional(),
    organizer: z.string(),
    subject: z.enum(["수학", "과학", "영어", "코딩", "국어", "역사", "종합"]),
    target: z.array(z.enum(["초등", "중등", "고등"])),
    level: z.enum(["입문", "중급", "심화"]),
    frequency: z.enum(["연1회", "연2회", "기타"]),
    schedule: z.array(
      z.object({
        year: z.number().int(),
        round: z.string().nullable().optional(),
        registration_start: z.string().nullable().default(null),
        registration_end: z.string().nullable().default(null),
        exam_date: z.string().nullable().default(null),
        result_date: z.string().nullable().default(null),
      })
    ),
    fee: z.number().int().nullable().default(null),
    official_url: z.string().url(),
    summary: z.string(),
    pros: z.array(z.string()),
    data_status: z.enum(["unconfirmed", "confirmed"]),
  }),
});

export const collections = { contests };
