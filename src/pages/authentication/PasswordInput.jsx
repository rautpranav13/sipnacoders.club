import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <label className="text-sm">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        className="w-full mt-2 px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none border border-transparent hover:border-[#40b288] focus:border-[#40b288] hover:shadow-[0_0_8px_#40b288] focus:shadow-[0_0_8px_#40b288] transition duration-300"
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-9 text-gray-300 cursor-pointer"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </span>
    </div>
  );
};

export default PasswordInput;
