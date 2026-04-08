"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";

const GOLD  = "#C8860A";
const SAND  = "#E8C87A";
const RUST  = "#8B2500";
const INK   = "#0D0800";
const PAPYRUS = "#1C1000";
const STONE = "#1E160A";

const STATS = [
  { icon: "📅", label: "Date",        value: "21 September 2026" },
  { icon: "📍", label: "Venue",       value: "LHC A" },
  { icon: "👥", label: "Eligibility", value: "BTech First Years" },
  { icon: "🏆", label: "Prize Pool",  value: "₹7,500" },
];

const PILLARS = [
  { icon: "🔍", name: "Decode",   sub: "Decipher hidden clues",        accent: GOLD },
  { icon: "🗺️", name: "Navigate", sub: "Traverse the campus trails",   accent: RUST },
  { icon: "⚖️", name: "Weigh",    sub: "Face the judgement of Osiris", accent: "#6B4C00" },
  { icon: "👁️", name: "Survive",  sub: "Escape before doom falls",     accent: "#5A1A00" },
];

const ROUNDS = [
  { name: "The Hall of Maat",   sub: "Gather and receive your sacred scrolls",          color: GOLD,      tc: INK    },
  { name: "The Trial of Senet", sub: "Navigate campus checkpoints under time pressure", color: STONE,     tc: "#fff" },
  { name: "The Trial of Sin",   sub: "Decode the first cipher — find the hidden path",  color: RUST,      tc: "#fff" },
  { name: "The Trial of Souls", sub: "Solve the final riddle — logic under fire",       color: STONE,     tc: "#fff" },
  { name: "Osiris Judges",      sub: "The last team standing claims glory",             color: "#3B2200", tc: SAND   },
];

const NAV_LINKS = [
  { name: "Home",    href: "#home" },
  { name: "About",   href: "#about" },
  { name: "Details", href: "#details" },
  { name: "Trials",  href: "#trials" },
  { name: "Register",href: "#register" },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;900&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap');
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
.font-cinzel  { font-family: 'Cinzel', serif; }
.font-crimson { font-family: 'Crimson Pro', serif; }

/* ── Navbar ── */
.egypt-nav {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 95%;
  max-width: 1100px;
  z-index: 100;
  border-radius: 999px;
  border: 1px solid rgba(200,134,10,0.35);
  background: rgba(13,8,0,0.72);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  box-shadow:
    0 8px 40px rgba(0,0,0,0.55),
    inset 0 1px 0 rgba(200,134,10,0.18),
    0 0 0 1px rgba(200,134,10,0.06);
  transition: background 0.3s, box-shadow 0.3s;
}
.egypt-nav.scrolled {
  background: rgba(13,8,0,0.92);
  box-shadow:
    0 12px 48px rgba(0,0,0,0.7),
    inset 0 1px 0 rgba(200,134,10,0.22),
    0 0 0 1px rgba(200,134,10,0.1);
}
.egypt-nav.nav-hidden {
  transform: translateX(-50%) translateY(-120%);
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s;
}
.egypt-nav.nav-visible {
  transform: translateX(-50%) translateY(0);
  transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s;
}
.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  height: 62px;
}
.nav-brand {
  font-family: 'Cinzel', serif;
  font-size: 13px;
  letter-spacing: 5px;
  color: ${GOLD};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.nav-brand-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: ${GOLD};
  animation: flicker 3s ease-in-out infinite;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 36px;
  list-style: none;
}
.nav-links a {
  font-family: 'Cinzel', serif;
  font-size: 10px;
  letter-spacing: 3.5px;
  text-transform: uppercase;
  color: rgba(232,200,122,0.65);
  text-decoration: none;
  transition: color 0.2s;
  position: relative;
}
.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 1px;
  background: ${GOLD};
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.25s ease;
}
.nav-links a:hover { color: ${GOLD}; }
.nav-links a:hover::after { transform: scaleX(1); }
.nav-cta {
  font-family: 'Cinzel', serif;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${INK};
  background: ${GOLD};
  border: none;
  padding: 9px 24px;
  border-radius: 999px;
  cursor: pointer;
  border-bottom: 3px solid #7A5000;
  transition: transform 0.15s, box-shadow 0.15s, filter 0.15s;
  font-weight: 700;
}
.nav-cta:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(200,134,10,0.4); filter: brightness(1.08); }
.nav-cta:active { transform: translateY(1px); border-bottom-width: 1px; }

/* Mobile hamburger */
.nav-hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  background: none;
  border: none;
}
.nav-hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: ${GOLD};
  border-radius: 2px;
  transition: transform 0.25s, opacity 0.25s;
}
.nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.nav-hamburger.open span:nth-child(2) { opacity: 0; }
.nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.nav-mobile {
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s;
  opacity: 0;
  border-radius: 0 0 24px 24px;
}
.nav-mobile.open {
  max-height: 400px;
  opacity: 1;
}
.nav-mobile-inner {
  padding: 8px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav-mobile-inner a {
  font-family: 'Cinzel', serif;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(232,200,122,0.7);
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 12px;
  transition: background 0.2s, color 0.2s;
  display: block;
}
.nav-mobile-inner a:hover { background: rgba(200,134,10,0.12); color: ${GOLD}; }
.nav-mobile-inner .nav-cta-mobile {
  margin-top: 8px;
  text-align: center;
  background: ${GOLD};
  color: ${INK};
  font-weight: 700;
  border-radius: 12px;
  padding: 14px 16px;
}

/* ── Animations ── */
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
  0%,100% { opacity:0.45; transform:scale(1); }
  50%     { opacity:0.7; transform:scale(1.05); }
}
@keyframes torchFlame {
  0%,100% { opacity:0.9; transform:scaleY(1) scaleX(1); }
  33%     { opacity:0.7; transform:scaleY(1.12) scaleX(0.88); }
  66%     { opacity:1; transform:scaleY(0.94) scaleX(1.06); }
}
@keyframes navFadeIn {
  from { opacity:0; transform:translateX(-50%) translateY(-24px); }
  to   { opacity:1; transform:translateX(-50%) translateY(0); }
}

.egypt-nav { animation: navFadeIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s both; }
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
  display:flex; overflow:hidden; height:26px; width:100%;
  border-top:1.5px solid rgba(200,134,10,0.35);
  border-bottom:1.5px solid rgba(200,134,10,0.35);
  align-items:center;
}
.hiero-strip span {
  flex: 1 0 22px; height:18px; margin:0 2px;
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
.scarab { position:absolute; opacity:0.25; pointer-events:none; }
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
  .hero-inner { padding:100px 24px 120px !important; }
  .stats-grid { grid-template-columns:1fr 1fr !important; }
  .section-pad { padding:72px 24px !important; }
  .timeline-flex { flex-direction:column !important; border-radius:14px !important; }
  .t-node { border-right:none !important; border-bottom:1px solid rgba(200,134,10,0.1) !important; }
  .footer-inner { padding:24px !important; flex-direction:column; gap:20px; text-align:center; }
}
@media(max-width:768px){
  .nav-links, .nav-cta { display:none !important; }
  .nav-hamburger { display:flex !important; }
  .egypt-nav { border-radius: 20px; top: 12px; }
}
`;

function Pyramid({ width=320, opacity=0.45, gold=false }:{ width?:number; opacity?:number; gold?:boolean }) {
  const h = width * 0.78;
  const gid = gold ? "pgold" : "pstone";
  return (
    <svg width={width} height={h} viewBox={`0 0 ${width} ${h}`} style={{display:"block"}}>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          {gold
            ? <><stop offset="0%" stopColor="#C8860A" stopOpacity={opacity*1.6}/><stop offset="60%" stopColor="#8B5E00" stopOpacity={opacity*0.9}/><stop offset="100%" stopColor="#3A2400" stopOpacity={opacity*0.5}/></>
            : <><stop offset="0%" stopColor="#3A2800" stopOpacity={opacity*1.4}/><stop offset="50%" stopColor="#7A5500" stopOpacity={opacity}/><stop offset="100%" stopColor="#2A1800" stopOpacity={opacity*0.6}/></>
          }
        </linearGradient>
        <linearGradient id={`${gid}_sh`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#000" stopOpacity="0.5"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polygon points={`${width/2},0 ${width},${h} 0,${h}`} fill={`url(#${gid})`}/>
      <polygon points={`${width/2},0 ${width},${h} ${width*0.58},${h}`} fill={`url(#${gid}_sh)`}/>
      <line x1={width/2} y1={2} x2={0} y2={h} stroke={`rgba(200,134,10,${opacity*0.9})`} strokeWidth="1"/>
      <line x1={width/2} y1={2} x2={width} y2={h} stroke={`rgba(200,134,10,${opacity*0.5})`} strokeWidth="1"/>
      <circle cx={width/2} cy={6} r={5} fill={`rgba(200,134,10,${Math.min(opacity*2.5,1)})`}/>
      {Array.from({length:8}).map((_,i)=>{
        const t=(i+1)/9; const y=h*t; const xL=(width/2)*t; const xR=width-xL;
        return <line key={i} x1={xL} y1={y} x2={xR} y2={y} stroke={`rgba(200,134,10,${opacity*0.55})`} strokeWidth="0.7"/>;
      })}
      <line x1={0} y1={h-1} x2={width} y2={h-1} stroke={`rgba(200,134,10,${opacity})`} strokeWidth="1.5"/>
    </svg>
  );
}

function EyeOfRa({ size=120, opacity=0.55 }:{ size?:number; opacity?:number }) {
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
      <path d="M10,55 Q100,2 190,55 Q100,90 10,55" fill="rgba(200,134,10,0.12)"/>
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

function Ankh({ size=80, opacity=0.55 }:{ size?:number; opacity?:number }) {
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
        <ellipse cx="18" cy="20" rx="10" ry="17" fill="rgba(255,180,0,0.95)"/>
        <ellipse cx="18" cy="25" rx="7" ry="13" fill="rgba(255,100,0,0.9)"/>
        <ellipse cx="18" cy="30" rx="4" ry="8" fill="rgba(255,230,60,1)"/>
        <ellipse cx="18" cy="13" rx="4" ry="8" fill="rgba(255,240,160,0.7)"/>
      </g>
      <rect x="11" y="35" width="14" height="14" rx="2" fill="#7A5000"/>
      <rect x="9" y="44" width="18" height="5" rx="2" fill="#9A6600"/>
      <rect x="15" y="50" width="6" height="70" rx="3" fill="#8B6000"/>
      {[62,77,92,107].map(y=>(
        <line key={y} x1="15" y1={y} x2="21" y2={y} stroke="rgba(200,134,10,0.7)" strokeWidth="1.5"/>
      ))}
    </svg>
  );
}

function Mummy({ width=100, opacity=0.5 }:{ width?:number; opacity?:number }) {
  return (
    <svg width={width} height={width*2.8} viewBox="0 0 100 280" style={{display:"block",opacity}}>
      <defs>
        <linearGradient id="mG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#9A7840"/>
          <stop offset="50%" stopColor="#C8A050"/>
          <stop offset="100%" stopColor="#7A6030"/>
        </linearGradient>
      </defs>
      <ellipse cx="50" cy="28" rx="22" ry="26" fill="url(#mG)"/>
      {[14,20,27,33,40].map((y,i)=>(
        <line key={y} x1={30+i*2} y1={y} x2={70-i} y2={y} stroke="rgba(220,180,80,0.7)" strokeWidth="1.5"/>
      ))}
      <ellipse cx="42" cy="26" rx="4" ry="3" fill="#1a1000"/>
      <ellipse cx="58" cy="26" rx="4" ry="3" fill="#1a1000"/>
      <ellipse cx="42" cy="25" rx="1.5" ry="1" fill="rgba(220,160,20,1)"/>
      <ellipse cx="58" cy="25" rx="1.5" ry="1" fill="rgba(220,160,20,1)"/>
      <rect x="40" y="52" width="20" height="14" rx="4" fill="url(#mG)"/>
      <rect x="18" y="64" width="64" height="62" rx="10" fill="url(#mG)"/>
      {[72,83,94,105,116,124].map((y,i)=>(
        <line key={y} x1={22+i} y1={y} x2={78-i} y2={y} stroke="rgba(220,180,80,0.65)" strokeWidth="1.8"/>
      ))}
      <path d="M20,66 Q50,78 80,66" stroke="rgba(220,160,20,0.9)" strokeWidth="3" fill="none"/>
      <path d="M22,71 Q50,83 78,71" stroke="rgba(220,160,20,0.7)" strokeWidth="2" fill="none"/>
      <rect x="22" y="124" width="56" height="78" rx="8" fill="url(#mG)"/>
      {[132,144,156,168,180,192].map((y,i)=>(
        <line key={y} x1={22+i} y1={y} x2={78-i} y2={y} stroke="rgba(220,180,80,0.6)" strokeWidth="1.5"/>
      ))}
      <rect x="24" y="200" width="22" height="72" rx="8" fill="url(#mG)"/>
      <rect x="54" y="200" width="22" height="72" rx="8" fill="url(#mG)"/>
      {[210,222,234,246,258].map(y=>(
        <React.Fragment key={y}>
          <line x1="24" y1={y} x2="46" y2={y} stroke="rgba(220,180,80,0.6)" strokeWidth="1.5"/>
          <line x1="54" y1={y} x2="76" y2={y} stroke="rgba(220,180,80,0.6)" strokeWidth="1.5"/>
        </React.Fragment>
      ))}
      <ellipse cx="35" cy="272" rx="12" ry="7" fill="#7A5530"/>
      <ellipse cx="65" cy="272" rx="12" ry="7" fill="#7A5530"/>
    </svg>
  );
}

function Obelisk({ height=200, opacity=0.45 }:{ height?:number; opacity?:number }) {
  const w=height*0.18;
  return (
    <svg width={w*3} height={height} viewBox={`0 0 ${w*3} ${height}`} style={{display:"block",opacity}}>
      <defs>
        <linearGradient id="obG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7A5000"/>
          <stop offset="40%" stopColor="#AA7800"/>
          <stop offset="100%" stopColor="#5A3800"/>
        </linearGradient>
      </defs>
      <rect x={w*0.5} y={height-18} width={w*2} height={18} rx="2" fill="url(#obG)"/>
      <rect x={w*0.7} y={height-30} width={w*1.6} height={14} rx="2" fill="url(#obG)"/>
      <polygon points={`${w*1.5},12 ${w*0.85},${height-32} ${w*2.15},${height-32}`} fill="url(#obG)"/>
      <polygon points={`${w*1.5},0 ${w*1.18},16 ${w*1.82},16`} fill="rgba(220,160,20,0.95)"/>
      {[0.3,0.48,0.64,0.78].map((t,i)=>{
        const y=16+(height-50)*t; const xOff=(1-t)*w*0.3;
        return <rect key={i} x={w*1.5-5-xOff} y={y} width={10+xOff*2} height={3} rx="1" fill="rgba(200,134,10,0.65)"/>;
      })}
    </svg>
  );
}

function Scarab({ size=60, opacity=0.5 }:{ size?:number; opacity?:number }) {
  return (
    <svg width={size} height={size*0.9} viewBox="0 0 60 54" style={{display:"block",opacity}}>
      <defs>
        <radialGradient id="scG" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#AA7820"/>
          <stop offset="100%" stopColor="#5A3C00"/>
        </radialGradient>
      </defs>
      <ellipse cx="30" cy="30" rx="16" ry="20" fill="url(#scG)"/>
      <ellipse cx="30" cy="12" rx="10" ry="9" fill="url(#scG)"/>
      <line x1="30" y1="14" x2="30" y2="50" stroke="rgba(220,160,20,0.8)" strokeWidth="1"/>
      <path d="M14,22 Q4,18 2,30 Q4,42 14,38" fill="rgba(100,70,10,0.85)"/>
      <path d="M14,24 Q6,20 4,30 Q6,40 14,36" stroke="rgba(200,134,10,0.65)" strokeWidth="0.8" fill="none"/>
      <path d="M46,22 Q56,18 58,30 Q56,42 46,38" fill="rgba(100,70,10,0.85)"/>
      <path d="M46,24 Q54,20 56,30 Q54,40 46,36" stroke="rgba(200,134,10,0.65)" strokeWidth="0.8" fill="none"/>
      {[-1,0,1].map(i=>(
        <React.Fragment key={i}>
          <line x1="16" y1={30+i*8} x2="4" y2={34+i*8} stroke="rgba(200,134,10,0.7)" strokeWidth="1"/>
          <line x1="44" y1={30+i*8} x2="56" y2={34+i*8} stroke="rgba(200,134,10,0.7)" strokeWidth="1"/>
        </React.Fragment>
      ))}
      <line x1="26" y1="4" x2="18" y2="-2" stroke="rgba(200,134,10,0.8)" strokeWidth="1"/>
      <line x1="34" y1="4" x2="42" y2="-2" stroke="rgba(200,134,10,0.8)" strokeWidth="1"/>
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
      {Array.from({length:80}).map((_,i)=>(
        <span key={i}>{glyphs[i%glyphs.length]}</span>
      ))}
    </div>
  );
}

function TorchPair({ height=110 }:{ height?:number }) {
  return (
    <>
      <div style={{position:"absolute",left:22,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}} className="pyramid-section-deco">
        <Torch height={height}/>
      </div>
      <div style={{position:"absolute",right:22,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}} className="pyramid-section-deco">
        <Torch height={height}/>
      </div>
    </>
  );
}

function EgyptNavbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [navHidden, setNavHidden]   = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Hide on scroll down past 120px, show on scroll up
      if (y > 120) {
        setNavHidden(y > lastY.current);
      } else {
        setNavHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 769px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setMenuOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMenuOpen(false);
      const el = document.querySelector(href);
      if (el) {
        const top = Math.max(el.getBoundingClientRect().top + window.scrollY - 90, 0);
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  const navClasses = [
    "egypt-nav",
    scrolled ? "scrolled" : "",
    navHidden ? "nav-hidden" : "nav-visible",
  ].filter(Boolean).join(" ");

  return (
    <nav className={navClasses} role="navigation" aria-label="Main navigation">
      <div className="nav-inner">
        {/* Brand */}
        <a href="#home" className="nav-brand" onClick={(e) => handleNavClick(e, "#home")}>
          <span className="nav-brand-dot"/>
          <div className="flex items-center gap-2 sm:gap-4">
            <Image
              src="/images/iste_transparent.png"
              alt="ISTE Logo"
              width={48}
              height={48}
              style={{ width: "auto" }}
              className="h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
          <span style={{
            width:1,height:16,background:"rgba(200,134,10,0.3)",margin:"0 4px",display:"inline-block",verticalAlign:"middle"
          }}/>
          <span className="font-cinzel" style={{fontSize:13,letterSpacing:3,color:"rgba(232,200,122,0.5)"}}>
            Scotland Yard
          </span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links" style={{display:"flex"}}>
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button className="nav-cta" onClick={() => {
          const el = document.querySelector("#register");
          if (el) { const top = Math.max(el.getBoundingClientRect().top + window.scrollY - 90, 0); window.scrollTo({ top, behavior:"smooth" }); }
        }}>
          Register
        </button>

        {/* Hamburger */}
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span/><span/><span/>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`nav-mobile${menuOpen ? " open" : ""}`}>
        <div className="nav-mobile-inner">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.name}
            </a>
          ))}
          <a href="#register" className="nav-cta-mobile font-cinzel"
            style={{fontFamily:"'Cinzel',serif",fontSize:10,letterSpacing:3,color:INK,fontWeight:700,textDecoration:"none"}}
            onClick={(e) => handleNavClick(e, "#register")}>
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function ScotlandYardPage() {
  return (
    <div>
      <style>{CSS}</style>
      <div className="font-crimson overflow-x-hidden antialiased" style={{background:INK,color:"#fff"}}>

        {/* ══ NAVBAR ══ */}
        <EgyptNavbar />

        {/* ══ HERO ══ */}
        <section
          id="home"
          className="hero-inner relative flex items-center justify-center overflow-hidden"
          style={{
            minHeight:"100vh",
            padding:"120px 80px 100px",          /* extra top padding for navbar */
            background:`linear-gradient(130deg,${INK} 0%,${PAPYRUS} 100%)`
          }}
        >
          <div className="papyrus-bg"/>
          <div className="ankh-glow" style={{width:600,height:600,left:-200,top:"40%",transform:"translateY(-50%)"}}/>

          {/* Eye of Ra */}
          <div className="anim-eyePulse hero-deco" style={{position:"absolute",right:"6%",top:"10%",pointerEvents:"none"}}>
            <EyeOfRa size={220} opacity={0.5}/>
          </div>

          {/* Pyramids */}
          <div style={{position:"absolute",bottom:0,right:0,display:"flex",alignItems:"flex-end",pointerEvents:"none"}} className="hero-deco">
            <div className="anim-driftSlow delay-2"><Pyramid width={170} opacity={0.35}/></div>
            <div className="anim-driftSlow delay-0"><Pyramid width={270} opacity={0.45} gold/></div>
            <div className="anim-driftSlow delay-3"><Pyramid width={130} opacity={0.3}/></div>
          </div>

          {/* Obelisks */}
          <div style={{position:"absolute",right:"30%",bottom:0,pointerEvents:"none"}} className="hero-deco">
            <Obelisk height={155} opacity={0.4}/>
          </div>
          <div style={{position:"absolute",right:"22%",bottom:0,pointerEvents:"none"}} className="hero-deco">
            <Obelisk height={210} opacity={0.45}/>
          </div>

          <div style={{position:"absolute",left:22,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}} className="hero-deco">
            <Torch height={130}/>
          </div>
          <div style={{position:"absolute",right:22,top:"50%",transform:"translateY(-50%)",pointerEvents:"none"}} className="hero-deco">
            <Torch height={130}/>
          </div>

          {/* Mummy */}
          <div className="anim-driftSlow delay-1 hero-deco" style={{position:"absolute",left:"4%",bottom:0,pointerEvents:"none"}}>
            <Mummy width={88} opacity={0.5}/>
          </div>

          {/* Ankh */}
          <div className="anim-drift delay-2 hero-deco" style={{position:"absolute",left:"14%",top:"8%",pointerEvents:"none"}}>
            <Ankh size={58} opacity={0.45}/>
          </div>

          {/* Scarab */}
          <div className="anim-driftSlow delay-1 hero-deco" style={{position:"absolute",right:"42%",top:"10%",pointerEvents:"none"}}>
            <Scarab size={50} opacity={0.45}/>
          </div>

          {/* Unicode glyphs */}
          <div className="scarab" style={{right:88,top:"15%",fontSize:52,opacity:0.25}}>𓂀</div>
          <div className="scarab" style={{left:220,bottom:"22%",fontSize:36,opacity:0.25}}>𓆣</div>

          <div className="relative z-10 text-center" style={{maxWidth:720}}>
            <div className="inline-flex items-center gap-2 font-cinzel"
              style={{border:`1px solid rgba(200,134,10,0.4)`,padding:"6px 20px",marginBottom:28,fontSize:12,letterSpacing:4,color:SAND,borderRadius:2}}>
              <span className="anim-flicker inline-block" style={{width:6,height:6,borderRadius:"50%",background:GOLD}}/>
              ISTE NITK · Scotland Yard 2026
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
            <p className="font-crimson" style={{color:"rgba(232,200,122,0.6)",maxWidth:520,lineHeight:2,fontSize:19,fontWeight:300,marginBottom:38,fontStyle:"italic",margin:"0 auto 38px"}}>
              The sands of time have spoken. Your wit will be tested. Your conscience weighed.
              Your every step, closer to salvation — or doom.
            </p>
            <button className="btn-egypt" onClick={() => {
              const el = document.querySelector("#register");
              if (el) { const top = Math.max(el.getBoundingClientRect().top + window.scrollY - 90, 0); window.scrollTo({ top, behavior:"smooth" }); }
            }}>Register Now</button>
          </div>
        </section>

        {/* Sand dunes */}
        <div style={{marginTop:-2,background:STONE}}><SandDunes opacity={0.35}/></div>
        <HieroStrip color={STONE} glyphs={["𓂀","𓆣","𓅓","𓁹","𓊪","𓂋"]}/>

        {/* ══ ABOUT ══ */}
        <section id="about" className="section-pad" style={{padding:"96px 80px",background:PAPYRUS,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",right:40,bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Mummy width={120} opacity={0.45}/>
          </div>
          <div style={{position:"absolute",right:200,top:40,pointerEvents:"none"}} className="pyramid-section-deco">
            <Ankh size={55} opacity={0.35}/>
          </div>
          <div style={{position:"absolute",left:30,bottom:40,pointerEvents:"none"}} className="pyramid-section-deco">
            <Scarab size={80} opacity={0.38}/>
          </div>
          <TorchPair height={110}/>

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

        {/* ══ EVENT INFO ══ */}
        <section id="details" className="section-pad" style={{padding:"96px 80px",position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",right:-20,bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Pyramid width={340} opacity={0.3}/>
          </div>
          <div style={{position:"absolute",right:80,top:20,pointerEvents:"none"}} className="pyramid-section-deco">
            <Obelisk height={130} opacity={0.35}/>
          </div>
          <TorchPair height={100}/>

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
        </section>

        <HieroStrip color={STONE} glyphs={["𓁹","𓊹","𓂀","𓆣","𓅓","𓊪"]}/>

        {/* ══ TIMELINE ══ */}
        <section id="trials" className="section-pad" style={{padding:"96px 80px",background:PAPYRUS,position:"relative",overflow:"hidden"}}>
          <div style={{position:"absolute",right:60,top:20,pointerEvents:"none",display:"flex",gap:16,alignItems:"flex-start"}} className="pyramid-section-deco">
            <Obelisk height={140} opacity={0.38}/>
            <Obelisk height={175} opacity={0.42}/>
          </div>
          <div style={{position:"absolute",left:60,bottom:60,pointerEvents:"none"}} className="pyramid-section-deco">
            <Scarab size={85} opacity={0.4}/>
          </div>
          <div className="anim-eyePulse pyramid-section-deco" style={{position:"absolute",left:"50%",top:30,transform:"translateX(-50%)",pointerEvents:"none"}}>
            <EyeOfRa size={150} opacity={0.3}/>
          </div>
          <TorchPair height={105}/>

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
          <SandDunes opacity={0.3}/>
        </div>
        <HieroStrip color={GOLD} glyphs={["𓂋","𓅱","𓇯","𓈖","𓊹","𓁹"]}/>

        {/* ══ CTA / REGISTER ══ */}
        <section id="register" className="cta-bg text-center relative overflow-hidden"
          style={{padding:"130px 20px",background:`linear-gradient(130deg,${PAPYRUS} 0%,${INK} 100%)`}}>
          <div style={{position:"absolute",bottom:0,left:"50%",transform:"translateX(-50%)",pointerEvents:"none",opacity:0.18}}>
            <Pyramid width={600} gold/>
          </div>
          <div style={{position:"absolute",left:"5%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Mummy width={68} opacity={0.45}/>
          </div>
          <div style={{position:"absolute",right:"5%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Mummy width={68} opacity={0.45}/>
          </div>
          <div className="anim-eyePulse pyramid-section-deco" style={{position:"absolute",top:20,left:"50%",transform:"translateX(-50%)",pointerEvents:"none"}}>
            <EyeOfRa size={180} opacity={0.3}/>
          </div>
          <div style={{position:"absolute",left:"17%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Obelisk height={120} opacity={0.38}/>
          </div>
          <div style={{position:"absolute",right:"17%",bottom:0,pointerEvents:"none"}} className="pyramid-section-deco">
            <Obelisk height={120} opacity={0.38}/>
          </div>
          <TorchPair height={120}/>

          <div className="relative z-10">
            <div className="flex justify-center" style={{marginBottom:20}}>
              <Ankh size={50} opacity={0.65}/>
            </div>
            <div className="ornament" style={{marginBottom:24,maxWidth:400,margin:"0 auto 24px"}}>THE FINAL VERDICT</div>
            <h2 className="font-cinzel text-white"
              style={{fontSize:"clamp(48px,6vw,78px)",letterSpacing:3,marginBottom:14,textShadow:"3px 3px 0 rgba(0,0,0,0.3)"}}>
              The Dead Don&apos;t Wait
            </h2>
            <p className="font-crimson" style={{fontSize:18,color:"rgba(232,200,122,0.45)",marginBottom:44,fontWeight:300,fontStyle:"italic"}}>
              Osiris has opened his ledger. Your name is already written — the question is which side.
            </p>
            <button className="btn-egypt">Register Now</button>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="footer-inner flex items-center justify-between"
          style={{background:"#04030A",padding:"28px 80px",minHeight:80,borderTop:`2px solid rgba(200,134,10,0.2)`}}>
          <div>
            <div className="font-cinzel" style={{fontSize:15,letterSpacing:5,color:GOLD}}>ISTE NITK</div>
            <div className="font-crimson" style={{fontSize:12,color:"rgba(255,255,255,0.55)",marginTop:3}}>
              Indian Society for Technical Education · NITK Surathkal
            </div>
          </div>
          <div className="flex" style={{gap:28}}>
            {["Home","Events","Instagram","Contact"].map(l=>(
              <a key={l} href="#"
                className="no-underline font-cinzel transition-colors duration-200"
                style={{fontSize:10,letterSpacing:3,textTransform:"uppercase",color:"rgba(255,255,255,0.55)",textDecoration:"none"}}
                onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = GOLD}
                onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.55)"}
              >
                {l}
              </a>
            ))}
          </div>
        </footer>

      </div>
    </div>
  );
}
