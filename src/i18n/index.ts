export const locales = ["id", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "id";

import id from "./id.json";
import en from "./en.json";

export const dict = { id, en } as const;

export function getLocale(url: URL): Locale {
  const seg = url.pathname.split("/")[1];
  return (locales as readonly string[]).includes(seg) ? (seg as Locale) : defaultLocale;
}

export function t(locale: Locale, key: string): string {
  const parts = key.split(".");
  let node: any = dict[locale];
  for (const p of parts) node = node?.[p];
  return typeof node === "string" ? node : key;
}

export function localizedPath(locale: Locale, path: string = "/") {
  if (locale === defaultLocale) return path;
  return `/${locale}${path === "/" ? "" : path}`;
}
