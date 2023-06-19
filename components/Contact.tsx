import React from "react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "./ContactForm";


export const Contact = () => {
  return (
    <section id="contact">
      <div className="my-12 pb-12 md:pt-16">
        <h1 className="text-center font-bold text-4xl">Contact
          <hr className="w-6 h-1 mx-auto my-4 bg-green-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};