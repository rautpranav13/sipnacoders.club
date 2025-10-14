import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import SplashCursor from "../blocks/Animations/SplashCursor/SplashCursor.jsx";
// import PixelBlast from "../blocks/Backgrounds/PixelBlast/PixelBlast.jsx";
import TextType from "../blocks/TextAnimations/TextType/TextType.jsx";
import LightRays from '../blocks/Backgrounds/LightRays/LightRays.jsx';

export default function About() {
  // Force PixelBlast to mount after parent renders
  {/* const [showPixelBlast, setShowPixelBlast] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowPixelBlast(true), 50); // 50ms delay
    return () => clearTimeout(timer);
  }, []);  */}

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background text-gray-100">

      {/* ------------------ Navbar ------------------ */}
      <Navbar active="/about" />

      {/* ------------------ Cursor Trail ------------------ */}
      {/* <SplashCursor /> */}

      {/* ------------------ PixelBlast Background ------------------ */}
      {/* {showPixelBlast && (
        <div className="absolute inset-0 w-full h-screen -z-10">
          <PixelBlast
            variant="circle"
            pixelSize={6}
            color="#B19EEF"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
            transparent={false} // ensures pixels are visible
          />
        </div>
      )}  */}

      
        {/* ------------------ LightRays Background ------------------ */}
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div> 

      {/* ------------------ Foreground Content ------------------ */}

       
  

    <section className="relative w-full min-h-screen flex flex-col justify-start items-center text-center px-6">

      <div className="relative z-10 px-6 py-12 flex flex-col items-center max-w-4xl -mt-21">
        
        <h1 className="text-white text-5xl md:text-base  -mb-[22rem] mt-[7rem] ">
          About Us
        </h1>

        {/* Animated Typing Text */}
        <div className="text-lg md:text-[2rem] text-gray-300  text-center mb-[10rem] mt-[30rem] ">
          <TextType
            text={[
              "Driven by Code, United by Community."
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        <p className="mt-4 text-gray-400 md:text-[2.5rem] md:font-extrabold text-center">
          We are a collective of creators, innovators, and
          problem—solvers dedicated to pushing the boundaries
          of technology.
        </p>
      </div>

    </section>


      {/* ------------------ Footer ------------------ */}
      <div className="absolute bottom-4 text-gray-400 text-sm z-10">
        © {new Date().getFullYear()} Sipna Coders Club
      </div>
    </div>
  );
}
