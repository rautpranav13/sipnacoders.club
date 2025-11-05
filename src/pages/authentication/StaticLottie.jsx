import React, { memo } from "react";
import codeDark1 from "../../assets/codeDark1.lottie";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function StaticLottie(){
    return(
        
         <DotLottieReact src={codeDark1} loop autoplay />
    );
}