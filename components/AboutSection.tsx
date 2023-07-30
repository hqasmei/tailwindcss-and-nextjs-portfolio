import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Fal áttörés" },
  { skill: "Fúrás" },
  { skill: "Benton szabás" },
  { skill: "Falmerevítés" },
  { skill: "Betonvágás" },
  { skill: "Betonszerkezetek bontása" },
  { skill: "Csőfúrás" },
  { skill: "Szellőző- és légtechnikai rendszerek" },
  { skill: "Vésés" },
  { skill: "Betonmarás" },
  { skill: "Tömítés" },
  { skill: "Biztonsági kivitelezés" },
];


const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Rólunk
          <hr className="w-6 h-1 mx-auto my-4 bg-zinc-300 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Ismerjen meg minket!
            </h1>
            <p>
            Miért minket válasszon?
            </p>
            <p>
            Tevékenységeinket széles körben alkalmazzuk, ideértve magán- és üzleti ingatlanokat, épületeket és infrastrukturális projekteket egyaránt. Együttműködünk építészekkel, építési vállalkozókkal és magánszemélyekkel egyaránt, és büszkék vagyunk arra, hogy hozzájárulhatunk az építőipar és a környezet fejlődéséhez.

Ha bármilyen kérdése van, vagy szeretné megismerni, hogy miként segíthetünk Önnek a következő projektjében, vegye fel velünk a kapcsolatot a Kapcsolat oldalon található elérhetőségeinken.

Köszönjük, hogy megismert minket, és reméljük, hogy hamarosan találkozunk Önnel az AG Construct csapatában!
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Szolgálatásaink</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
