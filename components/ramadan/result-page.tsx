"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Star, PartyPopper, Gift, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizQuestions } from "@/lib/quiz-data";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ResultPageProps {
  score: number;
  onRestart: () => void;
}

// Confetti particle component
function ConfettiParticle({ delay, color, startX }: { delay: number; color: string; startX: number }) {
  return (
    <motion.div
      className="absolute w-3 h-3"
      style={{
        left: `${startX}%`,
        top: -20,
        backgroundColor: color,
        borderRadius: Math.random() > 0.5 ? "50%" : "0%",
      }}
      initial={{ y: -20, x: 0, rotate: 0, opacity: 1 }}
      animate={{
        y: "100vh",
        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50],
        rotate: [0, 360, 720, 1080],
        opacity: [1, 1, 0.8, 0],
      }}
      transition={{
        duration: Math.random() * 4 + 3,
        delay: delay,
        ease: "easeOut",
      }}
    />
  );
}

export function ResultPage({ score, onRestart }: ResultPageProps) {
  const totalQuestions = quizQuestions.length;
  const percentage = (score / totalQuestions) * 100;
  const isPerfect = score === totalQuestions;
  const isGood = score >= 8;
  const [showConfetti, setShowConfetti] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);
  const [showFailAlert, setShowFailAlert] = useState(false);

  const confettiColors = [
    "#ffd700", // gold
    "#22c55e", // green
    "#ff6b6b", // red
    "#4ecdc4", // teal
    "#45b7d1", // blue
    "#f59e0b", // amber
    "#ec4899", // pink
    "#8b5cf6", // purple
  ];

  useEffect(() => {
    if (isGood) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [isGood]);

  const handleGetReward = () => {
    if (isGood) {
      setShowQRCode(true);
    } else {
      setShowFailAlert(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-20 overflow-hidden">
      {/* Confetti animation for good scores */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {Array.from({ length: 60 }).map((_, i) => (
            <ConfettiParticle
              key={i}
              delay={Math.random() * 3}
              color={confettiColors[Math.floor(Math.random() * confettiColors.length)]}
              startX={Math.random() * 100}
            />
          ))}
        </div>
      )}

      {/* Celebration burst effect */}
      {isGood && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 3, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, oklch(0.65 0.2 145 / 0.5) 0%, transparent 70%)",
          }}
        />
      )}

      {/* QR Code Modal for passing score */}
      <AnimatePresence>
        {showQRCode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] px-4"
            onClick={() => setShowQRCode(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-6 rounded-2xl max-w-sm w-full"
              style={{
                background: "linear-gradient(135deg, oklch(0.2 0.04 260) 0%, oklch(0.15 0.03 260) 100%)",
                boxShadow: "0 0 40px oklch(0.65 0.2 145 / 0.4)",
                border: "2px solid oklch(0.65 0.2 145)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowQRCode(false)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>

              {/* Gift icon and congrats */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <Gift className="w-6 h-6" style={{ color: "oklch(0.65 0.2 145)" }} />
                <h3 className="text-xl font-bold" style={{ color: "oklch(0.65 0.2 145)" }}>
                  Selamat!
                </h3>
                <Gift className="w-6 h-6" style={{ color: "oklch(0.65 0.2 145)" }} />
              </motion.div>

              <p className="text-center text-white/80 text-sm mb-4">
                Kamu berhak mendapatkan hadiah THR!
              </p>

              {/* QR Code with glow */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 15px oklch(0.65 0.2 145 / 0.3)",
                    "0 0 30px oklch(0.65 0.2 145 / 0.5)",
                    "0 0 15px oklch(0.65 0.2 145 / 0.3)",
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-xl overflow-hidden mx-auto"
                style={{ width: "fit-content" }}
              >
                <Image
                  src="/images/qr-code.png"
                  alt="QR Code THR"
                  width={280}
                  height={280}
                  className="rounded-xl"
                />
              </motion.div>

              <motion.p
                className="text-center text-sm mt-4 font-medium"
                style={{ color: "oklch(0.65 0.2 145)" }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Scan QR code untuk klaim hadiah THR Jangan Lupa Bilang Makasih ke fahrul 😹
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Fail Alert Modal */}
      <AnimatePresence>
        {showFailAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[100] px-4"
            onClick={() => setShowFailAlert(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative p-6 rounded-2xl max-w-sm w-full text-center"
              style={{
                background: "linear-gradient(135deg, oklch(0.2 0.04 260) 0%, oklch(0.15 0.03 260) 100%)",
                boxShadow: "0 0 40px oklch(0.5 0.2 30 / 0.4)",
                border: "2px solid oklch(0.6 0.2 30)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setShowFailAlert(false)}
                className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>

              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 2 }}
                className="text-5xl mb-4"
              >
                {"😹"}
              </motion.div>

              <p className="text-white text-lg font-medium leading-relaxed">
                {"Njir soal aja banyak yang salah mau minta hadiah kocak"}
              </p>

              <Button
                onClick={() => setShowFailAlert(false)}
                className="mt-6 px-6 py-2 rounded-full"
                style={{
                  backgroundColor: "oklch(0.6 0.2 30)",
                  color: "white"
                }}
              >
                Oke deh
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative"
      >
        <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-xl text-center">
          {/* Trophy/Celebration icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6"
          >
            {isPerfect ? (
              <div className="relative inline-block">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Trophy className="w-24 h-24 text-primary mx-auto drop-shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-3 -right-3"
                >
                  <Star className="w-10 h-10 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -left-3"
                >
                  <Star className="w-8 h-8 text-yellow-300 fill-yellow-300 drop-shadow-lg" />
                </motion.div>
              </div>
            ) : isGood ? (
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [-5, 5, -5],
                }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                <PartyPopper className="w-24 h-24 text-primary mx-auto drop-shadow-lg" />
              </motion.div>
            ) : (
              <Star className="w-24 h-24 text-primary mx-auto" />
            )}
          </motion.div>

          {/* Title text based on score */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl font-bold text-foreground mb-2 font-serif"
          >
            {isGood
              ? "Anjai beneran islam ternyata lu"
              : "Fix islam KTP lu"}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground mb-6"
          >
            {isGood
              ? "Pengetahuan Ramadanmu mantap!"
              : "Belajar lagi yuk tentang Ramadan!"}
          </motion.p>

          {/* Score display with animated ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="mb-8 relative"
          >
            <motion.div
              animate={isGood ? {
                boxShadow: [
                  "0 0 20px oklch(0.65 0.2 145 / 0.3)",
                  "0 0 40px oklch(0.65 0.2 145 / 0.5)",
                  "0 0 20px oklch(0.65 0.2 145 / 0.3)",
                ]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-36 h-36 rounded-full border-4"
              style={{
                borderColor: isGood ? "oklch(0.65 0.2 145)" : "var(--primary)",
                backgroundColor: isGood ? "oklch(0.65 0.2 145 / 0.1)" : "var(--primary) / 0.1"
              }}
            >
              <div className="text-center">
                <motion.span
                  className="text-5xl font-bold"
                  style={{ color: isGood ? "oklch(0.65 0.2 145)" : "var(--primary)" }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  {score}
                </motion.span>
                <span className="text-xl text-muted-foreground">/{totalQuestions}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Score breakdown */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-3 mb-8 text-center"
          >
            <motion.div
              className="rounded-xl p-3 border"
              style={{
                backgroundColor: "oklch(0.65 0.2 145 / 0.15)",
                borderColor: "oklch(0.65 0.2 145 / 0.3)"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold" style={{ color: "oklch(0.65 0.2 145)" }}>{score}</div>
              <div className="text-xs" style={{ color: "oklch(0.65 0.2 145 / 0.8)" }}>Benar</div>
            </motion.div>
            <motion.div
              className="bg-red-500/15 rounded-xl p-3 border border-red-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-red-400">{totalQuestions - score}</div>
              <div className="text-xs text-red-400/80">Salah</div>
            </motion.div>
            <motion.div
              className="bg-primary/15 rounded-xl p-3 border border-primary/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-primary">{Math.round(percentage)}%</div>
              <div className="text-xs text-primary/80">Skor</div>
            </motion.div>
          </motion.div>

          {/* Get Reward button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              onClick={handleGetReward}
              className="gap-2 px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{
                backgroundColor: "oklch(0.65 0.2 145)",
                color: "white"
              }}
            >
              <Gift className="w-5 h-5" />
              Dapatkan Hadiah
            </Button>
          </motion.div>

          {/* Developer credit */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-6 pt-4 border-t border-border/50"
          >
            <span
              className="text-xs font-medium"
              style={{ color: "oklch(0.65 0.2 145 / 0.7)" }}
            >
              Developer By Fahrul
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
