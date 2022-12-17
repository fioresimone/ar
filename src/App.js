import React, { Suspense, useRef, useState } from "react";
import { Interactive, XR, ARButton, Controllers } from "@react-three/xr";
import { Float, Sphere, Text } from "@react-three/drei";
import "./index.css";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import MoonColor from "./color.jpeg";
import MoonNormal from "./normal.jpg";
import MoonBump from "./bump.jpg";

export default function App() {
  function Moon() {
    const [color, normal, bump] = useLoader(TextureLoader, [
      MoonColor,
      MoonNormal,
      MoonBump,
    ]);
    const ref = useRef();
    useFrame((state) => {
      const elapsed = state.clock.elapsedTime / 10;
      ref.current.rotation.y = elapsed;
    });

    return (
      <mesh ref={ref} position={[0, 0, 0]}>
        <sphereGeometry args={[1, 256, 256]} />
        <meshStandardMaterial
          map={color}
          bumpMap={bump}
          bumpScale={0.01}
          normalMap={normal}
          normalScale={0.4}
        />
      </mesh>
    );
  }

  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <Moon />
          </Suspense>
        </XR>
      </Canvas>
    </>
  );
}

/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */
