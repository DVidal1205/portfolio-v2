import React from "react";
import Project from "./Project";

function Projects() {
    return (
        <div className="mb-20 px-6" id="projects">
            <div className="text-3xl font-bold pt-24">Projects</div>
            <p className="my-2 mb-6">
                For more information, visit my{" "}
                <a
                    className="hover:text-violet-400"
                    href="https://github.com/DVidal1205"
                >
                    Github
                </a>{" "}
                or press the information icon.
            </p>
            <ul className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Project
                    name={"Project Wildspace"}
                    shortDescription={
                        "A Generative AI Desktop Application to assist in Worldbuilding"
                    }
                    longDescription={
                        "Project Wildspace was developed for the KnightHacks 2023 Hackathon by myself and two other developers. I led the project by assigning tasks to the three of us, coming up with sketches of the UI, and leading the implementation of the Langchain Artificial Intelligence interfacing. This project was a lot of fun, and my first time experiencing the software development process from start to finish: ideation, creation, and deployment. Since the Hackathon, we have accumulated over 65 downloads among players in the Dungeons and Dragons community! We have continued to develop this application post-Hackathon, with hopes of migrating Wildspace to the browser."
                    }
                    link={"https://www.projectwildspace.tech"}
                    image={"/wildspace.png"}
                    tags={[
                        "Python",
                        "Qt Creator",
                        "LangChain",
                        "Inno Installer",
                    ]}
                    date={{ start: "October 6, 2023", end: "October 8, 2023" }}
                ></Project>
                <Project
                    name={"UCF Activities Bot"}
                    shortDescription={
                        "An Event bot for the University of Central Florida Official Discord Server"
                    }
                    longDescription={
                        "Created a Discord Bot using Python that executes a daily web-scraping process of the Campus Event Board website using Selenium and embeds the events in a designated channel. Deployed to an official campus discord server with 1000+ members interacting with the bot, hosted on a Raspberry Pi to ensure 24-hour uptime. This project taught me a lot about web-scraping, and how to use Selenium to automate the process. I also learned how to use the Nextcord API to create a Discord Bot, and how to host a bot on a Raspberry Pi."
                    }
                    link={"https://github.com/DVidal1205/UCF27-Bot"}
                    image={"/bot.png"}
                    tags={["Python", "Nextcord", "Selenium", "Raspberry Pi"]}
                    date={{
                        start: "November 7, 2023",
                        end: "November 12, 2023",
                    }}
                ></Project>
                <Project
                    name={"Wordle Replica"}
                    shortDescription={
                        "A replacation of the popular game, Wordle, as a Desktop Application"
                    }
                    longDescription={
                        "After being disatisfied with eyesore Command Line Interface applications, I decided to dive into the world of GUI development. I used the Qt Creator IDE to create a C++ application that replicated the popular game, Wordle. This project taught me a lot about UI development, design principles, and how to use the Qt Creator IDE. This project was my first project to make it out of the command line, which felt like a huge step for me as a developer."
                    }
                    link={
                        "https://github.com/DVidal1205/Projects/tree/main/WordleQt"
                    }
                    image={"/wordle.jpg"}
                    tags={["C++", "Qt Creator"]}
                    date={{
                        start: "September 18, 2023",
                        end: "September 29, 2023",
                    }}
                ></Project>
                <Project
                    name={"Portfolio V1"}
                    shortDescription={
                        "The first iteration of my personal portfolio website."
                    }
                    longDescription={
                        "After my first few months of learning Computer Science, I learned of the standard of having a personal portfolio. Over the following 5 months, I learned HTML, CSS, and JavaScript essentials off of LinkedIn Learning, which was provided by my community college. This website was my first real project, and I learned a lot about web development and design principles. This website was a stepping stone to my current portfolio, and I am proud of the work I put into it over the following months."
                    }
                    link={"https://github.com/DVidal1205/DVidal1205.github.io"}
                    image={"/portfoliov1.png"}
                    tags={["HTML", "CSS", "JavaScript"]}
                    date={{
                        start: "May 5, 2022",
                        end: "December 18, 2023",
                    }}
                ></Project>
                <Project
                    name={"NPC Generator"}
                    shortDescription={
                        "A Desktop Application that generates a pseudo-random NPC for Dungeons and Dragons"
                    }
                    longDescription={
                        "I built this application for the Shellhacks 2023 Hackathon as a way to embrace my hobby of dungeons and dragons and be able to come up with a finished product. I built this project with the Tkinter library, which was an excellent learning experience of how NOT to use a GUI library. This project was a stepping stone to my journey through Qt Creator as I searched for a new GUI framework, and a baseline for Project Wildspace."
                    }
                    link={"https://github.com/DVidal1205/DNDTTK"}
                    image={"/dndttk.jpg"}
                    tags={["Python", "Tkinter"]}
                    date={{
                        start: "September 15, 2023",
                        end: "September 29, 2023",
                    }}
                ></Project>
                <Project
                    name={"Tic-Tac-Toe AI"}
                    shortDescription={
                        "A CLI program to play against a Tic-Tac-Toe AI"
                    }
                    longDescription={
                        "Developed a simple replica of the game TicTacToe, and integrated it with a minimax artificial intelligence algorithm. Utilizes object-oriented programming practices, as well as function recursion and two-dimensional array management. Written fully in Python."
                    }
                    link={
                        "https://github.com/DVidal1205/Projects/tree/main/TicTacToe%20AI"
                    }
                    image={"/tictactoe.jpg"}
                    tags={["Python"]}
                    date={{
                        start: "June 15, 2023",
                        end: "June 25, 2023",
                    }}
                ></Project>
            </ul>
        </div>
    );
}

export default Projects;
