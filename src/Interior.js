import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import albedo from "./textures/Plaster17_COL_VAR1_1K.jpg";

function Interior() {
  const texture = useLoader(THREE.TextureLoader, albedo);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 8, 0]}>
      <planeGeometry attach="geometry" args={[500, 500]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default Interior;
