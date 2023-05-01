"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from "react-icons/hi"
import { AiOutlineGithub, AiOutlineLinkedin, AiFillMail, AiOutlineProfile } from "react-icons/ai"


function HeroSection() {
    return (
        <section id='home'>
            <div className='flex flex-col text-center items-center justify-center my-10 py-28 
            sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-36'>
                <div className='md:w-1/2 sm:w-1/4 md:mt-2'>
                    <Image className=' rounded-full shadow-2xl' src="/profilphoto.png" alt="" width={300} height={100} />
                </div>
                <div className='md:mt-2 md:w-3/5'>
                    <h1 className=' font-bold text-4xl mt-6 md:text-6xl md:mt:0'>Hi, I&#39;m Ammar!</h1>
                    <p className='text-lg mt-4 mb-6 md:text-xl'>
                        And I&#39;m A{" "}
                        <span className=' font-semibold text-teal-600'>Front-End Web Developer {" "}
                        </span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi vitae doloremque necessitatibus,
                        vero magni blanditiis consequatur dolore ducimus expedita id atque obcaecati quasi rerum pariatur eveniet!
                    </p>
                    <div className=' flex flex-row items-center justify-center space-x-9 mb-1'>
                        <a
                            href="https://www.canva.com/design/DAFU2uXg_ZU/iKWfnXY3TOxAJGjXdNVl-w/edit?utm_content=DAFU2uXg_ZU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <AiOutlineProfile
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={50}
                            />
                        </a>
                        <Link
                            to="contact"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}

                        >
                            <AiFillMail
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={50}
                            />
                        </Link>
                        <a
                            href="https://github.com/AmmarEldik"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <AiOutlineGithub
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={50}
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ammar-eldik-0a9304250/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <AiOutlineLinkedin
                                className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                size={50}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center mt-14 '>
                <Link
                    to="abuot"
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                >
                    <HiArrowDown size={35} className='animate-bounce' />
                </Link>
            </div>
        </section>
    )
}

export default HeroSection