import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from './SlideUp';

const projects = [
  {
   name: "portfolio-nextjs",
   description: "A sample porfolio using iframer motion,nextjs and more cool stuff!",
   image: "/portfolio-cool.png",
   link: "https://portfolio-nextjs-jrf4.vercel.app/",
   github: "https://github.com/dewedeth/portfolio-nextjs",
  },
  {
    name: "blog-sanity-v3",
    description: "A sample blog using sanity,nextjs and more cool stuff! also, it is blazing FAST!",
    image: "/sanity.png",
    link: "https://sanity-v3-blog-nextjs13-5zwdqwisv-dewedeth.vercel.app/",
    github: "https://github.com/dewedeth/sanity-v3-blog-nextjs13"
   },
   {
    name: "svelkit-ecommerce",
    description: "A sample web shop using svelkit,nextjs and more cool stuff!",
    image: "/svelkit.bmp",
    link: "https://sveltekit-commerce-seven.vercel.app/",
    github: "https://github.com/dewedeth/sveltekit-commerce",
   },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className='text-center font-bold text-4xl'>Projects
      <hr className='w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded'></hr>
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
              <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                <div className='mt-8 md:w-1/2'>
                  <Link href={project.link} target="_blank">
                  <Image 
                   src={project.image}
                   alt="project"
                   width={1000}
                   height={1000}
                   className="rounded-xl shadow-x1 hover:opacity-70"
                  />
                  </Link>
                </div>
                <div className='mt-8 md:w-1/2'>
                  <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                  <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>{project.description}</p>
                  <div className='flex flex-row align-bottom space-x-4'>
                    <Link href={project.github} target="_blank">
                      <BsGithub 
                       size={30}
                       className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare 
                       size={30}
                       className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
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

export default ProjectsSection