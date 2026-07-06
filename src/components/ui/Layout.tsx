import { HTMLMotionProps, motion } from "motion/react";
import React from "react";
import { twMerge } from "tailwind-merge";

export const Section = ({
  id,
  className,
  children,
  ...props
}: HTMLMotionProps<"section">) => {
  return (
    <motion.section
      id={id}
      className={twMerge("py-24 md:py-32 relative overflow-hidden", className)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: {
  title: string;
  subtitle?: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("mb-16 md:mb-24 text-left max-w-4xl", className)}>
      <motion.h2
        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export const GlassCard = ({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      className={twMerge(
        "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};
