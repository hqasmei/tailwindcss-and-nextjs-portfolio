"use client" // this is a client component
import React, {useEffect} from "react"
import {useState} from "react"
import {Link} from "react-scroll/modules"
import {usePathname} from "next/navigation"
import {useTheme} from "next-themes"
import {RiMoonFill, RiSunLine} from "react-icons/ri"
import {IoMdMenu, IoMdClose} from "react-icons/io"
import Image from "next/image";

interface NavItem {
  id: string
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
    id: "home",
  },
  {
    label: "About",
    page: "about",
    id: "about",
  },
  {
    label: "Projects",
    page: "projects",
    id: "projects",
  },
]

export default function Navbar() {
  const {systemTheme, theme, setTheme} = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)

  return (
    <header
      className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 shadow bg-white dark:bg-primary">
      <div className="justify-between md:items-center md:flex mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="home" className="cursor-pointer">
              <div className="container flex items-center space-x-2">
                <Image
                  src="/memoji.png"
                  alt=""
                  width={35}
                  height={35}
                />
                <h2 className="text-2xl font-bold">Joana Santos</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 dark:text-neutral-100 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30}/> : <IoMdMenu size={30}/>}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item) => {
                return (
                  <Link
                    key={item.id}
                    to={item.page}
                    className={
                      "block lg:inline-block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 cursor-pointer"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                )
              })}
              {currentTheme === "dark" && (
                <button
                  onClick={() => setTheme("light")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiSunLine size={25} color="black"/>
                </button>
              )}
              {currentTheme === "light" && (
                <button
                  onClick={() => setTheme("dark")}
                  className="bg-slate-100 p-2 rounded-xl"
                >
                  <RiMoonFill size={25}/>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
