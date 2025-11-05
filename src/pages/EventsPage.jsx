import React from "react";
import Navbar from "../components/Navbar.jsx";
import PixelBlast from "../blocks/Backgrounds/PixelBlast/PixelBlast.jsx";
import codeDark1 from "../assets/codeDark1.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function EventsPage() {


  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background text-gray-100">
      <Navbar active="/" />

    <DotLottieReact
      src={codeDark1}
      loop
      autoplay
    />
     <div style={{ width: '100%', height: '600px', position: 'relative' }}>
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
</div>
    </div>
  );
}
