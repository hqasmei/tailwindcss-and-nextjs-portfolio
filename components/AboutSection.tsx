import React from 'react';
import Image from 'next/image';

const skills = [
    {skill:"HTML"},
    {skill:"CSS"},
    {skill:"JavaScript"},
    {skill:"TypeScript"},
    {skill:"CRM"},
    {skill:"SAP/POS"},
    {skill:"Shopify"},
    {skill:"NextJS"},
    {skill:"React"},
    {skill:"ReactNative"},
    {skill:"Sanity"},

]

const AboutSection = () => {
  return (
    <section id="about">
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>About Me
            <hr className='w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded'></hr>
            </h1>
            
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
                        WHOAMI?
                    </h1>
                    <p>
                        {""}
                        Hello, my name is Yousef Abdelkhaleq and I am a {""}
                        <span className='font-bold'>{"Hard-working"}</span>,{""}
                        <span className='font-bold'>{"self-motivated"}</span>,{""} and {""}
                        <span className='font-bold'>{"unbiased"}</span>, {""} web enthusiast based in Jacksonville, FL.
                    </p>
                    <br />
                    <p>
                         I am seeking a {""} <span className='font-bold text-purple-500'>competitive and challenging environment</span>{""} where I can use my skills and knowledge to serve the company and establish an enjoyable career for myself.
                    </p>
                    <br />
                    <p>
                       A simple and modest life, despite facing challenges and obstacles, <span className='underline decoration-[#AB0AF7]/50'>I remain positive and optimistic,</span> {""} always looking for ways to improve myself and those around me.
                    </p>
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-center text-2xl font-bold mb-6 md:text-left'> My Skills</h1>
                    <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
                        {skills.map((item, idx) => {
                            return <p key={idx} className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold" >{item.skill}</p>
                        })}
                    </div>
                    <Image 
                    className='hidden md:block md:relative md:bottom-4 md:left-32 md:z-0'
                    src="/about-image.png" 
                    alt="about" 
                    width={325} 
                    height={325}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection