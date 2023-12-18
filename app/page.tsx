import Navbar from "@/components/Navbar";
import Welcome from "@/components/Welcome";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
    return (
        <main>
            <Navbar></Navbar>
            <Welcome></Welcome>
            <div className="mx-auto max-w-screen-lg">
                <About></About>
                <Projects></Projects>
                <Experience></Experience>
            </div>
        </main>
    );
}
