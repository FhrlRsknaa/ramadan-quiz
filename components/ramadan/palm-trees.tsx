"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PalmTreeProps {
  className?: string;
  flip?: boolean;
  delay?: number;
  size?: "small" | "medium" | "large";
}

function PalmTree({ className = "", flip = false, delay = 0, size = "medium" }: PalmTreeProps) {
  const sizeClasses = {
    small: "w-24 h-32 md:w-32 md:h-44 lg:w-40 lg:h-52",
    medium: "w-28 h-40 md:w-40 md:h-52 lg:w-48 lg:h-64",
    large: "w-32 h-44 md:w-48 md:h-60 lg:w-56 lg:h-72",
  };

  return (
    <motion.div
      className={`relative ${sizeClasses[size]} ${className}`}
      style={{
        transform: flip ? "scaleX(-1)" : "scaleX(1)",
      }}
      animate={{
        rotate: [-1.5, 1.5, -1.5],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <Image
        src="/images/palm-tree.png"
        alt="Palm tree"
        fill
        className="object-contain object-bottom"
        style={{
          transformOrigin: "bottom center",
        }}
      />
    </motion.div>
  );
}

export function PalmTrees() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-[5]">
      {/* Left palm tree - smaller */}
      <div className="absolute bottom-0 left-2 md:left-4 lg:left-8">
        <PalmTree delay={0} size="small" />
      </div>
      
      {/* Center palm tree - bigger */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
        <PalmTree delay={0.8} size="large" />
      </div>
      
      {/* Right palm tree - smaller */}
      <div className="absolute bottom-0 right-2 md:right-4 lg:right-8">
        <PalmTree flip delay={1.5} size="small" />
      </div>
    </div>
  );
}
