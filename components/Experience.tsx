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
                    company="UCF Biomedical Sciences Laboratory"
                    date={{
                        start: "April 5, 2024",
                        end: "December 8, 2024",
                    }}
                    description="With a professor of mine, I am working on a research project studying the efficiency of Machine Learning solutions for cancer detection and optimal treatment recognition trained off various data samples, such as RNA and DNA sequencing."
                    tags={[
                        "Research",
                        "Logistics",
                        "Machine Learning",
                        "Data Analysis",
                        "Project Management",
                        "Teamwork",
                    ]}
                    contributions={[
                        "Assisted in data collection and transformation using Python and statistics libraries.",
                        "Researched Machine Learning solutions for cancer detection and optimal treatment identification.",
                    ]}
                ></Position>
                <Position
                    title="Symposium Team Leader"
                    company="Burnett Honors College"
                    date={{
                        start: "April 5, 2024",
                        end: "December 8, 2024",
                    }}
                    description="Being a Team Leader for the Burnett Honors College Symposium, I am responsible for leading a team of 15 students through what it means to be an Honors Student at UCF. I am also responsible for creating a semester-long curriculum and grading system for the students."
                    tags={[
                        "Leadership",
                        "Mentorship",
                        "Organization",
                        "Teamwork",
                        "Community",
                        "Guidance",
                    ]}
                    contributions={[
                        "Created a semester-long curriculum for the students to follow.",
                        "Performed common tasks of a professor, such as grading and lecturing.",
                        "Led a team of 15 students through the process of becoming an Honors Student at UCF.",
                    ]}
                ></Position>
                <Position
                    title="Honors Orientation Ambassador"
                    company="Burnett Honors College"
                    date={{
                        start: "May 1, 2024",
                        end: "July 9, 2024",
                    }}
                    description="As an Honors Orientation Ambassador, I serve as a role-model and mentor for incoming students to the Burnett Honors College at UCF, teaching them how to navigate the university and how to find a passion for learning at this wonderful institution."
                    tags={[
                        "Leadership",
                        "Mentorship",
                        "Organization",
                        "Teamwork",
                        "Community",
                        "Guidance",
                    ]}
                    contributions={[
                        "Worked alongside other ambassadors to create a welcoming environment for incoming students by planning activities and events.",
                        "Led small groups of students throughout the orientation process, answering questions and providing guidance.",
                        "Assisted in the scheduling and course registration process for incoming students.",
                    ]}
                ></Position>
                <Position
                    title="Research Assistant"
                    company="UCF Cognitive Sciences Laboratory"
                    date={{
                        start: "January 31, 2024",
                        end: "March 31, 2024",
                    }}
                    description="Partnering with the Cognitive Sciences Laboratory at UCF, I am working on a research project studying the effectiveness of teamwork in various environments, with a focus in software development and data analysis."
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
                        "Spearheaded advertising the event to various Computer Science communities on campus.",
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
