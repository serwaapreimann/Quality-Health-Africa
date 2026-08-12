import { Text } from "@chakra-ui/react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUpNumber({
  value,
  suffix = "",
  decimals = 0,
  duration = 1.8,
  ...textProps
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  const count = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(
    decimals > 0 ? "0.00" : "0"
  );

  useMotionValueEvent(count, "change", (latest) => {
    setDisplayValue(latest.toFixed(decimals));
  });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => controls.stop();
  }, [isInView, count, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <Text {...textProps}>
        {displayValue}
        {suffix}
      </Text>
    </motion.div>
  );
}

export default CountUpNumber;