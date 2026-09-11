/**
 * Google Apps Script — RSVP endpoint for Rahma & Prima wedding site.
 *
 * Setup:
 *   1. Create a new Google Sheet, name a tab "RSVP".
 *      Header row (A1:F1): timestamp | name | attending | guests | message | userAgent
 *   2. Extensions → Apps Script → paste this file (Code.gs).
 *   3. Set SHEET_ID below to the sheet's ID (from its URL).
 *   4. Deploy → New deployment → Web app
 *        Execute as: Me
 *        Who has access: Anyone
 *      Copy the /exec URL → put into PUBLIC_RSVP_ENDPOINT (.env).
 *   5. Re-deploy whenever you change this script.
 */

const SHEET_ID = "PUT_YOUR_SHEET_ID_HERE";
const SHEET_TAB = "RSVP";

function doPost(e) {
  try {
    const p = e.parameter || {};
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_TAB);
    sheet.appendRow([
      p.timestamp || new Date().toISOString(),
      String(p.name || "").slice(0, 200),
      p.attending === "yes" ? "Hadir" : "Tidak Hadir",
      Number(p.guests || 1),
      String(p.message || "").slice(0, 1000),
      (e.parameter && e.parameter.userAgent) || "",
    ]);
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, service: "rahma-prima-rsvp" });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
