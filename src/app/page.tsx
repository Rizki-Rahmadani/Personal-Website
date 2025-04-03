"use client";

import Image from "next/image";
import Navbar from "./compponents/navbar";
import PortfolioPage from "./compponents/projects";
import {
  FaInstagram,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaSquareGithub,
} from "react-icons/fa6";
import { useEffect, useState } from "react";
import AboutMe from "./compponents/about";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";
import { SiExpress, SiPostgresql } from "react-icons/si";
import { RiTailwindCssLine } from "react-icons/ri";
import techStackData from "@/lib/data/techStack.json";
import Map from "./compponents/maps";
import ContactForm from "./compponents/contact";

export default function Home() {
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const roles = ["Full Stack", "Frontend", "Backend"];
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 5000);

    return () => clearInterval(roleTimer);
  });

  const iconComponents = {
    FaReact,
    FaNodeJs,
    TbBrandTypescript,
    SiExpress,
    SiPostgresql,
    RiTailwindCssLine,
    TbBrandNextjs,
  };

  const handleHireMe = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      window.location.href =
        "mailto:rzkrhmdn7@gmail.com?subject=Hiring%20Inquiry%20for%20Rizki%20Rahmadani%20-%20Full%20Stack%20Developer&body=Hi%20Rizki%20Rahmadani,%0D%0A%0D%0AI%27m%20interested%20in%20working%20with%20you.%20Let%27s%20discuss%20the%20details!";
    }, 1500);
  };

  return (
    <div>
      <Navbar />
      <div
        id=""
        className="container-full h-screen flex flex-col lg:flex-row justify-center items-center px-5 md:px-20"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-between text-justify md:text-start sm:text-start gap-5">
          <div className="space-y-3">
            <p className="text-xl md:text-2xl">Welcome to my world</p>
            <div className="space-y-1 font-bold">
              <h1 className="text-3xl md:text-6xl">Hi, I'm Rizki Rahmadani</h1>
              <h1 className="text-3xl md:text-6xl ">
                a{" "}
                <span className="text-amber-600 ">
                  <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-amber-600">
                    <span className="relative text-white">
                      {roles[roleIndex]}
                    </span>
                  </span>
                  Developer
                </span>
              </h1>
            </div>
            <div className="pt-2">
              <p>
                Developing skills in building modern web applications,
                integrating frontend and backend, and mastering Full Stack
                Development concepts. Focusing on real-world projects to build a
                portfolio and be prepared for challenges in the tech industry.
              </p>
            </div>
            <div className="py-5 gap-5 flex flex-col md:flex-row">
              {/* <div>
                <a
                  href="#"
                  onClick={handleHireMe}
                  className={`text-xl bg-amber-600 p-2 rounded-lg w-full md:w-auto cursor-pointer hover:bg-white hover:text-amber-600 flex items-center justify-center gap-2 ${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Loading...</span>
                    </>
                  ) : (
                    "Hire Me"
                  )}
                </a>
              </div> */}
              <div>
                <a
                  href="/assets/portofolio/CV_Rizki-Rahmadani.pdf"
                  className="text-xl bg-amber-600 p-2 rounded-lg w-full md:w-auto cursor-pointer hover:bg-white hover:text-amber-600 flex items-center justify-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xl">TECH STACK:</p>
            <div className="flex gap-4">
              {techStackData.techStack.map(
                (stack: { icon: string; color: string }, index: number) => {
                  const IconComponent =
                    iconComponents[stack.icon as keyof typeof iconComponents];
                  return (
                    <div
                      key={index}
                      className="bg-white hover:-translate-y-1 p-0.5 rounded-md"
                    >
                      <IconComponent
                        className={`w-8 h-8 md:w-12 md:h-12 `}
                        style={{ color: stack.color }}
                      />
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-auto m-10 flex justify-center 2xl:justify-end relative">
          <div className="absolute w-90 h-90 2xl:w-140 2xl:h-140 rounded-full bg-amber-600 -z-10 bottom-1 2xl:-right-1"></div>
          {/* <div className="absolute w-100 h-100 md:w-70 md:h-70 rounded-full bg-amber-600 -z-10 top-1 left-50"></div> */}
          <Image
            src="/assets/PP.png"
            width={550}
            height={350}
            alt="Rizki Rahmadani"
            className="object-cover rounded-full"
          />
        </div>
      </div>
      <div className="">
        <PortfolioPage />
      </div>
      <div>
        <AboutMe />
      </div>
      <div className="w-full mt-10 md:mt-0 px-4 sm:px-6 md:px-25 lg:px-20 xl:px-65 space-y-5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          CONTACT ME
        </h1>
        <div className="border-1 flex flex-col lg:flex-row justify-between p-3 md:p-5 rounded-xl gap-5">
          <div className="w-full lg:w-[50%] xl:w-[30%]">
            <ContactForm />
          </div>
          <div className="w-full lg:w-[50%] xl:w-[70%] h-[300px] lg:h-auto">
            <Map />
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className=" border-t-1 py-5 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">
            © {new Date().getFullYear()} Rizki Rahmadani. All rights reserved.
          </p>
          <p className="text-white">Powered by Next.Js</p>
        </div>
      </footer>
    </div>
  );
}
