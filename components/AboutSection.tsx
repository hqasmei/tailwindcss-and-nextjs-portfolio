import React from "react"
import Image from "next/image"

const skills = [
    { skill: "JavaScript" },
    { skill: "Java" },
    { skill: "React" },
    { skill: "Git" },
    { skill: "GitHub" },
    { skill: "C" },
    { skill: "C#" },
    { skill: "Python" },
    { skill: "Solidworks" },
    { skill: "AutoCAD" },
    { skill: "CircuitMaker" },
    { skill: "LTspice" },
    { skill: "Xilinx ISE" },
    { skill: "WireShark" },
    { skill: "NMap" }
];


const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 text-lg">
                        <h1 className="text-center text-3xl font-bold text-red-600 mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hey, my name is Rehan Siddiqi.
                            I am a motivated self-learner whos always eager
                            to learn about new technology! I currently attend
                            the Univeristy of Guelph for Computer Engineering.
                        </p>
                        <br />
                        <p>
                            I enjoy spending my time learning about cybersecurity and computer hardware.
                            In the future, I hope to delve deeper into both fields exploring the exciting
                            intersection where cybersecurity and computer hardware converge to create
                            robust and secure technological solutions.
                        </p>
                        <br />
                        <p>
                            I personally believe that you can never stop learning,
                            which perfectly complements STEM. With this being said,
                            I am excited to see what opportunities the future holds
                            both in school and the workplace.
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold text-red-600 mb-6">Current Fields of Interest</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-neutral-300 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                        <Image
                            src="/javalogo.png"
                            alt=""
                            width={220}
                            height={220}
                            className="hidden md:block md:relative md:bottom-0 md:left-16 md:z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection