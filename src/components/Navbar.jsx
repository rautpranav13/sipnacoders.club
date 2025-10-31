import React from "react";
import PillNav from "../blocks/Components/PillNav/PillNav.jsx";
import logo from "../assets/react.svg"; // <-- make sure to place your logo here

export default function Navbar({ active }) {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Contact", href: "/contact" }
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <PillNav
        logo={logo}
        logoAlt="Sipna Coders Club Logo"
        items={navItems}
        activeHref={active || "/"}
        className="px-6 py-2"
        ease="power2.easeOut"
        baseColor="#000"           // Dark background for the nav bar
        pillColor="#fff"           // Highlight pill color
        hoveredPillTextColor="#fff"
        pillTextColor="#000"
      />
    </div>
  );
}
