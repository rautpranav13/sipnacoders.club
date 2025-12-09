import React from "react";

import javaIcon from "../assets/iconsJava.svg";
import pythonIcon from "../assets/iconsPython.svg";
import jsIcon from "../assets/iconsJs.svg";
import dockerIcon from "../assets/docker.svg";
import prismaIcon from "../assets/prisma.svg";
import reactIcon from "../assets/react.svg";
import supabaseIcon from "../assets/supabase.svg";
import tailwindIcon from "../assets/tailwind.svg";
import tsIcon from "../assets/ts.svg";

export default function LogoLoop() {
  const items = [
    { src: javaIcon, alt: "Java" },
    { src: pythonIcon, alt: "Python" },
    { src: jsIcon, alt: "JavaScript" },
    { src: dockerIcon, alt: "Docker" },
    { src: prismaIcon, alt: "Prisma" },
    { src: reactIcon, alt: "React" },
    { src: supabaseIcon, alt: "Supabase" },
    { src: tailwindIcon, alt: "Tailwind" },
    { src: tsIcon, alt: "TypeScript" },
  ];

  return (
    <>
      {/* Inline animation */}
      <style>{`
        @keyframes rotateRing {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
      `}</style>

      <div className="w-full flex justify-center items-center mt-[90%] sm:mt-16">
        <div
          className="
            relative
            w-[300px] h-[300px]
            flex justify-center items-center
            [perspective:1200px]
          "
        >
          <div
            className="
              absolute inset-0
              [transform-style:preserve-3d]
            "
            style={{
              animation: "rotateRing 22s linear infinite",
            }}
          >
            {items.map((item, i) => {
              const angle = (i / items.length) * 360;

              return (
                <div
                  key={i}
                  className="
                    absolute left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2
                    bg-black/20 backdrop-blur-md
                    p-3 rounded-xl
                    shadow-[0_0_20px_rgba(0,0,0,0.4)]
                    border border-white/10
                    flex items-center justify-center
                    transition-transform
                    hover:scale-110
                  "
                  style={{
                    transform: `
                      rotateY(${angle}deg)
                      translateZ(200px)
                    `,
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-14 h-14 object-contain opacity-80 hover:opacity-100 transition"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
