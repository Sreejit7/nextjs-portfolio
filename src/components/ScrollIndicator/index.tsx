import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion"
import { useState } from "react";
import styles from './indicator.module.scss';

const ScrollIndicator = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });


  return (
    <svg className={styles["progress-icon"]} viewBox="0 0 60 60">
      <motion.path
        fill="none"
        strokeWidth="4"
        stroke="#7569ff"
        strokeDasharray="0 1"
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{
          pathLength,
          rotate: 90,
          translateX: 5,
          translateY: 5,
          scaleX: -1
        }}
      />
      <motion.path
        fill="none"
        strokeWidth="4"
        stroke="#7569ff"
        d="M14,26 L 22,33 L 35,16"
        initial={false}
        strokeDasharray="0 1"
        animate={{ pathLength: isComplete ? 1 : 0 }}
      />
    </svg>
  )
}

export default ScrollIndicator
