import React, { useRef, useCallback, useEffect } from "react";
import { MathUtils, Vector3, Color } from "three";
import { useGLTF, useCursor } from "@react-three/drei";
import { useState } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { useDrag } from "./Grid";

export default function Model({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  // const [hovered, setHovered] = useState(false);
  // const [active, setActive] = useState(false);
  // const { size, viewport } = useThree();
  // const [position, setPosition] = useState(props.position);
  // const aspect = size.width / viewport.width;
  // // const bind = useDrag(
  // //   ({ offset: [x, y] }) => {
  // //     const [, , z] = position;
  // //     setPosition([x / aspect, -y / aspect, z]);
  // //   },
  // //   { pointerEvents: true }
  // // );
  // const ref = useRef();
  // useCursor(hovered);
  // const snap = useSnapshot(props.state);

  /**NewCode */
  const ref = useRef();
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -250, 250)) + 0.5,
        position[1],
        round(clamp(z, -250, 250)) + 0.5
      ),
    []
  );
  const [events, active, hovered] = useDrag(onDrag);
  useEffect(
    () =>
      void (document.body.style.cursor = active
        ? "grabbing"
        : hovered
        ? "grab"
        : "auto"),
    [active, hovered]
  );
  useFrame(() => {
    ref.current.position.lerp(pos.current, 0.5);
    // ref.current.material.color.lerp(
    //   c.set(active ? "white" : hovered ? "lightblue" : "orange"),
    //   0.1
    // );
  });
  const { scene, nodes, materials } = useGLTF("/models/lightSpot.glb");
  return (
    <group
      {...props}
      {...events}
      name={props.name}
      ref={ref}
      onClick={(e) => (e.stopPropagation(), (props.state.current = props.name))}
      // If a click happened but this mesh wasn't hit, we null out the target.
      onPointerMissed={(e) =>
        e.type === "click" && (props.state.current = null)
      }
      // onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      // onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group
        position={[-6.52, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.01}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_1.geometry}
          material={materials["Aluminum - Bead Blasted"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_2.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_3.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_4.geometry}
          material={materials["ABS (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_5.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_6.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_7.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_8.geometry}
          material={materials["A Type Bulb - Frosted - 1500lm"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_9.geometry}
          material={materials["Steel - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_10.geometry}
          material={materials["Opaque(63,63,63)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_11.geometry}
          material={materials["Opaque(255,255,0)"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/lightSpot.glb");
