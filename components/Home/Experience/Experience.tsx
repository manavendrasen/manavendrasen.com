import React from "react";
import Image from "next/image";
import { ExperienceInterface } from "../../../constants/experience";

const Experience: React.FC<ExperienceInterface> = ({
  id,
  title,
  logo,
  company,
  location,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-start items-center gap-4">
        <Image
          className="rounded-full"
          alt=""
          src={logo}
          width={84}
          height={84}
        />
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-slate-600 font-normal">
              {company}, {location}
            </p>
          </div>
          <p className="text-slate-500">
            {startDate} - {endDate}
          </p>
        </div>
      </div>
      <div className="text-slate-600">{description}</div>
    </div>
  );
};

export default Experience;
