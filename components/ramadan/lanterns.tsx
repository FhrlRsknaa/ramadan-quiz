"use client";

interface LanternProps {
  className?: string;
  delay?: number;
}

function Lantern({ className = "", delay = 0 }: LanternProps) {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 60 100"
        className="w-full h-full"
        style={{
          animation: `sway 4s ease-in-out ${delay}s infinite`,
          transformOrigin: "top center",
        }}
      >
        {/* Rope */}
        <line
          x1="30"
          y1="0"
          x2="30"
          y2="20"
          stroke="#c9a227"
          strokeWidth="2"
        />
        
        {/* Top cap */}
        <ellipse cx="30" cy="22" rx="12" ry="4" fill="#c9a227" />
        
        {/* Lantern body */}
        <path
          d="M18 26 Q18 40 20 55 Q22 70 30 75 Q38 70 40 55 Q42 40 42 26"
          fill="url(#lanternGlow)"
          stroke="#c9a227"
          strokeWidth="2"
        />
        
        {/* Inner light glow */}
        <ellipse
          cx="30"
          cy="48"
          rx="10"
          ry="18"
          fill="url(#innerGlow)"
          style={{
            animation: `pulse 2s ease-in-out ${delay}s infinite`,
          }}
        />
        
        {/* Bottom cap */}
        <ellipse cx="30" cy="75" rx="8" ry="3" fill="#c9a227" />
        
        {/* Bottom ornament */}
        <circle cx="30" cy="82" r="3" fill="#c9a227" />
        <line
          x1="30"
          y1="85"
          x2="30"
          y2="95"
          stroke="#c9a227"
          strokeWidth="2"
        />
        
        {/* Decorative lines */}
        <path
          d="M22 35 Q30 32 38 35"
          stroke="#c9a227"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M21 45 Q30 42 39 45"
          stroke="#c9a227"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M21 55 Q30 52 39 55"
          stroke="#c9a227"
          strokeWidth="1"
          fill="none"
        />
        
        <defs>
          <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#ff9500" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#c9a227" stopOpacity="0.5" />
          </radialGradient>
          <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff7e0" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ffd700" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ff9500" stopOpacity="0.3" />
          </radialGradient>
        </defs>
      </svg>
      
      {/* Glow effect */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 w-20 h-20 rounded-full bg-yellow-400/30 blur-xl"
        style={{
          animation: `glowPulse 2s ease-in-out ${delay}s infinite`,
        }}
      />
      
      <style jsx>{`
        @keyframes sway {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes glowPulse {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -25%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -25%) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}

export function Lanterns() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Left side lanterns */}
      <div className="absolute top-0 left-[5%] w-12 h-24 md:w-16 md:h-32">
        <Lantern delay={0} />
      </div>
      <div className="absolute top-0 left-[15%] w-10 h-20 md:w-14 md:h-28">
        <Lantern delay={0.5} />
      </div>
      
      {/* Right side lanterns */}
      <div className="absolute top-0 right-[5%] w-12 h-24 md:w-16 md:h-32">
        <Lantern delay={1} />
      </div>
      <div className="absolute top-0 right-[15%] w-10 h-20 md:w-14 md:h-28">
        <Lantern delay={1.5} />
      </div>
      
      {/* Hidden on mobile, shown on larger screens */}
      <div className="hidden md:block absolute top-0 left-[25%] w-12 h-24">
        <Lantern delay={2} />
      </div>
      <div className="hidden md:block absolute top-0 right-[25%] w-12 h-24">
        <Lantern delay={2.5} />
      </div>
    </div>
  );
}
