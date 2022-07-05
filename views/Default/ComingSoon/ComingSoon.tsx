import React from "react";

interface ComingSoonProps {}

export const ComingSoon: React.FC<ComingSoonProps> = ({}) => {
  return (
    <div className="h-screen flex justify-center items-center text-white flex-col gap-4 ">
      <h3 className="text-xl font-semibold text-slate-300">
        Work in Progress...
      </h3>
    </div>
  );
};
