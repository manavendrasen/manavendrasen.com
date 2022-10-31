import React, { useState } from "react";
import { Head } from "../components/Head/Head";
import { Document, Page } from "react-pdf";
import { Button } from "../views/Default/Button/Button";
import Link from "next/link";

const Resume = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <>
      <Head
        title="Resume - Manavendra Sen"
        description="Upcoming SWE'23 @ JPMC | SDE Intern'22 @ Dell | 6x Hackathon Winner (3x International) | Full Stack MERN Developer | Devops | web3"
      />
      <div className="px-4 mx-auto container flex justify-center py-10 w-full h-screen flex-col gap-3">
        <div className="flex justify-between items-center text-white w-full">
          <h2 className="font-semibold text-2xl">
            <Link href="/">
              <p className="opacity-50 bg-brightness-200 cursor-pointer inline-block mr-1">
                Manavendra Sen &gt;
              </p>
            </Link>
            Resume
          </h2>
          <a
            href="https://drive.google.com/file/d/1LQPhMi-vqAzCQEOW8u0DXLyPGr_ZoyDt/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button text="Download" />
          </a>
        </div>
        <p className="text-white text-left">
          If you are unable to view the resume, please
          <a
            className="text-blue-500 underline px-1"
            href="https://drive.google.com/file/d/1LQPhMi-vqAzCQEOW8u0DXLyPGr_ZoyDt/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            download
          </a>
          it.
        </p>
        <div className="p-2 rounded-lg bg-gray-300 w-full h-full mt-5">
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
