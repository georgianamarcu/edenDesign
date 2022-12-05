import { MathUtils, Vector3, Plane } from "three";
import {
  createContext,
  useRef,
  useContext,
  useCallback,
  useState,
} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

const v = new Vector3();
const p = new Plane(new Vector3(0, 1, 0), 0);
const context = createContext();

function useDrag(onDrag) {
  const events = useThree((state) => state.events);
  const controls = useThree((state) => state.controls);
  // const activatePlane = useContext(context);
  const [hovered, hover] = useState(false);
  const [active, activate] = useState(false);

  const out = useCallback(() => hover(false), []);
  const over = useCallback((e) => (e.stopPropagation(), hover(true)), []);

  const down = useCallback(
    (e) => {
      e.stopPropagation();
      activate(true);
      // activatePlane(true);
      if (controls) controls.enabled = false;
      e.target.setPointerCapture(e.pointerId);
    },
    [controls]
  );

  const up = useCallback(
    (e) => {
      activate(false);
      // activatePlane(false);
      if (controls) controls.enabled = true;
      e.target.releasePointerCapture(e.pointerId);
      // Is this a bug? Apparently releasing capture flushes out hover-state, but why?
      setTimeout(() => events.handlers.onPointerMove(e), 0);
    },
    [controls]
  );

  const move = useCallback(
    (e) => {
      e.stopPropagation();
      if (active && e.ray.intersectPlane(p, v)) onDrag(v);
    },
    [onDrag, active]
  );
  return [
    {
      onPointerOver: over,
      onPointerOut: out,
      onPointerDown: down,
      onPointerUp: up,
      onPointerMove: move,
    },
    active,
    hovered,
  ];
}

function Grid({ children, scale, divisions = 50, ...props }) {
  const grid = useRef();
  const { get } = useThree(({ get }) => ({ get }));
  useEffect(() => {
    if (get().camera.name === "2d") {
      grid.current.visible = true;
    } else {
      grid.current.visible = false;
      activate(false);
    }
  });

  // const plane = useRef();
  const [active, activate] = useState(false);
  return (
    <group {...props}>
      <group scale={scale}>
        <gridHelper
          ref={grid}
          position={[0, 0, 0]}
          args={[2.5, divisions, "#5A5A5A", "#5A5A5A"]}
        />
      </group>
      <context.Provider value={activate}>{children}</context.Provider>
    </group>
  );
}

export { Grid, useDrag };
