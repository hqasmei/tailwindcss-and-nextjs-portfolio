"use client" // this is a client component
import React from "react"
import Image from "next/image"
import {Link} from "react-scroll/modules"
import {HiArrowDown} from "react-icons/hi"
import SocialMedia from "@/components/SocialMedia";

const HeroSection = () => {
  return (
    <section id="home">
      <div
        className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Joana 🐞</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-secondary-light dark:text-secondary-dark">
              <span className={'line-through'}>software</span> product engineer{" "}
            </span>
            based in Portugal. The will to learn runs through my veins
            just as much as the will to share knowledge.
          </p>
          <SocialMedia/>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce"/>
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
