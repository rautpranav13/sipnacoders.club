import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar.jsx";
import SplashCursor from "../blocks/Animations/SplashCursor/SplashCursor.jsx";
import PixelBlast from "../blocks/Backgrounds/PixelBlast/PixelBlast.jsx";
import TextType from "../blocks/TextAnimations/TextType/TextType.jsx";
import LightRays from "../blocks/Backgrounds/LightRays/LightRays.jsx";
import VariableProximity from "../blocks/TextAnimations/VariableProximity/VariableProximity.jsx"; // ✅ Added import
import ScrollFloat from "../blocks/TextAnimations/ScrollFloat/ScrollFloat.jsx" // ✅ Added Scrollfloat
import { motion } from "framer-motion";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard.jsx";

import Threads from '../blocks/Backgrounds/Threads/Threads.jsx';
import ScrollStack, { ScrollStackItem } from '../blocks/Components/ScrollStack/ScrollStack.jsx'

import ChromaGrid from "../blocks/Components/ChromaGrid/ChromaGrid.jsx";



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";


import Cube from "../components/Cube.jsx";
import { Search, Lightbulb, Target, ArrowRight } from "lucide-react";
import GlitchText from "../blocks/TextAnimations/GlitchText/GlitchText.jsx";
import BlurText from "../blocks/TextAnimations/BlurText/BlurText.jsx";

import avtr from "../assets/vrush.png";

import box1 from "../assets/box 1.jpg";
import box2 from "../assets/box 2.jpg";
import box3 from "../assets/box 3.jpg";
import box4 from "../assets/box 4.jpg";
import rocket from "../assets/rocket.png";
import setting from "../assets/set.png";
import chain from "../assets/chain.png";

//Team
const items = [
  {
    image: avtr,
    title: "Pranav Raut",
    subtitle: "( President- Domain Lead )",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: avtr,
    title: "Prit Thombare",
    subtitle: "Vice President- Domain Lead",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: avtr,
    title: "Vaishnavi Jaiswal",
    subtitle: "Secretary- Domain Lead",
    handle: "@aishapatel",
    borderColor: "#F472B6",
    gradient: "linear-gradient(180deg, #F472B6, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Vrushabh Shelokar",
    subtitle: "Technical Head- Domain Lead",
    handle: "@ravikumar",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Nandita Sahu",
    subtitle: "Public Relation Officer- Domain Lead",
    handle: "@elenagarcia",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Shreya Gulhane",
    subtitle: "Public Relation Officer- Domain Lead",
    handle: "@lucasbrown",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Uday Shivarkar",
    subtitle: "Treasurer- Domain Lead",
    handle: "@oliviadavis",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Ritesh Pawar",
    subtitle: "Executive Head- Domain Lead",
    handle: "@noahsmith",
    borderColor: "#F43F5E",
    gradient: "linear-gradient(145deg, #F43F5E, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Sakshi Bawankar",
    subtitle: "Executive Member- Domain Lead",
    handle: "@sophialee",
    borderColor: "#14B8A6",
    gradient: "linear-gradient(145deg, #14B8A6, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Amrita Dahake",
    subtitle: "Executive Member",
    handle: "@ethanwhite",
    borderColor: "#EAB308",
    gradient: "linear-gradient(145deg, #EAB308, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Om Bhusari",
    subtitle: "Executive Member",
    handle: "@gracetaylor",
    borderColor: "#22D3EE",
    gradient: "linear-gradient(145deg, #22D3EE, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Disha Deshmukh",
    subtitle: "Executive Member",
    handle: "@liamwalker",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #EF4444, #000)",
    url: "#",
  },
  {
    image: avtr,
    title: "Harshdip patil",
    subtitle: "Executive Member",
    handle: "@isabellamartin",
    borderColor: "#84CC16",
    gradient: "linear-gradient(145deg, #84CC16, #000)",
    url: "#",
  },
];

//our mission cards 
const cards = [
  {
    title: "Empowering Coders, Inspiring Innovation",
    text: "At Sipna Coders Club, we empower coders to innovate, collaborate, and push the limits of technology.",
    img: box4,
    color: "from-[#010101] to-[#5b5b5b]",
  },
  {
    title: "Learn, Build & Grow Together",
    text: "Join a community that helps you upskill, network, and participate in exciting technical events.",
    img: box1,
    color: "from-[#010101] to-[#5b5b5b]",
  },
  {
    title: "Transforming Ideas into Reality",
    text: "Sipna Coders Club guides you to turn your coding ideas into impactful real-world projects.",
    img: box2,
    color: "from-[#010101] to-[#5b5b5b]",
  },
  {
    title: "Future-Ready Coders",
    text: "We prepare you for future challenges with workshops, competitions, and continuous mentorship.",
    img: box3,
    color: "from-[#010101] to-[#5b5b5b]",
  },

];

//join us card
const features = [
  {
    icon: <Search className="w-9 h-9 text-cyan-300 drop-shadow-[0_0_12px_#00eaff]" />,
    title: "RESEARCH",
    desc: "Explore problems deeply and analyze data before crafting solutions.",
    border: "from-cyan-400 via-blue-500 to-green-400",
    glow: "shadow-[0_0_25px_#00eaff]",
  },
  {
    icon: <Lightbulb className="w-9 h-9 text-yellow-300 drop-shadow-[0_0_12px_#ffdd33]" />,
    title: "IDEA",
    desc: "Innovate smart solutions that are practical and impactful.",
    border: "from-yellow-400 via-orange-500 to-red-400",
    glow: "shadow-[0_0_25px_#ffbb00]",
  },
  {
    icon: <Target className="w-9 h-9 text-purple-300 drop-shadow-[0_0_12px_#b066ff]" />,
    title: "GOAL",
    desc: "Turn vision into execution through code, precision, and passion.",
    border: "from-purple-400 via-fuchsia-500 to-pink-400",
    glow: "shadow-[0_0_25px_#b066ff]",
  },
];

export default function About() {
  // ✅ Added ref for VariableProximity
  const containerRef = useRef(null);

  //fotter text
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden bg-black text-gray-100"
    >
      {/* ------------------ Navbar ------------------ */}
      <Navbar active="/about" />

      {/* ------------------ Cursor Trail ------------------ */}
      <SplashCursor />

      {/* Section 1 – Transparent with Glass Container */}
      <section className="relative w-full min-h-screen flex flex-col justify-start items-center text-center px-6 py-24 overflow-hidden">

        {/* ------------------- Background Animation (Full Viewport) ------------------- */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Threads
            amplitude={1.2}        // Slightly stronger amplitude
            distance={0}           // Threads spacing
            enableMouseInteraction={true}  // Interactive parallax effect
          />
        </div>

        {/* ------------------- Faint Diagonal Grid Lines ------------------- */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

        {/* ------------------- Glass-like Container Behind Text ------------------- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] md:w-[70%] h-[60%] max-h-[800px] bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.07)] z-10"></div>

        {/* ------------------- Content Wrapper ------------------- */}
        <div className="relative z-20 flex flex-col items-center max-w-4xl space-y-24">

          {/* About Us Heading */}
          <h1 className="text-gray-300 text-3xl sm:text-3xl md:text-4xl mt-12 sm:mt-20 md:mt-10 tracking-wide transform -translate-y-4 sm:-translate-y-6 md:-translate-y-9">
            About Us
          </h1>

          {/* Animated Typing Text */}
          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center transform -translate-y-10 sm:-translate-y-6 md:-translate-y-8 px-2 sm:px-4">
            <TextType
              text={["Driven by Code, United by Community."]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          {/* ✅ VariableProximity Animation */}
          <div className="text-gray-400 text-center font-extrabold mt-16 sm:mt-20 md:mt-28 px-4 transform -translate-y-12 sm:-translate-y-3 md:-translate-y-12">
            <VariableProximity
              label={
                "We are a collective of creators, innovators, and problem—solvers dedicated to pushing the boundaries of technology."
              }
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.05)]"
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff="linear"
            />
          </div>

        </div>
      </section>


      {/*Section 2 Our Mission */}
      <section className="w-full min-h-screen flex flex-col justify-start items-center  text-white relative z-10">
         <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
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
        <div className="relative flex flex-col items-center w-full">
          {/* Floating Title */}
          <ScrollFloat
            animationDuration={2}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.07}
            textClassName="text-[2rem] text-gray-400 font-bold "
            containerClassName="text-center mt-10"
          >
            Our Mission
          </ScrollFloat>

          <div className="w-full  md:min-h-screen flex flex-col md:flex-row justify-between items-start shadow-2xl overflow-visible mt-10">

            {/* 🔹 Left Sticky Carousel */}
            <div className="md:w-1/2 w-full  sticky top-0 h-screen mt-9">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={true}
                speed={800}
                className="w-[92%] h-[92%] rounded-3xl"
              >
                {[chain, rocket, setting].map((src, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={src}
                      alt={`Slide ${i + 1}`}
                      className="w-full h-screen object-cover rounded-3xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* 🔹 Right Box with Scrollable Cards */}
            <div className="w-full min-h-screen flex justify-center items-center px-4 md:px-12 py-10 rounded-3xl z-10">

              {/* Outer Box */}
              <div className="relative bg-black backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl 
                                  w-[90%] md:w-[70%] h-[70vh] md:h-[70vh] 
                                  flex items-center justify-center overflow-visible">

                {/* Scrollable Cards */}
                <div className="w-full h-full  overflow-y-auto scroll-smooth scrollbar-hide flex justify-center items-center md:items-start">
                  <div className="flex flex-col  gap-[40vh] md:gap-[40vh] relative w-full">

                    {/* Spacer to center cards on load */}
                    <div className="h-[10vh] md:h-[60vh] shrink-0"></div>

                    {cards.map((card, i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-br ${card.color} 
                              w-[95%] md:w-3/4 mx-auto 
                              h-[260px] md:h-[300px] 
                              rounded-3xl shadow-xl 
                              sticky top-[40%] md:top-1/2 
                              -translate-y-1/2 
                              flex flex-col md:flex-row 
                              items-stretch overflow-hidden 
                              transition-transform duration-300 hover:scale-105 
                              z-[${i}]`}
                      >
                        {/* Text Side */}
                        <div className="w-full md:w-1/2 p-5 md:p-8 flex flex-col justify-center text-left bg-black/10">
                          <h3 className="text-lg md:text-2xl font-bold text-white mb-2">
                            {card.title}
                          </h3>
                          <p className="text-sm md:text-base text-gray-100 leading-relaxed">
                            {card.text.includes("Sipna Coders Club") ? (
                              <>
                                {card.text.split("Sipna Coders Club")[0]}
                                <span className="text-cyan-400 font-semibold">
                                  Sipna Coders Club
                                </span>
                                {card.text.split("Sipna Coders Club")[1]}
                              </>
                            ) : (
                              card.text
                            )}
                          </p>
                        </div>

                        {/* Image Side */}
                        <div className="w-full md:w-1/2">
                          <img
                            src={card.img}
                            alt={card.title}
                            className="w-[110%] h-[140px] md:w-full md:h-full 
                                            object-cover rounded-t-3xl 
                                            md:rounded-tr-none md:rounded-l-3xl 
                                            mx-auto"
                          />
                        </div>

                      </div>
                    ))}
                  </div>
                </div>

                {/* Blur Bottom */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent backdrop-blur-2xl pointer-events-none rounded-b-3xl"></div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ✅ Team Section 3 – Final Optimized Version */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 text-center">
        Meet the Core Team
      </h2>
      <p className="text-gray-400 text-center mb-12 text-lg md:text-xl">
        The leadership dedicated to our mission.
      </p>

      <section className="relative w-full min-h-screen flex justify-center items-center bg-black overflow-hidden">

        {/* Inner Container */}
        <div className="relative w-full  flex justify-center items-center">
          <ChromaGrid
            items={items}
            radius={350}  // slightly larger radius for 13 items
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </section>



      {/* ------------------ Section 4: Why Join Us ------------------ */}
      <div className="h-[2vh] md:h-[10vh] shrink-0"></div>
      <GlitchText
        speed={1}
        enableShadows={true}
        enableOnHover={true}
        className='custom-class'
      >
        Why Join Us!
      </GlitchText>

      <section className="relative w-full flex flex-col items-center justify-center gap-20 py-24 px-8 bg-black overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_80px_rgba(255,255,255,0.07)]">

        {/* 🧊 Cube Section (Placed on Top) */}
        <div className="relative flex justify-center items-center w-full py-10">
          <Cube />
        </div>

        {/* ✴️ Animated Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-cyan-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-t from-purple-500/10 to-transparent rounded-full blur-3xl" />

        {/* 💠 Three Column Feature Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-16 z-10">
          {features.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center text-center z-10">

              {/* 🟩 Neon Top Line */}
              <div
                className={`absolute -top-5 left-0 right-0 h-[5px] rounded-full bg-gradient-to-r ${item.border} blur-[1px] ${item.glow}`}
              ></div>

              {/* 📦 Glass Card */}
              <div
                className={`relative p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md ${item.glow} transition-transform hover:scale-[1.07] hover:shadow-[0_0_60px_rgba(255,255,255,0.15)] duration-300`}
              >
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.border} opacity-30 blur-xl -z-10`}
                ></div>

                <div className="flex flex-col items-center gap-4">
                  {item.icon}
                  <h3 className="text-2xl font-semibold text-white tracking-wide drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-base max-w-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* ➡️ Desktop Arrow Connector */}
              {i < features.length - 1 && (
                <div className="hidden md:flex absolute right-[-3rem] top-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center shadow-[0_0_30px_#ffae00] animate-pulse">
                    <ArrowRight className="text-white w-6 h-6" />
                  </div>
                </div>
              )}

              {/* 🔻 Mobile Vertical Arrow */}
              {i < features.length - 1 && (
                <div className="flex md:hidden flex-col items-center my-8">
                  <ArrowRight className="w-7 h-7 text-yellow-400 rotate-90 drop-shadow-[0_0_10px_#ffae00] animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ------------------ Footer ------------------ */}
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

    </div>
  );
}
