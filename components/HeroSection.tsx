"use client"; // this is a client component
import React from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left relative">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/IMG_7795.png"
            alt=""
            width={500}
            height={500}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5 py-6 px-3">
          <p>
            <span className="font-bold text-yellow-500">{"Üdvözöljük "}</span>
            Önöket az AG Construct-nál, ahol szakértők vagyunk a fal és
            födémáttörés készítésében fúrással és vágással. Cégünk elhivatottan
            dolgozik azon, hogy magas színvonalú szolgáltatásokat nyújtson
            ügyfeleinknek az építőipar terén. Több éves tapasztalattal és
            szakmai tudással rendelkezünk, ami lehetővé teszi számunkra, hogy
            kiváló minőségű munkát végezzünk minden projektben.
          </p>
          </div>

          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-yellow-500 rounded shadow hover:bg-yellow-600"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projektek
          </Link>
        </div>
        <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
