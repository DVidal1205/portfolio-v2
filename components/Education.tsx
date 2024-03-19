import React from "react";
import EducationItem from "./EducationItem";

function Education() {
    return (
        <div className="mb-20 px-6" id="education">
            <div className="text-3xl font-bold pt-24">Education</div>
            <p className="my-2 mb-6">
                A collection of my academic history and achievements. For more
                information, visit my{" "}
                <a
                    className="hover:text-violet-400"
                    href="https://www.linkedin.com/in/dylanvidal1204/"
                >
                    LinkedIn
                </a>{" "}
                or press the dropdown button for more information.
            </p>

            <EducationItem
                school={"University of Central Florida"}
                degree={"Bachelor Degree"}
                courses={[
                    "Calculus 3",
                    "Physics 2",
                    "Intro to Programming with C",
                    "Data Structures and Algorithms 1",
                    "Object Oriented Programming",
                    "Discrete Structures",
                ]}
                extracurriculars={[
                    "Burnett Honors College",
                    "KnightHacks Software Development Club",
                    "Competitive Programming Competitions",
                    "Research in the Cognitive Sciences Laboratory",
                ]}
                date={{ start: "August 2023", end: "May 2027" }}
                location={"Orlando, FL"}
                image="/ucf.jpg"
                shortDescription="At UCF, I am currently pursuing a Bachelor Degree in Computer Science."
                longDescription="I am a proud UCF Knight, and a proud member of the Burnett Honors College. During my time at UCF thus far, I have gotten involved with various extracurriculars and registered student organizations to immerse myself in the industry. In my following semesters, I make it a goal of mine to gain experience by getting involved in research and internships, as well as continue to remain in good standing with the organizations I am involved with."
            ></EducationItem>
            <EducationItem
                school={"Broward College"}
                degree={"Associate Degree"}
                courses={[
                    "Calculus 1",
                    "Calculus 2",
                    "Physics 1",
                    "Intro to Programming with C++",
                    "Intermediate Programming with C++",
                    "Intro to Programming with Python",
                ]}
                extracurriculars={[
                    "Bob Elmore Honors College",
                    "inTech Software Development Club",
                    "Competitive Programming Competitions",
                ]}
                date={{ start: "August 2021", end: "May 2023" }}
                location={"Davie, FL"}
                image="/bc.png"
                shortDescription="I have finished my Associate Degree in Computer Science through Dual Enrollment at BC."
                longDescription="Broward College is where I discovered my love for Computer Science and Programming, and is what sent me down the path of academic excellence I walk today. I completed 78 credits at Broward College entirely through dual-enrollment, which made me prepared for full-time university academics."
            ></EducationItem>
            <EducationItem
                school={"College Academy"}
                degree={"High School Diploma"}
                courses={[
                    "Calculus 1",
                    "Calculus 2",
                    "Physics 1",
                    "Intro to Programming with C++",
                    "Intermediate Programming with C++",
                    "Intro to Programming with Python",
                ]}
                extracurriculars={[
                    "National Honors Society Historian",
                    "Dungeons and Dragons Committee Founder",
                ]}
                date={{ start: "August 2021", end: "May 2023" }}
                location={"Davie, FL"}
                image="/ca.png"
                shortDescription="College Academy was an amazing opportunity to get a head start on my college education."
                longDescription="An exclusive full-time dual-enrollment program offered by Broward County Public Schools, College Academy gave me an excellent platform to get ahead and learn new things. I leveraged the opportunity to the fullest, attaining my Associate Degree before even graduating high school, as well as getting involved with National Honor Society and forming my own club."
            ></EducationItem>
        </div>
    );
}

export default Education;
