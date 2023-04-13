import React from "react";
import { useSnapshot } from "valtio";
import { motion } from "framer-motion";

import state from "../store";
import { fadeAnimation, slideAnimation } from "../config/motion";

function Tab({ handleClick, tab, isFilterTab, isActiveTab }) {
  const snap = useSnapshot(state);
  const activeStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.5 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <motion.div
      {...fadeAnimation}
      key={tab.name}
      style={activeStyles}
      onClick={handleClick}
      className={`tab-btn ${
        isFilterTab ? "rounded-full glassmorphism" : "rounded-4"
      }`}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-2/3 h-2/3" : "w-11/12 h-11/12 object-contain"
        }`}
      />
    </motion.div>
  );
}

export default Tab;
