import styled from "styled-components";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Html } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";
import Configurator from "./Configurator.js";
import Camera from "./Camera";
import Sidebar from "./Sidebar";
import { Perf } from "r3f-perf";
import { noop } from "@react-spring/shared";

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

const state = proxy({ current: null, mode: "translate" });
const ModelState = React.createContext(state);
function App() {
  const [sideBar, setSideBar] = useState(false);
  const [view, setView] = useState("3D");
  const [elementsOnCanvas, setElementsOnCanvas] = useState([]);
  const [room, setRoom] = useState([]);
  const themes = {
    dark: "#15151a",
    light: "#FAF9F6",
  };
  const [backgroundColor, setBackgroundColor] = useState(themes.dark);
  let icon;
  if (backgroundColor === "#15151a") {
    icon = <BsSunFill style={{ color: "white" }} />;
  } else if (backgroundColor === "#FAF9F6") {
    icon = <BsFillMoonFill style={{ color: "white" }} />;
  }
  const changeBackgroundColor = () => {
    backgroundColor === "#15151a"
      ? setBackgroundColor(themes.light)
      : setBackgroundColor(themes.dark);
  };
  return (
    <ModelState.Provider value={state}>
      <MainContainer>
        <ConfiguratorContainer>
          <Sidebar
            view={view}
            elementsOnCanvas={elementsOnCanvas}
            setElementsOnCanvas={setElementsOnCanvas}
            state={state}
          />
        </ConfiguratorContainer>
        <Canvas dpr={[1, 2]}>
          <color attach={"background"} args={[backgroundColor]} />
          {view === "3D" && (
            <Html
              style={{
                position: "absolute",
                transform: "translate(480px, -350px)",
              }}
            >
              <button
                className="toggle-background"
                onClick={changeBackgroundColor}
              >
                {icon}
              </button>
            </Html>
          )}
          <Camera
            state={state}
            view={view}
            setView={setView}
            room={room}
            setRoom={setRoom}
          />
          <Configurator
            state={state}
            elementsOnCanvas={elementsOnCanvas}
            room={room}
          />
          <Environment
            near={1}
            far={500}
            resolution={512}
            files="/dancing_hall_1k.hdr"
          />
          {/* <Perf /> */}
        </Canvas>
      </MainContainer>
    </ModelState.Provider>
  );
}

export default App;
