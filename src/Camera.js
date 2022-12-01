import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import {
  PerspectiveCamera,
  OrthographicCamera,
  OrbitControls,
  TransformControls,
} from "@react-three/drei";
import { DragControls } from "./DragControls";
import Room from "./Room";
import { v4 as uuidv4 } from "uuid";
import { useSnapshot } from "valtio";

export default function Camera({ state, view, setView, room, setRoom }) {
  let meshesArray;
  const { scene, camera, gl, size, viewport } = useThree();
  const snap = useSnapshot(state);
  const perspectiveCamera = useRef();
  const ortographicCamera = useRef();
  const grid = useRef();
  const controls = useRef();
  const changePerspectiveButton = document.querySelector(
    ".change-perspective-button"
  );
  const { get, set } = useThree(({ get, set }) => ({ get, set }));
  // useEffect(() => {
  //   if (get().camera.name === "2d") {
  //     meshesArray = scene.children.filter(function (el) {
  //       if (el.name !== "3d" && el.name !== "2d" && el.name !== "Group") {
  //         return el.name;
  //       }
  //     });
  //     const current = [scene.getObjectByName(snap.current)];
  //     // if (current[0] !== undefined) {
  //     //   const dragControls = new DragControls(current, camera, gl.domElement);
  //     //   dragControls.transformGroup = true;
  //     // }
  //   } else {
  //     // const dragControls = new DragControls(meshesArray, camera, gl.domElement);
  //     // dragControls.dispose();
  //   }
  // });

  useEffect(() => {
    const changeView = () => {
      if (get().camera.name === "2d") {
        set({ camera: perspectiveCamera.current });
        // grid.current.visible = false;
        perspectiveCamera.current.lookAt(0, 0, 0);
        changePerspectiveButton.dataset.perspective = "true";
        setView("2D");
        setRoom([
          ...room,
          <Room
            scale={[140, 140, 140]}
            position={[300, -450, 450]}
            key={uuidv4()}
          />,
        ]);
      } else {
        set({ camera: ortographicCamera.current });
        ortographicCamera.current.lookAt(0, 0, 0);
        changePerspectiveButton.dataset.perspective = "false";
        // grid.current.visible = true;
        setView("3D");
        setRoom([]);
      }
    };
    changeView();

    changePerspectiveButton.addEventListener("click", changeView);
    return () =>
      changePerspectiveButton.removeEventListener("click", changeView);
  }, [get, set]);

  const degToRad = (degrees) => {
    return (degrees * Math.PI) / 180;
  };
  return (
    <>
      {/* {snap.current && (
        <TransformControls
          object={scene.getObjectByName(snap.current)}
          mode={snap.mode}
          showY={false}
          // showX={false}
          setTranslationSnap={0.5}
          space={"local"}
          size={0.5}
        />
      )} */}
      {changePerspectiveButton.dataset.perspective === "true" ? (
        <OrbitControls
          ref={controls}
          makeDefault
          maxPolarAngle={[Math.PI / 2]}
          minPolarAngle={[Math.PI / 2 - 0.1]}
          maxAzimuthAngle={[Math.PI / 2]}
          // enableZoom={false}
          rotateSpeed={[0.5]}
        />
      ) : null}
      <PerspectiveCamera
        name="3d"
        ref={perspectiveCamera}
        position={[35, -60, 300]}
        fov={75}
      />
      <OrthographicCamera
        name="2d"
        ref={ortographicCamera}
        position={[0, 10, 0]}
        zoom={1.5}
        near={-400}
        far={400}
        left={window.innerWidth / -2}
        right={window.innerWidth / 2}
        top={window.innerHeight / 2}
        bottom={window.innerHeight / -2}
      />
      {/* <gridHelper ref={grid} args={[1500, 150, "#5A5A5A", "#5A5A5A"]} /> */}
    </>
  );
}
