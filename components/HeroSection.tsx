"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-3 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/myHeadshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m Jamal!
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-gray-500">
              Software Engineer{" "}
            </span>
            based in Dallas, TX. Working towards creating software that makes
            life easier and more meaningful for everyone.
          </p>
          <div className=" flex flex-wrap flex-row justify-center z-10 md:justify-start px">
          <a
              href="https://www.linkedin.com/in/jamal-shoubaki/"
              rel="noreferrer"
              target="_blank"
            >
              <AiOutlineLinkedin
                color="white"
                className="mr-2 mt-2 hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100 bg-gray-500 rounded shadow"
                size={50}
              />
            </a>
            <Link
              to="projects"
              className="mr-2 mt-2 text-neutral-100 font-semibold px-6 py-3 bg-gray-500 rounded shadow hover:bg-gray-600 cursor-pointer"
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
      <div className="cursor-pointer flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
