import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
        name: "project 1",
        description: "project 1",
        image: "/cheeseslice.png",
        github: "https://github.com/",
        link: "https://www.foodincanada.com/features/say-cheese/",
    },
    {
        name: "project 2",
        description: "project 2",
        image: "/cheeseslice.png",
        github: "https://github.com/",
        link: "https://www.foodincanada.com/features/say-cheese/",
    },
    {
        name: "project 3",
        description: "project 3",
        image: "/cheeseslice.png",
        github: "https://github.com/",
        link: "https://www.foodincanada.com/features/say-cheese/",
    }
]

export const ProjectsSection = () => {
    return (
        <section id='projects'>
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-28'>
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className=' mt-8 md:w-1/2'>
                                        <Link href={project.link} target='_blank'>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className=' mt-12 md:w-1/2'>
                                        <h1 className='text-4xl font-bold mb-6 text-red-600'>{project.name}</h1>
                                        <p className='text-xl leading-7 mb-4 '>{project.description}</p>
                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <Link href={project.github} target='_blank'>
                                                <BsGithub
                                                    size={30}
                                                    className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </Link>
                                            <Link href={project.link} target='_blank'>
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
