import React from "react";
import Position from "./Position";
import Freelance from "./Freelance";

function Experience() {
    return (
        <div className="mb-20 px-6" id="experience">
            <div className="text-3xl font-bold pt-24">Experience</div>
            <p className="my-2 mb-6">
                For more information, visit my{" "}
                <a
                    className="hover:text-violet-400"
                    href="https://www.linkedin.com/in/dylanvidal1204/"
                >
                    LinkedIn
                </a>{" "}
                or press the information icon for key contributions.
            </p>
            <ul className="grid auto-rows-fr grid-cols-1 gap-4">
                <Position
                    title="Research Assistant"
                    company="UCF Cognitive Sciences Laboratory"
                    date={{
                        start: "January 31, 2024",
                        end: "Present",
                    }}
                    description="Partering with the Cognitive Sciences Laboratory at UCF, I am working on a research project studying the effectiveness of teamwork in software development and data analysis."
                    tags={[
                        "Research",
                        "Logistics",
                        "Data Analysis",
                        "Project Management",
                        "Collaborative Problem Solving",
                        "Teamwork",
                    ]}
                    contributions={[
                        "Curated a detailed approach to an experiment studying collaborative team science in software development and data analysis.",
                        "Organized a 40-person, 2-day hackathon for data collection to analyze effectiveness of teamwork in the development process studying what makes a successful team.",
                        "Implemented tooling for data collection and event logistics, including a registration webpage and Discord bot.",
                    ]}
                ></Position>
                <Position
                    title="Web Developer"
                    company="Freelance"
                    date={{
                        start: "December 21, 2023",
                        end: "Present",
                    }}
                    description="Working with various businesses throughout Florida, I design, implement, and deploy websites catered towards my clients needs. Using React, Next, and Tailwind, I seek to deliver sleek user experiences in an effective manner."
                    tags={[
                        "React",
                        "Next",
                        "TailwindCSS",
                        "Web Development",
                        "Entrepreneurship",
                        "Photography",
                    ]}
                    contributions={[
                        "Advised clients on design choices and implementation of their websites catered towards their needs.",
                        "Deployed websites to Vercel and assisted clients in purchasing domains.",
                        "Provided photography services for clients to use on their websites.",
                        "Offered SEO services for clients to increase their online presence.",
                        "Continued maintenance services for clients to ensure their websites are up-to-date.",
                    ]}
                ></Position>
                <Position
                    title="Lead Volunteer"
                    company="Broward Health Medical Center"
                    date={{
                        start: "June 8, 2021",
                        end: "August 10, 2022",
                    }}
                    description="As Lead Volunteer, I worked on many large-scale projects within the hospital in numerous departments: IT, Dietary Services, and Guest Relations. I also assisted in volunteer outreach and orchestrating large orientation sessions for incoming groups of volunteers."
                    tags={[
                        "Leadership",
                        "Communication",
                        "Teamwork",
                        "Organization",
                    ]}
                    contributions={[
                        "Overhauled the hospital-wide phone systems in a full-scale hardware update as instructed by the I.T. department, including distribution and installation of over 250 network phones.",
                        "Transported new phones to 15 hospital floors and administrative offices within the hospital.",
                        "Provided training for over 20 new student volunteers at orientation and heightened their involvement and efficiency as volunteers.",
                        "Distributed food to patients across the hospital from Dietary Services.",
                        "Guided visitors while working in the Guest Relations department.",
                    ]}
                ></Position>
            </ul>
            <div className="text-3xl font-bold pt-12">Freelance Work</div>
            <p className="my-2 mb-6">
                A collection of projects I have worked on for clients.
            </p>
            <ul className="grid auto-rows-fr grid-cols-1">
                <Freelance
                    name="Vecky's Bakery"
                    shortDescription="A local family-owned bakery located in South Florida. Written in both English and Spanish for a bilingual audience."
                    link="https://www.veckysbakery.com"
                    image="/veckysbakery.png"
                ></Freelance>
                <Freelance
                    name="South Florida Rides LLC"
                    shortDescription="A vehicle booking company on the Turo car share platform."
                    link="https://www.southflarides.com"
                    image="/southflarides.png"
                ></Freelance>
            </ul>
        </div>
    );
}

export default Experience;
