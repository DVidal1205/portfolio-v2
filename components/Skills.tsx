"use client";
import Image from "next/image";
import React, { useState } from "react";

const skills = [
    { name: "C", svg: "/c.svg" },
    { name: "C++", svg: "/cpp.svg" },
    { name: "Qt", svg: "/qt.svg" },
    { name: "Python", svg: "/python.svg" },
    { name: "Selenium", svg: "/selenium.svg" },
    { name: "OpenAI API", svg: "/openai.svg" },
    { name: "Discord API", svg: "/discord.svg" },
    { name: "HTML", svg: "/html.svg" },
    { name: "CSS", svg: "/css.svg" },
    { name: "JavaScript", svg: "/javascript.svg" },
    { name: "TypeScript", svg: "/typescript.svg" },
    { name: "React", svg: "/react.svg" },
    { name: "Tailwind CSS", svg: "/tailwind.svg" },
    { name: "Node", svg: "/node.svg" },
    { name: "Flask", svg: "/flask.svg" },
    { name: "Next.js", svg: "/next.svg" },
    { name: "Vercel", svg: "/vercel.svg" },
    { name: "Git", svg: "/git.svg" },
    { name: "GitHub", svg: "/github.svg" },
    { name: "VS Code", svg: "/vscode.svg" },
];

function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div className="mb-20 px-6" id="skills">
            <div className="text-3xl font-bold pt-24">Skills</div>
            <p className="my-2 mb-6">A collection of some of the technologies I have worked with. Hover for more details.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="relative flex justify-center items-center"
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                    >
                        <Image
                            width={100}
                            height={100}
                            src={skill.svg}
                            alt={skill.name}
                            className="transition-all duration-300 ease-in-out transform"
                        />
                        {hoveredSkill === skill.name && (
                            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tl from-purple-950 via-purple-800 to-violet-950 bg-transparent backdrop-blur-xl mshadow-md drop-shadow-2xl border-2 border-violet-900 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out text-xl scale-50 hover:scale-100 cursor-default">
                                {skill.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
