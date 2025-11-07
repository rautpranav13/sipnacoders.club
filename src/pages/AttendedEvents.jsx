import React from "react";
import Navbar from "../components/Navbar.jsx";
import Particles from "../blocks/Backgrounds/Particles/Particles.jsx";
import EventCard from "../components/EventCard/EventCard.jsx";
import FFworkshop from "../assets/Event/ffWorkshop.png";
import PEworkshop from "../assets/Event/promptEngg.png";
import TreasureX from "../assets/Event/TreasureX.jpg";
import Devthon from "../assets/Event/devthon.jpg";
import FFworkshop2 from "../assets/Event/ffWorkshop2.jpg";
import TreasureX2 from "../assets/Event/TreasureX2.jpg";
import Devthon2 from "../assets/Event/devthon2.jpg";

export default function AttendedEvents() {
  const attendedEvents = [
    {
      id: 1,
      name: "Prompt Engineering Workshop",
      date: "5 Oct 2025",
      description: "Workshop to equip students with AI communication skills.",
      image: PEworkshop,
    },
    {
      id: 2,
      name: "TreasureX",
      date: "August 28, 2025",
      description: "The ultimate on-campus coding treasure hunt - clues, codes, and chaos.",
      image: TreasureX,
    },
    {
      id: 3,
      name: "DevThon",
      date: "March 20, 2025",
      description: "A 12-hour hackathon where ideas turn into impactful prototypes.",
      image: Devthon,
    },
    {
      id: 4,
      name: "FlutterFlow Workshop",
      date: "October 25, 2024",
      description: "Build apps without code, from UI design to real-time chat in one session.",
      image: FFworkshop2,
    },
  ];

  return (
    <div className="relative bg-black min-h-screen text-gray-100 flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#e2e2e2ff"]}
          particleCount={150}
          particleSpread={15}
          speed={0.3}
          particleBaseSize={150}
          moveParticlesOnHover={true}
        />
      </div>

      {/* Foreground */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar active="/attended-events" />

        <div className="flex flex-col items-center mt-28 px-10 pb-20">
          <h1 className="text-4xl font-bold mb-10">Attended Events</h1>

          {/* Adjusted grid: 3 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl">
            {attendedEvents.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                name={event.name}
                date={event.date}
                description={event.description}
                showCertificateButton={true}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
