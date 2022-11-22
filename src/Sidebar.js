import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { generateUUID } from "three/src/math/MathUtils";
import Button from "./Buttons";
import { v4 as uuidv4 } from "uuid";

const Line = styled.hr`
  width: 100%;
  margin-bottom: 20px;
`;

function Sidebar({ sideBar = true, setSideBar = () => {}, view }) {
  const plugElemens = [
    { id: 0, name: "°Cross" },
    { id: 1, name: "°Spot & T" },
    { id: 2, name: "°End" },
    { id: 3, name: "°Inter Tube 300" },
    { id: 4, name: "°Inter Tube 450" },
    { id: 5, name: "°Inter Tube 600" },
    { id: 6, name: "°Inter Tube 750" },
    { id: 7, name: "°Inter Tube 900" },
    { id: 8, name: "°Light Tube 600" },
    { id: 9, name: "°Light Tube 750" },
    { id: 10, name: "°Light Tube 900" },
    { id: 11, name: "°Curve 375 Spot Curve" },
    { id: 12, name: "°Curve U 750" },
    { id: 13, name: "°Curve 675" },
  ];
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
              {plugElemens.map(({ name, id }) => (
                <motion.div className="plugElement-add-div" key={uuidv4()}>
                  <motion.button
                    className="plugElement-add"
                    key={uuidv4()}
                    data-name={name}
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
              <Button view={view} />
            </motion.div>
          </motion.div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
