"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { quizQuestions, type Question } from "@/lib/quiz-data";
import { cn } from "@/lib/utils";

interface QuizPageProps {
  onComplete: (score: number) => void;
}

export function QuizPage({ onComplete }: QuizPageProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const question: Question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    setShowResult(true);
    setAnswers([...answers, selectedAnswer]);

    if (selectedAnswer === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      const finalScore = selectedAnswer === question.correctAnswer ? score : score;
      onComplete(finalScore);
    }
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative z-20">
      {/* Progress bar */}
      <div className="w-full max-w-xl mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Pertanyaan {currentQuestion + 1} dari {quizQuestions.length}
          </span>
          <span className="text-sm text-primary font-semibold">
            Skor: {score}
          </span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-xl"
        >
          <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-xl">
            {/* Question number badge */}
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
              {currentQuestion + 1}
            </div>

            {/* Question text */}
            <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-6 leading-relaxed">
              {question.question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === question.correctAnswer;
                
                let optionStyle = "border-border bg-secondary/50 hover:bg-secondary hover:border-primary/50";
                
                if (showResult) {
                  if (isCorrectAnswer) {
                    optionStyle = "border-green-500 bg-green-500/20 text-green-400";
                  } else if (isSelected && !isCorrectAnswer) {
                    optionStyle = "border-red-500 bg-red-500/20 text-red-400";
                  } else {
                    optionStyle = "border-border bg-secondary/30 opacity-50";
                  }
                } else if (isSelected) {
                  optionStyle = "border-primary bg-primary/20";
                }

                return (
                  <motion.button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showResult}
                    className={cn(
                      "w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3",
                      optionStyle
                    )}
                    whileHover={!showResult ? { scale: 1.02 } : {}}
                    whileTap={!showResult ? { scale: 0.98 } : {}}
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-background/50 flex items-center justify-center font-semibold text-sm">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showResult && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    )}
                    {showResult && isSelected && !isCorrectAnswer && (
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Result feedback */}
            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "mt-6 p-4 rounded-xl text-center",
                  isCorrect
                    ? "bg-green-500/20 border border-green-500/30"
                    : "bg-red-500/20 border border-red-500/30"
                )}
              >
                <p className={cn("font-semibold", isCorrect ? "text-green-400" : "text-red-400")}>
                  {isCorrect ? "Benar! Hebat! 🎉" : "Kurang tepat! 😊"}
                </p>
              </motion.div>
            )}

            {/* Action buttons */}
            <div className="mt-6 flex justify-end">
              {!showResult ? (
                <Button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Jawab
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                >
                  {currentQuestion < quizQuestions.length - 1 ? (
                    <>
                      Selanjutnya
                      <ArrowRight className="w-4 h-4" />
                    </>
                  ) : (
                    "Lihat Hasil"
                  )}
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
