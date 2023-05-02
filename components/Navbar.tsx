"use client"
import React, { useState } from 'react'
import { useTheme } from "next-themes"
import { Link } from 'react-scroll/modules'
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"




interface NavItem {
    label: string,
    page: string,
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        page: "home",
    },
    {
        label: "About",
        page: "abuot",
    },
    {
        label: "Projects",
        page: "projects",
    },
    {
        label:"Contact",
        page:"contact"
    },

]
const Navbar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [navbar, setNavbar] = useState(false)

    return (
        <header className='w-full mx-ato px-4 shadow fixed top-0 z-50 sm:px20  backdrop-blur-md dark:bg-stone-900 dark:border-b dark:border-stone-600 '>
            <div className='justify-between md:items-center md:flex'>
                <div>
                    <div className=' flex items-center justify-between py-3'>
                        <div className='md:py-5 md:block'>
                            <Link
                            to="home"
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            >
                            <h2 className='text-2xl font-bold'> Ammar Eldik </h2>
                            </Link>
                        </div>

                        <div className='md:hidden'>
                            <button onClick={() => setNavbar(!navbar)}>
                                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
                            </button>
                        </div>
                    </div>
                </div>
                <div >
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                        }`}>
                        <div className='itmes-center justify-center space-y-8 md:space-y-0 md:flex md:space-x-6'>
                            {NAV_ITEMS.map((item, idx) => {
                                return (<Link
                                    key={idx}
                                    to={item.page}
                                    className={
                                        "block lg:inline-block hover:text-neutral-500 dark:text-neutral-100 sm:text-xl"
                                    }
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    onClick={() => setNavbar(!navbar)}
                                >{item.label}</Link>
                                )
                            })}
                            {currentTheme === "dark" ? (
                                <button
                                    onClick={() => setTheme("light")}
                                    className=' bg-slate-100 p-2 rounded-xl'>
                                    <RiSunLine size={25} color='black' />
                                </button>
                            ) : (
                                <button
                                    onClick={() => setTheme("dark")}
                                    className='bg-slate-100 p-2 rounded-xl'>
                                    <RiMoonFill size={25} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar