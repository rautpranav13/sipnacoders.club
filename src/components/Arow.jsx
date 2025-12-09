import React from "react";

export default function Arrow(){
    return(
        <div className="">
             {/* Inline animation styles */}
      <style>{`
        @keyframes chevronGlow {
          0% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(6px); }
          100% { opacity: 0.2; transform: translateY(0); }
        }
      `}</style>

      {/* Component */}
      <div className="w-full flex justify-center mt-[17rem] sm:ml-10">
        <div className="flex flex-col items-center gap-2">
          {/* Chevron 1 */}
          <div
            className="text-[#7ED957] text-4xl"
            style={{ animation: "chevronGlow 1.4s infinite ease-in-out" }}
          >
            ﹀
          </div>

          {/* Chevron 2 */}
          <div
            className="text-[#7ED957] text-4xl"
            style={{ animation: "chevronGlow 1.4s infinite ease-in-out", animationDelay: "0.3s" }}
          >
            ﹀
          </div>

          {/* Chevron 3 */}
          <div
            className="text-[#7ED957] text-4xl"
            style={{ animation: "chevronGlow 1.4s infinite ease-in-out", animationDelay: "0.6s" }}
          >
            ﹀
          </div>
        </div>
      </div>
        </div>
    );
}