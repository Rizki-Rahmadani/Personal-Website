"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import React, { useState } from "react";

const PortfolioPage = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const projects = [
    {
      id: 1,
      title: "Circle App",
      image: "../../../assets/portofolio/circle-app.jpg",
      description:
        "A project that showcases the use of React and Tailwind CSS for building a responsive UI.",
      link: "https://circle-app-frontend.vercel.app/",
    },
    {
      id: 2,
      title: "Lakoe App",
      image: "../../../assets/portofolio/lakoe-app.jpg",
      description:
        "A project that showcases the use of React and Tailwind CSS for building a responsive UI.",
      link: "https://lakoe-app-three.vercel.app/login",
    },
  ];

  return (
    <div id="projects" className="portfolio-container">
      <h1 className="text-4xl font-bold text-center">MY PROJECTS</h1>
      <div className="flex flex-wrap justify-center gap-10 p-10">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden p-10 flex justify-center "
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "350px",
              height: "300px",
            }}
            onMouseEnter={() => setIsHovered(project.id)}
            onMouseLeave={() => setIsHovered(null)}
          >
            <div
              className={`flex flex-col items-center ${
                isHovered === project.id
                  ? "bg-amber-600 opacity-90 rounded-lg"
                  : ""
              }`}
            >
              <div
                className={`p-5 px-10 rounded-lg transition-opacity duration-300 transform ${
                  isHovered === project.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <h3 className="mb-2 text-center text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-justify">{project.description}</p>
                <div className="mt-5">
                  <Link
                    href={project.link}
                    className="bg-[#1a1a1a] text-white hover:bg-white hover:text-[#1a1a1a] p-2 rounded-lg"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
