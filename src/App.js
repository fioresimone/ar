import React, { Suspense, useState } from "react";
import { Interactive, XR, ARButton, Controllers } from "@react-three/xr";
import { Sphere, Text } from "@react-three/drei";
/* import "./styles.css"; */
import { Canvas } from "@react-three/fiber";

export default function App() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="unbounded">
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

          <Suspense fallback={null}>
            <Sphere>
              <meshBasicMaterial color="hotpink" />
            </Sphere>
          </Suspense>
          <Controllers />
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
