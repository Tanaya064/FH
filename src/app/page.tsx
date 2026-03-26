import Section1Hero from "@/components/sections/Section1Hero";
import Section2Story from "@/components/sections/Section2Story";
import Section3Menu from "@/components/sections/Section3Menu";
import Section4Gallery from "@/components/sections/Section4Gallery";
import Section5Testimonials from "@/components/sections/Section5Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-[72px]">
      <Section1Hero />
      <Section2Story />
      <Section3Menu />
      <Section4Gallery />
      <Section5Testimonials />
    </main>
  );
}
