import React from "react";
import Navbar from "../components/Navbar.jsx";
import GlitchText from "../blocks/TextAnimations/GlitchText/GlitchText.jsx";
import Arow from "../components/Arow.jsx";
import StatsSection from "../components/StatsSection.jsx";

export default function DashboardPage() {
 

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-background text-gray-100">
{/* ------------------ Navbar ------------------ */}
     <Navbar active="/" />

      <GlitchText
  speed={1}
  enableShadows={true}
  enableOnHover={true}
  className='custom-class'
>
  Dashboard
</GlitchText>


    
    </div>
  );
}
