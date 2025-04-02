// Animation variants for Framer Motion
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const slideIn = (direction: "up" | "down" | "left" | "right", type: "tween" | "spring", delay: number, duration: number) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "100%" : direction === "down" ? "-100%" : 0,
    opacity: 0
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut"
    }
  }
});
