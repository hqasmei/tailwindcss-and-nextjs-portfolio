"use client"
import React from 'react'
import { Link } from 'react-scroll/modules'
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineProfile,
  AiFillMail
} from "react-icons/ai"

function Footer() {
  return (
    <footer className=' mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl sticky'>
      <hr className='w-full h-0.5 mt-8 bg-neutral-200 border-0 '></hr>
      <div className='mx-auto p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between'>
        <div className=' text-neutral-500 dark:text-neutral-100'>© 2023 Ammar Eldik</div>
        <div className=' flex flex-row items-center justify-center space-x-2 mb-1'>
          <a
            href="https://www.canva.com/design/DAFU2uXg_ZU/iKWfnXY3TOxAJGjXdNVl-w/edit?utm_content=DAFU2uXg_ZU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineProfile
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
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
              size={30}
            />
          </Link>
          <a
            href="https://github.com/AmmarEldik"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ammar-eldik-0a9304250/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer