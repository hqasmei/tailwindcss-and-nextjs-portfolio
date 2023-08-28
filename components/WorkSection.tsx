import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: (
      <span>
        <span style={{ color: "#FF8000" }}>7</span>
        <span style={{ color: "red" }}>-</span>
        <span style={{ color: "#009933" }}>Eleven</span>
      </span>
    ),    description:
      "I led a critical project to update fuel prices for 7-Eleven gas stations in the US and Canada. Using Kafka, I established real-time data streaming, minimizing update delays for accurate pricing. Collaborating across teams, I improved search with Elastic Search, enhancing user navigation and satisfaction. I developed modular React and Angular frontend components for faster feature deployment. Through Azure cloud services, I ensured system reliability, scalability, and accessibility.",
    image: "/7eleven.gif",
    link: "https://www.7eleven.com.au/my-7-eleven.html",
  },
  {
    name: "JPMorgan Chase & Co.",    
    description:
      "I led a Spring Boot API for digital transfers, managing 4000+ customers' authorizations and transactions. I optimized infrastructure by migrating 100+ batch jobs to Python, implementing OAuth 2.0, reducing cloud costs by 40%, and minimizing batch job failures by 95%. I automated batch services across 60+ countries, curtailing manual intervention by 25%. Strengthening security, I adapted network authentication for Kerberos, doubling data security and access control. Collaborating in a 10-member team, I designed the full infrastructure, incorporating new cloud tools and a mix of proprietary and open-source software.",
    image: "/jpmc.webp",
    link: "https://www.chase.com/business/banking/services/collect-and-deposit/wire-transfers",
  },
  {
    name: "Walgreens",    
    description:
      "Amid the COVID-19 pandemic, ensuring constant medical services was crucial. Moving pharmacy transactions to Azure cut costs by 32%. Over 250 defects were proactively fixed in testing and production, preventing losses and ensuring a smooth user experience. Automation enabled 24/7 support for 9000+ stores. Java, Angular, TypeScript, and PostgreSQL/NoSQL led to robust solutions. Automated testing with JUnit and Mockito reduced manual work and improved bug detection. This effort showcased skills in AngularJS, React.js, Azure, PostgreSQL, and more, vital for uninterrupted services during the pandemic.",
    image: "/walgreens.jpg",
    link: "https://www.walgreens.com/rx-checkout/pharmacy-landing",
  }
]

const WorkSection = () => {
  return (
    <section id="experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-gray-400 border-0 rounded"></hr>
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

export default WorkSection