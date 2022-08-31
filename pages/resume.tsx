import React, { useState } from "react";
import { Head } from "../components/Head/Head";
import { Document, Page } from "react-pdf";
import { Button } from "../views/Default/Button/Button";

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <Head
        title="Resume - Manavendra Sen"
        description="Upcoming SWE'23 @ JPMC | SDE Intern'22 @ Dell | 6x Hackathon Winner (3x International) | Full Stack MERN Developer | Devops | web3"
      />
      <div className="px-4 mx-auto container flex justify-center items-center py-10 w-full h-screen flex-col gap-7">
        <div className="flex justify-between items-center text-white w-full">
          <h2 className="font-semibold text-2xl">Resume</h2>
          <a
            href="http://drive.google.com/uc?export=download&id=1LQPhMi-vqAzCQEOW8u0DXLyPGr_ZoyDt"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Download" onClick={() => {}} />
          </a>
        </div>
        <div className="p-2 rounded-lg bg-gray-300 w-full h-full">
          <iframe
            src="https://drive.google.com/file/d/1LQPhMi-vqAzCQEOW8u0DXLyPGr_ZoyDt/preview"
            width="100%"
            height="100%"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
