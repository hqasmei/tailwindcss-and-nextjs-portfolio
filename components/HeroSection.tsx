"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from "react-icons/hi"
const HeroSection = () => {
    return (
        <section id="home">
            <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
                <div className='md:w-1/2 md:mt-2'>
                    <Image className="rounded-full shadow-2xl" src="/HeadShot.png" alt="" width={300} height={300} />
                </div>
                <div className='md:mt-2 md:w-3/5'>
                    <h1 className='font-semibold text-4xl mt-6 md:text-7xl md:mt-0'>
                        Hey, I&#39;m Rehan.
                    </h1>
                    <p className='text-lg mt-4 mb-6 md:text-2xl'>
                        I&#39;m a{" "}
                        <span className="font-semibold text-red-600">
                            1st year Computer Engineering student{" "}
                        </span>
                        attending the Univeristy of Guelph.
                        I&#39;m eager to learn how technology can enhance our daily lives.
                    </p>
                    <div className='flex flex-row justify-center'>
                    <Link
                        to="projects"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-red-600 rounded shadow hover:bg-red-700"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        Projects
                    </Link>
                    <div className='mx-2'></div>
                    <a href="https://www.linkedin.com/in/rehan-siddiqi-61301b219/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-100 font-semibold px-6 py-3 bg-red-600 rounded shadow hover:bg-red-700">
                        Learn More
                    </a>
                    </div>
                </div>
            </div>
            <div className='flex flew-row justify-center'>
                <Link
                    to="about"
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}>
                    <HiArrowDown size={35} className="animate-bounce" />
                </Link>
            </div>
        </section>
    )
}

export default HeroSection