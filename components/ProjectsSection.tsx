import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"




const projects = [
  {
    name: "Cloud Resume Challenge [Ongoing]",
    description:
      "The Cloud Resume Challenge is a multiple-step resume project which helps build and demonstrate skills fundamental to pursuing a career as an AWS Cloud Engineer. The project was first published by Forrest Brazeal. I will be using AWS services to build this project.",
    image: "/crcgif.gif",
    github: "https://github.com/khuenlau",
    link: "/maintenance",
  },
  {
    name: "Serverless Web Application On AWS [S3, Lambda, SQS, DynamoDB, and API Gateway]",
    description: "An AWS hands-on-lab project that uses AWS services such as [S3, Lambda, SQS, DynamoDB, and API Gateway] to build a serverless web application.",
    image: "/serverlesswebapp.gif",
    github: "https://github.com/khuenlau",
    link: "/maintenance",
  },
  {
    name: "Bootstrapping an Amazon EC2 Instance Using User-data to Run a Python Web App",
    description:
      "•	Deployed a Python web application to an EC2 instance running Nginx and uWSGI, using a CI/CD Pipeline created with Amazon CDK.",
    image: "/pythonwebapp.png",
    github: "https://github.com/khuenlau/sample-python-web-app",
    link: "/maintenance",
  },

  {
    name: "Build a dev environment using AWS and Terraform",
    description:
      "•	Using VS Code and applying Terraform basics to deploy AWS resources (VPC, IGW, route table, security groups) and an EC2 instance that can SSH into to have an own redeployable environment.",
    image: "/terraformaws.png",
    github: "https://github.com/khuenlau",
    link: "/maintenance",
  },

  {
    name: "Coming soon",
    description:
      "Coming soon",
    image: "/comingsoon.png",
    github: "https://github.com/khuenlau",
    link: "/maintenance",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
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
                    <h1 className="text-2xl font-bold mb-6">{project.name}</h1>
                    <p className="italic text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
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
