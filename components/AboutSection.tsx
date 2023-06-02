import React from "react"
import Image from "next/image"

const skills = [
  {id: '1', skill: "HTML", color: 'bg-[#f16429] text-neutral-100'},
  {id: '2', skill: "CSS", color: 'bg-[#33a9dc] text-neutral-100'},
  {id: '3', skill: "JavaScript", color: 'bg-[#f0db4e] text-neutral-600'},
  {id: '4', skill: "TypeScript", color: 'bg-[#137acc] text-neutral-100'},
  {id: '5', skill: "React", color: 'bg-[#61dafb] text-neutral-600'},
  {id: '6', skill: "Next.js", color: 'bg-black text-neutral-100'},
  {id: '7', skill: "Tailwind CSS", color: 'bg-[#38b2ac] text-neutral-100'},
  {id: '8', skill: "GitHub", color: 'bg-[#23292f] text-neutral-100'},
  {id: '9', skill: "Nest.js", color: 'bg-[#df234f] text-neutral-100'},
  {id: '10', skill: "Node", color: 'bg-[#83cd2a] text-neutral-100'},
]

const AboutSection = () => {
  return (
    <section id="about" className={'h-full'}>
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-secondary-light dark:bg-secondary-dark border-0 rounded"></hr>
        </h1>

        <div
          className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Joana and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Los Angeles, CA.
            </p>
            <br/>
            <p>
              I graduated from California State University, Northridge in 2019
              with a BS in Computer Engineering and have been working in the
              field ever since.
            </p>
            <br/>
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to making YouTube videos,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br/>
            <p>
              I believe that you should{" "}
              <span className="font-bold text-secondary-light dark:text-secondary-dark">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left flex flex-col">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <li className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item) => {
                return (
                  <ul
                    key={item.id}
                    className={`${item.color} px-4 py-2 mr-2 mt-2 rounded font-semibold`}
                  >
                    {item.skill}
                  </ul>
                )
              })}
            </li>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
