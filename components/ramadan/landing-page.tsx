"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 md:pt-20 lg:pt-24 px-4 relative z-20">
      {/* Greeting text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <h2 className="text-primary font-serif text-lg md:text-xl mb-2 tracking-wide">
          Marhaban Ya Ramadan
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
      </motion.div>

      {/* Main title */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center mb-6"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 font-serif text-balance">
          Kuis Ramadan
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto leading-relaxed">
          {"Uji pengetahuanmu tentang bulan suci Ramadan dan dapatkan hadiah THR, kalo ngga bisa jawab berarti islam ktp 😹"}
        </p>
      </motion.div>

      {/* Decorative stars */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex items-center gap-3 mb-8 text-primary"
      >
        <Sparkles className="w-5 h-5 animate-pulse" />
        <span className="text-sm tracking-widest uppercase">10 Pertanyaan Easy</span>
        <Sparkles className="w-5 h-5 animate-pulse" />
      </motion.div>

      {/* Start button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col items-center"
      >
        <Button
          onClick={onStart}
          size="lg"
          className="relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-6 text-lg font-semibold rounded-full shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Mulai Kuis
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary bg-[length:200%_100%] animate-shimmer" />
        </Button>

        {/* Developer credit badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-6 px-5 py-2 rounded-full shadow-lg"
          style={{
            backgroundColor: "oklch(0.65 0.2 145)",
            boxShadow: "0 4px 15px oklch(0.65 0.2 145 / 0.4)"
          }}
        >
          <span className="text-sm font-semibold tracking-wide text-white">
            Developer By Fahrul
          </span>
        </motion.div>
      </motion.div>

      {/* Photo in bottom right corner with animation - transparent background */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="fixed bottom-0 right-2 md:bottom-0 md:right-6 lg:right-10 z-30 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* Glow effect behind the image */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full -z-10"
            style={{
              background: "radial-gradient(circle, oklch(0.65 0.2 145 / 0.5) 0%, oklch(0.65 0.2 145 / 0.2) 40%, transparent 70%)",
            }}
          />
          <Image
            src="/images/photo.png"
            alt="Photo"
            width={220}
            height={280}
            className="w-28 h-auto md:w-40 lg:w-52 object-contain drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 0 20px oklch(0.65 0.2 145 / 0.4))"
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
