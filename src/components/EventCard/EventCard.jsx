import React from "react";
import SpotlightCard from "../../blocks/Components/SpotlightCard/SpotlightCard";
import "../EventCArd/EventCard.css";

export default function EventCard({
  image,
  name,
  date,
  description,
  showCertificateButton,
}) {
  return (
    <SpotlightCard
      className="custom-spotlight-card card-animated-border"
      spotlightColor="rgba(101, 3, 206, 0.2)"
    >
      <div className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.07)] overflow-hidden flex flex-col transition-all hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(255,255,255,0.12)] duration-300">
        
        {/* ✅ FIXED IMAGE RATIO CONTAINER */}
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col justify-between text-sm flex-grow">
          <div>
            <p className="font-semibold text-lg mb-1">{name}</p>
            <p className="text-gray-400 text-sm mb-2">{description}</p>
            <p className="text-gray-500 text-xs mt-auto">{date}</p>
          </div>

          {showCertificateButton && (
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] text-white rounded-xl text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 self-start">
              Get Certificate
            </button>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
