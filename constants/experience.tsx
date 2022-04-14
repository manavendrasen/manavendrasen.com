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
    title: "Software Engineering Intern",
    logo: "https://via.placeholder.com/200",
    company: "Google",
    location: "Mountain View, CA",
    startDate: "May 2019",
    endDate: "Aug 2019",
    description: (
      <ul>
        <li>
          Ad sint commodo eiusmod pariatur eiusmod nulla ullamco irure duis
          dolor qui quis duis.
        </li>
        <li>Tempor nostrud enim cupidatat veniam nulla et.</li>
      </ul>
    ),
  },
  {
    id: 2,
    title: "Software Engineering Intern",
    logo: "https://via.placeholder.com/200",
    company: "Google",
    location: "Mountain View, CA",
    startDate: "May 2019",
    endDate: "Aug 2019",
    description: (
      <ul>
        <li>
          Ad sint commodo eiusmod pariatur eiusmod nulla ullamco irure duis
          dolor qui quis duis.
        </li>
        <li>Tempor nostrud enim cupidatat veniam nulla et.</li>
      </ul>
    ),
  },
  {
    id: 3,
    title: "Software Engineering Intern",
    logo: "https://via.placeholder.com/200",
    company: "Google",
    location: "Mountain View, CA",
    startDate: "May 2019",
    endDate: "Aug 2019",
    description: (
      <ul>
        <li>
          Ad sint commodo eiusmod pariatur eiusmod nulla ullamco irure duis
          dolor qui quis duis.
        </li>
        <li>Tempor nostrud enim cupidatat veniam nulla et.</li>
      </ul>
    ),
  },
  {
    id: 4,
    title: "Software Engineering Intern",
    logo: "https://via.placeholder.com/200",
    company: "Google",
    location: "Mountain View, CA",
    startDate: "May 2019",
    endDate: "Aug 2019",
    description: (
      <ul>
        <li>
          Ad sint commodo eiusmod pariatur eiusmod nulla ullamco irure duis
          dolor qui quis duis.
        </li>
        <li>Tempor nostrud enim cupidatat veniam nulla et.</li>
      </ul>
    ),
  },
];

export default experience;
