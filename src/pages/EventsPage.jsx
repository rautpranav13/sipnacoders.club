import React from "react";
import Navbar from "../components/Navbar.jsx";
import PixelBlast from "../blocks/Backgrounds/PixelBlast/PixelBlast.jsx";
import codeDark1 from "../assets/codeDark1.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import HomRobo from "../components/HomRobo.jsx";
import Spline from "@splinetool/react-spline";
import LogoLoop from "../components/LogoLoop.jsx";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx"


export default function EventsPage() {


  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background text-gray-100">
      <Navbar active="/" />

   
              <div className="w-full h-full hidden sm:block">
              <Spline scene="/cute_computer_follow_cursor.splinecode" />
              </div>
            
    
{/* <ScrollVelocity
  texts={['React Bits', 'Scroll Down']} 
  
  className="custom-scroll-text"
/> */}

 {/* <LogoLoop/>
  */}
    {/* <DotLottieReact
      src={codeDark1}
      loop
      autoplay
    /> */}

{/* Mobile-only full viewport Spline */}
{/* <div className="w-full block sm:hidden">
  <div className="w-full h-[100vh] overflow-visible relative">
    <div className="absolute inset-0">
      <Spline
        scene="/robot_follow_cursor_for_landing_page.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  </div>
</div> */}


     {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
    transparent
  />
</div> */}
    </div>
  );
}
