"use client";

import Image from "next/image";
import Navbar from "./compponents/navbar";
import PortfolioPage from "./compponents/projects";
import { FaInstagram, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { useEffect, useState } from "react";

export default function Home() {
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const roles = ["Full Stack", "Frontend", "Backend"];

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 5000)

    return () => clearInterval(roleTimer)
  })

  return (
    <div>
      <Navbar />
      <div id="" className="container-full h-screen flex flex-col md:flex-row justify-center items-center px-5 md:px-20">
        <div className="w-full md:w-1/2 flex flex-col justify-between text-justify md:text-start sm:text-start gap-5">
          <div className="space-y-3">
            <p className="text-2xl">Welcome to my world</p>
            <div className="space-y-1 font-bold">
              <h1 className="text-4xl md:text-6xl">Hi, I'm Rizki Rahmadani</h1>
              <h1 className="text-4xl md:text-6xl ">
                a{" "}
                <span className="text-amber-600 ">
                  <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-amber-600">
                    <span className="relative text-white">{roles[roleIndex]}</span>
                  </span>
                  Developer
                </span>
              </h1>
            </div>
            <div className="pt-2">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consequuntur eveniet aut hic suscipit recusandae tempore
                necessitatibus doloremque debitis mollitia, neque cum temporibus
                animi illum, libero repudiandae, consectetur quo amet laborum.
              </p>
            </div>
            <div className="gap-5 flex flex-col md:flex-row">
              <div>
                <button className="bg-amber-600 p-2 rounded-lg w-full md:w-auto">
                  Hire Me
                </button>
              </div>
              <div>
                <button className="bg-amber-600 p-2 rounded-lg w-full md:w-auto">
                  Download Resume
                </button>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <p>FIND ME ON :</p>
            <div className="flex gap-5">
              <div className="rounded-full hover:-translate-y-1">
                <a
                  href="https://www.linkedin.com/in/Rizki-Rahmadani-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={'50px'} />
                </a>
              </div>
              <div className="rounded-full hover:-translate-y-1">
                <a
                  href="https://www.instagram.com/____rizki._"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={'50px'} />
                </a>
              </div>
              <div className="rounded-full hover:-translate-y-1">
                <a
                  href="https://github.com/Rizki-Rahmadani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub size={'50px'} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-auto flex justify-center md:justify-end relative">
          <div className="absolute w-100 h-100 md:w-140 md:h-140 rounded-full bg-amber-600 -z-10 bottom-1 -right-1"></div>
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
      <PortfolioPage/>
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
