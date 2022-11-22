import React, { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useState } from "react";
import { useCursor } from "@react-three/drei";
import { useSnapshot } from "valtio";

function Cubes({ scale, color, position, name, state }) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const ref = useRef();
  useCursor(hovered);
  const snap = useSnapshot(state);

  return (
    <mesh
      scale={scale}
      position={position}
      name={name}
      ref={ref}
      onClick={(e) => (e.stopPropagation(), (state.current = name))}
      // If a click happened but this mesh wasn't hit, we null out the target.
      onPointerMissed={(e) => e.type === "click" && (state.current = null)}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      dispose={null}
    >
      <boxGeometry />
      <meshStandardMaterial color={snap.current === name ? "red" : color} />
    </mesh>
  );
}

export default Cubes;
