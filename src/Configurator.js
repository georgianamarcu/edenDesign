import { Center } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Model from "./Model";
import Interior from "./Interior";
import { v4 as uuidv4 } from "uuid";

export default function Configurator({ state }) {
  return (
    <>
      <Center>
        <Model
          position={[1, 0, 0]}
          state={state}
          scale={[2, 2, 2]}
          type="interTube"
          draggable
          name={uuidv4()}
        />
        <Model
          position={[-150, 0, 0]}
          state={state}
          scale={[2, 2, 2]}
          type="interTube"
          name={uuidv4()}
        />
      </Center>
    </>
  );
}
