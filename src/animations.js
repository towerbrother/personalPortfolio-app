export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, when: "beforeChildren", staggerChildren: 0.25 },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export const swipeUpAnimation = {
  hidden: { y: 200 },
  show: { y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

export const fadeAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { ease: "easeOut", duration: 1 },
  },
};

export const lineAnimation = {
  hidden: { width: "0%" },
  show: { width: "100%", transition: { duration: 1 } },
};

export const scrollRevealAnimation = {
  hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
