import React, { useState, useEffect } from "react";

export default function CodeWelcome() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[73%] sm:w-[50%] sm:pl-12 flex justify-start mt-[90%] sm:-mt-[15rem] ">
      <div
        className="
          w-[75%] sm:w-[30%] p-5 rounded-xl  font-mono absolute text-left
          bg-[#0f0f17]/70 backdrop-blur-md shadow-[0_0_25px_#1f1f2e]
          border border-[#2f2f40] 
          hover:shadow-[0_0_35px_#6b46c1] transition-all duration-500
        "
      >
        {/* TOP BORDER GRADIENT */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-t-xl"></div>

        {/* Window Controls */}
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_6px_#ff5f56]"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_6px_#ffbd2e]"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_6px_#27c93f]"></div>
        </div>

        {/* Code Block */}
        <div className="text-sm leading-relaxed">
          <p className="text-green-400">
            <span className="text-purple-400">$</span> welcome_to_coders_club()
          </p>

          <p className="text-blue-400 animate-fadeIn">function joinCommunity() &#123;</p>

          <p className="ml-6 text-yellow-300 animate-fadeIn">
            return{" "}
            <span className="text-orange-300">
              "Amazing projects await!"
            </span>;
          </p>

          <p className="text-blue-400 animate-fadeIn">&#125;</p>

          {/* Blinking Line — fixed height + smooth blink */}
          <p
            className={`
              mt-3 text-green-400 transition-opacity duration-300 
              ${blink ? "opacity-100" : "opacity-0"}
            `}
          >
            ▉ Ready to code?
          </p>
        </div>
      </div>
    </div>
  );
}
