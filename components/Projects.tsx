import React from "react";
import Project from "./Project";
import { start } from "repl";

function Projects() {
    return (
        <div className="mb-20 px-8" id="projects">
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
                    date={{ start: "October 6", end: "October 8" }}
                ></Project>
                <Project
                    name={"UCF Activities Bot"}
                    shortDescription={
                        "An Event bot for the University of Central Florida Official Discord Server"
                    }
                    longDescription={
                        "Created a Discord Bot using Python that executes a daily web-scraping process of the Campus Event Board website using Selenium and embeds the events in a designated channel. Deployed to an official campus discord server with 1000+ members interacting with the bot and hosted on a Raspberry Pi to ensure 24-hour uptime. This project taught me a lot about web-scraping, and how to use Selenium to automate the process. I also learned how to use the Nextcord API to create a Discord Bot, and how to host a bot on a Raspberry Pi."
                    }
                    link={"https://github.com/DVidal1205/UCF27-Bot"}
                    image={"/bot.png"}
                    tags={[
                        "Python",
                        "Nextcord",
                        "Selenium",
                        "Raspberry Pi",
                    ]}
                    date={{ start: "November 7", end: "November 12" }}
                ></Project>
            </ul>
        </div>
    );
}

export default Projects;
