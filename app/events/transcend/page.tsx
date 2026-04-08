"use client";
import React from "react";
import NavBar from "@/components/NavBar";

const Y = "#F5C400", R = "#E83A2A", NK = "#0A0E1A", MK = "#111827", SLATE = "#1E2535";

const STATS = [
  { icon: "📅", label: "Date",      value: "March 16–20, 2025" },
  { icon: "📍", label: "Venue",     value: "ISTE Seminar Hall" },
  { icon: "👥", label: "Team Size", value: "1–5 Members" },
  { icon: "🏆", label: "Prize Pool",value: "₹10,000" },
];

const DAYS = [
  { name: "16th", sub: "Advent of Code (team of 5)",             color: Y,         tc: NK    },
  { name: "17th", sub: "Watt the Hangover (Team of 4 Mandatory)",color: Y,     tc: "#fff" },
  { name: "18th", sub: "Harry Potter and the Cursed Water (Team of 3)", color: R,  tc: "#fff" },
  { name: "19th", sub: "32nd Avenue (Team of 3–4)",              color: SLATE,     tc: "#fff" },
  { name: "20th", sub: "CAD-A-THON (Team of 2–3)",               color: "#006B3C", tc: "#fff" },
];

const EVENT_IMAGES = [
  {
    src: "/transcend/codeofadvert.jpeg",
    title: "Advent of Code",
    description: "A competitive programming sprint from Crypt. New problems drop every 15 minutes, pushing coders to stay sharp and climb the leaderboard.",
  },
  {
    src: "/transcend/watt.jpeg",
    title: "Watt the Hangover",
    description: "Teams collect points answering questions on circuits and electronics. Every decision counts when strategy and technical expertise collide.",
  },
  {
    src: "/transcend/harry.jpeg",
    title: "Harry Potter & the Cursed Water",
    description: "Teams take on magical challenges to collect ingredients and brew the potion that could save him. Strategy, speed, and a lil bit of wizardry will decide who wins.",
  },
  {
    src: "/transcend/32nd.jpeg",
    title: "32nd Avenue",
    description: "The high-stakes world of Monopoly & real estate in action — a fast-paced simulation of negotiation, development, and strategy. Navigate the market and watch out for deals that might not be what they seem.",
  },
  {
    src: "/transcend/cad.jpeg",
    title: "CAD-A-THON",
    description: "Tests your Rapid Prototyping and Creative Logical thinking through a quiz round followed by a 20-hour CAD sprint. Design, prototype, and bring your creativity to life using Autodesk Fusion 360.",
  },
];

const WINNERS = [
  {
    event: "Advent of Code",
    color: Y,
    tc: NK,
    podium: [
      { place: "1st", label: "Nethunters", members: ["Mayank Kothari","Sudarshan Sinha","Rishabh Mishra","Supreeth R M","P J Abhilash"] },
      { place: "2nd", label: "Excess Skill Issue", members: ["Ashish","Pritham Noronha","Chinmaya Sahu","Chirag R","Dhanush Nayak","Muhammad Khalandar"] },
      { place: "3rd", label: "Incigo", members: ["Raj Bhalse","Manraj Singh","Aditya Saraswat","Kavish Gupta","Mohammad Razeen"] },
    ],
  },
  {
    event: "Harry Potter and the Cursed Water",
    color: R,
    tc: "#fff",
    podium: [
      { place: "1st", label: "CATALYST – eyes", members: ["Arnavraj","Devansh","Yudveer"] },
      { place: "2nd", label: "Order of the Phoenix", members: ["Ananth B","Aryan Rajak","Pratham Gadiyar"] },
      { place: "3rd", label: "A to Z DSA Course", members: ["Paritosh Naithani","Keshave","Reyansh"] },
    ],
  },
  {
    event: "Watt the Hangover",
    color: Y,
    tc: Y,
    podium: [
      { place: "1st", label: "E SEE E", members: ["Amogh S Nadig","Sanath Chandra Mokkapati","Hemesh Rao Pole","Sai Sharan S K"] },
      { place: "2nd", label: "SEQ AND SERIES", members: ["Ananya Devadiga","Sharnika","Anahita","Harshit Kumar"] },
      { place: "3rd", label: "Last Minute Airbenders", members: ["Prajna G Rao","Shraddha Iti","Pooja Pranathi"] },
    ],
  },
  {
    event: "CAD-A-THON",
    color: "#006B3C",
    tc: "#fff",
    podium: [
      { place: "1st", label: "NEGATIVE SAFETY FACTOR", members: ["Ninad","Abhishek","Ashwin"] },
      { place: "2nd", label: "CADILLAC", members: ["Dron","Nilay"] },
      { place: "3rd", label: "ANONYMOUS", members: ["Vihan"] },
    ],
  },
  {
    event: "32nd Avenue",
    color: Y,
    tc: "#fff",
    podium: [
      { place: "1st", label: "PRACHAND JWALA", members: ["Suyash","Dhruv","Shivam","Mehul"] },
      { place: "2nd", label: "LIVICE", members: ["Anubhav","Tanush","Kaushik","Harish"] },
      { place: "3rd", label: "CONCRETE SYNDICATE", members: ["Ayush Jaiswal","Ayush Anand","Garvit Biloniya","Shaleeth","Joseph Matthews"] },
    ],
  },
];

const PLACE_COLORS: Record<string, { bg: string; label: string }> = {
  "1st": { bg: Y,       label: NK   },
  "2nd": { bg: "#C0C0C0", label: NK },
  "3rd": { bg: "#CD7F32", label: NK },
};

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

/* Image hover overlay */
.img-card {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  cursor: pointer;
}
.img-card img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform 0.4s ease;
}
.img-card:hover img { transform: scale(1.07); }
.img-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 60%, transparent 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
}
.img-card:hover .img-overlay { opacity: 1; }
.img-overlay h4 {
  font-family: 'Bebas Neue', cursive;
  font-size: 22px;
  letter-spacing: 2px;
  color: #F5C400;
  margin-bottom: 6px;
}
.img-overlay p {
  font-size: 13px;
  color: rgba(255,255,255,0.8);
  line-height: 1.5;
}

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

.t-node { position: relative; transition: background 0.2s; }
.t-node::after {
  content: ''; position: absolute;
  right: -1px; top: 50%; transform: translateY(-50%);
  width: 1px; height: 40%; background: rgba(255,255,255,0.05);
}
.t-node:last-child::after { display: none; }
.t-node:last-child { border-right: none !important; }

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

/* Winner cards */
.winner-card {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 14px;
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;
}
.winner-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);
}
.place-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px; height: 36px;
  border-radius: 50%;
  font-family: 'Bebas Neue', cursive;
  font-size: 16px;
  flex-shrink: 0;
  box-shadow: 0 3px 10px rgba(0,0,0,0.4);
}
.member-chip {
  display: inline-block;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  padding: 3px 12px;
  font-size: 13px;
  color: rgba(255,255,255,0.72);
  margin: 3px;
}

@media(max-width: 960px) {
  .hero-inner { padding: 80px 24px 120px !important; }
  .stats-strip-grid { grid-template-columns: 1fr 1fr !important; }
  .section-pad { padding: 72px 24px !important; }
  .timeline-flex { flex-direction: column !important; border-radius: 14px !important; }
  .t-node { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06) !important; }
  .footer-inner { padding: 24px !important; flex-direction: column; gap: 20px; text-align: center; }
  .hero-lego-top, .hero-lego-bottom { display: none !important; }
  .winners-grid { grid-template-columns: 1fr !important; }
  .images-grid { grid-template-columns: 1fr 1fr !important; }
}
`;

export default function TranscendPage() {
  return (
    <>
      
      <style>{CSS}</style>
      <NavBar />
      <div className="font-dm overflow-x-hidden antialiased" style={{ background: NK, color: "#fff", paddingTop:"100px" }}>

        <section
          className="hero-inner relative flex flex-col items-center justify-center overflow-hidden"
          style={{ minHeight: "95vh", padding: "100px 80px", background: `linear-gradient(120deg, ${NK} 0%, ${MK} 100%)`, textAlign: "center" }}
        >
          <div className="hero-dot-bg" />

          {/* LEGO blocks — TOP LEFT vertical stack */}
          <div
            className="hero-lego-top absolute flex flex-col z-10"
            style={{ top: 40, left: 60, gap: 14 }}
          >
            {[Y, SLATE, R, "#006B3C", Y].map((bg, i) => (
              <div
                key={i}
                className={`lego-block delay-${i % 5}`}
                style={{ width: 160, height: 40, borderRadius: 8, background: bg }}
              />
            ))}
          </div>

          {/* LEGO blocks — BOTTOM LEFT vertical stack */}
          

          {/* LEGO blocks — TOP RIGHT vertical stack */}
          

          {/* LEGO blocks — BOTTOM RIGHT vertical stack */}
          <div
            className="hero-lego-bottom absolute flex flex-col z-10"
            style={{ bottom: 40, right: 60, gap: 14 }}
          >
            {["#006B3C", R, Y, SLATE, "#006B3C"].map((bg, i) => (
              <div
                key={i}
                className={`lego-block delay-${i % 5}`}
                style={{ width: 160, height: 40, borderRadius: 8, background: bg }}
              />
            ))}
          </div>

          {/* Glow */}
          <div
            className="absolute pointer-events-none rounded-full"
            style={{
              left: "50%", top: "50%", transform: "translate(-50%, -50%)",
              width: 600, height: 600,
              background: "radial-gradient(circle, rgba(245,196,0,0.07) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10" style={{ maxWidth: 680 }}>
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

            <p style={{ color: "rgba(255,255,255,0.55)", maxWidth: 460, lineHeight: 1.85, fontSize: 18, fontWeight: 300, marginBottom: 36, margin: "0 auto 36px" }}>
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
            >completed</button>
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
          {/* 5 image cards */}
          <div
            className="images-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}
          >
            {EVENT_IMAGES.map((img) => (
              <div key={img.title} className="img-card">
                <img src={img.src} alt={img.title} />
                <div className="img-overlay">
                  <h4>{img.title}</h4>
                  <p>{img.description}</p>
                </div>
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

        {/* ── WINNERS ── */}
        <section
          className="cta-dot-bg relative overflow-hidden border-t border-[rgba(255,255,255,0.04)]"
          style={{ padding: "100px 80px", background: `linear-gradient(120deg, ${MK} 0%, ${NK} 100%)` }}
        >
          <div className="relative z-10">
            <div className="font-bebas uppercase text-center" style={{ fontSize: 15, letterSpacing: 5, color: Y, marginBottom: 10 }}>Hall of Fame</div>
            <h2
              className="font-bebas text-white text-center"
              style={{ fontSize: "clamp(52px, 7vw, 84px)", letterSpacing: 4, marginBottom: 16, textShadow: "3px 3px 0 rgba(0,0,0,0.2)" }}
            >🏆 Winners</h2>
            <p className="text-center" style={{ fontSize: 18, color: "rgba(255,255,255,0.45)", lineHeight: 1.85, fontWeight: 300, maxWidth: 500, margin: "0 auto 64px" }}>
              Congratulations to all the champions who rose to the challenge across five epic days.
            </p>

            {WINNERS.map((ev) => (
              <div key={ev.event} style={{ marginBottom: 64 }}>
                {/* Event header */}
                <div className="flex items-center" style={{ gap: 16, marginBottom: 28 }}>
                  <div style={{ height: 3, width: 32, background: ev.color, borderRadius: 2, flexShrink: 0 }} />
                  <h3
                    className="font-bebas"
                    style={{ fontSize: 32, letterSpacing: 3, color: ev.color }}
                  >{ev.event}</h3>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
                </div>

                {/* Podium cards */}
                <div
                  className="winners-grid"
                  style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}
                >
                  {ev.podium.map((p) => {
                    const badge = PLACE_COLORS[p.place];
                    return (
                      <div key={p.place} className="winner-card">
                        {/* Card top bar in event color */}
                        <div style={{ height: 4, background: badge.bg }} />
                        <div style={{ padding: "24px" }}>
                          <div className="flex items-center" style={{ gap: 14, marginBottom: 16 }}>
                            <div
                              className="place-badge font-bebas"
                              style={{ background: badge.bg, color: badge.label }}
                            >{p.place}</div>
                            <div>
                              <div className="font-bebas text-white" style={{ fontSize: 20, letterSpacing: 1, lineHeight: 1.1 }}>{p.label}</div>
                            </div>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
                            {p.members.map((m) => (
                              <span key={m} className="member-chip">{m}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer
          className="footer-inner flex items-center justify-between min-h-[200px]"
          style={{ background: "#04050D", padding: "24px 80px", borderTop: "2px solid rgba(245,196,0,0.2)" }}
        >
          <div>
            <div className="font-bebas" style={{ fontSize: 17, letterSpacing: 5, color: Y }}>ISTE NITK</div>
            <div style={{ fontSize: 11, color: "rgba(255, 255, 255, 0.45)", marginTop: 3 }}>Indian Society for Technical Education · NITK Surathkal</div>
          </div>
          <div className="flex" style={{ gap: 28 }}>
            {["Home","Events","Instagram","Contact"].map(l => (
              <a
                key={l} href="#"
                className="no-underline transition-colors duration-200 hover:text-[#F5C400]"
                style={{ fontSize: 11, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255, 255, 255, 0.53)" }}
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
