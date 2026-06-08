export const pageTransition = {
  initial: { opacity: 0, y: 18, scale: 0.99, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, y: -12, scale: 0.995, filter: "blur(6px)" },
  transition: { duration: 0.86, ease: [0.22, 1, 0.36, 1] },
};

export const mobilePageTransition = {
  initial: { opacity: 0, x: 34, scale: 0.995, filter: "blur(6px)" },
  animate: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
  exit: { opacity: 0, x: -34, scale: 0.995, filter: "blur(6px)" },
  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28, scale: 0.985, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.085,
      delayChildren: 0.06,
    },
  },
};
