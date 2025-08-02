// src/components/CloudBackground.jsx
import React from "react";

const CloudBackground = () => {
  return (
    <>
      <style>{`
        @keyframes driftRight {
          0% {
            transform: translateX(-150px);
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateX(120vw);
            opacity: 0.4;
          }
        }

        .cloud {
          position: absolute;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.6));
          animation-name: driftRight;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }

        .cloud::before,
        .cloud::after {
          content: "";
          position: absolute;
          background: inherit;
          border-radius: 50%;
          filter: inherit;
        }

        .cloud-small {
          width: 80px;
          height: 50px;
          border-radius: 40px / 25px;
        }
        .cloud-small::before {
          width: 50px;
          height: 50px;
          top: -25px;
          left: 10px;
        }
        .cloud-small::after {
          width: 60px;
          height: 60px;
          top: -15px;
          right: 10px;
        }

        .cloud-medium {
          width: 130px;
          height: 80px;
          border-radius: 65px / 40px;
        }
        .cloud-medium::before {
          width: 80px;
          height: 80px;
          top: -40px;
          left: 15px;
        }
        .cloud-medium::after {
          width: 90px;
          height: 90px;
          top: -25px;
          right: 15px;
        }

        .cloud-large {
          width: 220px;
          height: 130px;
          border-radius: 110px / 65px;
        }
        .cloud-large::before {
          width: 140px;
          height: 140px;
          top: -70px;
          left: 25px;
        }
        .cloud-large::after {
          width: 160px;
          height: 160px;
          top: -45px;
          right: 25px;
        }
      `}</style>

      {Array.from({ length: 10 }).map((_, index) => {
        const sizeClass =
          ["cloud-small", "cloud-medium", "cloud-large"][
            Math.floor(Math.random() * 3)
          ];
        const topPos = Math.random() * 70 + 10;
        const duration = 30 + Math.random() * 40;
        const delay = Math.random() * duration;

        return (
          <div
            key={index}
            className={`cloud ${sizeClass}`}
            style={{
              top: `${topPos}vh`,
              left: `-200px`,
              animationDuration: `${duration}s`,
              animationDelay: `-${delay}s`,
              opacity: 0.4 + Math.random() * 0.4,
            }}
          />
        );
      })}
    </>
  );
};

export default CloudBackground;
