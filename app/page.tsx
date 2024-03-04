import Image from "next/image";

import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import Footer from "@/components/footer";

/*

TODO:
- use svg transform somewhere
- add cool scroll bar

*/
export default function Home() {
  return (
    <>
    <main className="font-mono text-white max-w-[100vw]">
      <Navbar/>
      <Hero/>
      <About/>
      <Experiences/>
      <Projects/>
      <Footer/>
    </main>
    </>
  );
}
