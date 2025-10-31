"use client";

import { useAnimationFrame } from "framer-motion";
import { useRef } from "react";

import iconsJava from "../assets/iconsJava.svg";
import iconsCPP from "../assets/iconsCPP.svg";
import iconsJs from "../assets/iconsJs.svg";
import iconsPython from "../assets/iconsPython.svg";
import iconsRuby from "../assets/iconsRuby.svg";
import iconsSwift from "../assets/iconsSwift.svg";

export default function WhyJoinUsSection() {
  const ref = useRef(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <section className="relative w-full py-24 px-6 bg-white/5 text-white overflow-hidden rounded-3xl border border-black shadow-[0_0_80px_rgba(255,255,255,0.07)]">
      <div className="relative flex justify-center items-center w-full py-10">
        <div className="cube-container">
          <div className="cube" ref={ref}>
            <div className="side front">
              <img src={iconsJava} alt="Java" />
            </div>
            <div className="side back">
              <img src={iconsCPP} alt="C++" />
            </div>
            <div className="side left">
              <img src={iconsJs} alt="JavaScript" />
            </div>
            <div className="side right">
              <img src={iconsPython} alt="Python" />
            </div>
            <div className="side top">
              <img src={iconsRuby} alt="Ruby" />
            </div>
            <div className="side bottom">
              <img src={iconsSwift} alt="Swift" />
            </div>
          </div>
        </div>
      </div>
      <StyleSheet />
    </section>
  );
}

function StyleSheet() {
  return (
    <style>{`
      .cube-container {
        perspective: 1000px;
        width: 180px;
        height: 180px;
      }

      .cube {
        width: 100%;
        height: 100%;
        position: relative;
        transform-style: preserve-3d;
        transition: transform 0.3s ease;
      }

      .side {
        position: absolute;
        width: 100%;
        height: 100%;
        border: 2px solid rgba(255,255,255,0.2);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .side img {
        width: 70%;
        height: 70%;
        object-fit: contain;
        opacity: 0.9;
      }

      .front { transform: rotateY(0deg) translateZ(90px); }
      .back { transform: rotateY(180deg) translateZ(90px); }
      .right { transform: rotateY(90deg) translateZ(90px); }
      .left { transform: rotateY(-90deg) translateZ(90px); }
      .top { transform: rotateX(90deg) translateZ(90px); }
      .bottom { transform: rotateX(-90deg) translateZ(90px); }

      @media (max-width: 768px) {
        .cube-container {
          width: 130px;
          height: 130px;
        }
        .side img {
          width: 80%;
          height: 80%;
        }
      }
    `}</style>
  );
}
