import { useState } from "react";
import { bankAccounts } from "@/lib/gift";

type Props = { eyebrow: string; title: string; body: string; copy: string; copied: string };

export default function Gift({ eyebrow, title, body, copy, copied }: Props) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = async (n: string, i: number) => {
    try {
      await navigator.clipboard.writeText(n);
      setCopiedIdx(i);
      setTimeout(() => setCopiedIdx(null), 1800);
    } catch {}
  };

  return (
    <section id="gift" className="relative bg-ink text-cream py-28 md:py-40">
      <div className="container-fluid max-w-2xl mx-auto text-center">
        <p className="eyebrow text-cream/60">{eyebrow}</p>
        <h2 className="display-italic text-5xl md:text-7xl mt-4 mb-6 text-cream">{title}</h2>
        <p className="font-serif italic text-lg text-cream/80 leading-relaxed max-w-lg mx-auto">{body}</p>

        <div className="mt-12 space-y-4">
          {bankAccounts.map((a, i) => (
            <div
              key={a.number}
              className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5 border border-cream/15 bg-ink-soft/50 backdrop-blur"
            >
              <div className="text-left min-w-0">
                <p className="eyebrow text-burgundy-rose">{a.bank}</p>
                <p className="font-serif text-lg md:text-xl mt-1 truncate">{a.name}</p>
                <p className="font-mono text-sm text-cream/70 mt-1">{a.number}</p>
              </div>
              <button
                onClick={() => handleCopy(a.number, i)}
                className="eyebrow shrink-0 px-4 py-2 border border-cream/25 rounded-full hover:bg-cream hover:text-ink transition"
              >
                {copiedIdx === i ? copied : copy}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
