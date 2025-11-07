import React from "react";
import Navbar from "../components/Navbar.jsx";
import Particles from "../blocks/Backgrounds/Particles/Particles.jsx";
import EventCard from "../components/EventCard/EventCard.jsx";
import FFworkshop from "../assets/Event/ffWorkshop.png";
import PEworkshop from "../assets/Event/promptEngg.png";

export default function UpcomingEvents() {
  const upcomingEvents = [
    {
      id: 1,
      name: "TechTrek",
      date: "November 8, 2025",
      description:
        "An interactive info session introducing the club, its domains, and pathways to get involved in upcoming tech initiatives.",
      image: FFworkshop,
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
        <Navbar active="/upcoming-events" />

        <div className="flex flex-col items-center mt-28 px-10 pb-20">
          <h1 className="text-4xl font-bold mb-10">Upcoming Events</h1>

          {/* Keep 1 per row, but not full width */}
          <div className="grid grid-cols-1 gap-10 w-full max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                name={event.name}
                date={event.date}
                description={event.description}
                buttonText="Register Now"
                buttonColor="bg-[#00bfff] hover:bg-[#0099cc]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
