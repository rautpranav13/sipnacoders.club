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

{/* Neon Grid Background */}
<div className="
  absolute inset-0 
  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07)_1px,transparent_1px)] 
  bg-[length:32px_32px]
  opacity-60
  animate-pulse
" />

{/* Cyan Glow Orb */}
<div className="
  absolute top-0 left-1/2 -translate-x-1/2 
  w-[650px] h-[650px] 
  bg-gradient-to-b from-cyan-400/20 to-transparent 
  rounded-full blur-[120px] 
  opacity-70
" />

{/* Purple Glow Orb */}
<div className="
  absolute bottom-0 right-1/2 translate-x-1/2 
  w-[650px] h-[650px] 
  bg-gradient-to-t from-purple-500/20 to-transparent 
  rounded-full blur-[140px]
  opacity-70
" />
      <Arow/>
      <StatsSection/>
    
    </div>
  );
}
