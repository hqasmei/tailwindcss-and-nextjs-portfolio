import React from 'react'
import Image from 'next/image'

const skills = [
    { skills: "HTML" },
    { skills: "CSS" },
    { skills: "JAVASCRIPT " },
    { skills: "REACT" },
    { skills: "TAILWIND.CSS" },
    { skills: "FIREBASE" },
    { skills: "NEXT.js" },
    { skills: "GITHUB" },
    { skills: "GIT" },
    { skills: "REDUX TOOLKIT" },
]

function AbuotSection() {
    return (
        <section id='abuot'>
            <div className=' my-12 pb-12 md:pt-16 md:pb-48'>
                <h1 className='text-center font-bold text-4xl'>
                    Abuot Me
                    <hr className=' w-24 h-1 mx-auto bg-teal-500 border-0 rounded' />
                </h1>
                <div className='flex flex-col space-y-20 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10 '>
                    <div className='md:w-1/2'>
                        <h1 className=' text-center mb-6 md:text-left font-bold text-2xl'> Who am I </h1>
                        <p className=' text-xl '>Hello, I'm Ammar Eldik, and I am a<samp className='font-semibold text-teal-600'> junior front-end web developer </samp>. </p>
                        <br />
                        <p className=' text-xl text-neutral-600 dark:text-neutral-400'>I have always had a passion for coding and creating beautiful, functional websites, and I am thrilled to be pursuing this as a career.</p>
                        <br />
                        <p className=' text-xl text-neutral-600 dark:text-neutral-400'> Although I am still considered a junior developer, I have already gained experience in several programming languages, including <span className='font-semibold text-teal-600'>  HTML, CSS, JavaScript, JavaScript Frameworks </span> and libraies and development platforms for hosting databases. I have also worked on several small to medium-sized projects, which have allowed me to hone my skills and gain a deeper understanding of web development principles.</p>
                        <br />
                        <p className=' text-xl text-neutral-600 dark:text-neutral-400'>  One of the things that <span className='font-semibold text-red-600'> excites me </span> about web development is the constant opportunity to learn and grow. I am committed to continuing my education and keeping up with the latest trends and technologies in the industry. I am also a firm believer in writing clean and efficient code and following best practices to create websites that are both user-friendly and accessible.</p>
                        <br />
                        <p className=' text-xl text-neutral-600 dark:text-neutral-400'> And I am <span className='font-semibold text-orange-600'> excited to continue my journey </span> as a front-end web developer and work alongside experienced professionals to <span className='font-semibold text-red-600'> expand my skill </span> set and deliver outstanding projects to clients.</p>
                        <br />
                        <p className=' text-xl text-neutral-600 dark:text-neutral-400'> Thank you for considering me for your projects, and I look forward to hearing from you soon </p>
                    </div>
                    <div className='md:w-1/2'>
                        <h1 className=' text-center mb-6 md:text-left font-bold text-2xl'>My skills</h1>
                        <div className='flex flex-wrap flex-row justify-center md:justify-start'>
                            {skills.map((item, idx) => {
                                return <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500  font-semibold rounded-xl shadow-xl '>{item.skills}</p>
                            })}
                        </div>
                        <Image src="/123.png" alt='' width={1025} height={825} className='mt-20 hidden justify-start  md:block md:relative md:bottom-4  md:z-0  rounded-xl shadow-xl hover:opacity-70' />
                        <Image src="/1234.png" alt='' width={1025} height={825} className='mt-32 hidden justify-start  md:block md:relative md:bottom-4  md:z-0  rounded-xl shadow-xl hover:opacity-70' />

                    </div>
                </div>

            </div>

        </section>
    )
}

export default AbuotSection