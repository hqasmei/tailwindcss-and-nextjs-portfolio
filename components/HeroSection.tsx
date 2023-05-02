"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import ResumeDownloadButton from 'ResumeDownloadButton.js'
import '../styles/typing-effect.css'

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/hero.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 text-left">
  <h1 className="text-4xl font-cursive font-bold mt-4 md:mt-0 md:text-4xl typing-effect">Hi, I&#39;m Tony!</h1>
  <p className="italic text-lg mt-4 mb-6 md:text-2xl">
    I&#39;m a{" "}
    <span className="font-semibold text-teal-600">
      fresh graduate from UTAR{" "}
    </span>
    based in Perak, Malaysia. I love cloud computing and I am looking to explore more in this field.
  </p>
  <Link
    to="projects"
    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
    activeClass="active"
    spy={true}
    smooth={true}
    offset={-100}
    duration={500}
  >
    Projects 
  </Link>
  <a
    href="/path/to/resume.pdf"
    download
    className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 ml-4"
  >
    Download CV
  </a>
  <p className="italic text-lg mt-4 mb-6 md:text-2xl">
            <br/>
            Contact me @
            <br />
            Phone: +(60)162763389
            <br />
            Email: lauskhuen3389@gmail.com
          </p>
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
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
