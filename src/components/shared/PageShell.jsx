import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mobilePageTransition, pageTransition } from "../../animations/variants.js";

export default function PageShell({ children }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const transition = isSmallScreen ? mobilePageTransition : pageTransition;

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsSmallScreen(media.matches);

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  return (
    <motion.main
      initial={transition.initial}
      animate={transition.animate}
      exit={transition.exit}
      transition={transition.transition}
    >
      {children}
    </motion.main>
  );
}
