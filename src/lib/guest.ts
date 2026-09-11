export type Moment = "akad" | "resepsi" | "both";

export type GuestParams = {
  guestName: string | null;
  moment: Moment;
};

export function parseGuestParams(url: URL): GuestParams {
  const raw = url.searchParams.get("to");
  const guestName = raw ? decodeURIComponent(raw).trim().slice(0, 120) : null;

  const m = (url.searchParams.get("momen") || "").toLowerCase();
  const moment: Moment =
    m === "akad" ? "akad" :
    m === "resepsi" || m === "reception" ? "resepsi" :
    "both";

  return { guestName, moment };
}
