import React, { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";

interface AnimatedNumberProps {
  value: number;
  start?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

export const AnimatedNumber = ({ value, start = 0, prefix = "", suffix = "", duration = 2.5 }: AnimatedNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const spring = useSpring(start, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) => {
    return `${prefix}${Math.round(current)}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};
