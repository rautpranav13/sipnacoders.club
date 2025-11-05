import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SemesterAndMobile() {
  const [selectedSem, setSelectedSem] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState("");

  const semesters = [
    { value: "1", label: "Semester 1" },
    { value: "2", label: "Semester 2" },
    { value: "3", label: "Semester 3" },
    { value: "4", label: "Semester 4" },
    { value: "5", label: "Semester 5" },
    { value: "6", label: "Semester 6" },
    { value: "7", label: "Semester 7" },
    { value: "8", label: "Semester 8" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      {/* Semester Dropdown */}
      <div className="relative w-full sm:w-1/2">
        <label className="text-sm text-white">Semester</label>
        <div
          className="w-full mt-2 px-4 py-3 rounded-md bg-white/10 text-white flex justify-between items-center cursor-pointer select-none outline-none focus:bg-white/20 border border-transparent hover:border-[#40b288] hover:shadow-[0_0_8px_#40b288] transition duration-300
"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={selectedSem ? "text-white" : "text-gray-300"}>
            {selectedSem
              ? semesters.find((s) => s.value === selectedSem)?.label
              : "Select your semester"}
          </span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Dropdown options */}
        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white/10 backdrop-blur-md rounded-md shadow-lg overflow-hidden animate-fadeIn">
            {semesters.map((sem) => (
              <div
                key={sem.value}
                onClick={() => {
                  setSelectedSem(sem.value);
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-sm hover:bg-white/20 cursor-pointer transition-colors"
              >
                {sem.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Number Input */}
      <div className="w-full sm:w-1/2">
        <label className="text-sm text-white">Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full mt-2 px-4 py-3 rounded-md bg-white/10 focus:bg-white/20 text-white placeholder-gray-300 outline-none border border-transparent hover:border-[#40b288] hover:shadow-[0_0_8px_#40b288] transition duration-300
"
          maxLength={10}
        />
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
