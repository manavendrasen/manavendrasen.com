import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../../../assets/lottie/coming_soon.json";

interface ComingSoonProps {}

export const ComingSoon: React.FC<ComingSoonProps> = ({}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen flex justify-center items-center text-white flex-col gap-2 ">
      <Lottie options={defaultOptions} height={400} width={400} />
      <h3 className="text-xl text-white text-center">✨ Coming Soon ✨</h3>
    </div>
  );
};
