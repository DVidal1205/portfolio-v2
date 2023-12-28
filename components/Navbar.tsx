"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{ top: visible ? "0" : "-80px" }}
        className="hidden fixed top-0 md:flex w-full items-center duration-500 overflow-hidden px-8 transition-all ease-in-out h-16 shadow-md backdrop-brightness-110 backdrop-blur-3xl z-30"
      >
        <div className="flex-1 text-2xl nt-bold font-bold">Dylan Vidal</div>
        <ul className="hidden items-center md:flex">
          <li className="px-4">
            <a
              className="hover:text-violet-400 cursor-pointer"
              onClick={() => handleSmoothScroll("about")}
            >
              About
            </a>
          </li>
          <li className="px-4">
            <a
              className="hover:text-violet-400 cursor-pointer"
              onClick={() => handleSmoothScroll("projects")}
            >
              Projects
            </a>
          </li>
          <li className="px-4">
            <a
              className="hover:text-violet-400 cursor-pointer"
              onClick={() => handleSmoothScroll("experience")}
            >
              Experience
            </a>
          </li>
          <li className="px-4">
            <a
              className="hover:text-violet-400 cursor-pointer"
              onClick={() => handleSmoothScroll("skills")}
            >
              Skills
            </a>
          </li>
          <li className="px-4">
            <a
              className="hover:text-violet-400 cursor-pointer"
              onClick={() => handleSmoothScroll("education")}
            >
              Education
            </a>
          </li>
          <li className="px-4">
            <a
              className="hover:text-violet-400 cursor-pointer"
              onClick={() => handleSmoothScroll("contact")}
            >
              Contact
            </a>
          </li>
          <li className="px-4">
            <a
              target="_blank"
              className="hover:text-violet-400 cursor-pointer"
              href="https://github.com/DVidal1205"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </li>
          <li className="px-4">
            <a
              target="blank"
              className="hover:text-violet-400"
              href="https://www.linkedin.com/in/dylanvidal1204/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="currentColor"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      <div className="md:hidden fixed bottom-0 flex w-full items-center overflow-hidden p-4 bg-purple-800 transition-transform mshadow-md drop-shadow-2xl border-2 border-black z-30">
        <a
          onClick={() => handleSmoothScroll("about")}
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/about.svg"}
            alt={"About Icon"}
            className="h-8"
          />
        </a>
        <a
          onClick={() => handleSmoothScroll("projects")}
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/project.svg"}
            alt={"Projects Icon"}
            className="h-9"
          />
        </a>
        <a
          onClick={() => handleSmoothScroll("experience")}
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/experience.svg"}
            alt={"Experience Icon"}
            className="h-9"
          />
        </a>
        <a
          onClick={() => handleSmoothScroll("skills")}
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/skills.svg"}
            alt={"Skills Icon"}
            className="h-8"
          />
        </a>
        <a
          onClick={() => handleSmoothScroll("education")}
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/education.svg"}
            alt={"Education Icon"}
            className="h-9"
          />
        </a>
        <a
          onClick={() => handleSmoothScroll("contact")}
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/contact.svg"}
            alt={"Contact Icon"}
            className="h-9"
          />
        </a>
        <a
          href="https://github.com/DVidal1205"
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/github.svg"}
            alt={"Github Icon"}
            className="h-7"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/dylanvidal1204/"
          className="flex flex-col items-center mx-3 cursor-pointer"
        >
          <Image
            width={100}
            height={100}
            src={"/linkedin.svg"}
            alt={"LinkedIn Icon"}
            className="h-7"
          />
        </a>
      </div>
    </>
  );
}

export default Navbar;
