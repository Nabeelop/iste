"use client"

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Events } from './data'

interface Planet {
  id: number
  title: string
  description: string
  radius: number
  speed: number
  image: string
  link: string
}

const SolarSystem = () => {
  const router = useRouter()
  const [hoveredPlanet, setHoveredPlanet] = useState<number | null>(null)
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const planets: Planet[] = [
    {
      id: 0,
      title: Events[0].title,
      description: Events[0].description,
      radius: 200,
      speed: 20,
      image: Events[0].image || '/scotland_yard.jpeg',
      link: Events[0].link || '/events/scotland-yard'
    },
    {
      id: 1,
      title: Events[1].title,
      description: Events[1].description,
      radius: 360,
      speed: 28,
      image: Events[1].image || '/square_one.jpeg',
      link: Events[1].link || '/events/square-one'
    },
    {
      id: 2,
      title: Events[2].title,
      description: Events[2].description,
      radius: 520,
      speed: 36,
      image: Events[2].image || '/transcend.png',
      link: Events[2].link || '/events/transcend'
    },
  ]

  const handlePlanetDoubleClick = (link: string) => {
    // REDIRECTION PLACEHOLDER: logic to handle external URLs (starting with http) vs internal repository paths
    if (link.startsWith('http')) {
      window.open(link, '_blank', 'noopener,noreferrer')
    } else {
      router.push(link)
    }
  }

  const handlePlanetHover = (planetId: number, e: React.MouseEvent) => {
    if (hoverTimeoutRef.current) {
      window.clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setHoveredPlanet(planetId)
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setTooltipPos({ x: rect.right + 12, y: rect.top + rect.height / 2 })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
  }

  const handlePlanetClick = (planetId: number) => {
    setSelectedPlanet((prev) => (prev === planetId ? null : planetId))
  }

  const hoverTimeoutRef = useRef<number | null>(null)

  return (
    <div className="w-full min-h-screen flex items-center justify-center relative bg-transperant overflow-hidden py-16">
      {/* EVENTS Header */}
      <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-40">
        <h1 className="text-4xl md:text-6xl font-black tracking-[0.25em] text-white drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
          EVENTS
        </h1>
      </div>
      <style>{`
        @keyframes orbit-0 {
  from { transform: rotate(0deg) translateX(200px) rotate(0deg); }
  to { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
}

@keyframes orbit-1 {
  from { transform: rotate(120deg) translateX(360px) rotate(-120deg); }
  to { transform: rotate(480deg) translateX(360px) rotate(-480deg); }
}

@keyframes orbit-2 {
  from { transform: rotate(240deg) translateX(520px) rotate(-240deg); }
  to { transform: rotate(600deg) translateX(520px) rotate(-600deg); }
}

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 229, 255, 0.4), inset 0 0 20px rgba(0, 229, 255, 0.1); }
          50% { box-shadow: 0 0 40px rgba(0, 229, 255, 0.6), inset 0 0 20px rgba(0, 229, 255, 0.2); }
        }

        @keyframes float-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes glow-star-pulse {
          0% { opacity: 0.35; transform: scale(0.92); }
          50% { opacity: 1; transform: scale(1.06); }
          100% { opacity: 0.35; transform: scale(0.96); }
        }

        .glow-star {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          mix-blend-mode: screen;
          filter: blur(6px);
          will-change: transform, opacity;
        }

        @keyframes shoot {
          0% { opacity: 0; transform: translateX(-10vw) translateY(0) rotate(25deg) scaleX(0.2); }
          10% { opacity: 1; }
          100% { opacity: 0; transform: translateX(120vw) translateY(40vh) rotate(25deg) scaleX(1); }
        }

        .shooting-star {
          position: absolute;
          width: 2px;
          height: 120px;
          background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 45%, rgba(255,255,255,0.2) 70%, rgba(255,255,255,0) 100%);
          border-radius: 50px;
          filter: blur(2px);
          transform-origin: 0 0;
          pointer-events: none;
          z-index: 5;
          mix-blend-mode: screen;
          will-change: transform, opacity;
        }

        .starfield {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s ease-in-out infinite;
        }

        @keyframes pulse-glow-0 {
          0%, 100% { box-shadow: 0 0 30px rgba(0, 229, 255, 0.4), 0 0 60px rgba(0, 229, 255, 0.2), inset 0 0 20px rgba(0, 229, 255, 0.2); }
          50% { box-shadow: 0 0 60px rgba(0, 229, 255, 0.7), 0 0 120px rgba(0, 229, 255, 0.4), inset 0 0 30px rgba(0, 229, 255, 0.3); }
        }

        @keyframes pulse-glow-1 {
          0%, 100% { box-shadow: 0 0 30px rgba(255, 159, 28, 0.4), 0 0 60px rgba(255, 159, 28, 0.2), inset 0 0 20px rgba(255, 159, 28, 0.2); }
          50% { box-shadow: 0 0 60px rgba(255, 159, 28, 0.7), 0 0 120px rgba(255, 159, 28, 0.4), inset 0 0 30px rgba(255, 159, 28, 0.3); }
        }

        @keyframes pulse-glow-2 {
          0%, 100% { box-shadow: 0 0 30px rgba(217, 70, 239, 0.4), 0 0 60px rgba(217, 70, 239, 0.2), inset 0 0 20px rgba(217, 70, 239, 0.2); }
          50% { box-shadow: 0 0 60px rgba(217, 70, 239, 0.7), 0 0 120px rgba(217, 70, 239, 0.4), inset 0 0 30px rgba(217, 70, 239, 0.3); }
        }

        @keyframes sun-glow-pulse {
          0%, 100% { box-shadow: 0 0 60px rgba(0, 229, 255, 0.7), inset 0 0 40px rgba(0, 229, 255, 0.4), 0 0 120px rgba(0, 229, 255, 0.3); }
          50% { box-shadow: 0 0 100px rgba(0, 229, 255, 0.9), inset 0 0 50px rgba(0, 229, 255, 0.5), 0 0 200px rgba(0, 229, 255, 0.5); }
        }

        @keyframes glow-expand {
          0% { box-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
          100% { box-shadow: 0 0 20px currentColor, 0 0 40px currentColor, 0 0 60px currentColor; }
        }

        .orbital-container {
          position: relative;
        width: 1100px; 
  height: 1100px;
          margin: 0 auto;
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .orbits-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%) scaleY(0.62);
          transform-origin: center;
        }

        .planet-image {
          transform: scaleY(1.6129);
          transform-origin: 50% 50%;
        }

        .orbital-background {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.05) 0%, rgba(0, 229, 255, 0) 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .orbit-ring {
          position: absolute;
          border: 1px dashed rgba(0, 229, 255, 0.18);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.08) inset;
        }

        .orbit-ring-1 { width: 400px; height: 400px; }
.orbit-ring-2 { width: 720px; height: 720px; }
.orbit-ring-3 { width: 1040px; height: 1040px; }

        .sun {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120px;
          height: 120px;
          background: radial-gradient(circle at 35% 35%, rgba(0, 229, 255, 0.9), rgba(0, 229, 255, 0.1));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(0, 229, 255, 0.5);
          box-shadow: 0 0 60px rgba(0, 229, 255, 0.7), inset 0 0 40px rgba(0, 229, 255, 0.4), 0 0 120px rgba(0, 229, 255, 0.3);
          z-index: 20;
          animation: float-in 0.8s ease-out;
        }

        .sun-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: inset 0 0 20px rgba(0, 229, 255, 0.3);
        }

        .planet-container {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          transition: animation-play-state 0.2s linear;
          will-change: transform;
        }

        .planet-container:hover { animation-play-state: paused; }

        .orbital-container.paused .planet-container { animation-play-state: paused; }

    .planet-orbit-0 { animation: orbit-0 40s linear infinite; } 
.planet-orbit-1 { animation: orbit-1 55s linear infinite; }
.planet-orbit-2 { animation: orbit-2 70s linear infinite; }

        .planet {
          position: absolute;
          width: 80px;       
          height: 80px;      
          left: -40px;       
          top: -40px;       
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .planet.selected {
          transform: scale(1.6);
          z-index: 30;
        }

        .planet-container:nth-child(4) .planet {
          box-shadow: 0 0 45px rgba(0, 229, 255, 0.6), inset 0 0 25px rgba(0, 229, 255, 0.3);
        }

        .planet-container:nth-child(5) .planet {
          box-shadow: 0 0 45px rgba(255, 159, 28, 0.6), inset 0 0 25px rgba(255, 159, 28, 0.3);
        }

        .planet-container:nth-child(6) .planet {
          box-shadow: 0 0 45px rgba(217, 70, 239, 0.6), inset 0 0 25px rgba(217, 70, 239, 0.3);
        }

        .planet.hovered {
          width: 100px;      
          height: 100px;     
          left: -50px;       
          top: -50px;        
          border-width: 3px;
        }

        .planet-container:nth-child(4) .planet.hovered {
          box-shadow: 0 0 80px rgba(0, 229, 255, 0.9), inset 0 0 40px rgba(0, 229, 255, 0.5), 0 0 150px rgba(0, 229, 255, 0.6);
          border-color: rgba(0, 229, 255, 1);
        }

        .planet-container:nth-child(5) .planet.hovered {
          box-shadow: 0 0 80px rgba(255, 159, 28, 0.9), inset 0 0 40px rgba(255, 159, 28, 0.5), 0 0 150px rgba(255, 159, 28, 0.6);
          border-color: rgba(255, 159, 28, 1);
        }

        .planet-container:nth-child(6) .planet.hovered {
          box-shadow: 0 0 80px rgba(217, 70, 239, 0.9), inset 0 0 40px rgba(217, 70, 239, 0.5), 0 0 150px rgba(217, 70, 239, 0.6);
          border-color: rgba(217, 70, 239, 1);
        }

        .planet-image {
       width: 70px;       
          height: 70px;
          border-radius: 50%;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset -20px -20px 40px rgba(0, 0, 0, 0.6), inset 15px 15px 30px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.3);
          background: radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.1), transparent);
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .planet-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.36s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: 50% 50%;
        }

        .planet-highlight {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 30% 28%, rgba(255,255,255,0.28), rgba(255,255,255,0.06) 8%, rgba(0,0,0,0) 40%);
          mix-blend-mode: screen;
        }

        .planet.hovered .planet-image {
          width: 90px;       
          height: 90px;      
          box-shadow: inset -25px -25px 50px rgba(0, 0, 0, 0.7), inset 20px 20px 40px rgba(255, 255, 255, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 229, 255, 0.4);
        }

        .planet-container:nth-child(4) .planet.hovered .planet-image {
          box-shadow: inset -25px -25px 50px rgba(0, 0, 0, 0.7), inset 20px 20px 40px rgba(0, 229, 255, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(0, 229, 255, 0.5);
        }

        .planet-container:nth-child(5) .planet.hovered .planet-image {
          box-shadow: inset -25px -25px 50px rgba(0, 0, 0, 0.7), inset 20px 20px 40px rgba(255, 159, 28, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(255, 159, 28, 0.5);
        }

        .planet-container:nth-child(6) .planet.hovered .planet-image {
          box-shadow: inset -25px -25px 50px rgba(0, 0, 0, 0.7), inset 20px 20px 40px rgba(217, 70, 239, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.4), 0 0 25px rgba(217, 70, 239, 0.5);
        }

        .planet-label {
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 11px;
          font-weight: 600;
          color: #00E5FF;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.3s ease;
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
        }

        .planet.hovered .planet-label {
          opacity: 1;
        }
      `}</style>
{/* 
      <div className="starfield">
        {Array.from({ length: 40 }).map((_, i) => {
          const colors = [
            'rgba(255, 255, 255, 1)',
            'rgba(150, 200, 255, 0.95)',
            'rgba(0, 229, 255, 0.95)',
            'rgba(200, 150, 255, 0.9)',
            'rgba(255, 230, 200, 0.9)',
            'rgba(100, 200, 255, 0.95)',
          ]
          const color = colors[Math.floor(Math.random() * colors.length)]
          return (
            <div
              key={`star-${i}`}
              className="star"
              style={{
                width: Math.random() * 2.5 + 0.6 + 'px',
                height: Math.random() * 2.5 + 0.6 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.6,
                animationDelay: Math.random() * 3 + 's',
                backgroundColor: color,
                boxShadow: `0 0 ${Math.random() * 4 + 3}px ${color}`
              }}
            />
          )
        })}

        {Array.from({ length: 8}).map((_, i) => {
          const gradients = [
            `radial-gradient(circle, rgba(255,255,255,${Math.random() * 0.9 + 0.5}) 0%, rgba(255,255,255,0.15) 35%, rgba(0,0,0,0) 60%)`,
            `radial-gradient(circle, rgba(0,229,255,${Math.random() * 0.85 + 0.4}) 0%, rgba(0,229,255,0.12) 35%, rgba(0,0,0,0) 60%)`,
            `radial-gradient(circle, rgba(150,200,255,${Math.random() * 0.8 + 0.4}) 0%, rgba(150,200,255,0.12) 35%, rgba(0,0,0,0) 60%)`,
            `radial-gradient(circle, rgba(200,100,255,${Math.random() * 0.8 + 0.4}) 0%, rgba(200,100,255,0.12) 35%, rgba(0,0,0,0) 60%)`,
            `radial-gradient(circle, rgba(255,200,150,${Math.random() * 0.8 + 0.4}) 0%, rgba(255,200,150,0.12) 35%, rgba(0,0,0,0) 60%)`,
          ]
          return (
            <div
              key={`gstar-${i}`}
              className="glow-star"
              style={{
                width: `${Math.random() * 32 + 8}px`,
                height: `${Math.random() * 32 + 8}px`,
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                opacity: Math.random() * 0.5 + 0.35,
                background: gradients[Math.floor(Math.random() * gradients.length)],
                animation: `glow-star-pulse ${Math.random() * 8 + 6}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          )
        })}

      </div> */}

      <div className={`orbital-container ${hoveredPlanet !== null ? 'paused' : ''}`} onMouseMove={handleMouseMove} onMouseLeave={() => setHoveredPlanet(null)}>
        <div className="orbital-background"></div>

        <div className="orbits-wrapper">
          <div className="orbit-ring orbit-ring-1"></div>
          <div className="orbit-ring orbit-ring-2"></div>
          <div className="orbit-ring orbit-ring-3"></div>

          {planets.map((planet) => {
          const min = Math.min(...planets.map((p) => p.radius))
          const max = Math.max(...planets.map((p) => p.radius))
          const t = (planet.radius - min) / (max - min || 1)
          const scale = 1.08 - t * 0.18

          return (
            <div
              key={planet.id}
              className={`planet-container planet-orbit-${planet.id}`}
              onMouseEnter={(e) => handlePlanetHover(planet.id, e)}
              onMouseLeave={() => {
                hoverTimeoutRef.current = window.setTimeout(() => setHoveredPlanet(null), 180)
              }}
            >
              <div
                onClick={() => handlePlanetClick(planet.id)}
                onDoubleClick={() => handlePlanetDoubleClick(planet.link)}
                className={`planet ${hoveredPlanet === planet.id ? 'hovered' : ''} ${selectedPlanet === planet.id ? 'selected' : ''}`}
                style={{ transform: `scale(${selectedPlanet === planet.id ? 1.6 : hoveredPlanet === planet.id ? 1.18 : scale})` }}
              >
                <div className="planet-image">
                  <Image
                    src={planet.image}
                    alt={planet.title}
                    width={70}     
                    height={70}    
                    className="w-full h-full object-cover"
                    style={{ transform: 'rotate(0deg)', transformOrigin: '50% 50%' }}
                  />
                  <div className="planet-highlight" aria-hidden />
                </div>
                <div className="planet-label">{planet.title}</div>
              </div>
            </div>
          )
          })}
        </div>

        <div className="sun">
          <div className="sun-image">
            <Image
              src="/download (1).png"
              alt="ISTE Logo"
              width={85}
              height={85}
              className="w-full h-full object-contain bg-black/30 rounded-full"
            />
          </div>
        </div>

      </div>

      {hoveredPlanet !== null && (
        <div
          className="fixed z-50"
          onMouseEnter={() => {
            if (hoverTimeoutRef.current) {
              window.clearTimeout(hoverTimeoutRef.current)
              hoverTimeoutRef.current = null
            }
          }}
          onMouseLeave={() => setHoveredPlanet(null)}
          style={{
            left: `${tooltipPos.x}px`,
            top: `${tooltipPos.y}px`,
            transform: 'translateY(-50%)'
          }}
        >
          <div className="bg-black/70 border border-white/10 rounded-xl p-4 w-80 shadow-2xl backdrop-blur-sm">
            <h3 className="font-bold text-white mb-2 text-lg">{planets[hoveredPlanet].title}</h3>
            <p className="text-gray-200 text-sm leading-relaxed">{planets[hoveredPlanet].description}</p>
            <div className="mt-3 flex gap-2">
              <Image src={planets[hoveredPlanet].image} alt={planets[hoveredPlanet].title} width={64} height={64} className="rounded-full" />
              <div>
                <div className="text-xs text-white/70">Tags</div>
                <div className="flex gap-2 mt-1">
                  <span className="text-xs px-2 py-1 rounded bg-white/6">Team</span>
                  <span className="text-xs px-2 py-1 rounded bg-white/6">Puzzle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedPlanet !== null && (
        <div className="fixed right-8 top-1/4 z-50">
          <div className="bg-black/60 border border-white/10 rounded-2xl p-6 w-96 backdrop-blur-md shadow-2xl">
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-2xl font-bold text-white">{planets[selectedPlanet].title}</h3>
              <button
                onClick={() => setSelectedPlanet(null)}
                className="text-white/70 hover:text-white"
                aria-label="Close event card"
              >
                ✕
              </button>
            </div>
            <p className="text-sm text-gray-200 mt-3 leading-relaxed">{planets[selectedPlanet].description}</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-20 h-20 rounded-full overflow-hidden border border-white/10">
                <Image src={planets[selectedPlanet].image} alt={planets[selectedPlanet].title} width={80} height={80} className="object-cover w-full h-full" />
              </div>
              <div>
                <div className="text-xs text-white/70">Tags</div>
                <div className="flex gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded bg-white/6">Team</span>
                  <span className="text-xs px-2 py-1 rounded bg-white/6">Puzzle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SolarSystem
