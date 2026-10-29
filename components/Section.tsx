"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  reveal?: boolean;
}

export function Section({
  children,
  className,
  id,
  delay = 0,
  reveal = true,
}: SectionProps) {
  if (!reveal) {
    return (
      <section id={id} className={cn("py-12 md:py-16", className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={cn("py-12 md:py-16", className)}
    >
      {children}
    </motion.section>
  );
}
