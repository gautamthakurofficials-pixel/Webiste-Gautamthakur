import React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | (() => void);
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -3, scale: 1.02 }}
      className={cn(
        "inline-flex items-center justify-center rounded-md font-heading font-medium transition-all duration-300 focus:outline-none",
        {
          "hover-shine gold-gradient text-primary shadow-[0_4px_14px_0_rgba(244,194,31,0.2)] hover:shadow-[0_6px_20px_rgba(244,194,31,0.5)]":
            variant === "primary",
          "hover-shine border border-gold text-gold shadow-sm hover:shadow-[0_4px_15px_rgba(244,194,31,0.2)] bg-transparent hover:bg-gold/10":
            variant === "outline",
          "text-white hover:text-gold": variant === "ghost",
          "h-9 px-4 text-sm": size === "sm",
          "h-12 px-8 text-base": size === "md",
          "h-14 px-10 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}
