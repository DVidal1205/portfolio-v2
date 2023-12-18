import React from "react";

function About() {
    return (
        <div className="mb-20 px-6" id="about">
            <div className="text-3xl font-bold pt-24">About Me</div>
            <div className="max-w-xl">
                <div className="text-1xl font-bold pt-8 pb-2">
                    Hi, I&apos;m Dylan Vidal
                </div>
                <div className="text-1xl">
                    I am a Computer Science Student at the University of Central Florida, and an aspiring Software Engineer.
                    I began my journey in Computer Science in 2021 during my Junior year of high school after taking dual-enrollment courses in Python and C++.
                    Since then I have learned my love for programming by attending hackathons, participating in coding competitions, and working on personal projects.
                    I am currently looking for an internship for Summer 2024, and I am always ready and excited to learn!
                </div>
                <div className="text-1xl font-bold pt-8 pb-2">
                    My Interests
                </div>
                <div className="text-1xl">
                    In the industry, I am interested in Web Development, Artificial Intelligence, and Application Engineering.
                    Beyond my professional life, I am an avid hobbyist, and enjoy lifting and tabletop roleplaying games!
                </div>
                <div className="text-1xl font-bold pt-8 pb-2">
                    What I&apos;m up to
                </div>
                <div className="text-1xl">
                    Currently, I have been exploring the web development industry, and learning new tools and frameworks in the ecosystem like React, Next.js, and Tailwind CSS, which I used to build this website!
                </div>
            </div>
        </div>
    )
}

export default About;