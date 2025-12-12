import React from "react";
import SplashCursor from '../blocks/Animations/SplashCursor/SplashCursor.jsx'; 
import LiquidEther from "../blocks/Backgrounds/LiquidEther/LiquidEther.jsx";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText.jsx";
import Navbar from "../components/Navbar.jsx";
import HomRobo from "../components/HomRobo.jsx";
import LightRays from '../blocks/Backgrounds/LightRays/LightRays.jsx';
import HomSec2Comp from "../components/HomSec2Comp.jsx";
import HomSec3 from "../components/HomSec3.jsx";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx"
import Footer from "../components/Footer.jsx";


export default function HomePage() {
  return (
    
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background ">
      
      <Navbar active="/" />

      <SplashCursor />
      

  {/* ---------- Section 1: Hero / Intro ---------- */}
      <section className="w-full h-screen flex flex-col items-center justify-center text-center  py-20">
      <HomRobo/> 
      </section>
     
{/* ---------- Section 2 ---------- */}
     <section className="w-full h-screen flex flex-col items-center justify-center text-center  py-0">
        <HomSec2Comp/>
        
     </section>

<div className=" w-full mx-auto  hidden sm:block lg:mt-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-xl  mb-4 leading-tight">
            <ScrollVelocity
              texts={['Coders Club', 'Scroll Down']} 
              className="custom-scroll-text"
            />
          </h1>
        </div>

{/* ---------- Section 3:  ---------- */}
      <section className="w-full  flex flex-col items-center justify-center text-center  py-0">
        <HomSec3/>
     </section>

        <section className="w-full  flex flex-col items-center justify-center text-center  py-0">
        <Footer/>
     </section>
      
    </div>
  );
}
