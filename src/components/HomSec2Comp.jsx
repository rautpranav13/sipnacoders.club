import React from "react";
import CodeWelcome from "./CodeWelcome.jsx";
import TextType from "../blocks/TextAnimations/TextType/TextType.jsx";
import DecryptedText from "../blocks/TextAnimations/DecryptedText/DecryptedText.jsx";
import StatsSection from "./StatsSection.jsx";
import Spline from "@splinetool/react-spline";
import LogoLoop from "./LogoLoop.jsx";
import ScrollVelocity from "../blocks/TextAnimations/ScrollVelocity/ScrollVelocity.jsx"


export default function Sec2Comp() {
  return ( 
    <div className=" w-full bg-black text-white flex flex-col lg:flex-col">

        
      <StatsSection/>

       <div className="my-[5%] hidden sm:block">
          <LogoLoop />
       </div>
         <div className="mt-1 scale-75 block sm:hidden">
          <LogoLoop />
       </div>

      <div className="w-full  absolute sm:relative  flex justify-center">  {/* this div */}
  <div className="w-[100%] sm:w-full   text-center">

      <div className="mt-[200%] lg:mt-0 hidden sm:block w-3/4 mx-auto">
        <h1 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl  mb-4 leading-tight">
          <TextType
            text={["We are the Coders Club — where the next generation builds what’s next."]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
      </div>

      <div className="mt-[150%] scale-10 block sm:hidden lg:mt-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl  mb-4 leading-tight">
          <ScrollVelocity
            texts={['Coders Club', 'Scroll Down']} 
            className="custom-scroll-text"
          />
        </h1>
      </div>

      <p className="w-1/2 text-base sm:text-lg hidden sm:block mx-auto md:text-xl text-gray-300 leading-relaxed">
        <span className="block">
          <DecryptedText
            className="inline-block"
            text="Welcome to the hub of campus’s most passionate creators, boundary-breaking innovators, and fearless problem-solvers. A place where the ideas evolve into projects, projects evolve into opportunities, and opportunities shape the future."
            animateOn="view"
            revealDirection="center"
          />
        </span>

        <br />
        
      </p>
       
 
  </div>
  
  
</div>

        {/* <div className="scale-[100%] w-full mx-auto  hidden sm:block lg:mt-0">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-xl  mb-4 leading-tight">
            <ScrollVelocity
              texts={['Coders Club', 'Scroll Down']} 
              className="custom-scroll-text"
            />
          </h1>
        </div> */}
      

    </div>
  );}