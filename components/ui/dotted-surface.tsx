"use client";

import { useRef, useEffect, ReactNode } from "react";
import * as THREE from "three";

interface DottedSurfaceProps {
  children?: ReactNode;
}

export function DottedSurface({ children }: DottedSurfaceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#F8F7F4");

    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      2000
    );
    camera.position.set(0, 200, 500);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const gridSize = 40;
    const spacing = 30;
    const halfGrid = (gridSize * spacing) / 2;
    const positions: number[] = [];
    const originalPositions: number[] = [];

    for (let x = 0; x < gridSize; x++) {
      for (let z = 0; z < gridSize; z++) {
        const posX = x * spacing - halfGrid;
        const posZ = z * spacing - halfGrid;
        positions.push(posX, 0, posZ);
        originalPositions.push(posX, 0, posZ);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    const material = new THREE.PointsMaterial({
      color: new THREE.Color("#C2410C"),
      size: 3.5,
      transparent: true,
      opacity: 0.18,
      sizeAttenuation: true,
    });

    const dots = new THREE.Points(geometry, material);
    scene.add(dots);

    let time = 0;
    let frameId: number;

    const animate = () => {
      time += 0.004;
      const posArray = dots.geometry.attributes.position
        .array as Float32Array;

      for (let i = 0; i < posArray.length; i += 3) {
        const ox = originalPositions[i];
        const oz = originalPositions[i + 2];
        const dist = Math.sqrt(ox * ox + oz * oz);
        posArray[i + 1] =
          Math.sin(dist * 0.01 + time) * 12 +
          Math.cos(ox * 0.01 + time * 0.7) * 6 +
          Math.sin(oz * 0.01 + time * 0.5) * 6;
      }

      dots.geometry.attributes.position.needsUpdate = true;
      camera.position.x = Math.sin(time * 0.1) * 80;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!canvas.parentElement) return;
      const w = canvas.parentElement.clientWidth;
      const h = canvas.parentElement.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
