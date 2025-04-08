// components/ui/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  keyProp?: string | number;
};

export default function AnimatedSection({ children, keyProp }: Props) {
  return (
    <motion.div
      key={keyProp} // để anim khi chuyển tab
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
