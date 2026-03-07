"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StarParticles } from "@/components/ramadan/star-particles";
import { Lanterns } from "@/components/ramadan/lanterns";
import { MosqueSilhouette } from "@/components/ramadan/mosque-silhouette";
import { PalmTrees } from "@/components/ramadan/palm-trees";
import { CrescentMoon } from "@/components/ramadan/crescent-moon";
import { AudioPlayer } from "@/components/ramadan/audio-player";
import { LandingPage } from "@/components/ramadan/landing-page";
import { QuizPage } from "@/components/ramadan/quiz-page";
import { ResultPage } from "@/components/ramadan/result-page";

type PageState = "landing" | "quiz" | "result";

export default function RamadanQuiz() {
  const [currentPage, setCurrentPage] = useState<PageState>("landing");
  const [finalScore, setFinalScore] = useState(0);

  const handleStartQuiz = () => {
    setCurrentPage("quiz");
  };

  const handleQuizComplete = (score: number) => {
    setFinalScore(score);
    setCurrentPage("result");
  };

  const handleRestart = () => {
    setFinalScore(0);
    setCurrentPage("landing");
  };

  return (
    <main className="min-h-screen bg-background overflow-hidden relative">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1a1a3e] to-[#0d0d2a] z-0" />
      
      {/* Animated background elements */}
      <StarParticles />
      <CrescentMoon />
      <Lanterns />
      <MosqueSilhouette />
      <PalmTrees />
      
      {/* Audio player */}
      <AudioPlayer />

      {/* Page content */}
      <AnimatePresence mode="wait">
        {currentPage === "landing" && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LandingPage onStart={handleStartQuiz} />
          </motion.div>
        )}

        {currentPage === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <QuizPage onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {currentPage === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultPage score={finalScore} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS for shimmer animation */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>
    </main>
  );
}
