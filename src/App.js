import styled from "styled-components";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import Configurator from "./Configurator.js";
import Camera from "./Camera";
import Sidebar from "./Sidebar";
import { Stage } from "@react-three/drei";
import { Perf } from "r3f-perf";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const CollapseContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100%;
  width: 30px;
  background-color: black;
`;

const ConfiguratorContainer = styled.div`
  height: 100%;
  width: 300px;
  display: flex;
`;

const OptionsContainer = styled.div`
  height: 100%;
  background-color: "black";
`;

const state = proxy({ current: null, mode: "rotate" });
const ModelState = React.createContext(state);
function App() {
  const [sideBar, setSideBar] = useState(false);
  const [view, setView] = useState("3D");
  return (
    <ModelState.Provider value={state}>
      <MainContainer>
        <ConfiguratorContainer>
          {/* <CollapseContainer></CollapseContainer> */}
          <Sidebar view={view} />
        </ConfiguratorContainer>
        <Canvas>
          <Camera dpr={[1, 2]} state={state} view={view} setView={setView} />
          <Configurator state={state} />
          <Environment
            near={1}
            far={500}
            resolution={512}
            files="/dancing_hall_1k.hdr"
          />
          <spotLight
            position={[5, 0, 5]}
            intensity={10}
            penumbra={1}
            angle={0.35}
            castShadow
            color="#0c8cbf"
          />
          {/* <Perf /> */}
        </Canvas>
      </MainContainer>
    </ModelState.Provider>
  );
}

export default App;
