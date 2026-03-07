"use client";

export function CrescentMoon() {
  return (
    <div className="fixed top-8 md:top-12 right-8 md:right-16 pointer-events-none z-5">
      <div className="relative w-16 h-16 md:w-24 md:h-24">
        {/* Moon glow */}
        <div 
          className="absolute inset-0 rounded-full bg-yellow-200/20 blur-2xl"
          style={{
            animation: "moonGlow 4s ease-in-out infinite",
          }}
        />
        
        {/* Crescent moon */}
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          style={{
            filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.5))",
          }}
        >
          <defs>
            <radialGradient id="moonGradient" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#fffde0" />
              <stop offset="50%" stopColor="#ffd700" />
              <stop offset="100%" stopColor="#c9a227" />
            </radialGradient>
            <mask id="crescentMask">
              <circle cx="50" cy="50" r="45" fill="white" />
              <circle cx="70" cy="45" r="35" fill="black" />
            </mask>
          </defs>
          
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#moonGradient)"
            mask="url(#crescentMask)"
          />
        </svg>
        
        <style jsx>{`
          @keyframes moonGlow {
            0%, 100% {
              opacity: 0.5;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(1.1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
