import React from "react";
import InfiniteMenu from "../blocks/Components/InfiniteMenu/InfiniteMenu";

export default function HomSec3() {
  return (
    <div className="w-full h-full">
      {/* Laptop version */}
      <div className="w-full h-full hidden sm:block">
        <InfiniteMenu />
      </div>

      {/* Mobile version */}
      <div className="w-full block sm:hidden">
        <div className="w-full h-[100vh] overflow-visible relative">
          <div className="absolute inset-0">
            <InfiniteMenu style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
