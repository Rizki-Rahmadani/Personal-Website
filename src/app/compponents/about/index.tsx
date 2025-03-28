"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";

const AboutMe = () => {
  return (
    <div id="about" className="container-full flex p-20">
      <div className="w-1/2 flex justify-center">
        <Image
          src="/assets/about-me.jpeg"
          width={500}
          height={350}
          alt="Rizki Rahmadani"
          className="rounded-md"
        />
      </div>
      <div className="w-1/2 py-20 space-y-5 pr-50">
        <h1 className="text-6xl font-bold">About Me</h1>
        <p className="text-justify">
          Hi! I'm a passionate software developer with expertise in building
          modern web applications. I specialize in React, TypeScript, and
          creating beautiful user interfaces that deliver exceptional user
          experiences. I am also experienced in backend development with Node.js
          and FastAPI, ensuring seamless integration between frontend and
          backend for robust and scalable applications.
        </p>
        <div className="space-y-5">
          <div className="flex gap-5">
            <div className="bg-amber-50 opacity-90 w-12 h-12 flex justify-center items-center rounded-md">
              <MdMailOutline className="text-amber-600 w-7 h-7" />
            </div>
            <div>
              <h1 className="text-gray-300">Email</h1>
              <p>rzkrhmdn7@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="bg-amber-50 opacity-90 w-12 h-12 flex justify-center items-center rounded-md">
              <IoLocationOutline className="text-amber-600 w-7 h-7" />
            </div>
            <div>
              <h1 className="text-gray-300">Location</h1>
              <p>Tangerang, Indonesia</p>
            </div>
          </div>
          <div className="space-y-5">
            <p>FIND ME ON :</p>
            <div className="flex gap-5">
              <div className=" hover:-translate-y-1">
                <a
                  href="https://www.linkedin.com/in/Rizki-Rahmadani-/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={"50px"} className="text-amber-50" />
                </a>
              </div>
              <div className="hover:-translate-y-1">
                <a
                  href="https://www.instagram.com/____rizki._"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={"50px"} className="text-amber-50" />
                </a>
              </div>
              <div className="hover:-translate-y-1">
                <a
                  href="https://github.com/Rizki-Rahmadani"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaSquareGithub size={"50px"} className="text-amber-50"  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
