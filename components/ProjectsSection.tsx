import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from './slideUp'

const projects = [
  {
    name: "Online Therapist",
    description: "It was a group project we were 5 members and we had used React.js and Tailwind.css and Redux Toolkit, and also we used firebase to host our project",
    image: "/12345.png",
    githup: "https://github.com/Recoded-Spark-Turkey-2022/RE-Minded",
    link: "https://main--jocular-kitsune-979dd9.netlify.app/",
  },
  {
    name: "Hangman",
    description: "It's a vanilla Java script project but in our tame way normally it should be different but we chased the funny way",
    image: "/123456.png",
    githup: "https://github.com/AmmarEldik/hangman-suicide-squad",
    link: "https://hangman-suicide-squad.vercel.app/",
  },
  {
    name: "Mad libs ",
    description: "Vanilla Javascript ,CSS and HTML project",
    image: "/1234567.png",
    githup: "https://github.com/AmmarEldik/mad-libs-the-wicked-kittens",
    link: "https://mad-libs-the-wicked-kittens-khaki.vercel.app/",
  },
]

function ProjectsSection() {
  return (
    <section id='projects'>
      <h1 className='text-center font-bold text-4xl'>
        Projects
        <hr className=' w-24 h-1 mx-auto bg-teal-500 border-0 rounded' />
      </h1>

      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col animate-slideUpCubezier animate-delay-2 md:flex-row md:space-x-12'>
                  <div className='mt-10 md:w-1/2'>
                    <Link href={project.link} target="_blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className=' mt-14 md:w-1/2'>
                    <h1 className='text-4xl font-bold md-6'>{project.name}</h1>
                    <p className='text-2xl leading-7 text-neutral-600 dark:text-neutral-400 '>{project.description}</p>
                    <div className='flex flex-row align-bottom space-x-4 mt-2'>
                      <Link href={project.githup} target="_blank">
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