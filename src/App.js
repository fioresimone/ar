import React, { Suspense, useState } from "react";
import { Interactive, XR, ARButton, Controllers } from "@react-three/xr";
import { Float, Sphere, Text } from "@react-three/drei";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Model from "./Moon";

export default function App() {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR referenceSpace="local">
          <ambientLight intensity={1} />
          <Float>
            <Model position={[0, 0, 1]} />
          </Float>
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
