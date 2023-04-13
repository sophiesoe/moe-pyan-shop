import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import state from "../store";
import { useSnapshot } from "valtio";
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
} from "../config/motion";
import { CustomButton } from "../components";

function Home() {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {state.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header
            {...slideAnimation("down")}
            className="flex items-center"
          >
            <img
              src="./logo.png"
              alt="logo"
              className="w-20 h-20 rounded-full object-contain me-4"
            />
            <div>
              <p className="font-bold text-xl">Moe Pyan Shop</p>
              <p>Owned by Ko Wai Yan</p>
            </div>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET'S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D
                customization tool. <strong>Unleash your imagination</strong>{" "}
                and define your own style.
              </p>
              <CustomButton
                type="filled"
                title="Customize it"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}

export default Home;
