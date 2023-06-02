import React, {ReactNode} from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai"
import SocialMedia from "@/components/SocialMedia";
import AboutSection from "@/components/AboutSection";

const Pagewrapper = ({children}: { children: ReactNode }) => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">{children}</div>
  )
}

export default Pagewrapper
