import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"

const SocialMedia = () => {
  return (
    <div className="flex flex-row justify-center md:justify-start space-x-2 mb-1">
      <a href="https://github.com/joanamcs" rel="noreferrer" target="_blank">
        <AiOutlineGithub
          className="hover:-translate-y-1 transition-transform cursor-pointer text-primary dark:text-neutral-100"
          size={35}
        />
      </a>
      <a
        href="https://twitter.com/joanamcsa"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineTwitter
          className="hover:-translate-y-1 transition-transform cursor-pointer text-primary dark:text-neutral-100"
          size={35}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/joanamcsantos"
        rel="noreferrer"
        target="_blank"
      >
        <AiOutlineLinkedin
          className="hover:-translate-y-1 transition-transform cursor-pointer text-primary dark:text-neutral-100"
          size={35}
        />
      </a>
    </div>
  )
}

export default SocialMedia
