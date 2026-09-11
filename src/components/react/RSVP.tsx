import { useState } from "react";

type Dict = {
  eyebrow: string;
  title: string;
  name: string;
  attendance: string;
  attending: string;
  notAttending: string;
  guests: string;
  guestsHint: string;
  message: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
};

export default function RSVP({ dict, endpoint }: { dict: Dict; endpoint: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [form, setForm] = useState({
    name: "",
    attending: "yes",
    guests: 1,
    message: "",
  });

  const set = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !endpoint) return;
    setStatus("sending");
    try {
      const body = new URLSearchParams({
        name: form.name,
        attending: form.attending,
        guests: String(form.guests),
        message: form.message,
        timestamp: new Date().toISOString(),
      });
      await fetch(endpoint, {
        method: "POST",
        mode: "no-cors",
        body,
      });
      setStatus("ok");
      setForm({ name: "", attending: "yes", guests: 1, message: "" });
    } catch {
      setStatus("err");
    }
  };

  return (
    <section id="rsvp" className="relative bg-ink text-cream py-28 md:py-40">
      <div className="container-fluid max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="eyebrow text-cream/60">{dict.eyebrow}</p>
          <h2 className="display-italic text-5xl md:text-6xl mt-4 text-cream">{dict.title}</h2>
        </div>

        <form onSubmit={submit} className="space-y-6">
          <Field label={dict.name}>
            <input
              required
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              className="w-full bg-transparent border-b border-cream/30 focus:border-burgundy-rose py-3 outline-none font-serif text-lg"
            />
          </Field>

          <Field label={dict.attendance}>
            <div className="flex gap-3 mt-3">
              {[
                { v: "yes", l: dict.attending },
                { v: "no", l: dict.notAttending },
              ].map((o) => (
                <button
                  type="button"
                  key={o.v}
                  onClick={() => set("attending", o.v)}
                  className={`eyebrow flex-1 py-3 border rounded-full transition ${
                    form.attending === o.v
                      ? "border-burgundy-rose bg-burgundy text-cream"
                      : "border-cream/25 text-cream/70 hover:border-cream"
                  }`}
                >
                  {o.l}
                </button>
              ))}
            </div>
          </Field>

          {form.attending === "yes" && (
            <Field label={dict.guests} hint={dict.guestsHint}>
              <div className="flex items-center gap-4 mt-3">
                {[1, 2].map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => set("guests", n)}
                    className={`w-14 h-14 rounded-full font-serif text-xl transition ${
                      form.guests === n
                        ? "bg-burgundy text-cream border-2 border-burgundy-rose"
                        : "border border-cream/25 text-cream/70 hover:border-cream"
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            </Field>
          )}

          <Field label={dict.message}>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              className="w-full bg-transparent border-b border-cream/30 focus:border-burgundy-rose py-3 outline-none font-serif text-base resize-none"
            />
          </Field>

          <button
            type="submit"
            disabled={status === "sending"}
            className="eyebrow w-full py-4 bg-burgundy text-cream rounded-full hover:bg-burgundy-light transition disabled:opacity-60"
          >
            {status === "sending" ? dict.submitting : dict.submit}
          </button>

          {status === "ok" && (
            <p className="text-center text-burgundy-rose font-serif italic">{dict.success}</p>
          )}
          {status === "err" && (
            <p className="text-center text-red-400 font-serif italic">{dict.error}</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="eyebrow text-cream/60">{label}</span>
      {hint && <span className="ml-2 text-xs text-cream/40 italic">{hint}</span>}
      {children}
    </label>
  );
}
