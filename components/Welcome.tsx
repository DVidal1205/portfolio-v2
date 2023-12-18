"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

function Welcome() {
    return (
        <div className="mx-auto max-w-screen-xl">
            <div className="grid grid-cols-2 w-full items-center justify-center h-screen">
                <div className="max-w-5xl justify-start ml-8">
                    <div className="text-1xl font-bold mb-2 md:text-1xl lg:text-2xl xl:text-3xl">
                        My name is...
                    </div>
                    <div className="text-4xl font-bold mb-5 md:text-4xl lg:text-5xl xl:text-6xl">
                        Dylan Vidal
                    </div>
                    <div className="text-1xl font-bold mb-2 md:text-1xl lg:text-2xl xl:text-3xl">
                        <TypeAnimation
                            style={{
                                display: "block",
                                height: "1.5em",
                                width: "100%",
                            }}
                            sequence={[
                                "and I am a Software Engineer.",
                                1000,
                                "and I am a Computer Science Student.",
                                1000,
                                "and I am a Web Developer.",
                                1000,
                                "and I am a Aspiring Professional.",
                                1000,
                                "and I am a Writer.",
                                1000,
                                "and I am a Creative.",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            cursor={true}
                            repeat={Infinity}
                        />
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="/resume.pdf"
                            className="bg-purple-800 font-semibold px-6 py-2 my-2 rounded-xl border border-purple-950 transition-transform hover:-translate-y-1 hover:bg-purple-900 hover:text-violet-200"
                        >
                            Resume
                        </a>
                        <a
                            href="#projects"
                            className="bg-purple-800 font-semibold px-6 py-2 my-2 rounded-xl border border-purple-950 transition-transform hover:-translate-y-1 hover:bg-purple-900 hover:text-violet-200"
                        >
                            Recent Projects
                        </a>
                    </div>
                </div>
                <Image
                    src="/headshot.jpg"
                    alt="Headshot"
                    width={540}
                    height={540}
                    className="rounded-custom-shape xl:mx-28 lg:mx-12 mb-20 shadow-2xl rounded-[[45%] [55%] [82%] [18%] / [42%] [49%] [51%] [58%]]"
                />
            </div>
        </div>
    );
}

export default Welcome;
