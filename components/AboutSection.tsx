import React from "react";
import Image from "next/image";

const skills = [
  { skill: "Spring Boot" },
  { skill: "Java" },
  { skill: "SQL" },
  { skill: "Git" },
  { skill: "Agile" },
  { skill: "GitHub" },
  { skill: "Jenkins" },
  { skill: "React" },
  { skill: "TypeScript" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gray-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left ">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Jamal and I am a{" "}
              <span className="font-bold text-gray-500">{"highly ambitious"}</span>,
              <span className="font-bold text-gray-500">{" self-motivated"}</span>, and
              <span className="font-bold text-gray-500">{" driven"}</span> software engineer
              based in Dallas, TX.
            </p>
            <br />
            <p>
              I graduated from University of Illinois at Chicago, 2019 with a BS
              in Computer Science and have been working in the field ever
              since.
            </p>
            <br />
            <p>
              I&#39;m engaged in a diverse array of hobbies and passions that
              consistently occupy my time. Whether it&#39;s reading, playing the
              guitar, traveling, or weightlifting, I have an ongoing enthusiasm
              for embracing novel experiences and continuously expanding my
              knowledge.
            </p>
            <br />
            <p>
              I believe everyone should{" "}
              <span className="font-bold text-gray-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={350}
              height={350}
              className="hidden md:block md:relative md:bottom-4 md:top-5 md:left-25 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
