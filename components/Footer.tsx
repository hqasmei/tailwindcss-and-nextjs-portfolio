import React from 'react';
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className=''>
      <hr className='w-screen h-0.5 mt-8 bg-neutral-200 border-0 '></hr>
      <div className='w-screen py-4 px-6 flex sm:flex-row flex-col justify-between text-center text-neutral-900 md:flex-row md:justify-between mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl '>
        <div className='flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100'>
          © 2023 Mahmoud Rizk<a href='/' className='hover:underline'></a>
        </div>
        <div className='flex flex-row items-center justify-center space-x-2 mb-1 sm:mt-0 mt-4'>
          <a href='https://github.com/Elerqsousy' rel='noreferrer' target='_blank'>
            <AiOutlineGithub
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/mahmoud-rizk-elerqsousy/'
            rel='noreferrer'
            target='_blank'
          >
            <AiOutlineLinkedin
              className='hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100'
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
