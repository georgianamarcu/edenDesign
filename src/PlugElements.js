import React, { useRef, useCallback, useEffect, useState } from "react";
import { useGLTF, useCursor, Html, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { MathUtils, Vector3, Color } from "three";
import { MdArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { useSnapshot } from "valtio";
import { useDrag } from "./Grid";

function CrossEnd({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/CrossEnd.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });

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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => {
        setHovered(false);
      }}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_1.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_2.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_3.geometry}
          material={materials["Aluminum - Satin.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_4.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_5.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function CrossFeeder({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/CrossFeeder.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group
        position={[-0.2, 0.08, 1.41]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.1}
      >
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1001_1.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1001_2.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1001_3.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1001_4.geometry}
          material={materials["Aluminum - Satin.001"]}
        />
      </group>
    </group>
  );
}

function CrossJoint({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/CrossJoint.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group
        position={[-0.26, 0, -0.25]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      >
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_1.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_2.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_3.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1002_4.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function Curve375({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/Curve375.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1020.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1020_1.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1020_2.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1020_3.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1020_4.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function Curve675({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/Curve675.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_1.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_2.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_3.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2001_4.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function CurveU750({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/CurveU750.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.1}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1034.geometry}
          material={materials["Aluminum - Satin"]}
        />
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1034_1.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1034_2.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1034_3.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1034_4.geometry}
          material={materials["Aluminum - Polished"]}
        />
      </group>
    </group>
  );
}

function EndMale({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/End.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1035.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1035_1.geometry}
          material={materials["Aluminum - Satin.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1035_2.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1035_3.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function EndCap({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/EndCap.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      {props.state.current !== null && props.state.current === props.name ? (
        <Html distanceFactor={1}>
          <div className="rotate-option active">
            <div className="rotate-buttons">
              <button
                className="rotate-button rotate-button-back"
                onClick={rotateLeft}
              >
                <MdArrowBackIos />
              </button>
              <button
                className="rotate-button rotate-button-forward"
                onClick={rotateRight}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
        </Html>
      ) : null}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body1310.geometry}
        material={materials["Aluminum - Satin.001"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.1}
      />
    </group>
  );
}

function EndFeederFemale({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/EndFeeder1.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      {props.state.current !== null && props.state.current === props.name ? (
        <Html distanceFactor={1}>
          <div className="rotate-option active">
            <div className="rotate-buttons">
              <button
                className="rotate-button rotate-button-back"
                onClick={rotateLeft}
              >
                <MdArrowBackIos />
              </button>
              <button
                className="rotate-button rotate-button-forward"
                onClick={rotateRight}
              >
                <MdOutlineArrowForwardIos />
              </button>
            </div>
          </div>
        </Html>
      ) : null}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Body1284.geometry}
        material={materials["Aluminum - Satin"]}
        position={[-3.9, 16.86, -8.29]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.1}
      />
    </group>
  );
}

function FlexibleConnection({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/FlexibleConnection.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        position={[0, -0.02, 0]}
        scale={0.1}
      >
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1035.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1035_1.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1035_2.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function InterTube600({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/InterTube600.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1007.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1007_1.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1007_2.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1007_3.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1007_4.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function InterTube750({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/InterTube750.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2002.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2002_1.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2002_2.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2002_3.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2002_4.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function LightTube600({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/LightTube600.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0.96, Math.PI]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1022.geometry}
          material={materials["Aluminum - Bead Blasted"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1022_1.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1022_2.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1022_3.geometry}
          material={materials["ABS (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1022_4.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1022_5.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1022_6.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function LightTube750({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/LightTube750.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, -1.3, 0]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2006.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2006_1.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2006_2.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2006_3.geometry}
          material={materials["ABS (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2006_4.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body2006_5.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function LightTube900({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/LightTube900.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, Math.PI / 4, Math.PI]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6001.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6001_1.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6001_2.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6001_3.geometry}
          material={materials["ABS (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6001_4.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body6001_5.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function SpotCurve({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/SpotCurve.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group position={[0.82, 0.35, -0.01]} rotation={[0, 0, 1.57]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4_1.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4_2.geometry}
          material={materials["Opaque(63,63,63)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4_3.geometry}
          material={materials["Opaque(255,255,0)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4_4.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4_5.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4_6.geometry}
          material={materials["A Type Bulb - Frosted - 1500lm"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body4_7.geometry}
          material={materials["Steel - Satin"]}
        />
      </group>
    </group>
  );
}

function SpotT({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/SpotT.glb");
  const snap = useSnapshot(props.state);
  const ref = useRef();
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
      ),
    []
  );
  const pos = useRef(new Vector3(...position));
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
    ref.current.position.lerp(pos.current, 0.2);
  });
  const [hover, setHovered] = useState(false);
  useCursor(hover);
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, Math.PI / 9, Math.PI]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1015.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1015_1.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1015_2.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1015_3.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1015_4.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
      </group>
    </group>
  );
}

function TJointFemale({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/TJoint(female).glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_1.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_2.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_3.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_4.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function TJointMale({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/TJoint(male).glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_1.geometry}
          material={materials["Aluminum - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_2.geometry}
          material={materials["Aluminum - Anodized Rough (Grey)"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_3.geometry}
          material={materials["Gold - Polished"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1012_4.geometry}
          material={materials["Nylon 6-6 (White)"]}
        />
      </group>
    </group>
  );
}

function WallBracket({
  position = [0.5, 0.5, -0.5],
  c = new Color(),
  round = Math.round,
  clamp = MathUtils.clamp,
  ...props
}) {
  const { nodes, materials } = useGLTF("/elements/WallBracket.glb");
  const ref = useRef();
  const [hover, setHovered] = useState(false);
  useCursor(hover);
  const rotateRight = () => {
    ref.current.rotation.y += Math.PI / 2;
  };
  const rotateLeft = () => {
    ref.current.rotation.y -= Math.PI / 2;
  };
  const pos = useRef(new Vector3(...position));
  const onDrag = useCallback(
    ({ x, z }) =>
      pos.current.set(
        round(clamp(x, -500, 500)) + 0.5,
        position[1],
        round(clamp(z, -500, 500)) + 0.5
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
    ref.current.position.lerp(pos.current, 0.2);
  });
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
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      onContextMenu={(e) => snap.current === props.name}
      dispose={null}
    >
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.1}>
        {props.state.current !== null && props.state.current === props.name ? (
          <Html distanceFactor={1}>
            <div className="rotate-option active">
              <div className="rotate-buttons">
                <button
                  className="rotate-button rotate-button-back"
                  onClick={rotateLeft}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  className="rotate-button rotate-button-forward"
                  onClick={rotateRight}
                >
                  <MdOutlineArrowForwardIos />
                </button>
              </div>
            </div>
          </Html>
        ) : null}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1040.geometry}
          material={materials["Aluminum - Satin"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Body1040_1.geometry}
          material={materials["Opaque(176,176,176)"]}
        />
      </group>
    </group>
  );
}

export {
  CrossEnd,
  CrossFeeder,
  CrossJoint,
  Curve375,
  Curve675,
  CurveU750,
  EndMale,
  EndCap,
  EndFeederFemale,
  FlexibleConnection,
  InterTube600,
  InterTube750,
  LightTube600,
  LightTube750,
  LightTube900,
  SpotCurve,
  SpotT,
  TJointFemale,
  TJointMale,
  WallBracket,
};
