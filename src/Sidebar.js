import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Button from "./Buttons";
import {
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
} from "./PlugElements";
import { v4 as uuidv4 } from "uuid";

const Line = styled.hr`
  width: 100%;
  margin-bottom: 20px;
`;

function Sidebar({
  sideBar = true,
  setSideBar = () => {},
  view,
  elementsOnCanvas,
  setElementsOnCanvas = () => {},
  state,
}) {
  const plugElemens = [
    { id: 0, name: "°Cross End", component: "crossEnd" },
    { id: 1, name: "°Cross Feeder", component: "crossFeeder" },
    { id: 2, name: "°Cross Joint", component: "crossJoint" },
    { id: 3, name: "°Curve 375", component: "curve375" },
    { id: 4, name: "°Curve 675", component: "curve675" },
    { id: 5, name: "°Curve U 750", component: "curveU750" },
    { id: 6, name: "°End Male", component: "endMale" },
    { id: 7, name: "°End Cap", component: "endCap" },
    { id: 8, name: "°End Feeder Female", component: "endFeederFemale" },
    { id: 9, name: "°Flexible Connection", component: "flexibleConnection" },
    { id: 10, name: "°Inter Tube 600", component: "interTube600" },
    { id: 11, name: "°Inter Tube 750", component: "interTube750" },
    { id: 12, name: "°Light Tube 600", component: "lightTube600" },
    { id: 14, name: "°Light Tube 750", component: "lightTube750" },
    { id: 15, name: "°Light Tube 900", component: "lightTube900" },
    { id: 16, name: "°Spot Curve", component: "spotCurve" },
    { id: 17, name: "°Spot T", component: "spotT" },
    { id: 18, name: "°T Joint Female", component: "tJointFemale" },
    { id: 19, name: "°T Joint Male", component: "tJointMale" },
    { id: 20, name: "°Wall Bracket", component: "wallBracket" },
  ];
  const allComponents = {
    crossEnd: CrossEnd,
    crossFeeder: CrossFeeder,
    crossJoint: CrossJoint,
    curve375: Curve375,
    curve675: Curve675,
    curveU750: CurveU750,
    endMale: EndMale,
    endCap: EndCap,
    endFeederFemale: EndFeederFemale,
    flexibleConnection: FlexibleConnection,
    interTube600: InterTube600,
    interTube750: InterTube750,
    lightTube600: LightTube600,
    lightTube750: LightTube750,
    lightTube900: LightTube900,
    spotCurve: SpotCurve,
    spotT: SpotT,
    tJointFemale: TJointFemale,
    tJointMale: TJointMale,
    wallBracket: WallBracket,
  };
  let componentName, CurrentComponent;

  const addComponentToScene = (e) => {
    componentName = e.target.dataset.name;
    CurrentComponent = React.createElement(allComponents[componentName]);
    setElementsOnCanvas([
      ...elementsOnCanvas,
      <CurrentComponent.type
        state={state}
        position={[0.5, 0.5, -0.5]}
        scale={[30, 30, 30]}
        draggable
        key={uuidv4()}
        name={uuidv4()}
      />,
    ]);
  };
  const clearAll = () => {
    setElementsOnCanvas([]);
  };
  return (
    <AnimatePresence>
      {sideBar && (
        <motion.aside
          initial={{ width: 0 }}
          animate={{
            width: 250,
          }}
          className="plugElements-container"
        >
          <motion.div className="plugElements-main">
            <motion.h1>
              °plug<span className="plugElements-text-thickness"> & play</span>
            </motion.h1>
            <Line />
            <motion.div
              className="plugElements"
              initial="closed"
              animate="open"
              exit="closed"
            >
              {plugElemens.map(({ name, id, component }) => (
                <motion.div className="plugElement-add-div" key={uuidv4()}>
                  <motion.button
                    className="plugElement-add"
                    key={uuidv4()}
                    data-name={component}
                    onClick={addComponentToScene}
                  >
                    Add +
                  </motion.button>
                  <motion.a key={id}>{name}</motion.a>
                </motion.div>
              ))}
            </motion.div>
            <motion.div className="plugElements-view">
              <motion.h2>°view</motion.h2>
              <Line />
              <motion.div className="plug-Elements-button">
                <Button view={view} />
                <motion.div className="clear-scene" onClick={clearAll}>
                  Remove all
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
