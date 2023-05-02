import HeroSection from "@/components/HeroSection"
import AbuotSection from "@/components/AbuotSection"
import ProjectsSection from "@/components/ProjectsSection"
import ContactSaction from "@/components/ContactSaction"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AbuotSection />
      <ProjectsSection />
      <ContactSaction /> 
    </main>
  )
}
