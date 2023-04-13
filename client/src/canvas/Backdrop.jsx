import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import React, { useRef } from "react";
import { useSnapshot } from "valtio";
import state from "../store";

function Backdrop() {
  const shadow = useRef();
  const snap = useSnapshot(state);
  return (
    <AccumulativeShadows
      ref={shadow}
      temporal
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      color={snap.color}
      opacity={0.6}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        ambient={0.6}
        intensity={0.7}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        ambient={0.55}
        intensity={0.25}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

export default Backdrop;
