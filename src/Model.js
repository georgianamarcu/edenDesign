import React, { useRef } from "react";
import { useGLTF, useCursor } from "@react-three/drei";
import { useState } from "react";
import { useThree } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import { useDrag } from "@use-gesture/react";

export default function Model(props) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  const { size, viewport } = useThree();
  const [position, setPosition] = useState(props.position);
  const aspect = size.width / viewport.width;
  // const bind = useDrag(
  //   ({ offset: [x, y] }) => {
  //     const [, , z] = position;
  //     setPosition([x / aspect, -y / aspect, z]);
  //   },
  //   { pointerEvents: true }
  // );
  const ref = useRef();
  useCursor(hovered);
  const snap = useSnapshot(props.state);
  const { scene, nodes, materials } = useGLTF("/models/3Dfileplug.gltf");
  return (
    <group
      {...props}
      name={props.name}
      ref={ref}
      onClick={(e) => (e.stopPropagation(), (props.state.current = props.name))}
      // If a click happened but this mesh wasn't hit, we null out the target.
      onPointerMissed={(e) =>
        e.type === "click" && (props.state.current = null)
      }
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 1.5, 0, 0]} scale={0.08}>
        <group position={[600, 0, 0]}>
          <group position={[-351.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body1006.geometry}
              material={materials["Aluminum - Satin.002"]}
              scale={10}
            />
          </group>
          <group
            position={[-558.65, -0.05, 25.01]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[25.1, -3.45, -25.01]} rotation={[0, 1.57, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1007.geometry}
                material={materials["Aluminum - Satin.002"]}
                scale={10}
              />
            </group>
            <group
              position={[0.05, -104.05, -25.01]}
              rotation={[-Math.PI, 0.09, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1008.geometry}
                material={materials["Aluminum - Satin.002"]}
                scale={10}
              />
            </group>
            <group
              position={[0.05, 630.95, -25.02]}
              rotation={[1.57, 0, -Math.PI / 2]}
            >
              <group position={[0, 0, -6.99]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1009.geometry}
                  material={materials["Aluminum - Satin.002"]}
                  scale={10}
                />
              </group>
            </group>
            <group position={[0, -0.45, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1010.geometry}
                material={materials["Nylon 6-6 (White).002"]}
                scale={10}
              />
            </group>
            <group position={[0, -11.61, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1011.geometry}
                material={materials["Nylon 6-6 (White).002"]}
                scale={10}
              />
            </group>
            <group
              position={[-14.76, 34.56, -15.54]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body41001.geometry}
                material={materials["Gold - Polished.002"]}
                scale={10}
              />
            </group>
          </group>
          <group position={[100.88, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body2002.geometry}
              material={materials["Aluminum - Anodized Rough (Grey).002"]}
              scale={10}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body3001.geometry}
              material={materials["Aluminum - Polished.002"]}
              scale={10}
            />
          </group>
        </group>
        <group position={[-150, 0, 0]}>
          <group position={[-501.5, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body2001.geometry}
              material={materials["Aluminum - Bead Blasted.002"]}
              scale={10}
            />
          </group>
          <group
            position={[-708.65, -0.06, 25.01]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <group position={[25.1, -3.45, -25.01]} rotation={[0, 1.57, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1001.geometry}
                material={materials["Aluminum - Satin.002"]}
                scale={10}
              />
            </group>
            <group
              position={[0.05, -854.05, -25.01]}
              rotation={[-Math.PI, 0.09, -Math.PI]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1002.geometry}
                material={materials["Aluminum - Satin.002"]}
                scale={10}
              />
            </group>
            <group
              position={[0.05, -119.05, -25.02]}
              rotation={[1.57, 0, -Math.PI / 2]}
            >
              <group position={[0, 0, -6.99]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Body1003.geometry}
                  material={materials["Aluminum - Satin.002"]}
                  scale={10}
                />
              </group>
            </group>
            <group position={[0, -0.45, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1004.geometry}
                material={materials["Nylon 6-6 (White).002"]}
                scale={10}
              />
            </group>
            <group position={[0, -11.61, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1005.geometry}
                material={materials["Nylon 6-6 (White).002"]}
                scale={10}
              />
            </group>
            <group
              position={[-14.76, 34.56, -15.54]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body41.geometry}
                material={materials["Gold - Polished.002"]}
                scale={10}
              />
            </group>
          </group>
          <group position={[100.88, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body2.geometry}
              material={materials["Aluminum - Anodized Rough (Grey).002"]}
              scale={10}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body3.geometry}
              material={materials["Aluminum - Polished.002"]}
              scale={10}
            />
          </group>
          <group
            position={[-330.07, 0, 50]}
            rotation={[Math.PI / 2, 0, Math.PI / 2]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body1.geometry}
              material={materials["ABS (White).002"]}
              scale={10}
            />
          </group>
        </group>
        <group
          position={[-108.64, 0.05, -25.01]}
          rotation={[Math.PI, 0, Math.PI / 2]}
        >
          <group position={[25.1, -3.45, -25.01]} rotation={[0, 1.57, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body1015.geometry}
              material={materials["Aluminum - Satin.002"]}
              scale={10}
            />
          </group>
          <group
            position={[0.05, -704.05, -25.01]}
            rotation={[-Math.PI, 0.09, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body1016.geometry}
              material={materials["Aluminum - Satin.002"]}
              scale={10}
            />
          </group>
          <group
            position={[0.05, 30.95, -25.02]}
            rotation={[1.57, 0, -Math.PI / 2]}
          >
            <group position={[0, 0, -6.99]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Body1017.geometry}
                material={materials["Aluminum - Satin.002"]}
                scale={10}
              />
            </group>
          </group>
          <group position={[0, -0.45, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body1018.geometry}
              material={materials["Nylon 6-6 (White).002"]}
              scale={10}
            />
          </group>
          <group position={[0, -11.61, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body1019.geometry}
              material={materials["Nylon 6-6 (White).002"]}
              scale={10}
            />
          </group>
          <group
            position={[-14.76, 34.56, -15.54]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Body41002.geometry}
              material={materials["Gold - Polished.002"]}
              scale={10}
            />
          </group>
        </group>
        <group
          position={[335.05, -15.41, -5.54]}
          rotation={[Math.PI / 9, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body1013.geometry}
            material={materials["Aluminum - Satin.002"]}
            scale={10}
          />
        </group>
        <group
          position={[370.05, -27.19, -9.83]}
          rotation={[Math.PI / 9, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body1014.geometry}
            material={materials["Aluminum - Satin.002"]}
            scale={10}
          />
        </group>
        <group
          position={[333.7, -27.25, -9.92]}
          rotation={[Math.PI / 9, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body1012.geometry}
            material={materials["Aluminum - Satin.002"]}
            scale={10}
          />
        </group>
        <group
          position={[-84.28, 60.22, 8.99]}
          rotation={[Math.PI / 9, -Math.PI / 2, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body2005.geometry}
            material={materials["Opaque(255,255,0).003"]}
            scale={10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body1021.geometry}
            material={materials["Opaque(63,63,63).003"]}
            scale={10}
          />
        </group>
        <group
          position={[101.88, 0, 0]}
          rotation={[Math.PI / 9, 0, Math.PI / 2]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body2003.geometry}
            material={materials["Aluminum - Anodized Rough (Grey).002"]}
            scale={10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body3002.geometry}
            material={materials["Aluminum - Polished.002"]}
            scale={10}
          />
        </group>
        <group position={[-74.95, 56.56, 20.65]} rotation={[Math.PI / 9, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body1020.geometry}
            material={materials["A Type Bulb - Frosted - 1500lm.002"]}
            scale={10}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body2004.geometry}
            material={materials["Steel - Satin.002"]}
            scale={10}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/3Dfileplug.gltf");
