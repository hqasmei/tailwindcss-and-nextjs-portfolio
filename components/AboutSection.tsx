import React from "react"
import Image from "next/image"

const skills = [
  { skill: "AWS" },
  { skill: "Bash" },
  { skill: "GitHub" },
  { skill: "GitLab" },
  { skill: "Linux" },
  { skill: "Java" },
  { skill: "Python" },
  { skill: "C++" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Docker" },
  { skill: "Kubernetes" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Tony and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> cloud enthusiasts based in Perak, Malaysia.
            </p>
            <br />
            <p>
              I graduated from Universiti Tunku Abdul Rahman in 2022
              with a BS in Information Systems Engineering and have been working in the
              field ever since.
            </p>
            <br />
            <p>
              
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-orange-200 px-4 py-2 mr-2 mt-2 text-black-500 rounded font-semibold hover:text-black hover:shadow-lg hover:text-2xl transition-none duration-500"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/boyshield.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-0 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
