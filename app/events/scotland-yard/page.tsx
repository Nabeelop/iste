"use client";
import React from "react";

const GOLD = "#C8860A";
const SAND = "#E8C87A";
const RUST = "#8B2500";
const INK = "#0D0800";
const PAPYRUS = "#1C1000";
const STONE = "#1E160A";

const STATS = [
  { icon: "📅", label: "Date",        value: "21 September 2025" },
  { icon: "📍", label: "Venue",       value: "LHC A" },
  { icon: "👥", label: "Eligibility", value: "BTech First Years" },
  { icon: "🏆", label: "Prize Pool",  value: "₹7,500" },
];

const PILLARS = [
  { icon: "🔍", name: "Decode",    sub: "Decipher hidden clues",        accent: GOLD },
  { icon: "🗺️", name: "Navigate",  sub: "Traverse the campus trails",   accent: RUST },
  { icon: "⚖️", name: "Weigh",     sub: "Face the judgement of Osiris", accent: "#6B4C00" },
  { icon: "👁️", name: "Survive",   sub: "Escape before doom falls",     accent: "#5A1A00" },
];

const ROUNDS = [
  { name: "The Hall of Maat",   sub: "Gather and receive your sacred scrolls",          color: GOLD,      tc: INK    },
  { name: "The Eye Opens",      sub: "Decode the first cipher — find the hidden path",  color: STONE,     tc: "#fff" },
  { name: "The Duat Descent",   sub: "Navigate campus checkpoints under time pressure", color: RUST,      tc: "#fff" },
  { name: "The Heart Weighing", sub: "Solve the final riddle — logic under fire",       color: STONE,     tc: "#fff" },
  { name: "Osiris Judges",      sub: "The last team standing claims glory",             color: "#3B2200", tc: SAND   },
];

const POCS = [
  { name: "Sahil",  phone: "9508883828" },
  { name: "Nisarg", phone: "8866475747" },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
.font-cinzel  { font-family: 'Cinzel', serif; }
.font-crimson { font-family: 'Crimson Pro', serif; }

@keyframes flicker {
  0%,100% { opacity:1; transform:scale(1); }
  45%     { opacity:0.4; transform:scale(1.5); }
  55%     { opacity:0.9; transform:scale(1.2); }
}
@keyframes drift {
  0%,100% { transform:translateY(0) rotate(-0.5deg); }
  50%     { transform:translateY(-14px) rotate(0.5deg); }
}
@keyframes driftSlow {
  0%,100% { transform:translateY(0); }
  50%     { transform:translateY(-8px); }
}
@keyframes shimmer {
  0%   { background-position:-200% center; }
  100% { background-position:200% center; }
}
@keyframes eyePulse {
  0%,100% { opacity:0.18; transform:scale(1); }
  50%     { opacity:0.32; transform:scale(1.05); }
}
@keyframes torchFlame {
  0%,100% { opacity:0.85; transform:scaleY(1) scaleX(1); }
  33%     { opacity:0.65; transform:scaleY(1.12) scaleX(0.88); }
  66%     { opacity:0.95; transform:scaleY(0.94) scaleX(1.06); }
}

.anim-flicker   { animation: flicker 3s ease-in-out infinite; }
.anim-drift     { animation: drift 5s ease-in-out infinite; }
.anim-driftSlow { animation: driftSlow 7s ease-in-out infinite; }
.anim-eyePulse  { animation: eyePulse 4s ease-in-out infinite; }
.torch-flame    { animation: torchFlame 1.2s ease-in-out infinite; transform-origin: center bottom; }
.delay-0 { animation-delay:0s; }
.delay-1 { animation-delay:0.8s; }
.delay-2 { animation-delay:1.5s; }
.delay-3 { animation-delay:2.3s; }
.delay-4 { animation-delay:3s; }

.papyrus-bg {
  position:absolute; inset:0;
  background-image:
    radial-gradient(rgba(200,134,10,0.12) 1px, transparent 1px),
    radial-gradient(rgba(200,134,10,0.06) 1px, transparent 1px);
  background-size:30px 30px,15px 15px;
  background-position:0 0,15px 15px;
  opacity:0.6;
}
.shimmer-text {
  background:linear-gradient(90deg,${SAND} 0%,#fff 40%,${GOLD} 60%,${SAND} 100%);
  background-size:200% auto;
  -webkit-background-clip:text; -webkit-text-fill-color:transparent;
  background-clip:text; animation:shimmer 4s linear infinite;
}
.hiero-strip {
  display:flex; overflow:hidden; height:26px;
  border-top:1.5px solid rgba(200,134,10,0.35);
  border-bottom:1.5px solid rgba(200,134,10,0.35);
  align-items:center;
}
.hiero-strip span {
  min-width:22px; height:18px; margin:0 2px; flex-shrink:0;
  border:1px solid rgba(200,134,10,0.22);
  background:rgba(200,134,10,0.08); border-radius:2px;
  display:flex; align-items:center; justify-content:center;
  font-size:11px; color:rgba(200,134,10,0.5);
}
.card-egypt {
  position:relative; overflow:hidden;
  transition:transform 0.28s ease,background 0.2s,box-shadow 0.28s;
}
.card-egypt::before {
  content:''; position:absolute; top:0; left:0; right:0; height:2px;
  background:var(--accent,${GOLD}); opacity:0; transition:opacity 0.2s;
}
.card-egypt:hover { transform:translateY(-6px); box-shadow:0 24px 60px rgba(0,0,0,0.5); }
.card-egypt:hover::before { opacity:1; }
.t-node {
  position:relative; transition:background 0.2s;
  border-right:1px solid rgba(200,134,10,0.1);
}
.t-node:last-child { border-right:none; }
.ankh-glow {
  position:absolute; pointer-events:none; border-radius:50%;
  background:radial-gradient(circle,rgba(200,134,10,0.10) 0%,transparent 70%);
}
.cta-bg::before {
  content:''; position:absolute; inset:0;
  background-image:radial-gradient(rgba(200,134,10,0.1) 1px,transparent 1px);
  background-size:28px 28px; opacity:0.5;
}
.scarab { position:absolute; opacity:0.1; pointer-events:none; }
.btn-egypt {
  font-family:'Cinzel',serif; display:inline-block; cursor:pointer;
  background:${GOLD}; color:${INK}; padding:14px 52px; border:none;
  font-size:16px; letter-spacing:3px; font-weight:700; border-radius:3px;
  border-bottom:4px solid #7A5000; box-shadow:0 8px 30px rgba(200,134,10,0.3);
  transition:transform 0.15s,box-shadow 0.15s,border-bottom-width 0.1s;
  text-transform:uppercase;
}
.btn-egypt:hover { transform:translateY(-3px); box-shadow:0 14px 40px rgba(200,134,10,0.45); border-bottom-width:2px; }
.btn-egypt:active { transform:translateY(1px); border-bottom-width:1px; }
.ornament {
  display:flex; align-items:center; gap:14px;
  color:rgba(200,134,10,0.4); font-size:12px; letter-spacing:4px;
}
.ornament::before,.ornament::after {
  content:''; flex:1; height:1px;
  background:linear-gradient(90deg,transparent,rgba(200,134,10,0.4),transparent);
}
.section-label {
  font-family:'Cinzel',serif; font-size:11px;
  letter-spacing:5px; text-transform:uppercase; margin-bottom:10px;
}
@media(max-width:960px){
  .hero-deco,.pyramid-section-deco { display:none !important; }
  .hero-inner { padding:80px 24px 120px !important; }
  .stats-grid { grid-template-columns:1fr 1fr !important; }
  .section-pad { padding:72px 24px !important; }
  .timeline-flex { flex-direction:column !important; border-radius:14px !important; }
  .t-node { border-right:none !important; border-bottom:1px solid rgba(200,134,10,0.1) !important; }
  .footer-inner { padding:24px !important; flex-direction:column; gap:20px; text-align:center; }
}
`;

/* ───── SVG COMPONENTS ───── */

function Pyramid({ width=320, opacity=0.22, gold=false }:{ width?:number; opacity?:number; gold?:boolean }) {
  const h = width * 0.78;
  const gid = gold ? "pgold" : "pstone";
  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{display:"block"}}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          {gold
            ? <><stop offset="0%" stopColor="#C8860A" stopOpacity={opacity*1.6}/><stop offset="60%" stopColor="#8B5E00" stopOpacity={opacity*0.9}/><stop offset="100%" stopColor="#3A2400" stopOpacity={opacity*0.5}/></>
            : <><stop offset="0%" stopColor="#3A2800" stopOpacity={opacity*1.4}/><stop offset="50%" stopColor="#5C3D00" stopOpacity={opacity}/><stop offset="100%" stopColor="#1A1000" stopOpacity={opacity*0.6}/></>
          }
        </linearGradient>
        <linearGradient id={`${gid}_sh`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polygon points={`${width/2},0 ${width},${h} 0,${h}`} fill={`url(#${gid})`}/>
      <polygon points={`${width/2},0 ${width},${h} ${width*0.58},${h}`} fill={`url(#${gid}_sh)`}/>
      <line x1={width/2} y1={2} x2={0} y2={h} stroke={`rgba(200,134,10,${opacity*0.6})`} strokeWidth="0.8"/>
      <line x1={width/2} y1={2} x2={width} y2={h} stroke={`rgba(200,134,10,${opacity*0.3})`} strokeWidth="0.8"/>
      <circle cx={width/2} cy={6} r={5} fill={`rgba(200,134,10,${opacity*2})`}/>
      {Array.from({length:8}).map((_,i)=>{
        const t=(i+1)/9; const y=h*t; const xL=(width/2)*t; const xR=width-xL;
        return <line key={i} x1={xL} y1={y} x2={xR} y2={y} stroke={`rgba(200,134,10,${opacity*0.35})`} strokeWidth="0.6"/>;
      })}
      <line x1={0} y1={h-1} x2={width} y2={h-1} stroke={`rgba(200,134,10,${opacity*0.8})`} strokeWidth="1.5"/>
    </svg>
  );
}

function EyeOfRa({ size=120, opacity=0.25 }:{ size?:number; opacity?:number }) {
  return (
    <svg width={size} height={size*0.55} viewBox="0 0 200 110" style={{display:"block",opacity}}>
      <defs>
        <radialGradient id="irisG" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C8860A"/>
          <stop offset="60%" stopColor="#8B5A00"/>
          <stop offset="100%" stopColor="#3A2000"/>
        </radialGradient>
      </defs>
      <path d="M10,55 Q100,2 190,55" stroke="#C8860A" strokeWidth="2.5" fill="none"/>
      <path d="M10,55 Q100,90 190,55" stroke="#C8860A" strokeWidth="2" fill="none"/>
      <path d="M10,55 Q100,2 190,55 Q100,90 10,55" fill="rgba(200,134,10,0.07)"/>
      <circle cx="100" cy="55" r="22" fill="url(#irisG)"/>
      <circle cx="100" cy="55" r="10" fill="#0D0800"/>
      <circle cx="106" cy="50" r="3" fill="rgba(255,255,255,0.3)"/>
      <path d="M100,77 Q85,90 75,106" stroke="#C8860A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M75,106 Q68,96 80,99" stroke="#C8860A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M10,55 Q4,50 2,42" stroke="#C8860A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M190,55 Q196,50 198,43" stroke="#C8860A" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function Ankh({ size=80, opacity=0.3 }:{ size?:number; opacity?:number }) {
  return (
    <svg width={size} height={size*1.4} viewBox="0 0 80 112" style={{display:"block",opacity}}>
      <ellipse cx="40" cy="30" rx="20" ry="26" fill="none" stroke="#C8860A" strokeWidth="6"/>
      <line x1="40" y1="56" x2="40" y2="112" stroke="#C8860A" strokeWidth="6" strokeLinecap="round"/>
      <line x1="10" y1="68" x2="70" y2="68" stroke="#C8860A" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

function Torch({ height=120 }:{ height?:number }) {
  return (
    <svg width={height*0.3} height={height} viewBox="0 0 36 120" style={{display:"block"}}>
      <g className="torch-flame">
        <ellipse cx="18" cy="20" rx="10" ry="17" fill="rgba(255,180,0,0.8)"/>
        <ellipse cx="18" cy="25" rx="7" ry="13" fill="rgba(255,100,0,0.75)"/>
        <ellipse cx="18" cy="30" rx="4" ry="8" fill="rgba(255,230,60,0.9)"/>
        <ellipse cx="18" cy="13" rx="4" ry="8" fill="rgba(255,240,160,0.55)"/>
      </g>
      <rect x="11" y="35" width="14" height="14" rx="2" fill="#5C3A00"/>
      <rect x="9" y="44" width="18" height="5" rx="2" fill="#7A4E00"/>
      <rect x="15" y="50" width="6" height="70" rx="3" fill="#6B4800"/>
      {[62,77,92,107].map(y=>(
        <line key={y} x1="15" y1={y} x2="21" y2={y} stroke="rgba(200,134,10,0.5)" strokeWidth="1.5"/>
      ))}
    </svg>
  );
}

function Mummy({ width=100, opacity=0.22 }:{ width?:number; opacity?:number }) {
  return (
    <svg width={width} height={width*2.8} viewBox="0 0 100 280" style={{display:"block",opacity}}>
      <defs>
        <linearGradient id="mG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7A6030"/>
          <stop offset="50%" stopColor="#A88040"/>
          <stop offset="100%" stopColor="#5A4820"/>
        </linearGradient>
      </defs>
      {/* Head */}
      <ellipse cx="50" cy="28" rx="22" ry="26" fill="url(#mG)"/>
      {[14,20,27,33,40].map((y,i)=>(
        <line key={y} x1={30+i*2} y1={y} x2={70-i} y2={y} stroke="rgba(200,160,60,0.5)" strokeWidth="1.5"/>
      ))}
      <ellipse cx="42" cy="26" rx="4" ry="3" fill="#1a1000"/>
      <ellipse cx="58" cy="26" rx="4" ry="3" fill="#1a1000"/>
      <ellipse cx="42" cy="25" rx="1.5" ry="1" fill="rgba(200,134,10,0.8)"/>
      <ellipse cx="58" cy="25" rx="1.5" ry="1" fill="rgba(200,134,10,0.8)"/>
      {/* Neck */}
      <rect x="40" y="52" width="20" height="14" rx="4" fill="url(#mG)"/>
      {/* Torso */}
      <rect x="18" y="64" width="64" height="62" rx="10" fill="url(#mG)"/>
      {/* Crossed arm wrappings */}
      {[72,83,94,105,116,124].map((y,i)=>(
        <line key={y} x1={22+i} y1={y} x2={78-i} y2={y} stroke="rgba(200,160,60,0.45)" strokeWidth="1.8"/>
      ))}
      {/* Collar */}
      <path d="M20,66 Q50,78 80,66" stroke="rgba(200,134,10,0.7)" strokeWidth="3" fill="none"/>
      <path d="M22,71 Q50,83 78,71" stroke="rgba(200,134,10,0.5)" strokeWidth="2" fill="none"/>
      {/* Lower torso */}
      <rect x="22" y="124" width="56" height="78" rx="8" fill="url(#mG)"/>
      {[132,144,156,168,180,192].map((y,i)=>(
        <line key={y} x1={22+i} y1={y} x2={78-i} y2={y} stroke="rgba(200,160,60,0.4)" strokeWidth="1.5"/>
      ))}
      {/* Legs */}
      <rect x="24" y="200" width="22" height="72" rx="8" fill="url(#mG)"/>
      <rect x="54" y="200" width="22" height="72" rx="8" fill="url(#mG)"/>
      {[210,222,234,246,258].map(y=>(
        <React.Fragment key={y}>
          <line x1="24" y1={y} x2="46" y2={y} stroke="rgba(200,160,60,0.4)" strokeWidth="1.5"/>
          <line x1="54" y1={y} x2="76" y2={y} stroke="rgba(200,160,60,0.4)" strokeWidth="1.5"/>
        </React.Fragment>
      ))}
      <ellipse cx="35" cy="272" rx="12" ry="7" fill="#5C4020"/>
      <ellipse cx="65" cy="272" rx="12" ry="7" fill="#5C4020"/>
    </svg>
  );
}

function Obelisk({ height=200, opacity=0.2 }:{ height?:number; opacity?:number }) {
  const w=height*0.18;
  return (
    <svg width={w*3} height={height} viewBox={`0 0 ${w*3} ${height}`} style={{display:"block",opacity}}>
      <defs>
        <linearGradient id="obG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5C3A00"/>
          <stop offset="40%" stopColor="#8B5A00"/>
          <stop offset="100%" stopColor="#3A2200"/>
        </linearGradient>
      </defs>
      <rect x={w*0.5} y={height-18} width={w*2} height={18} rx="2" fill="url(#obG)"/>
      <rect x={w*0.7} y={height-30} width={w*1.6} height={14} rx="2" fill="url(#obG)"/>
      <polygon points={`${w*1.5},12 ${w*0.85},${height-32} ${w*2.15},${height-32}`} fill="url(#obG)"/>
      <polygon points={`${w*1.5},0 ${w*1.18},16 ${w*1.82},16`} fill="rgba(200,134,10,0.8)"/>
      {[0.3,0.48,0.64,0.78].map((t,i)=>{
        const y=16+(height-50)*t; const xOff=(1-t)*w*0.3;
        return <rect key={i} x={w*1.5-5-xOff} y={y} width={10+xOff*2} height={3} rx="1" fill="rgba(200,134,10,0.4)"/>;
      })}
    </svg>
  );
}

function Scarab({ size=60, opacity=0.3 }:{ size?:number; opacity?:number }) {
  return (
    <svg width={size} height={size*0.9} viewBox="0 0 60 54" style={{display:"block",opacity}}>
      <defs>
        <radialGradient id="scG" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#8B6010"/>
          <stop offset="100%" stopColor="#3A2800"/>
        </radialGradient>
      </defs>
      <ellipse cx="30" cy="30" rx="16" ry="20" fill="url(#scG)"/>
      <ellipse cx="30" cy="12" rx="10" ry="9" fill="url(#scG)"/>
      <line x1="30" y1="14" x2="30" y2="50" stroke="rgba(200,134,10,0.6)" strokeWidth="1"/>
      <path d="M14,22 Q4,18 2,30 Q4,42 14,38" fill="rgba(80,50,10,0.7)"/>
      <path d="M14,24 Q6,20 4,30 Q6,40 14,36" stroke="rgba(200,134,10,0.4)" strokeWidth="0.8" fill="none"/>
      <path d="M46,22 Q56,18 58,30 Q56,42 46,38" fill="rgba(80,50,10,0.7)"/>
      <path d="M46,24 Q54,20 56,30 Q54,40 46,36" stroke="rgba(200,134,10,0.4)" strokeWidth="0.8" fill="none"/>
      {[-1,0,1].map(i=>(
        <React.Fragment key={i}>
          <line x1="16" y1={30+i*8} x2="4" y2={34+i*8} stroke="rgba(200,134,10,0.5)" strokeWidth="1"/>
          <line x1="44" y1={30+i*8} x2="56" y2={34+i*8} stroke="rgba(200,134,10,0.5)" strokeWidth="1"/>
        </React.Fragment>
      ))}
      <line x1="26" y1="4" x2="18" y2="-2" stroke="rgba(200,134,10,0.6)" strokeWidth="1"/>
      <line x1="34" y1="4" x2="42" y2="-2" stroke="rgba(200,134,10,0.6)" strokeWidth="1"/>
    </svg>
  );
}

function SandDunes({ opacity=0.18 }:{ opacity?:number }) {
  return (
    <svg width="100%" height="70" viewBox="0 0 1000 70" preserveAspectRatio="none" style={{display:"block",opacity}}>
      <defs>
        <linearGradient id="duneG" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8B6020"/>
          <stop offset="100%" stopColor="#3A2800"/>
        </linearGradient>
      </defs>
      <path d="M0,70 Q120,20 250,44 Q380,62 500,28 Q620,8 750,38 Q880,60 1000,32 L1000,70 Z" fill="url(#duneG)"/>
    </svg>
  );
}

function HieroStrip({ color, glyphs }:{ color:string; glyphs:string[] }) {
  return (
    <div className="hiero-strip" style={{background:color}}>
      {Array.from({length:60}).map((_,i)=>(
        <span key={i}>{glyphs[i%glyphs.length]}</span>
      ))}
    </div>
  );
}

/* ───── PAGE ───── */
export default function ScotlandYardPage() {
  return (
    <>
      <style>{CSS}</style>
      <div className="font-crimson overflow-x-hidden antialiased" style={{background:INK,color:"#fff"}}>

        {/* ── HERO ── */}
        <section
          className="hero-inner relative flex items-center overflow-hidden"
          style={{minHeight:"95vh",padding:"100px 80px",background:`linear-gradient(130deg,${INK} 0%,${PAPYRUS} 100%)`}}
        >
          <div className="papyrus-bg"/>
          <div className="ankh-glow" style={{width:600,height:600,left:-200,top:"40%",transform:"translateY(-50%)"}}/>

          {/* Eye of Ra */}
          <div className="anim-eyePulse hero-deco" style={{position:"absolute",right:"8%",top:"10%",pointerEvents:"none"}}>
            <EyeOfRa size={220} opacity={0.22}/>
          </div>

          {/* Pyramids */}
          <div style={{position:"absolute",bottom:0,right:0,display:"flex",alignItems:"flex-end",pointerEvents:"none"}} className="hero-deco">
            <div className="anim-driftSlow delay-2"><Pyramid width={170} opacity={0.13}/></div>
            <div className="anim-driftSlow delay-0"><Pyramid width={270} opacity={0.19} gold/></div>
            <div className="anim-driftSlow delay-3"><Pyramid width={130} opacity={0.11}/></div>
          </div>

          {/* Obelisks */}
          <div style={{position:"absolute",right:"30%",bottom:0,pointerEvents:"none"}} className="hero-deco">
            <Obelisk height={155} opacity={0.17}/>
          </div>
          <div style={{position:"absolute",right:"22%",bottom:0,pointerEvents:"none"}} className="hero-deco">
            <Obelisk height={210} opacity={0.21}/>
          </div>

          {/* Torches */}
          <div style={{position:"absolute",left:24,top:"26%",pointerEvents:"none"}} className="hero-deco">
            <Torch height={130}/>
          </div>
          <div style={{position:"absolute",left:24,bottom:"20%",pointerEvents:"none"}} className="hero-deco">
            <Torch height={110}/>
          </div>

          {/* Mummy */}
          <div className="anim-driftSlow delay-1 hero-deco" style={{position:"absolute",right:"4%",bottom:0,pointerEvents:"none"}}>
            <Mummy width={88} opacity={0.28}/>
          </div>

          {/* Ankh */}
          <div className="anim-drift delay-2 hero-deco" style={{position:"absolute",right:"40%",top:"8%",pointerEvents:"none"}}>
            <Ankh size={58} opacity={0.18}/>
          </div>

          {/* Scarab */}
          <div className="anim-driftSlow delay-1 hero-deco" style={{position:"absolute",left:"17%",top:"13%",pointerEvents:"none"}}>
            <Scarab size={48} opacity={0.2}/>
          </div>

          {/* Unicode glyphs */}
          <div className="scarab" style={{right:88,top:"15%",fontSize:52}}>𓂀</div>
          <div className="scarab" style={{right:220,bottom:"22%",fontSize:36}}>𓆣</div>

          {/* Hero text */}
          <div className="relative z-10" style={{maxWidth:660}}>
            <div className="inline-flex items-center gap-2 font-cinzel"
              style={{border:`1px solid rgba(200,134,10,0.4)`,padding:"6px 20px",marginBottom:28,fontSize:12,letterSpacing:4,color:SAND,borderRadius:2}}>
              <span className="anim-flicker inline-block" style={{width:6,height:6,borderRadius:"50%",background:GOLD}}/>
              ISTE NITK · Scotland Yard 2025
            </div>
            <div className="font-cinzel" style={{fontSize:13,letterSpacing:6,color:"rgba(232,200,122,0.55)",marginBottom:10,textTransform:"uppercase"}}>
              Scotland Yard Presents
            </div>
            <h1 className="font-cinzel shimmer-text" style={{fontSize:"clamp(62px,9vw,110px)",lineHeight:0.92,letterSpacing:2,marginBottom:10}}>
              The Trials
            </h1>
            <h1 className="font-cinzel" style={{fontSize:"clamp(62px,9vw,110px)",lineHeight:0.92,letterSpacing:2,marginBottom:22,color:RUST,textShadow:`4px 4px 0 rgba(0,0,0,0.5)`}}>
              of Osiris
            </h1>
            <div className="ornament" style={{marginBottom:28}}>JUDGEMENT AWAITS</div>
            <p className="font-crimson" style={{color:"rgba(232,200,122,0.6)",maxWidth:480,lineHeight:2,fontSize:19,fontWeight:300,marginBottom:38,fontStyle:"italic"}}>
              The sands of time have spoken. Your wit will be tested. Your conscience weighed.
              Your every step, closer to salvation — or doom.
            </p>
            <button className="btn-egypt">Register Now</button>
          </div>
        </section>

        {/* Sand dunes */}
        <div style={{marginTop:-2,background:STONE}}><SandDunes opacity={0.3}/></div>
        <HieroStrip color={STONE} glyphs={["𓂀","𓆣","𓅓","𓁹","𓊪","𓂋"]}/>

        {/* ── ABOUT ── */}
        <section className="section-pad" style={{padding:"96px 80px",background:PAPYRUS,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",right:40,bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Mummy width={120} opacity={0.14}/>
          </div>
          <div style={{position:"absolute",right:200,top:40,pointerEvents:"none"}} className="pyramid-section-deco">
            <Ankh size={48} opacity={0.1}/>
          </div>
          <div style={{position:"absolute",left:30,bottom:40,pointerEvents:"none"}} className="pyramid-section-deco">
            <Scarab size={70} opacity={0.12}/>
          </div>

          <div className="section-label" style={{color:RUST}}>About the Event</div>
          <h2 className="font-cinzel text-white" style={{fontSize:52,lineHeight:0.95,letterSpacing:2,marginBottom:14}}>What Awaits You?</h2>
          <p className="font-crimson" style={{fontSize:19,color:"rgba(232,200,122,0.55)",lineHeight:1.9,fontWeight:300,maxWidth:580,marginBottom:48,fontStyle:"italic"}}>
            A unique treasure hunt exclusive to BTech first-years. Step into the afterlife —
            navigate the campus, decode ciphers, and prove your worth before Osiris himself.
          </p>
          <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:18}}>
            {PILLARS.map(p=>(
              <div key={p.name} className="card-egypt"
                style={{"--accent":p.accent,background:"rgba(255,255,255,0.03)",border:"1px solid rgba(200,134,10,0.12)",padding:"28px 24px 24px",borderRadius:10} as React.CSSProperties}>
                <span style={{fontSize:28,marginBottom:14,display:"block"}}>{p.icon}</span>
                <h3 className="font-cinzel text-white" style={{fontSize:18,letterSpacing:2,marginBottom:8}}>{p.name}</h3>
                <p className="font-crimson" style={{fontSize:15,color:"rgba(232,200,122,0.42)",lineHeight:1.75}}>{p.sub}</p>
              </div>
            ))}
          </div>
        </section>

        <HieroStrip color={INK} glyphs={["𓊪","𓂋","𓅱","𓇯","𓈖","𓊹"]}/>

        {/* ── EVENT INFO ── */}
        <section className="section-pad" style={{padding:"96px 80px",position:"relative",overflow:"hidden"}}>
          {/* Big pyramid bg */}
          <div style={{position:"absolute",right:-20,bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Pyramid width={340} opacity={0.1}/>
          </div>
          {/* Torches */}
          <div style={{position:"absolute",left:20,top:"30%",pointerEvents:"none"}} className="pyramid-section-deco">
            <Torch height={100}/>
          </div>
          <div style={{position:"absolute",left:20,bottom:"20%",pointerEvents:"none"}} className="pyramid-section-deco">
            <Torch height={88}/>
          </div>
          {/* Obelisk */}
          <div style={{position:"absolute",right:80,top:20,pointerEvents:"none"}} className="pyramid-section-deco">
            <Obelisk height={130} opacity={0.12}/>
          </div>

          <div className="section-label" style={{color:GOLD}}>Event Info</div>
          <h2 className="font-cinzel text-white" style={{fontSize:52,lineHeight:0.95,letterSpacing:2,marginBottom:14}}>The Sacred Details</h2>
          <p className="font-crimson" style={{fontSize:19,color:"rgba(232,200,122,0.48)",lineHeight:1.9,fontWeight:300,maxWidth:560,marginBottom:48,fontStyle:"italic"}}>
            Know the time, place, and stakes before you dare enter the trials.
          </p>
          <div className="stats-grid grid" style={{gridTemplateColumns:"repeat(auto-fit,minmax(210px,1fr))",gap:18}}>
            {STATS.map(s=>(
              <div key={s.label} className="flex items-center"
                style={{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(200,134,10,0.1)",padding:"28px 24px",borderRadius:10,gap:18,transition:"transform 0.25s,background 0.2s"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLDivElement).style.background="rgba(200,134,10,0.06)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.transform="none";(e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,0.025)";}}>
                <div className="flex items-center justify-center shrink-0"
                  style={{width:50,height:50,borderRadius:8,background:"rgba(200,134,10,0.1)",border:"1px solid rgba(200,134,10,0.2)",fontSize:22}}>
                  {s.icon}
                </div>
                <div>
                  <div style={{fontSize:10,fontWeight:600,letterSpacing:3,textTransform:"uppercase",color:"rgba(232,200,122,0.3)",marginBottom:5}}>{s.label}</div>
                  <div className="font-cinzel text-white" style={{fontSize:18,letterSpacing:1}}>{s.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* POC */}
          <div style={{marginTop:48}}>
            <div className="ornament" style={{marginBottom:28}}>Points of Contact</div>
            <div className="flex" style={{gap:18,flexWrap:"wrap"}}>
              {POCS.map(poc=>(
                <div key={poc.name}
                  style={{background:"rgba(200,134,10,0.07)",border:"1px solid rgba(200,134,10,0.15)",borderRadius:10,padding:"18px 32px",display:"flex",flexDirection:"column",gap:4}}>
                  <div className="font-cinzel text-white" style={{fontSize:15,letterSpacing:2}}>{poc.name}</div>
                  <div className="font-crimson" style={{fontSize:17,color:SAND}}>{poc.phone}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <HieroStrip color={STONE} glyphs={["𓁹","𓊹","𓂀","𓆣","𓅓","𓊪"]}/>

        {/* ── TIMELINE ── */}
        <section className="section-pad" style={{padding:"96px 80px",background:PAPYRUS,position:"relative",overflow:"hidden"}}>
          {/* Obelisks */}
          <div style={{position:"absolute",right:60,top:20,pointerEvents:"none",display:"flex",gap:16,alignItems:"flex-start"}} className="pyramid-section-deco">
            <Obelisk height={140} opacity={0.13}/>
            <Obelisk height={175} opacity={0.16}/>
          </div>
          {/* Scarab */}
          <div style={{position:"absolute",left:60,bottom:60,pointerEvents:"none"}} className="pyramid-section-deco">
            <Scarab size={80} opacity={0.14}/>
          </div>
          {/* Eye of Ra */}
          <div className="anim-eyePulse pyramid-section-deco" style={{position:"absolute",left:"50%",top:30,transform:"translateX(-50%)",pointerEvents:"none"}}>
            <EyeOfRa size={150} opacity={0.1}/>
          </div>

          <div className="section-label" style={{color:RUST}}>The Trials</div>
          <h2 className="font-cinzel text-white" style={{fontSize:52,lineHeight:0.95,letterSpacing:2,marginBottom:14}}>Five Chambers</h2>
          <p className="font-crimson" style={{fontSize:19,color:"rgba(232,200,122,0.48)",lineHeight:1.9,fontWeight:300,maxWidth:560,marginBottom:48,fontStyle:"italic"}}>
            Five stages stand between you and Osiris&apos;s blessing. Only the worthy shall pass.
          </p>
          <div className="timeline-flex flex overflow-hidden" style={{borderRadius:12,border:"1px solid rgba(200,134,10,0.12)"}}>
            {ROUNDS.map((r,i)=>(
              <div key={r.name} className="t-node flex-1 text-center" style={{padding:"32px 14px"}}
                onMouseEnter={e=>{(e.currentTarget as HTMLDivElement).style.background="rgba(200,134,10,0.05)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLDivElement).style.background="transparent";}}>
                <div className="font-cinzel" style={{fontSize:11,letterSpacing:4,color:"rgba(232,200,122,0.3)",marginBottom:10,textTransform:"uppercase"}}>Stage {i+1}</div>
                <div className="font-cinzel mx-auto flex items-center justify-center"
                  style={{width:34,height:34,borderRadius:6,marginBottom:14,fontSize:13,background:r.color,color:r.tc,borderBottom:"3px solid rgba(0,0,0,0.35)",boxShadow:"0 4px 14px rgba(0,0,0,0.45)"}}>
                  {i+1}
                </div>
                <h3 className="font-cinzel text-white" style={{fontSize:14,letterSpacing:1,marginBottom:8,lineHeight:1.4}}>{r.name}</h3>
                <p className="font-crimson" style={{fontSize:15,color:"rgba(232,200,122,0.38)",lineHeight:1.6}}>{r.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sand dunes into CTA */}
        <div style={{background:`linear-gradient(130deg,${PAPYRUS} 0%,${INK} 100%)`,marginTop:-2}}>
          <SandDunes opacity={0.22}/>
        </div>
        <HieroStrip color={GOLD} glyphs={["𓂋","𓅱","𓇯","𓈖","𓊹","𓁹"]}/>

        {/* ── CTA ── */}
        <section className="cta-bg text-center relative overflow-hidden"
          style={{padding:"130px 20px",background:`linear-gradient(130deg,${PAPYRUS} 0%,${INK} 100%)`}}>
          {/* Giant gold pyramid behind */}
          <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",pointerEvents:"none",opacity:0.08}}>
            <Pyramid width={600} gold/>
          </div>
          {/* Side mummies */}
          <div style={{position:"absolute",left:"5%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Mummy width={68} opacity={0.2}/>
          </div>
          <div style={{position:"absolute",right:"5%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Mummy width={68} opacity={0.2}/>
          </div>
          {/* Eye above */}
          <div className="anim-eyePulse pyramid-section-deco" style={{position:"absolute",top:20,left:"50%",transform:"translateX(-50%)",pointerEvents:"none"}}>
            <EyeOfRa size={180} opacity={0.13}/>
          </div>
          {/* Side obelisks */}
          <div style={{position:"absolute",left:"17%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Obelisk height={120} opacity={0.15}/>
          </div>
          <div style={{position:"absolute",right:"17%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Obelisk height={120} opacity={0.15}/>
          </div>
          {/* Flanking torches */}
          <div style={{position:"absolute",left:"8%",top:"30%",pointerEvents:"none"}} className="pyramid-section-deco">
            <Torch height={110}/>
          </div>
          <div style={{position:"absolute",right:"8%",top:"30%",pointerEvents:"none"}} className="pyramid-section-deco">
            <Torch height={110}/>
          </div>

          <div className="relative z-10">
            <div className="flex justify-center" style={{marginBottom:20}}>
              <Ankh size={50} opacity={0.5}/>
            </div>
            <div className="ornament" style={{marginBottom:24,maxWidth:400,margin:"0 auto 24px"}}>THE HOUR IS AT HAND</div>
            <h2 className="font-cinzel text-white"
              style={{fontSize:"clamp(48px,6vw,78px)",letterSpacing:3,marginBottom:14,textShadow:"3px 3px 0 rgba(0,0,0,0.3)"}}>
              Do You Dare Enter?
            </h2>
            <p className="font-crimson" style={{fontSize:18,color:"rgba(232,200,122,0.45)",marginBottom:44,fontWeight:300,fontStyle:"italic"}}>
              The afterlife awaits. Prove your worth and claim eternal glory.
            </p>
            <button className="btn-egypt">Register Now</button>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer-inner flex items-center justify-between"
          style={{background:"#04030A",padding:"28px 80px",minHeight:80,borderTop:`2px solid rgba(200,134,10,0.2)`}}>
          <div>
            <div className="font-cinzel" style={{fontSize:15,letterSpacing:5,color:GOLD}}>ISTE NITK</div>
            <div className="font-crimson" style={{fontSize:12,color:"rgba(255,255,255,0.2)",marginTop:3}}>
              Indian Society for Technical Education · NITK Surathkal
            </div>
          </div>
          <div className="flex" style={{gap:28}}>
            {["Home","Events","Instagram","Contact"].map(l=>(
              <a key={l} href="#"
                className="no-underline font-cinzel transition-colors duration-200 hover:text-[#C8860A]"
                style={{fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"rgba(255,255,255,0.2)"}}>
                {l}
              </a>
            ))}
          </div>
        </footer>

      </div>
    </>
  );
}
