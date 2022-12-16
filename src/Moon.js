import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import moon from "./moon.glb";
export function Moon(props) {
  const { nodes, materials } = useGLTF(moon);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials["Default OBJ.005"]}
      />
    </group>
  );
}

useGLTF.preload(moon);
