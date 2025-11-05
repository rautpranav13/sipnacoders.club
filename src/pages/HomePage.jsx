import React from "react";
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor.jsx'; 
import LiquidEther from "../blocks/Backgrounds/LiquidEther/LiquidEther.jsx";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText.jsx";
import Navbar from "../components/Navbar.jsx";




export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background text-gray-100">
      
      <Navbar active="/" />
      
      <SplashCursor />
      
      {/* ------------------ Liquid Ether Background ------------------ */}
       <div className="absolute inset-0 z-0">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={50}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div> 



      {/* ------------------ Foreground Content ------------------ */}
      <div className="relative z-10 px-6 py-12 flex flex-col items-center">
        {/* Animated Title */}
        <div className="text-white text-5xl md:text-7xl font-extrabold tracking-wide mb-6">
          <DecryptedText
            text="Sipna Coders Club"
            animateOn="hover"
            revealDirection="start"
            sequential={true}
            speed={60}
            characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"
          />
        </div>

        {/* Tagline */}
        <p className="text-gray-300 mt-4 text-lg md:text-xl max-w-xl text-center">
          Empowering future innovators through code, creativity, and collaboration.
        </p>

        {/* Call to Action */}
        <a
          href="/login"
          className="mt-8 bg-primary hover:bg-secondary px-8 py-3 rounded-full text-white font-semibold transition-all"
        >
          Go to Dashboard →
        </a>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-gray-400 text-sm z-10">
        © {new Date().getFullYear()} Sipna Coders Club
      </div>
    </div>
  );
}
