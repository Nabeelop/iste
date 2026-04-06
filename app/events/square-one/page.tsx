"use client";

import React, { useState } from "react";
import { 
  Home, 
  BarChart2, 
  Calendar, 
  BookOpen, 
  Play, 
  Map, 
  Rocket,
  Clock,
  Hexagon,
  Gamepad2,
  Terminal,
  PlayCircle
} from "lucide-react";

export default function SquareOnePage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex flex-col h-screen text-white font-sans bg-black overflow-hidden selection:bg-[#1DB954] selection:text-black">
      {/* Animated Star Field Background Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #121212 0%, #000 100%), url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='1' fill='%23ffffff' opacity='0.3'/%3E%3Ccircle cx='20' cy='80' r='1.5' fill='%23ffffff' opacity='0.5'/%3E%3Ccircle cx='80' cy='20' r='1' fill='%23ffffff' opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: "cover, 100px 100px",
          animation: "drift 100s linear infinite",
        }}
      ></div>

      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden z-10">
        
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-[#000000] border-r border-white/5 flex flex-col pt-6 pb-2 px-4 shadow-2xl relative z-20">
          <div className="flex items-center gap-3 mb-10 px-2">
            <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center shadow-[0_0_15px_rgba(29,185,84,0.5)]">
              <Rocket className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white space-x-1">
              <span>SQUARE</span>
              <span className="text-white/70 font-light">ONE</span>
            </h1>
          </div>

          <nav className="flex-1 space-y-1">
            {[
              { id: "Dashboard", icon: Home, label: "The Dashboard" },
              { id: "Leaderboard", icon: BarChart2, label: "The Leaderboard" },
              { id: "EventLog", icon: BookOpen, label: "Event Log" },
              { id: "Missions", icon: Calendar, label: "Upcoming Missions" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-4 px-2 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === item.id 
                    ? "bg-white/10 text-white" 
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? "text-[#1DB954]" : "stroke-current"}`} />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Sidebar Footer element */}
          <div className="mt-auto px-2 pt-6">
            <div className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
              Your Library
            </div>
            <div className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white cursor-pointer transition-colors py-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                <Hexagon className="w-4 h-4 text-white" />
              </div>
              <span className="truncate">SIG Vault</span>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto bg-gradient-to-b from-[#121212] to-[#000000] scrollbar-hide relative z-10">
          
          {/* Top Bar (Header) */}
          <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-4 bg-[#121212]/80 backdrop-blur-md border-b border-white/5">
             <div className="flex items-center gap-2">
               <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               </button>
               <button className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/80 transition">
                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
               </button>
             </div>
             <div className="flex items-center gap-4">
               <button className="text-sm font-bold tracking-wide text-white hover:scale-105 transition transform">Support</button>
               <button className="px-5 py-2 rounded-full bg-white text-black text-sm font-bold tracking-wide hover:scale-105 transition transform">Register Now</button>
             </div>
          </header>

          <div className="p-8 pb-32">
            {/* Hero Section */}
            <section className="flex items-end gap-6 mb-12">
              {/* Fake 3D Badge */}
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-lg bg-gradient-to-br from-indigo-900 via-black to-[#1DB954]/20 shadow-2xl flex items-center justify-center relative overflow-hidden group border border-white/10">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute w-32 h-32 bg-[#1DB954] blur-[80px] rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                <Hexagon className="w-24 h-24 text-white drop-shadow-[0_0_15px_rgba(29,185,84,0.8)] z-10" />
              </div>
              
              <div className="flex flex-col gap-2 pb-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#1DB954]">Featured Event</span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-lg" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Square One '26
                </h1>
                <p className="text-neutral-400 font-medium text-sm md:text-base mt-2 max-w-lg">
                  Your Journey Begins. Traverse the technical cosmos, prove your worth, and claim your place among the SIGs.
                </p>
                
                {/* Action Row */}
                <div className="flex items-center gap-6 mt-6">
                  <button className="w-14 h-14 rounded-full bg-[#1DB954] text-black flex items-center justify-center hover:scale-105 hover:bg-[#1ed760] transition-all duration-300 shadow-[0_8px_20px_rgba(29,185,84,0.3)] group">
                    <Play className="w-6 h-6 ml-1 group-hover:scale-110 transition-transform" fill="currentColor" />
                  </button>
                  <button className="w-10 h-10 rounded-full border border-neutral-400 text-neutral-400 flex items-center justify-center hover:text-white hover:border-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  </button>
                  <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1DB954] animate-pulse"></span>
                    Live Now
                  </span>
                </div>
              </div>
            </section>

            {/* Event Log (Playlist Style) */}
            <section className="mb-12">
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold tracking-tight">Mission Log</h2>
                 <span className="text-sm font-semibold text-neutral-400 hover:text-white cursor-pointer transition">See All</span>
               </div>
               
               <div className="w-full">
                 {/* Table Header */}
                 <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2 border-b border-white/5 text-xs text-neutral-400 uppercase tracking-widest mb-2 font-medium">
                   <div className="w-8 text-center">#</div>
                   <div>Title</div>
                   <div>Status</div>
                   <div className="flex justify-end pr-2"><Clock className="w-4 h-4" /></div>
                 </div>
                 
                 {/* Playlist Items */}
                 <div className="flex flex-col space-y-1">
                   {[
                     { num: 1, title: "The Briefing (Orientation)", sig: "All SIGs", status: "Completed", time: "Oct 12", active: false },
                     { num: 2, title: "Clue Hunt: The Virtual Campus", sig: "Crypt & Chronicle", status: "Active", time: "Oct 15", active: true },
                     { num: 3, title: "The Pitch (Presentation Round)", sig: "Clutch & Catalyst", status: "Upcoming", time: "Oct 20", active: false },
                     { num: 4, title: "Code Relay", sig: "Charge & Concrete", status: "Locked", time: "Oct 22", active: false },
                   ].map((item, idx) => (
                     <div key={idx} className="group grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-3 rounded-md hover:bg-white/5 transition-colors items-center cursor-pointer">
                       <div className="w-8 text-center text-sm font-medium text-neutral-500 group-hover:hidden">
                         {item.active ? <img src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif" alt="playing" className="w-3 h-3 mx-auto" /> : item.num}
                       </div>
                       <div className="w-8 text-center hidden group-hover:block text-white">
                         <Play className="w-4 h-4 mx-auto" fill="currentColor" />
                       </div>
                       <div className="flex flex-col">
                         <span className={`text-base font-semibold ${item.active ? "text-[#1DB954]" : "text-white"}`}>{item.title}</span>
                         <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">{item.sig}</span>
                       </div>
                       <div className="text-sm text-neutral-400 flex items-center gap-2">
                         {item.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954]"></span>}
                         {item.status}
                       </div>
                       <div className="text-sm text-neutral-400 pr-2">{item.time}</div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>

            {/* Leaderboard Section (Top Charts) */}
            <section>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Top Charts: Leaderboard</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { rank: 1, team: "Null Pointers", xp: "12,450", color: "from-amber-400 to-yellow-600" },
                  { rank: 2, team: "Byte Me", xp: "11,200", color: "from-neutral-300 to-neutral-500" },
                  { rank: 3, team: "Runtime Terrors", xp: "10,800", color: "from-amber-700 to-amber-900" },
                  { rank: 4, team: "Ctrl Alt Defeat", xp: "9,950", color: "from-blue-600 to-indigo-800" },
                ].map((team, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/5 rounded-lg p-5 hover:bg-white/10 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-48 relative overflow-hidden">
                    <div className={`absolute -right-6 -top-6 w-24 h-24 bg-gradient-to-br ${team.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500 blur-xl`}></div>
                    <div>
                      <div className="text-[4rem] font-black text-white/5 absolute -right-2 -bottom-6 leading-none pointer-events-none group-hover:text-white/10 transition-colors">
                        #{team.rank}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-1 drop-shadow-md z-10 relative">{team.team}</h3>
                      <p className="text-sm font-semibold text-neutral-400 z-10 relative">{team.xp} XP</p>
                    </div>
                    <div className="flex items-center gap-2 mt-auto z-10 relative opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                      <div className="w-6 h-6 rounded-full bg-black/50 flex items-center justify-center">
                         <PlayCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-wider text-white">View Profile</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            
          </div>
        </main>
      </div>

      {/* Now Playing Bar (Persistent Bottom Bar) */}
      <footer className="h-[90px] bg-[#000000] border-t border-white/10 px-4 flex items-center justify-between z-30 relative shrink-0">
        {/* Left: Current Mission Info */}
        <div className="flex items-center gap-4 w-1/3 min-w-[200px]">
          <div className="w-14 h-14 bg-gradient-to-br from-[#1DB954] to-blue-900 rounded shadow-[0_0_10px_rgba(255,255,255,0.1)] flex items-center justify-center border border-white/10">
            <Gamepad2 className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold text-white hover:underline cursor-pointer">Clue Hunt: The Virtual Campus</span>
            <span className="text-xs font-medium text-neutral-400 hover:underline cursor-pointer">Current Mission</span>
          </div>
          <button className="ml-2 text-[#1DB954] hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
          </button>
        </div>

        {/* Center: Progress & Controls */}
        <div className="flex flex-col items-center justify-center w-1/3 max-w-[722px] px-4">
          <div className="flex items-center gap-6 mb-2">
            <button className="text-neutral-400 hover:text-white transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391a2.25 2.25 0 0 1 1.724.804l1.312 1.563-.969 1.154-1.343-1.601A3.75 3.75 0 0 0 .39 3.5zm15.589 8.75L13.15 15.078a.75.75 0 1 1-1.06-1.06l1.017-1.018h-1.947a2.25 2.25 0 0 1-1.724-.804l-1.313-1.564.97-1.153 1.342 1.6A3.75 3.75 0 0 0 11.16 12.5h1.948l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828z"/></svg></button>
            <button className="text-neutral-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"/></svg></button>
            <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition">
              <span className="w-3 h-3 bg-black rounded-sm"></span>
            </button>
            <button className="text-neutral-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16"><path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"/></svg></button>
            <button className="text-neutral-400 hover:text-white transition"><svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4.75A.75.75 0 0 1 .75 4h14.5a.75.75 0 0 1 0 1.5H.75A.75.75 0 0 1 0 4.75zm0 6.5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1-.75-.75z"/></svg></button>
          </div>
          
          <div className="flex items-center gap-2 w-full max-w-md">
            <span className="text-[11px] text-neutral-400 font-medium font-mono min-w-[35px] text-right">Oct 15</span>
            <div className="h-1 bg-white/20 rounded-full w-full group overflow-hidden cursor-pointer relative flex items-center">
              <div className="absolute h-full bg-white group-hover:bg-[#1DB954] transition-colors rounded-full" style={{ width: "65%" }}></div>
              <div className="absolute w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow -ml-1 transition-opacity z-10" style={{ left: "65%" }}></div>
            </div>
            <span className="text-[11px] text-neutral-400 font-medium font-mono min-w-[35px]">Oct 27</span>
          </div>
        </div>

        {/* Right: Extra Controls */}
        <div className="flex items-center justify-end gap-4 w-1/3 min-w-[180px]">
          <Terminal className="w-4 h-4 text-neutral-400 hover:text-white transition cursor-pointer" />
          <Map className="w-4 h-4 text-neutral-400 hover:text-white transition cursor-pointer" />
          <div className="flex items-center gap-2 w-24">
            <svg className="w-4 h-4 text-neutral-400 hover:text-white transition cursor-pointer shrink-0" fill="currentColor" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0-1.071 1.85 2.14 2.14 0 0 0 1.07 1.85l5.419 3.129V2.022l-5.418 3.128z"/></svg>
            <div className="h-1 bg-white/20 rounded-full w-full group cursor-pointer relative flex items-center">
              <div className="absolute h-full bg-white group-hover:bg-[#1DB954] transition-colors rounded-full" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Style overrides if needed */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift {
          from { background-position: 0 0, 0 0; }
          to { background-position: 1000px 500px, 100px 100px; }
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}} />
    </div>
  );
}
