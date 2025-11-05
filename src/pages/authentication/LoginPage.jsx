import React from "react";
import { FaGoogle, FaGithub, FaFacebookF, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BranchDropdown from "./BranchDropdown"
import SemesterDropdown from "./SemesterDropdown"
import UserLogin from "./UserLogin";
import { Link } from "react-router-dom";

import StaticLottie from "./StaticLottie"

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f0d] p-4">
      <div className="w-full max-w-6xl bg-transparent flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl">
        {/* Left Panel - Login Form */}
        <div className="md:w-1/2 bg-gradient-to-b from-[#0b1614] to-[#0f1f1c] text-white p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-2">Coders Club</h2>
          <h1 className="text-4xl font-bold mb-3">Welcome back</h1>
          <p className="text-gray-300 mb-8">Fill the given details to Register</p>

          <form className="flex flex-col space-y-5">
             <div>
  <label className="text-sm">Name</label>
  <input
    type="text"
    placeholder="Enter your name"
    className="w-full mt-2 px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none border border-transparent hover:border-[#40b288] focus:border-[#40b288] hover:shadow-[0_0_8px_#40b288] focus:shadow-[0_0_8px_#40b288] transition duration-300"
  />
</div>


            <BranchDropdown/>
            <SemesterDropdown/>

            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                placeholder="student@gmail.com"
                className="w-full mt-2 px-4 py-3 rounded-md bg-white/10 text-white placeholder-gray-300 outline-none border border-transparent hover:border-[#40b288] focus:border-[#40b288] hover:shadow-[0_0_8px_#40b288] focus:shadow-[0_0_8px_#40b288] transition duration-300"
              />
            </div>

            {/* <div>
              <label className="text-sm">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-2 px-4 py-3 rounded-md bg-white/10 focus:bg-white/20 text-white placeholder-gray-300 outline-none"
              />
            </div> */}

            {/* <div className="text-right">
              <a href="#" className="text-sm text-gray-300 hover:text-green-400">
                Forgot Password
              </a>
            </div> */}

            <button
              type="submit"
              className="w-full py-3 bg-green-600 hover:bg-green-500 rounded-md font-medium text-lg transition"
            >
              Register
            </button>

            <div className="flex justify-center space-x-4 pt-2">
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20">
                <FaGoogle />
              </button>
              {/* <button className="p-3 rounded-full bg-white/10 hover:bg-white/20">
                <FaGithub />
              </button>
              <button className="p-3 rounded-full bg-white/10 hover:bg-white/20">
                <FaFacebookF />
              </button> */}
            </div>
          </form>

          <p className="text-center text-sm mt-6 text-gray-400">
            Alredy user LogIn {" "}
            <a href="/UserLogin" className="text-white underline hover:text-green-400">
              here
            </a>
          </p>
        </div>

        {/* Right Panel - Testimonial */}
        
        <div className="md:w-1/2 bg-[#000000] text-white relative p-10 flex flex-col justify-between">
          {/* Decorative shape */}
          <div className="absolute top-0 right-0 w-full h-full rounded-tl-[4rem] bg-[#40b288] -z-10"></div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Your Coding Journey Starts Here.</h2>
                <div className="relative ">
                  <blockquote className="italic text-lg text-white/90">
                    “Access exclusive workshops, coding competitions, and connect with like-minded tech enthusiasts..”
                  </blockquote>
                        
                </div>
          </div>
          
          <StaticLottie />
            

          {/* Bottom Card */}
          <div className="bg-white text-black rounded-2xl p-6  shadow-lg">
            <h3 className="font-bold text-lg mb-2">
              The Coders Club isn’t just a community — it’s your launchpad into the tech world.
            </h3>
            <p className="text-gray-600 text-sm">
              Register to begin your next innovation.
            </p>
            <div className="flex items-center mt-4 space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                alt="user1"
                className="w-8 h-8 rounded-full border"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                alt="user2"
                className="w-8 h-8 rounded-full border -ml-2"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="user3"
                className="w-8 h-8 rounded-full border -ml-2"
              />
              <span className="text-xs text-gray-500 ml-2">+2</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
