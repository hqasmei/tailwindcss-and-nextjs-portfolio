import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
    {
    name: "Kissa Cafe",
    description:
      "This is a cafe landing page created with HTML and CSS.",
    image: "/kisaa.png",
    github: "https://github.com/nbvrivnf/kissa__cafe",
    link: "https://nbvrivnf.github.io/kissa__cafe/",
  },
  {
    name: "Fronted-Mentor-Challange",
    description: "This is the solution I completed for a challenge on the website Frontend Mentor.",
    image: "/fronted-end.png",
    github: "https://vercel.com/nbvrivnf/fronted-mentor-challenge",
    link: "https://fronted-mentor-challenge-pink.vercel.app/",
  },
  {
    name: "React Website",
    description:
      "This site is the first website I created using React.",
    image: "/grow-data.png",
    github: "https://github.com/nbvrivnf/Project_React2",
    link: "https://nbvrivnf.github.io/Project_React2/",
  },
  {
    name: "Profile ",
    description:
      "My first React portfolio site showcases my creativity, skills, and projects. It's beautifully designed, user-friendly, and responsive. Explore my achievements and get to know me better.",
    image: "/react-portfolio.png",
    github: "https://github.com/nbvrivnf/Personal-Portfolio",
    link: "https://personal-portfolio-green-sigma.vercel.app/",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
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
