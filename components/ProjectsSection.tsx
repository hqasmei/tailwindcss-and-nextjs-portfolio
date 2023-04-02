'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import projects from './products-util';

const ProjectsSection = () => {
  const [pDisplayed, setPDisplayed] = useState(3);
  const handleAdd = () => setPDisplayed(pDisplayed + 3);
  const handleSub = () => setPDisplayed(pDisplayed - 3);

  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
      </h1>

      <div className='flex flex-col items-center space-y-20 last:mb-[100px]'>
        {projects.slice(0, pDisplayed).map((project, idx) => {
          return (
            <div key={idx} className='last:mb-[60px]'>
              <SlideUp offset='-300px 0px -300px 0px'>
                <div className='flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                  <div className=' md:w-1/2'>
                    {project.link ? (
                      <Link href={project?.link} target='_blank'>
                        <Image
                          src={project.image}
                          alt=''
                          width={1000}
                          height={1000}
                          className='h-[264px] width-full object-cover object-left object-top rounded-xl shadow-xl hover:opacity-70'
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=''
                        width={1000}
                        height={1000}
                        className='rounded-xl shadow-xl hover:opacity-70'
                      />
                    )}
                  </div>
                  <div className='md:w-1/2 md:mt-0 mt-6 flex flex-col justify-center'>
                    <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                    <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                      {project.description}
                    </p>
                    <div className='flex flex-row overflow-scroll items-center align-bottom space-x-4 mb-4'>
                      {project.stack.map((item, idx) => {
                        return (
                          <p
                            key={idx}
                            className='text-xs  font-semibold bg-gray-200 px-3 py-1 text-gray-500 rounded '
                          >
                            {item}
                          </p>
                        );
                      })}
                    </div>
                    <div className='flex flex-row overflow-scroll items-center align-bottom space-x-4'>
                      <Link href={project.github} target='_blank'>
                        <BsGithub
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                      <Link href={project.link} target='_blank'>
                        <BsArrowUpRightSquare
                          size={30}
                          className='hover:-translate-y-1 transition-transform cursor-pointer'
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
        <div className='flex md:space-x-6'>
          {pDisplayed < projects.length && (
            <a
              onClick={handleAdd}
              className='text-teal-600 flex gap-1 items-center w-fit font-semibold underline  decoration-1 px-6 py-3 cursor-pointer hover:text-teal-700'
            >
              <span>Show more</span>
              <svg
                className='w-4 h-4 dark:text-white pt-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 30 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                ></path>
              </svg>
            </a>
          )}
          {pDisplayed > 3 && (
            <a
              onClick={handleSub}
              className='text-teal-600 flex gap-1 items-center w-fit font-semibold underline  decoration-1 px-6 py-3 cursor-pointer hover:text-teal-700 '
            >
              <span>Show less</span>
              <svg
                className='w-3 h-3 dark:text-white rotate-180'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 30 30'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M19 14l-7 7m0 0l-7-7m7 7V3'
                ></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
