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
import { useSnapshot } from "valtio";

export default function Camera({ state, view, setView }) {
  let meshesArray;
  const { scene, camera, gl, size, viewport } = useThree();
  const snap = useSnapshot(state);
  // const scenE = useThree((state) => state.scene);
  const perspectiveCamera = useRef();
  const ortographicCamera = useRef();
  const grid = useRef();
  const controls = useRef();
  const changePerspectiveButton = document.querySelector(
    ".change-perspective-button"
  );
  const { get, set } = useThree(({ get, set }) => ({ get, set }));
  useEffect(() => {
    if (get().camera.name === "2d") {
      meshesArray = scene.children.filter(function (el) {
        if (el.name !== "3d" && el.name !== "2d" && el.name !== "Group") {
          return el.name;
        }
      });
      const current = [scene.getObjectByName(snap.current)];
      if (current[0] !== undefined) {
        const dragControls = new DragControls(current, camera, gl.domElement);
        dragControls.transformGroup = true;
      }
    } else {
      const dragControls = new DragControls(meshesArray, camera, gl.domElement);
      dragControls.dispose();
    }
  });

  useEffect(() => {
    const changeView = () => {
      if (get().camera.name === "2d") {
        set({ camera: perspectiveCamera.current });
        grid.current.visible = false;
        changePerspectiveButton.dataset.perspective = "true";
        console.log(view);
        setView("2D");
      } else {
        set({ camera: ortographicCamera.current });
        ortographicCamera.current.lookAt(0, 0, 0);
        changePerspectiveButton.dataset.perspective = "false";
        grid.current.visible = true;
        setView("3D");
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
      {snap.current && (
        <TransformControls
          object={scene.getObjectByName(snap.current)}
          mode={snap.mode}
          showZ={false}
          showX={false}
          rotationSnap={degToRad(90)}
          size={0.5}
        />
      )}
      {changePerspectiveButton.dataset.perspective === "true" ? (
        <OrbitControls ref={controls} makeDefault />
      ) : null}
      <PerspectiveCamera
        name="3d"
        ref={perspectiveCamera}
        position={[-10, -70, 150]}
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
      <gridHelper ref={grid} args={[1500, 150, "#F1F1F1", "#6F6F6F"]} />
    </>
  );
}
