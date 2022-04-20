import React from "react";

export interface ExperienceInterface {
  id: number;
  title: string;
  logo: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: React.ReactChild;
}

const experience: ExperienceInterface[] = [
  {
    id: 1,
    title: "Full Stack Developer Intern (Remote)",
    logo: "https://user-images.githubusercontent.com/26283488/164260309-6dd1a59e-aa8d-4a41-9f29-a7a97b77ff9e.png",
    company: "416 Marketing Inc",
    location: "Toronto, Canada",
    startDate: "Jan 2022",
    endDate: "March 2022",
    description: (
      <ul className="flex flex-col gap-4">
        <li>
          Involved in project plan meetings and requirement documentation with
          clients, business analysts, and team members to analyze business
          requirements and translated business requirements into the working
          model using Agile methodology.
        </li>
        <li>
          Worked as a part of the development on UI and Frontend as well as Node
          Rest APIs, used PostgreSQL and TypeORM for database services.
        </li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Software Developer Engineer Intern (Remote)",
    logo: "https://user-images.githubusercontent.com/26283488/164258838-3cb0f616-66c2-40a1-b87b-9df983051c53.jpeg",
    company: "Listnr, Inc",
    location: "Middletown, Delaware, USA",
    startDate: "Jul 2021",
    endDate: "Sept 2021",
    description: (
      <ul className="flex flex-col gap-4">
        <li>
          Implementing user-facing features for a global audience that allows
          users to import their podcasts from services like Spotify to Listnr
          and create custom web pages for their podcasts.
        </li>
        <li>
          Coordinated with other developers to set up Sentry and configured
          different environments for testing, production etc, which helped the
          team to identify and resolve bugs 70% faster.
        </li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Full Stack Web Development Intern (Remote)",
    logo: "https://user-images.githubusercontent.com/26283488/164261907-efd648f1-2f6e-47a3-b8e4-e47194a016ce.png",
    company: "DESIGN IN SITU",
    location: "Kadıköy, İstanbul, Turkey",
    startDate: "June 2021",
    endDate: "Aug 2021",
    description: (
      <ul className="flex flex-col gap-4">
        <li>
          Collaborated with international clients and helped the team in
          translating business and customer interests into software solutions.
        </li>
        <li>
          Responsible for development of music generation applications using
          React.js, Tone.js, and Firebase, accessed by 1000+ users worldwide.
        </li>
      </ul>
    ),
  },
];

export default experience;
