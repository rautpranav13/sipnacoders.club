import { Users, Lightbulb, Trophy, GitFork } from "lucide-react";

export default function StatsSection() {
  return (
    <div className="w-full flex absolute justify-center top-[24%] sm:top-[30%] py-0 px-4">
      <div className="grid grid-cols-2 md:flex md:flex-row md:gap-16 gap-10 text-white text-center">

        {/* Members Active */}
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#00eaff]" />
          <p className="text-xl sm:text-3xl font-semibold mt-2">250+</p>
          <p className="text-xs sm:text-sm opacity-80">Members Active</p>
        </div>

        {/* Projects Built */}
        <div className="flex flex-col items-center">
          <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-[#00eaff]" />
          <p className="text-xl sm:text-3xl font-semibold mt-2">40+</p>
          <p className="text-xs sm:text-sm opacity-80">Projects Built</p>
        </div>

        {/* Events Completed */}
        <div className="flex flex-col items-center">
          <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-[#00eaff]" />
          <p className="text-xl sm:text-3xl font-semibold mt-2">12</p>
          <p className="text-xs sm:text-sm opacity-80">Events Completed</p>
        </div>

        {/* Hackathons Won */}
        <div className="flex flex-col items-center">
          <GitFork className="w-8 h-8 sm:w-10 sm:h-10 text-[#00eaff]" />
          <p className="text-xl sm:text-3xl font-semibold mt-2">8</p>
          <p className="text-xs sm:text-sm opacity-80">Hackathons Won</p>
        </div>

      </div>
    </div>
  );
}
