"use client"
import React from 'react';
import Image from "next/image";
import { Link } from 'react-scroll/modules';
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
            <div className='md:w-l/2 md:mt-2'>
                <Image className='rounded-full shadow-2xl' src="/headshot.jpg" alt="pic" width={300} height={300}/>
            </div>
            <div className='md:mt-2 md:w-3/5'>
                <h1 className='font-semibold text-4xl mt-6 md:text-7xl md:mt-0'>Hi, I&#39;m Yousef!</h1>
                <p className='text-lg mt-4 mb-6 md:text-2xl'>
                    I&#39;m a{""} <span className="font-semibold text-purple-600">Freelance Curator</span> {""}
                    from Philippines, currently living in Jacksonville, FL. self-thought baby developer,creator and designer.
                </p>
                <p className='text-lg mt-4 mb-6 font-extralight first-line:uppercase first-line:tracking-widest'>
                Find something you love to do and do it for the rest of your life  <span className='underline decoration-[#AB0AF7]/50'>
                as long as you dont hurt
                </span> anyone and yourself.
                </p>
                <Link
                 to="projects"
                 className="text-neutral-100 font-semibold px-6 py-3 bg-purple-600 rounded shadow hover:bg-purple-900"
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

        <div className='flex flex-row justify-center'>
            <Link
             to="about"
             activeClass="active"
             spy={true}
             smooth={true}
             offset={-100}
             duration={500}
            >
                <HiArrowDown className='animate-bounce' size={35}/>
            </Link>
        </div>
    </section>
  )
}

export default HeroSection