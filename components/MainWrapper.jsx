"use client";

import React, { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

function MainWrapper({children}) {
  const constraintsRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="overflow-hidden ">
      <motion.div
        ref={constraintsRef}
        className="h-screen w-screen flex flex-col justify-center items-center z-20 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <motion.div
          className="w-[400px] h-[400px] rounded-full z-10 bg-hero repea bg-cover bg-center bg-fixed bg-no-repeat"
          style={{
            position: "absolute",
            top: `${mousePosition.y - 200}px`,
            left: `${mousePosition.x - 200}px`,
          }}
          drag
          dragConstraints={constraintsRef}
        />
        
        {children}
      </motion.div>
    </section>
  );
}

export default MainWrapper;
