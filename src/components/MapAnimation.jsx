export default function MapAnimation() {
  return (
    <div className="relative w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 500 350" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(246,140,42,0)" />
            <stop offset="50%" stopColor="rgba(246,140,42,0.2)" />
            <stop offset="100%" stopColor="rgba(246,140,42,0)" />
          </linearGradient>
          <linearGradient id="radarGrad" x1="0.5" y1="0.5" x2="0.5" y2="1">
            <stop offset="0%" stopColor="rgba(246,140,42,0.15)" />
            <stop offset="100%" stopColor="rgba(246,140,42,0)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glowStrong">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width="500" height="350" fill="rgba(246,140,42,0.02)" rx="12" />

        {/* GPS grid lines */}
        <path d="M0 175 Q125 140 250 175 Q375 210 500 175" stroke="rgba(246,140,42,0.12)" strokeWidth="1" fill="none" strokeDasharray="4 6">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="3s" repeatCount="indefinite" />
        </path>
        <path d="M0 120 Q125 150 250 120 Q375 90 500 120" stroke="rgba(246,140,42,0.08)" strokeWidth="0.5" fill="none" />
        <path d="M0 230 Q125 200 250 230 Q375 260 500 230" stroke="rgba(246,140,42,0.08)" strokeWidth="0.5" fill="none" />
        <path d="M0 70 Q125 100 250 70 Q375 40 500 70" stroke="rgba(246,140,42,0.06)" strokeWidth="0.5" fill="none" />
        <path d="M0 280 Q125 250 250 280 Q375 310 500 280" stroke="rgba(246,140,42,0.06)" strokeWidth="0.5" fill="none" />

        {/* Vertical grid */}
        <path d="M125 10 L125 340" stroke="rgba(246,140,42,0.06)" strokeWidth="0.5" fill="none" />
        <path d="M250 10 L250 340" stroke="rgba(246,140,42,0.08)" strokeWidth="0.5" fill="none" />
        <path d="M375 10 L375 340" stroke="rgba(246,140,42,0.06)" strokeWidth="0.5" fill="none" />

        {/* GPS Tracking Lines - data routes */}
        <path d="M80 180 Q160 140 200 170 Q240 200 280 160 Q320 120 380 150" stroke="rgba(246,140,42,0.15)" strokeWidth="1.5" fill="none" strokeDasharray="6 4" filter="url(#glow)">
          <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M120 280 Q180 240 220 260 Q260 280 320 220 Q360 180 420 210" stroke="rgba(255,107,0,0.12)" strokeWidth="1" fill="none" strokeDasharray="4 4">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="2.5s" repeatCount="indefinite" />
        </path>
        <path d="M60 100 Q140 80 180 110 Q220 140 280 100 Q340 60 400 90" stroke="rgba(246,140,42,0.1)" strokeWidth="1" fill="none" strokeDasharray="3 5">
          <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="3s" repeatCount="indefinite" />
        </path>

        {/* Vehicle 1 - main tracking target */}
        <g>
          <rect x="75" y="170" width="16" height="10" rx="2" fill="#F68C2A" opacity="0.9" filter="url(#glowStrong)">
            <animateTransform attributeName="transform" type="translate" values="0,0;40,-15;90,5;130,-10;170,0;130,10;90,-5;40,15;0,0" dur="10s" repeatCount="indefinite" />
          </rect>
          <circle cx="83" cy="175" r="2" fill="white" opacity="0.8">
            <animateTransform attributeName="transform" type="translate" values="0,0;40,-15;90,5;130,-10;170,0;130,10;90,-5;40,15;0,0" dur="10s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* Vehicle 2 */}
        <g>
          <rect x="110" y="270" width="14" height="9" rx="2" fill="#FF6B00" opacity="0.85" filter="url(#glow)">
            <animateTransform attributeName="transform" type="translate" values="0,0;50,-20;100,5;150,-15;200,0;150,15;100,-5;50,20;0,0" dur="12s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Vehicle 3 */}
        <g>
          <rect x="55" y="90" width="12" height="8" rx="2" fill="#F68C2A" opacity="0.75">
            <animateTransform attributeName="transform" type="translate" values="0,0;60,-10;120,5;180,-8;240,0;180,8;120,-5;60,10;0,0" dur="14s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Vehicle 4 */}
        <g>
          <rect x="300" y="200" width="12" height="8" rx="2" fill="#FF6B00" opacity="0.7">
            <animateTransform attributeName="transform" type="translate" values="0,0;-40,12;-80,0;-120,-10;-160,0;-120,10;-80,0;-40,-12;0,0" dur="9s" repeatCount="indefinite" />
          </rect>
        </g>

        {/* Radar/Satellite stations */}
        <g>
          <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(246,140,42,0.15)" strokeWidth="1">
            <animate attributeName="r" values="12;25;12" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(246,140,42,0.1)" strokeWidth="0.5">
            <animate attributeName="r" values="12;40;12" dur="3s" repeatCount="indefinite" begin="0.5s" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" begin="0.5s" />
          </circle>
          <circle cx="50" cy="50" r="4" fill="#F68C2A" opacity="0.9" filter="url(#glowStrong)" />
          <text x="50" y="42" fill="rgba(246,140,42,0.6)" fontSize="6" fontWeight="bold" textAnchor="middle">GPS TOWER</text>
          <path d="M50 54 L50 65" stroke="rgba(246,140,42,0.3)" strokeWidth="2" />
          <path d="M42 60 L58 60" stroke="rgba(246,140,42,0.2)" strokeWidth="1" />
        </g>

        <g>
          <circle cx="430" cy="80" r="12" fill="none" stroke="rgba(255,107,0,0.15)" strokeWidth="1">
            <animate attributeName="r" values="12;22;12" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="3.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="430" cy="80" r="12" fill="none" stroke="rgba(255,107,0,0.1)" strokeWidth="0.5">
            <animate attributeName="r" values="12;35;12" dur="3.5s" repeatCount="indefinite" begin="0.6s" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="3.5s" repeatCount="indefinite" begin="0.6s" />
          </circle>
          <circle cx="430" cy="80" r="4" fill="#FF6B00" opacity="0.9" filter="url(#glowStrong)" />
          <text x="430" y="72" fill="rgba(255,107,0,0.6)" fontSize="6" fontWeight="bold" textAnchor="middle">SAT</text>
        </g>

        <g>
          <circle cx="250" cy="300" r="10" fill="none" stroke="rgba(246,140,42,0.12)" strokeWidth="1">
            <animate attributeName="r" values="10;18;10" dur="4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;0;0.2" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="250" cy="300" r="10" fill="none" stroke="rgba(246,140,42,0.08)" strokeWidth="0.5">
            <animate attributeName="r" values="10;28;10" dur="4s" repeatCount="indefinite" begin="0.7s" />
            <animate attributeName="opacity" values="0.15;0;0.15" dur="4s" repeatCount="indefinite" begin="0.7s" />
          </circle>
          <circle cx="250" cy="300" r="3" fill="#F68C2A" opacity="0.8" />
        </g>

        {/* Data upload/download arrows */}
        <g opacity="0.4">
          <path d="M50 65 L50 80" stroke="rgba(246,140,42,0.4)" strokeWidth="1" />
          <polygon points="50,85 46,78 54,78" fill="rgba(246,140,42,0.4)">
            <animate attributeName="opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite" />
          </polygon>
        </g>

        <g opacity="0.3">
          <path d="M430 95 L430 110" stroke="rgba(255,107,0,0.3)" strokeWidth="1" />
          <polygon points="430,115 426,108 434,108" fill="rgba(255,107,0,0.3)">
            <animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.5s" repeatCount="indefinite" />
          </polygon>
        </g>

        {/* Scanning radar arc */}
        <g transform="translate(250, 175)">
          <path d="M0 0 L80 -50 A90 90 0 0 1 80 50 Z" fill="rgba(246,140,42,0.04)">
            <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Corner labels */}
        <text x="15" y="340" fill="rgba(246,140,42,0.25)" fontSize="6" fontFamily="monospace">
          20.15°S 31.00°E
        </text>
        <text x="400" y="340" fill="rgba(246,140,42,0.25)" fontSize="6" fontFamily="monospace">
          LIVE TRACKING
        </text>
        <text x="15" y="20" fill="rgba(246,140,42,0.2)" fontSize="5" fontFamily="monospace">
          SATELLITES: 12 • VEHICLES: 4 • SIGNAL: STRONG
        </text>
      </svg>
    </div>
  );
}
