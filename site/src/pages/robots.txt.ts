import type { APIRoute } from "astro";
import { SITE_URL } from "../config.ts";

const BASE = import.meta.env.BASE_URL;

export const prerender = true;

export const GET: APIRoute = () => {
  const sitemapUrl = `${SITE_URL}${BASE}sitemap-index.xml`;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
