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
  { tools: TOOLS.slice(0, 3), radius: 160, duration: 25, direction: 1 },
  { tools: TOOLS.slice(3, 7), radius: 280, duration: 35, direction: -1 },
  { tools: TOOLS.slice(7, 10), radius: 400, duration: 45, direction: 1 },
];

export function OrbitingLogos() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-full h-full">
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue/15 z-10" />

      {orbits.map((orbit, orbitIdx) => {
        const size = orbit.radius * 2;

        return (
          <div key={orbitIdx}>
            {/* Orbit ring */}
            <div
              className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-border/60"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                marginLeft: `-${orbit.radius}px`,
                marginTop: `-${orbit.radius}px`,
              }}
            />

            {/* Rotating icon container */}
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: 0,
                height: 0,
                animation: mounted
                  ? `orbit-spin ${orbit.duration}s linear infinite ${orbit.direction === -1 ? "reverse" : ""}`
                  : "none",
              }}
            >
              {orbit.tools.map((tool, i) => {
                const angle = (i * 2 * Math.PI) / orbit.tools.length;
                const tx = Math.cos(angle) * orbit.radius;
                const ty = Math.sin(angle) * orbit.radius;

                return (
                  <div
                    key={tool.name}
                    className="absolute"
                    style={{
                      left: `${tx}px`,
                      top: `${ty}px`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div
                      style={{
                        animation: mounted
                          ? `orbit-spin ${orbit.duration}s linear infinite ${orbit.direction === -1 ? "" : "reverse"}`
                          : "none",
                      }}
                    >
                      <div className="w-11 h-11 rounded-full bg-bg border border-border flex items-center justify-center shadow-sm">
                        <img
                          src={`https://www.google.com/s2/favicons?sz=128&domain=${tool.domain}`}
                          alt={`${tool.name} logo`}
                          className="w-5 h-5 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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
