"use client"
import React from 'react'
import { Link } from 'react-scroll/modules'
import { AiOutlineGithub, AiOutlineLinkedin, AiFillMail, AiOutlineProfile } from "react-icons/ai"


function ContactSaction() {
    return (
        <section id='contact'>

            <div className=' my-1 pb-2 mt-32 md:pt-2 md:pb-48'>

                <h1 className='text-center font-bold text-4xl'>
                    Contact
                    <hr className=' w-24 h-1 mx-auto bg-teal-500 border-0 rounded' />
                </h1>
                <div className='flex flex-col space-y-20 items-stretch justify-center mt-14 align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 ' >
                    <div className=' md:w-1/2 rounded-xl  '>
                        <div className="" >
                        <h2 className='text-3xl font-bold'>Ammar Eldik</h2>
                        <br />
                        <p className=' text-xl'>Front-End Developer</p>
                        <br />
                        <p className=' text-xl'>I am available for freelance or part-time positions.</p>
                        <br />
                        <p className=' text-xl'>CONNECT WITH ME</p>
                        <div className=' flex flex-row items-center justify-start space-x-9 mb-1 mt-10'>
                            <a
                                href="https://www.canva.com/design/DAFU2uXg_ZU/iKWfnXY3TOxAJGjXdNVl-w/edit?utm_content=DAFU2uXg_ZU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <AiOutlineProfile
                                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                    size={50}
                                />
                            </a>
                            <Link
                                to="contact"
                                activeClass='active'
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}

                            >
                                <AiFillMail
                                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                    size={50}
                                />
                            </Link>
                            <a
                                href="https://github.com/AmmarEldik"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <AiOutlineGithub
                                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                    size={50}
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ammar-eldik-0a9304250/"
                                rel="noreferrer"
                                target="_blank"
                            >
                                <AiOutlineLinkedin
                                    className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
                                    size={50}
                                />
                            </a>
                        </div>
                    </div>
                    </div>
                    <div className='mt-10 md:w-1/2 rounded-xl '>
                    <form action="mailto:eldik.ammar@gmail.com" method="post" encType="text/plain">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                    name="Your Name"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="number"
                      name="Your Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="Your Email"
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="Subject"
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    name="Your Message"
                  ></textarea>
                </div>
                <button className=" w-full p-4 bg-teal-500 rounded text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSaction