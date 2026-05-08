import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-32", className)} {...props}>
      <div className="container mx-auto px-6 md:px-12 w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  centered = false,
}: {
  title: string;
  subtitle: string;
  centered?: boolean;
}) {
  return (
    <div
      className={cn("mb-16", {
        "text-center": centered,
      })}
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="subheading mb-4"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl text-white"
      >
        {title}
      </motion.h2>
    </div>
  );
}
