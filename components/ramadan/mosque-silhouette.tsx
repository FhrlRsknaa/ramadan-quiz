"use client";

export function MosqueSilhouette() {
  return (
    <div className="fixed bottom-0 left-0 right-0 pointer-events-none z-5">
      <svg
        viewBox="0 0 1200 300"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Main mosque silhouette */}
        <defs>
          <linearGradient id="mosqueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1a1a3e" />
            <stop offset="100%" stopColor="#0d0d1f" />
          </linearGradient>
        </defs>
        
        {/* Ground */}
        <rect x="0" y="270" width="1200" height="30" fill="#0d0d1f" />
        
        {/* Left minaret */}
        <rect x="150" y="120" width="30" height="150" fill="url(#mosqueGradient)" />
        <path d="M150 120 L165 60 L180 120" fill="url(#mosqueGradient)" />
        <circle cx="165" cy="55" r="8" fill="url(#mosqueGradient)" />
        <ellipse cx="165" cy="47" rx="3" ry="8" fill="url(#mosqueGradient)" />
        
        {/* Right minaret */}
        <rect x="1020" y="120" width="30" height="150" fill="url(#mosqueGradient)" />
        <path d="M1020 120 L1035 60 L1050 120" fill="url(#mosqueGradient)" />
        <circle cx="1035" cy="55" r="8" fill="url(#mosqueGradient)" />
        <ellipse cx="1035" cy="47" rx="3" ry="8" fill="url(#mosqueGradient)" />
        
        {/* Main dome */}
        <ellipse cx="600" cy="170" rx="200" ry="100" fill="url(#mosqueGradient)" />
        <rect x="400" y="170" width="400" height="100" fill="url(#mosqueGradient)" />
        
        {/* Central spire */}
        <ellipse cx="600" cy="80" rx="15" ry="30" fill="url(#mosqueGradient)" />
        <circle cx="600" cy="45" r="12" fill="url(#mosqueGradient)" />
        <ellipse cx="600" cy="33" rx="5" ry="12" fill="url(#mosqueGradient)" />
        
        {/* Left smaller dome */}
        <ellipse cx="350" cy="200" rx="80" ry="50" fill="url(#mosqueGradient)" />
        <rect x="270" y="200" width="160" height="70" fill="url(#mosqueGradient)" />
        <ellipse cx="350" cy="155" rx="8" ry="20" fill="url(#mosqueGradient)" />
        <circle cx="350" cy="133" r="8" fill="url(#mosqueGradient)" />
        
        {/* Right smaller dome */}
        <ellipse cx="850" cy="200" rx="80" ry="50" fill="url(#mosqueGradient)" />
        <rect x="770" y="200" width="160" height="70" fill="url(#mosqueGradient)" />
        <ellipse cx="850" cy="155" rx="8" ry="20" fill="url(#mosqueGradient)" />
        <circle cx="850" cy="133" r="8" fill="url(#mosqueGradient)" />
        
        {/* Windows */}
        <ellipse cx="500" cy="220" rx="15" ry="25" fill="#ffd700" fillOpacity="0.2" />
        <ellipse cx="600" cy="220" rx="15" ry="25" fill="#ffd700" fillOpacity="0.2" />
        <ellipse cx="700" cy="220" rx="15" ry="25" fill="#ffd700" fillOpacity="0.2" />
        
        {/* Door */}
        <path d="M580 270 L580 230 Q600 210 620 230 L620 270" fill="#ffd700" fillOpacity="0.15" />
      </svg>
    </div>
  );
}
