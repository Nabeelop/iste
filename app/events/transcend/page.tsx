"use client";
import React from "react";

const Y = "#F5C400", R = "#E83A2A", NK = "#0A0E1A", MK = "#111827", SLATE = "#1E2535";
const STATS = [
  { icon: "📅", label: "Date",      value: "March 16–20, 2025" },
  { icon: "📍", label: "Venue",     value: "ISTE Seminar Hall" },
  { icon: "👥", label: "Team Size", value: "1–5 Members" },
  { icon: "🏆", label: "Prize Pool",value: "₹10,000" },
];
const PILLARS = [
  { icon: "🧠", name: "Innovate",  sub: "Think outside the blocks",  accent: R },
  { icon: "🧱", name: "Build",     sub: "Create with LEGO logic",    accent: Y },
  { icon: "⚡", name: "Compete",   sub: "Win challenges",            accent: "#4A9EFF" },
  { icon: "🚀", name: "Transcend", sub: "Break your limits",         accent: "#00C896" },
];
const DAYS = [
  { name: "16th", sub: "Advent of Code(team of 5)",    color: Y,         tc: NK    },
  { name: "17th", sub: "Watt the Hangover(Team of 4 Mandatory)", color: SLATE,     tc: "#fff" },
  { name: "18th", sub: "Harry Potter and the Cursed Water (Team of 3)",      color: R,         tc: "#fff" },
  { name: "19th", sub: "32nd Avenue(Team of 3–4)",       color: SLATE,     tc: "#fff" },
  { name: "20th", sub: "CAD-A-THON(Team of 2–3)",        color: "#006B3C", tc: "#fff" },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,600;0,700&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.font-bebas { font-family: 'Bebas Neue', cursive; }
.font-dm    { font-family: 'DM Sans', sans-serif; }

@keyframes blink {
  0%,100% { opacity:1; transform:scale(1); }
  50% { opacity:0.3; transform:scale(1.7); }
}
@keyframes float {
  0%,100% { transform: translateY(0) rotate(-1deg); }
  50%      { transform: translateY(-10px) rotate(1deg); }
}
.anim-blink { animation: blink 2s ease-in-out infinite; }
.anim-float { animation: float 4s ease-in-out infinite; }
.delay-0 { animation-delay: 0s; }
.delay-1 { animation-delay: 0.6s; }
.delay-2 { animation-delay: 1.1s; }
.delay-3 { animation-delay: 1.7s; }
.delay-4 { animation-delay: 2.2s; }

/* dot grid backgrounds */
.hero-dot-bg {
  position: absolute; inset: 0;
  background-image: radial-gradient(rgba(245,196,0,0.18) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
  opacity: 0.55;
}
.cta-dot-bg::before {
  content: '';
  position: absolute; inset: 0;
  background-image: radial-gradient(rgba(245,196,0,0.12) 1.5px, transparent 1.5px);
  background-size: 26px 26px;
  opacity: 0.4;
}

/* lego block studs */
.lego-block {
  position: relative;
  animation: float 4s ease-in-out infinite;
  box-shadow: 0 8px 28px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.12);
}
.lego-block::after {
  content: '';
  position: absolute; top: -9px; left: 18px;
  width: 11px; height: 11px; border-radius: 50%;
  background: inherit; filter: brightness(0.78);
  box-shadow: 22px 0 0 currentColor, 44px 0 0 currentColor;
}

/* card top accent bar via CSS var */
.card-accent {
  position: relative; overflow: hidden;
  transition: transform 0.25s ease, background 0.2s, box-shadow 0.25s;
}
.card-accent::before {
  content: ''; position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: var(--accent, #F5C400);
  opacity: 0; transition: opacity 0.2s;
}
.card-accent:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(0,0,0,0.45); }
.card-accent:hover::before { opacity: 1; }

/* timeline node connector */
.t-node { position: relative; transition: background 0.2s; }
.t-node::after {
  content: ''; position: absolute;
  right: -1px; top: 50%; transform: translateY(-50%);
  width: 1px; height: 40%; background: rgba(255,255,255,0.05);
}
.t-node:last-child::after { display: none; }
.t-node:last-child { border-right: none !important; }

/* stud strip */
.stud-strip {
  display: flex; overflow: hidden; height: 22px;
  border-top: 2px solid rgba(0,0,0,0.4);
  border-bottom: 2px solid rgba(0,0,0,0.4);
}
.stud-strip span {
  min-width: 18px; height: 18px; border-radius: 50%;
  margin: 2px 3px; flex-shrink: 0;
  border: 2px solid rgba(0,0,0,0.22);
  background: rgba(255,255,255,0.18);
}

/* responsive */
@media(max-width: 960px) {
  .lego-stack { display: none !important; }
  .nav-links-wrap { display: none !important; }
  .hero-inner { padding: 80px 24px 120px !important; }
  .stats-strip-grid { grid-template-columns: 1fr 1fr !important; }
  .section-pad { padding: 72px 24px !important; }
  .timeline-flex { flex-direction: column !important; border-radius: 14px !important; }
  .t-node { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
  .footer-inner { padding: 24px !important; flex-direction: column; gap: 20px; text-align: center; }
}
`;

export default function TranscendPage() {
  return (
    <>
      <style>{CSS}</style>
      <div className="font-dm overflow-x-hidden antialiased" style={{ background: NK, color: "#fff" }}>

        <section
          className="hero-inner relative flex items-center overflow-hidden"
          style={{ minHeight: "95vh", padding: "100px 80px", background: `linear-gradient(120deg, ${NK} 0%, ${MK} 100%)` }}
        >
          <div className="hero-dot-bg" />
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              left: -160, top: "50%", transform: "translateY(-50%)",
              width: 560, height: 560,
              background: "radial-gradient(circle, rgba(245,196,0,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10" style={{ maxWidth: 620 }}>
            {/* badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full font-semibold uppercase"
              style={{ border: "1px solid rgba(245,196,0,0.35)", padding: "6px 18px", marginBottom: 28, fontSize: 15, letterSpacing: 3, color: Y }}
            >
              <span className="anim-blink rounded-full inline-block" style={{ width: 6, height: 6, background: Y }} />
              ISTE NITK · Flagship Event 2026
            </div>

            <h1
              className="font-bebas text-white"
              style={{ fontSize: "clamp(88px, 11vw, 140px)", lineHeight: 0.88, letterSpacing: 4, marginBottom: 14, textShadow: `6px 6px 0 ${R}, 10px 10px 0 rgba(0,0,0,0.45)` }}
            >TRANSCEND</h1>

            <span
              className="font-bebas block"
              style={{ fontSize: 20, letterSpacing: 10, color: "rgba(255,255,255,0.38)", marginBottom: 22 }}
            >BUILD · BREAK · BEYOND</span>

            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 460, lineHeight: 1.85, fontSize: 18, fontWeight: 300, marginBottom: 36 }}>
              A week of high-stakes strategy, technical challenges, and cinematic chaos.
              Five explosive days testing creativity, teamwork, and quick thinking.
            </p>

            <button
              className="font-bebas inline-block cursor-pointer"
              style={{
                background: Y, color: NK, padding: "14px 48px", border: "none",
                fontSize: 18, letterSpacing: 2.5, borderRadius: 5, fontWeight: 900,
                borderBottom: "4px solid #a87e00",
                boxShadow: "0 8px 30px rgba(245,196,0,0.25)",
                transition: "transform 0.15s, box-shadow 0.15s, border-bottom-width 0.1s",
              }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-3px)"; b.style.boxShadow = "0 14px 36px rgba(245,196,0,0.35)"; b.style.borderBottomWidth = "3px"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "none"; b.style.boxShadow = "0 8px 30px rgba(245,196,0,0.25)"; b.style.borderBottomWidth = "4px"; }}
            >Register Now</button>
          </div>

          {/* LEGO BLOCKS */}
          <div
            className="lego-stack absolute flex-col z-10"
            style={{ right: 80, top: "50%", transform: "translateY(-50%)", display: "flex", gap: 16 }}
          >
            {[
              { bg: Y,         delay: "delay-0" },
              { bg: SLATE,     delay: "delay-1" },
              { bg: "#253555", delay: "delay-2" },
              { bg: R,         delay: "delay-3" },
              { bg: Y,         delay: "delay-4" },
            ].map(({ bg, delay }, i) => (
              <div key={i} className={`lego-block ${delay}`} style={{ width: 180, height: 46, borderRadius: 9, background: bg }} />
            ))}
          </div>

        </section>

        <StudStrip color={SLATE} />

        {/* ── ABOUT ── */}
        <section className="section-pad border-t border-[rgba(255,255,255,0.04)]" style={{ padding: "96px 80px", background: MK }}>
          <div className="font-bebas uppercase" style={{ fontSize: 15, letterSpacing: 5, color: R, marginBottom: 10 }}>About the Event</div>
          <h2 className="font-bebas text-white" style={{ fontSize: 58, lineHeight: 0.92, letterSpacing: 2, marginBottom: 14 }}>What is Transcend?</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.48)", lineHeight: 1.85, fontWeight: 300, maxWidth: 560, marginBottom: 48 }}>
            Transcend is ISTE NITK&apos;s flagship event designed to push your limits —
            from brainstorming to brick-building, every step brings you closer to championship glory.
          </p>
          <div className="grid mt-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
            {PILLARS.map(p => (
              <div
                key={p.name}
                className="card-accent backdrop-blur-sm"
                style={{
                  "--accent": p.accent,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  padding: "28px 24px 24px", borderRadius: 14,
                } as React.CSSProperties}
              >
                <span style={{ fontSize: 30, marginBottom: 14, display: "block" }}>{p.icon}</span>
                <h3 className="font-bebas text-white" style={{ fontSize: 22, letterSpacing: 1.5, marginBottom: 6 }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.42)", lineHeight: 1.7 }}>{p.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <StudStrip color={NK} />

        {/* ── EVENT INFO ── */}
        <section className="section-pad border-t border-[rgba(255,255,255,0.04)]" style={{ padding: "96px 80px" }}>
          <div className="font-bebas uppercase" style={{ fontSize: 15, letterSpacing: 5, color: Y, marginBottom: 10 }}>Event Info</div>
          <h2 className="font-bebas text-white" style={{ fontSize: 58, lineHeight: 0.92, letterSpacing: 2, marginBottom: 14 }}>Event Details</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.48)", lineHeight: 1.85, fontWeight: 300, maxWidth: 560, marginBottom: 48 }}>
            Everything you need to know before you register and show up ready to compete.
          </p>
          <div className="grid mt-2" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 18 }}>
            {STATS.map(s => (
              <div
                key={s.label}
                className="flex items-center"
                style={{
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                  padding: "28px 24px", borderRadius: 14, gap: 18,
                  transition: "transform 0.25s, background 0.2s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.055)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{ width: 48, height: 48, borderRadius: 10, background: "rgba(245,196,0,0.1)", border: "1px solid rgba(245,196,0,0.18)", fontSize: 22 }}
                >{s.icon}</div>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: 2.5, textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: 5 }}>{s.label}</div>
                  <div className="font-bebas text-white" style={{ fontSize: 22, letterSpacing: 1 }}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <StudStrip color={SLATE} />

        {/* ── TIMELINE ── */}
        <section className="section-pad border-t border-[rgba(255,255,255,0.04)]" style={{ padding: "96px 80px", background: MK }}>
          <div className="font-bebas uppercase" style={{ fontSize: 15, letterSpacing: 5, color: R, marginBottom: 10 }}>Schedule</div>
          <h2 className="font-bebas text-white" style={{ fontSize: 58, lineHeight: 0.92, letterSpacing: 2, marginBottom: 14 }}>Timeline</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.48)", lineHeight: 1.85, fontWeight: 300, maxWidth: 560, marginBottom: 48 }}>
            Five days, five unique challenges. Each day brings a completely different problem — stay sharp from start to finish.
          </p>
          <div
            className="timeline-flex flex mt-2 overflow-hidden"
            style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)" }}
          >
            {DAYS.map((d, i) => (
              <div
                key={d.name}
                className="t-node flex-1 text-center hover:bg-[rgba(255,255,255,0.04)]"
                style={{ padding: "32px 14px", borderRight: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="font-bebas" style={{ fontSize: 20, letterSpacing: 3, color: "rgba(255,255,255,0.3)", marginBottom: 0 }}>DAY {i + 1}</div>
                <div
                  className="font-bebas mx-auto flex items-center justify-center"
                  style={{ width: 36, height: 36, borderRadius: 8, marginBottom: 12, fontSize: 12, background: d.color, color: d.tc, borderBottom: "3px solid rgba(0,0,0,0.3)", boxShadow: "0 4px 12px rgba(0,0,0,0.4)" }}
                >{i + 1}</div>
                <h2 className="font-bebas text-white" style={{ fontSize: 35, letterSpacing: 1, marginBottom: 6 }}>{d.name}</h2>
                <p style={{ fontSize: 18, color: "rgba(255,255,255,0.35)", lineHeight: 1.5 }}>{d.sub}</p>
              </div>
            ))}
            
          </div>
          
        </section>

        <StudStrip color={Y} />

        {/* ── CTA ── */}
        <section
          className="cta-dot-bg text-center relative overflow-hidden border-t border-[rgba(255,255,255,0.04)]"
          style={{ padding: "120px 20px", background: `linear-gradient(120deg, ${MK} 0%, ${NK} 100%)` }}
        >
          <div className="relative z-10">
            <h2
              className="font-bebas text-white"
              style={{ fontSize: "clamp(52px, 7vw, 84px)", letterSpacing: 4, marginBottom: 14, textShadow: "3px 3px 0 rgba(0,0,0,0.2)" }}
            >Ready to Transcend?</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.48)", marginBottom: 40, fontWeight: 300 }}>
              Grab your bricks, bring your ideas, and get ready to build the future.
            </p>
            <button
              className="font-bebas inline-block cursor-pointer"
              style={{
                background: Y, color: NK, padding: "16px 72px", border: "none",
                fontSize: 22, letterSpacing: 3, fontWeight: 900,
                borderRadius: 6, borderBottom: "5px solid #a87e00",
                boxShadow: "0 10px 36px rgba(245,196,0,0.3)",
                transition: "transform 0.15s, box-shadow 0.15s, border-bottom-width 0.1s",
              }}
              onMouseEnter={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "translateY(-4px)"; b.style.boxShadow = "0 18px 48px rgba(245,196,0,0.42)"; b.style.borderBottomWidth = "3px"; }}
              onMouseLeave={e => { const b = e.currentTarget as HTMLButtonElement; b.style.transform = "none"; b.style.boxShadow = "0 10px 36px rgba(245,196,0,0.3)"; b.style.borderBottomWidth = "5px"; }}
            >Register Now</button>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          className="footer-inner flex items-center justify-between"
          style={{ background: "#04050D", padding: "24px 80px", borderTop: "2px solid rgba(245,196,0,0.2)" }}
        >
          <div>
            <div className="font-bebas" style={{ fontSize: 17, letterSpacing: 5, color: Y }}>ISTE NITK</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", marginTop: 3 }}>Indian Society for Technical Education · NITK Surathkal</div>
          </div>
          <div className="flex" style={{ gap: 28 }}>
            {["Home","Events","Instagram","Contact"].map(l => (
              <a
                key={l} href="#"
                className="no-underline transition-colors duration-200 hover:text-[#F5C400]"
                style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}
              >{l}</a>
            ))}
          </div>
        </footer>

      </div>
    </>
  );
}

function StudStrip({ color }: { color: string }) {
  return (
    <div className="stud-strip" style={{ background: color }}>
      {Array.from({ length: 120 }).map((_, i) => <span key={i} />)}
    </div>
  );
}
