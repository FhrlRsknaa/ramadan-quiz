"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/music/ramadhan.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    const startAudio = () => {
      audioRef.current?.play();
      setIsPlaying(true);
      window.removeEventListener("click", startAudio);
    };

    window.addEventListener("click", startAudio);

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
    setHasInteracted(true);
  };

  return (
    <button
      onClick={toggleAudio}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300 group"
      aria-label={isPlaying ? "Matikan musik" : "Nyalakan musik"}
    >
      {isPlaying ? (
        <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
      ) : (
        <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
      )}

      {!hasInteracted && (
        <span className="absolute -bottom-8 right-0 text-xs text-primary/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Klik untuk musik
        </span>
      )}
    </button>
  );
}
