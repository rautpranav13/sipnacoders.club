import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Lanyard from "../blocks/Components/Lanyard/Lanyard.jsx";
import Particles from "../blocks/Backgrounds/Particles/Particles.jsx";
import SpotlightCard from "../blocks/Components/SpotlightCard/SpotlightCard.jsx";
import Profile from "/Users/prit/Documents/CodersWebsite/sipnacoders.club/src/assets/Profile.jpeg";
import "../components/Dashboard/Dashboard.css";
import FFworkshop from "../assets/Event/ffWorkshop.png";
import PEworkshop from "../assets/Event/promptEngg.png";
import TreasureX from "../assets/Event/TreasureX.jpg";
import Devthon from "../assets/Event/devthon.jpg";
import FFworkshop2 from "../assets/Event/ffWorkshop2.jpg";
import TreasureX2 from "../assets/Event/TreasureX2.jpg";
import Devthon2 from "../assets/Event/devthon2.jpg";
import TechTrek from "../assets/Event/techTrek.png";
import ImageTrail from "../blocks/Animations/ImageTrail.jsx";
import "../blocks/Animations/ImageTrail.css";

export default function Dashboard() {
  const navigate = useNavigate();

  // 🔹 Temporary event data (replace later)
  const attendedEvents = [
    { id: 1, image: PEworkshop, name: "Prompt Engineering Workshop", date: "5 Oct 2025", status: "Attended" },
  ];
  const pastEvents = [
    { id: 1, image: PEworkshop, name: "Prompt Engineering Workshop", date: "5 Oct 2025", status: "Completed" },
  ];
  const upcomingEvents = [
    { id: 1, image: TechTrek, name: "TechTrek", date: "8 Nov 2025", status: "Upcoming" },
  ];

  // Helper for quick rendering
const renderEventCard = (event, showMorePath) => {
  const hasEvent = !!event;

  return (
    <div
      className={`${
        showMorePath === "/upcoming-events" ? "grid grid-cols-1" : "grid grid-cols-2"
      } gap-4 h-full`}
    >
      {/* 🟢 Event Card */}
      {hasEvent ? (
        <div
          onClick={() => navigate(showMorePath)}
          className="bg-gray-700/20 rounded-xl overflow-hidden hover:scale-[1.02] transition-all cursor-pointer flex flex-col justify-between"
        >
          <div className="w-full h-[120px] overflow-hidden">
            <img
              src={event.image}
              alt={event.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-3 flex flex-col justify-center text-sm flex-grow">
            <p className="font-semibold text-base">{event.name}</p>
            <p className="text-gray-400 text-xs mt-1">Date: {event.date}</p>
            <p className="text-gray-500 text-xs mt-1">{event.status}</p>
          </div>
        </div>
      ) : (
        <div className="bg- #241c30/70 rounded-xl flex justify-center items-center text-gray-400 text-sm">
          <span>No events available</span>
        </div>
      )}

      {/* 🟣 Show More — skip for Upcoming */}
      {showMorePath !== "/upcoming-events" && (
        <div
          onClick={() => navigate(showMorePath)}
          className="relative bg-gray-700/20 rounded-xl overflow-hidden flex items-center justify-center cursor-pointer hover:scale-[1.02] transition-all group"
        >
          {/* ✴️ Overlay text (visible before hover) */}
          <span className=" title absolute text-white/40 text-4xl font-bold tracking-wide group-hover:opacity-0 transition-opacity duration-300">
            SHOW
          </span>
          <span className="mt-14 title absolute text-white/40 text-4xl font-bold tracking-wide group-hover:opacity-0 transition-opacity duration-300">
            MORE
          </span>

          {/* 🎞️ Image Trail Animation */}
          <div
            style={{
              height: "230px",
              position: "relative",
              overflow: "hidden",
              width: "100%",
            }}
          >
            <ImageTrail
              key={showMorePath}
              items={[PEworkshop, FFworkshop, TreasureX , TreasureX2 , Devthon , Devthon2 , FFworkshop2, TechTrek]}
              variant={4}
            />
          </div>
        </div>
      )}

    </div>
  );
};




  return (
    <div className="relative bg-black min-h-screen text-gray-100 flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#e2e2e2ff"]}
          particleCount={200}
          particleSpread={15}
          speed={0.4}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Navbar */}
      <Navbar active="/dashboard" />

      {/* Dashboard Layout */}
      <div className="flex mx-10 my-10 flex-grow" style={{ height: "80vh", gap: "20px", marginTop: "100px" }}>
        {/* Left Column */}
        <div className="flex flex-col" style={{ width: "30%", gap: "20px" }}>
          {/* Profile Card */}
          <div className="card-animated-border bg-gray-800/80 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)] p-6 z-10">
            <div className="flex gap-4 items-center mb-4">
              <div className="bg-gray-600/70 rounded-full w-14 h-14 flex justify-center items-center overflow-hidden">
                <img src={Profile} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold">Name Surname</p>
                <p className="text-sm text-gray-400">email@domain.com</p>
                <p className="text-xs text-gray-500 mt-1">Branch</p>
              </div>
            </div>
          </div>

          {/* I-Card */}
          <SpotlightCard className="custom-spotlight-card card-animated-border" spotlightColor="rgba(255, 0, 0, 0.2)">
            <div
              className="rounded-xl flex justify-center items-center bg-gradient-to-b from-[#1A1A1A]/70 to-[#0C0C0C]/70 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]"
              style={{ height: "522px" }}
            >
              <div style={{ transform: "scale(1)", transformOrigin: "top center" }}>
                <Lanyard />
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Right Column */}
        <div className="flex flex-col" style={{ width: "70%", gap: "20px", height: "100%" }}>
          {/* Top Row */}
          <div className="flex gap-6" style={{ height: "50%" }}>
            {/* Rank & Score */}
            <div className="card-animated-border bg-gray-800/80 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 flex flex-col justify-center items-center z-10" style={{ width: "40%" }}>
              <p className="text-7xl font-bold">--</p>
              <p className="text-2xl font-bold">Rank</p>
              <div className="custom-divider" style={{ width: "80%" }}></div>
              <p className="text-3xl mt-4 text-gray-300 font-semibold">--</p>
              <p className="text-gray-300">Weekly Contest Score</p>
            </div>

            {/* Attended Events */}
            <div className="card-animated-border bg-gray-800/80 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-6 flex flex-col justify-between z-10" style={{ width: "60%" }}>
              <h2 className="font-semibold mb-4">Attended Events</h2>
              {renderEventCard(attendedEvents[0], "/attended-events")}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex gap-6" style={{ height: "50%" }}>
            {/* Past Events */}
            <div className="card-animated-border bg-gray-800/80 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-6 flex flex-col justify-between z-10" style={{ width: "60%" }}>
              <h2 className="font-semibold mb-4">Past Events</h2>
              {renderEventCard(pastEvents[0], "/past-events")}
            </div>

            {/* Upcoming Event */}
            <div className="card-animated-border bg-gray-800/80 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-6 flex flex-col justify-between z-10" style={{ width: "40%" }}>
              <h2 className="font-semibold mb-4">Upcoming Event</h2>
              {renderEventCard(upcomingEvents[0], "/upcoming-events")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
