"use client"
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };

function Contact({}: Props) {
    const { register, handleSubmit, } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:yousefabdelkhaleq@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
    };
  return (
    <section className='' id='contact'>
       <div className='flex  flex-col text-center max-w-7xl py-28 px-10 justify-evenly mx-auto items-center'>
       <h1 className='text-center font-bold text-4xl'>Contact Me
      <hr className='w-6 h-1 mx-auto my-4 bg-purple-500 border-0 rounded'></hr>
      </h1>
      <div className='flex flex-col space-y-8'>
            <h1 className='text-2xl font-semibold text-center'>
                Want to know more?,{" "}
                <span className='decoration-[#AB0AF7]/50 underline'>Lets Talk!.</span>
            </h1>

            <div className='space-y-10'>
                <div className='flex items-center space-x-3 justify-center'>
                <PhoneIcon className='text-[#AB0AF7] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>+123456789</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                <EnvelopeIcon className='text-[#AB0AF7] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>yousefabdelkhaleq@gmail.com</p>
                </div>

                <div className='flex items-center space-x-3 justify-center'>
                <MapPinIcon className='text-[#AB0AF7] h-7 w-7 animate-pulse'/>
                <p className='text-2xl'>Jacksonville, FL.</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-1'>
                    <input {...register('name')} placeholder="Name" className='contactInput' type="text" />
                    <input {...register('email')} placeholder="Email" className='contactInput' type="email" />
                </div>
                
                <input {...register('subject')} placeholder="Subject" className='contactInput' type="text"></input>

                <textarea {...register('message')} placeholder="Message" className='contactInput' />
                <button type="submit" className='bg-[#AB0AF7] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
            </form>
        </div>
    </div>


        
    </section>
  )
}

export default Contact