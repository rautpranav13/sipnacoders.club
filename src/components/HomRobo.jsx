import React, { Suspense } from "react";
import Spline from "@splinetool/react-spline";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText.jsx";
import LightRays from '../blocks/Backgrounds/LightRays/LightRays.jsx';
import TextType from "../blocks/TextAnimations/TextType/TextType.jsx";
import CodeWelcome from "./CodeWelcome.jsx";
import Arow from "./Arow.jsx";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx"

export default function Robo() {
  return (
    <div className="min-h-screen w-full bg-black text-white ">
        <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
          <LightRays
            raysOrigin="right-center"
            raysColor="#00f0f0"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.2}
            noiseAmount={0.1}
            distortion={0.01}
            className="custom-rays "
          />
        </div>
  
  <div
    style={{  }}
    className="
      w-full h-full 
      flex items-center justify-between 
      mx-0 sm:mx-10 lg:m-[5rem]
      flex-col lg:flex-row   /* RESPONSIVE FIX */
    "
  >

          
            <div className="w-full flex justify-center absolute top-[6%] lg:top-[7%] z-50 px-4">
             <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400 text-transparent bg-clip-text">
                <TextType
                  text={["Your Journey Into Innovation Starts Now."]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h1>
            </div>



                            {/* Modern Coder Background Grid */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,255,180,0.07)_1px,transparent_1px)] bg-[length:36px_36px]" />

                  {/* Top Glow — Cyber Cyan */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
                      bg-gradient-to-b from-cyan-400/20 to-transparent 
                      rounded-full blur-3xl" />

                  {/* Bottom Glow — Developer Purple */}
                  <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] 
                      bg-gradient-to-t from-purple-400/20 to-transparent 
                      rounded-full blur-3xl" />
      <CodeWelcome/>

      <Arow/>
            

    {/* right — 3D Model */}
    <div
  className="
    w-full lg:w-3/4 
    h-full flex items-center
    order-2 lg:order-none
    
    
  "
>

      <Suspense
        fallback={
          <div className="text-white text-center pt-8">
            Loading 3D scene...
          </div>
        }
      >
        <div className="w-full h-full hidden sm:block">
        <Spline scene="/robot_follow_cursor_for_landing_page.splinecode" />
        </div>
      </Suspense>
    </div>
           
        <div className="w-full block sm:hidden">
          <div className="w-full h-[100vh] overflow-visible relative">
            <div className="absolute inset-0">
              <Spline
                scene="/robot_follow_cursor_for_landing_page.splinecode"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>

  </div>
  
</div>

  );
}
