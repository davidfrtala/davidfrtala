import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";

import { TimelineCard } from "./Timeline/TimelineCard";
import { LineWithDot } from "./Timeline/LineWithDot";

const milestones = [
  {
    title: "Sr. Software Engineer",
    company: "Valutico",
    bullets: [
      "Leading frontend development. Writing scalable and maintainable code to ensure long-term product stability",
      "Teamed up with PMs, Designers and CEO on defining new features, focusing on removing customer pain points and optimizing the product for better user experience",
      "Empowering and mentoring fellow engineers, fostering a collaborative environment for ideation and problem-solving",
    ],
    description: "",
    date: "2021 - Present",
    location: "Vienna, Austria (Remote)",
    keywords: [
      "React",
      "TypeScript",
      "Nx Monorepo",
      "Module Federation",
      "Node.js",
      "GraphQL",
      "SOA",
      "Cypress",
      "Playwright",
      "Jest",
      "Docker",
      "CI/CD",
      "Figma",
      "Github",
      "Linear",
    ],
  },
  {
    title: "Sr. Lead Software Engineer",
    company: "NaytroLabs",
    bullets: [
      "Developed and led the implementation of a scalable notifications system using Node.js, Kafka, Redis, GraphQL, and Docker",
      "Planned backend development, selected optimal technologies, and distributed workload among team members to ensure project success",
      "Delivered a stable, tested, fault-tolerant, and cloud-native application with zero faults at launch",
      "Played a key role in technology selection and project execution, driving high-impact solutions",
    ],
    description: "",
    date: "2020 - 2021",
    location: "Bratislava, Slovakia",
    keywords: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "Kafka",
      "Redis",
      "Jest",
      "Docker",
      "CI/CD",
      "Gitlab",
      "JIRA",
    ],
  },
  {
    title: "CTO & Co-Founder",
    company: "Jarvify",
    bullets: [
      "Architected and developed chatbot communication products using Node.js  and React",
      "Implemented CI/CD pipelines",
      "Managed and mentored a team of developers, fostering a collaborative and high-performing work environment",
      "Demonstrated autonomy in decision-making and strategic planning, driving the company's technical vision and product roadmap",
    ],
    description: "",
    date: "2018-2021",
    location: "Limassol, Cyprus (Remote)",
    keywords: [
      "React",
      "VueJS",
      "TypeScript",
      "Node.js",
      "MoleculerJS",
      "Prisma",
      "REST API",
      "GraphQL",
      "Websockets",
      "Microservices",
      "MongoDB",
      "PostgreSQL",
      "Jest",
      "Docker",
      "CI/CD",
      "Gitlab",
      "JIRA",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Mon Style",
    bullets: [
      "Collaborated with a team of engineers, data scientists, and product developers to create a fashion-forward web application",
      "Transformed innovative ideas into functional JavaScript frontends using React and Redux",
      "Proposed and implemented improvements to enhance user experience and application performance",
    ],
    description: "",
    date: "2017-2018",
    location: "Vienna, Austria (Remote)",
    keywords: ["React", "Redux", "JavaScript", "REST API", "Jest", "Gitlab"],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Freelance, Self-employed",
    bullets: [
      "Developed scalable systems, mobile and web applications using Node.js, React, GraphQL, Redux, Relay, and React Native",
      "Utilized PostgreSQL, MongoDB, AWS, and Docker to support robust and efficient backend solutions",
      "Managed projects through their entire lifecycle, from analysis and planning to execution and delivery, using Agile and Lean methodologies",
      "Led project management and technology implementation, ensuring timely and successful project delivery",
    ],
    description:
      "My solopreneur experience. Delivering solutions to my customers",
    date: "2016-2018",
    location: "Bratislava, Slovakia",
    keywords: [
      "React",
      "Redux",
      "JavaScript",
      "Node.js",
      "REST API",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Jest",
      "Gitlab",
    ],
  },
  {
    title: "Full-Stack Software Engineer",
    company: "Direct Parcel Distribution SK",
    bullets: [
      "Development and maintainence of intranet applications",
      "Database performance optimizations. Optimised SQL reports to run 60% faster",
      "Launched fully rebranded & responsive customer portal",
    ],
    description: "",
    date: "2014-2015",
    location: "Bratislava, Slovakia",
    keywords: [
      "PHP",
      "Nette Framework",
      "PostgreSQL",
      "Microsoft SQL Server",
      "JavaScript",
      "AngularJS",
      "Composer",
      "CouchDB",
      "Subversion",
      "JIRA",
    ],
  },
  {
    title: "CTO & Co-Founder",
    company: "N & LD Media",
    bullets: ["Development of intranet applications for our clients"],
    description:
      "My first entreprenour experience. Co-founded with my schoolmate during our college times",
    date: "2012-2015",
    location: "Bratislava, Slovakia",
    keywords: [
      "PHP",
      "Nette Framework",
      "PropelORM",
      "Doctrine",
      "Composer",
      "PostgreSQL",
      "JavaScript",
    ],
  },
];

export const Timeline = () => {
  return (
    <Stack spacing="4">
      {milestones.map((milestone, index) => (
        <Flex key={index} mb="10px">
          {/* <LineWithDot
            order={
              index === 0
                ? "first"
                : index === milestones.length - 1
                ? "last"
                : undefined
            }
          /> */}
          <TimelineCard {...milestone} />
        </Flex>
      ))}
    </Stack>
  );
};
