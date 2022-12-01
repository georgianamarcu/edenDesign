import React from "react";
import { useGLTF } from "@react-three/drei";

function Room(props) {
  const { scene, nodes, materials } = useGLTF("/models/room-v1.glb");
  return <primitive object={scene} {...props} />;
}

export default Room;
