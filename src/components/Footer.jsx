import React from "react";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText.jsx";

export default function Footer(){
      const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
    return(
        <footer className="relative w-full bg-[#0f0f12] text-gray-300 mt-24">
        {/* Top thin separator line */}
        <div className="border-t border-gray-700"></div>

        {/* Footer Content */}
        <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Club Logo & Tagline */}
          <div className="flex flex-col items-start space-y-4">
            <BlurText
              text="Coders Club...."
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-2xl mb-8"
            />
            <p className="text-gray-400 text-sm">Code. Collaborate. Create.</p>
            <p className="text-gray-500 text-xs">© 2025 Coders Club. All Rights Reserved.</p>
          </div>

          {/* Column 2: Navigate */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-white mb-2">Navigate</h3>
            <a href="#home" className="hover:text-cyan-400 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
            <a href="#events" className="hover:text-cyan-400 transition-colors duration-300">Events</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
          </div>

          {/* Column 3: Connect */}
          <div className="flex flex-col items-center sm:items-center space-y-3 w-full">
            <h3 className="font-bold text-white text-center">Connect</h3>

            {/* Icon container */}
            <div className="flex flex-row justify-center items-center gap-4 mt-2 flex-wrap">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-300"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>

            </div>
          </div>

          {/* Column 4: Email */}
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold text-white mb-2">Offical Mail</h3>
            <a href="team@sipnacoders.club">team@sipnacoders.club</a>
          </div>
        </div>

        {/* Bottom thin separator line */}
        <div className="border-t border-gray-700 mt-6"></div>
      </footer>
    );
}