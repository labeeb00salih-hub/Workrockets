"use client";

import { useEffect, useState } from "react";

const TOOLS = [
  { name: "Clay", domain: "clay.com" },
  { name: "Apollo", domain: "apollo.io" },
  { name: "Make", domain: "make.com" },
  { name: "AirOps", domain: "airops.com" },
  { name: "Zapier", domain: "zapier.com" },
  { name: "HubSpot", domain: "hubspot.com" },
  { name: "n8n", domain: "n8n.io" },
  { name: "Semrush", domain: "semrush.com" },
  { name: "Salesforce", domain: "salesforce.com" },
  { name: "HeyReach", domain: "heyreach.io" },
];

const orbits = [
  { tools: TOOLS.slice(0, 3), radius: 120, duration: 25, direction: 1 },
  { tools: TOOLS.slice(3, 7), radius: 200, duration: 35, direction: -1 },
  { tools: TOOLS.slice(7, 10), radius: 280, duration: 45, direction: 1 },
];

export function OrbitingLogos() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-[36rem] h-[36rem] mx-auto">
      {/* Center lettermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue/10 border border-blue/20 flex items-center justify-center z-10">
        <span className="text-blue font-semibold text-lg tracking-tight">W</span>
      </div>

      {orbits.map((orbit, orbitIdx) => {
        const size = orbit.radius * 2;
        const angleStep = (2 * Math.PI) / orbit.tools.length;

        return (
          <div
            key={orbitIdx}
            className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-blue/15"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              marginLeft: `-${orbit.radius}px`,
              marginTop: `-${orbit.radius}px`,
              animation: mounted
                ? `orbit-spin ${orbit.duration}s linear infinite ${orbit.direction === -1 ? "reverse" : ""}`
                : "none",
            }}
          >
            {orbit.tools.map((tool, i) => {
              const angle = i * angleStep;
              const x = 50 + 50 * Math.cos(angle);
              const y = 50 + 50 * Math.sin(angle);

              return (
                <div
                  key={tool.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                    animation: mounted
                      ? `orbit-spin ${orbit.duration}s linear infinite ${orbit.direction === -1 ? "" : "reverse"}`
                      : "none",
                  }}
                >
                  <div className="group relative">
                    <div className="w-10 h-10 rounded-full bg-bg border border-border flex items-center justify-center shadow-sm hover:border-blue/30 hover:shadow-md transition-all duration-300">
                      <img
                        src={`https://www.google.com/s2/favicons?sz=128&domain=${tool.domain}`}
                        alt={`${tool.name} logo`}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {tool.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      <style jsx>{`
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
