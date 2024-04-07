"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";

export default function Scene({ children }: { children?: React.ReactNode }) {
  return (
    <Canvas>
      <ambientLight intensity={1.5} />
      <OrbitControls enableZoom={false} />
      <Suspense fallback={null}>
        {children}
      </Suspense>
    </Canvas>
  );
}
