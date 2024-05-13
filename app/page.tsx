import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Script from "next/script";

export default function Home() {
    return (
        <main>
            <Script
                src="https://cloud.umami.is/script.js"
                data-website-id="34db6362-d5b5-4e51-8937-dc4c7b7a5006"
                strategy="lazyOnload"
            />
            <Navbar></Navbar>
            <Welcome></Welcome>
            <div className="mx-auto max-w-screen-lg">
                <About></About>
                <Projects></Projects>
                <Experience></Experience>
                <Skills></Skills>
                <Education></Education>
                <Contact></Contact>
            </div>
        </main>
    );
}
