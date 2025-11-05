import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function BranchDropdown() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const branches = [
    { value: "cs", label: "Computer Science (CS)" },
    { value: "it", label: "Information Technology (IT)" },
    { value: "extc", label: "Electronics & Telecommunication (EXTC)" },
    { value: "mech", label: "Mechanical (MECH)" },
    { value: "civil", label: "Civil" },
    { value: "aids", label: "AI & Data Science (AIDS)" },
  ];

  return (
    <div className="relative w-full">
      <label className="text-sm text-white">Branch</label>

      {/* 🔹 Dropdown Box with Hover Glow Effect */}
      <div
        className="w-full mt-2 px-4 py-3 rounded-md bg-white/10 text-white flex justify-between items-center cursor-pointer select-none outline-none border border-transparent hover:border-[#40b288] hover:shadow-[0_0_8px_#40b288] transition duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedBranch ? "text-white" : "text-gray-300"}>
          {selectedBranch
            ? branches.find((b) => b.value === selectedBranch)?.label
            : "Select your branch"}
        </span>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* 🔹 Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white/10 backdrop-blur-md rounded-md shadow-lg overflow-hidden animate-fadeIn">
          {branches.map((branch) => (
            <div
              key={branch.value}
              onClick={() => {
                setSelectedBranch(branch.value);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm hover:bg-white/20 cursor-pointer transition-colors"
            >
              {branch.label}
            </div>
          ))}
        </div>
      )}

      {/* 🔹 Animation */}
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
