import React from "react"
import Image from "next/image"

const skills = [
  {id: 'react', skill: "React", color: 'bg-[#61dafb] text-neutral-600'},
  {id: 'next', skill: "Next.js", color: 'bg-black text-neutral-100'},
  {id: 'javascript', skill: "JavaScript", color: 'bg-[#f0db4e] text-neutral-600'},
  {id: 'typescript', skill: "TypeScript", color: 'bg-[#137acc] text-neutral-100'},
  {id: 'html', skill: "HTML", color: 'bg-[#f16429] text-neutral-100'},
  {id: 'css', skill: "CSS", color: 'bg-[#33a9dc] text-neutral-100'},
  {id: 'tailwind', skill: "TailwindCSS", color: 'bg-[#38b2ac] text-neutral-100'},
  {id: 'github', skill: "GitHub", color: 'bg-[#23292f] text-neutral-100'},
  {id: 'nest', skill: "Nest.js", color: 'bg-[#df234f] text-neutral-100'},
  {id: 'node', skill: "Node.js", color: 'bg-[#83cd2a] text-neutral-100'},
]

const AboutSection = () => {
  return (
    <section id="about" className={'h-full'}>
      <div className="my-12 pb-12 md:pt-8 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-secondary-light dark:bg-secondary-dark border-0 rounded"/>
        </h1>

        <div
          className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 flex flex-col gap-6">
            <h1 className="text-center text-2xl font-bold mb-2 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Joana and I am a
              <span className={'text-secondary-light dark:text-secondary-dark'}>{' '}full-stack <span
                className={'line-through'}>software</span> product engineer</span>
              &#44; based in Viseu, currently working at xgeeks.
            </p>
            <p>
              I graduated in Computer Science at Polytechnic Institute of Viseu in 2021.
            </p>
            <p>
              Recently, I was part of the team that brought to life WTX, where I had the opportunity to
              develop technical skills just as much as communication and teamwork.
            </p>
            <p>
              Outside work, I’m happy when I’m reading, or doing brain-stimulating games, like sudoku, or enjoying the
              party of life. 🥳
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
