import React from 'react';
import Position from './Position';

function Experience() {
  return (
    <div className="mb-20 px-6" id="experience">
      <div className="text-3xl font-bold pt-24">Experience</div>
        <p className="my-2 mb-6">
            For more information, visit my{' '}
            <a
            className="hover:text-violet-400"
            href="https://www.linkedin.com/in/dylanvidal1204/"
            >
            LinkedIn
            </a>{' '}
            or press the information icon for key contributions.
        </p>
        <ul className="grid auto-rows-fr grid-cols-1 gap-4">
            <Position
            title="Lead Volunteer"
            company="Broward Health Medical Center"
            date={{
                start: "June 8, 2021",
                end: "August 10, 2022",
            }}
            description="Working alongside another Lead Volunteer, I worked on many large-scale projects within the hospital in numerous departments: IT, Dietary Services, and Guest Relations. I also assisted in volunteer outreach and orchestrating large orientation sessions for incoming groups of volunteers."
            tags={["Leadership", "Communication", "Teamwork", "Organization"]}
            image={"/browardhealth.png"}
            contributions={["Overhauled the hospital-wide phone systems in a full-scale hardware update as instructed by the I.T. department, including distribution and installation of over 250 network phones.", "Transported new phones to 15 hospital floors and administrative offices within the hospital.", "Provided training for over 20 new student volunteers at orientation and heightened their involvement and efficiency as volunteers.", "Distributed food to patients across the hospital from Dietary Services.", "Guided visitors while working in the Guest Relations department."]}
            ></Position>
        </ul>
    </div>
  );
}

export default Experience;