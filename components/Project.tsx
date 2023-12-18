"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface ProjectProps {
    name: string;
    shortDescription: string;
    longDescription: string;
    image: string;
    link: string;
    tags: string[];
    date: {
        start: string;
        end: string;
    };
}

const ProjectModal = ({
    longDescription,
    name,
    date,
    onClose,
}: {
    longDescription: string;
    name: string;
    date: {
        start: string;
        end: string;
    };
    onClose: () => void;
}) => {
    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10"
            style={{ transition: "transform .5s ease-out" }}
        >
            <div
                className="bg-white rounded-lg p-5 mx-2 my-8 max-w-lg w-full animate-fade-in-down"
                style={{ transition: "transform .5s ease-out" }}
            >
                <div className="mb-4 text-gray-900 break-words">
                    <p className="text-2xl mb-1">{name}</p>
                    <p className="italic mb-2">
                        {date.start} - {date.end}
                    </p>
                    <p className="mb-4">{longDescription}</p>
                </div>
                <a
                    className="px-4 py-2 bg-purple-950 hover:bg-purple-800 text-white rounded-md"
                    onClick={onClose}
                >
                    Close
                </a>
            </div>
        </div>
    );
};

function Project({
    name,
    shortDescription,
    longDescription,
    image,
    link,
    tags,
    date,
}: ProjectProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalAnimation, setModalAnimation] = useState(
        "animate-fade-in-down"
    );

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setModalAnimation("animate-fade-out-up");
        // Wait for the animation to complete before hiding the modal
        setTimeout(() => {
            setIsModalOpen(false);
        }, 500); // this should match the duration of the fade-out animation
    };

    // When you set the modal to close, after the timeout you should reset the animation state
    useEffect(() => {
        if (!isModalOpen) {
            // This will reset the animation back to 'fade in' for the next time it opens
            setModalAnimation("animate-fade-in-down");
        }
    }, [isModalOpen]);

    return (
        <>
            <li className="p-4 bg-gradient-to-tl from-purple-950 via-purple-800 to-violet-950 transition-transform hover:-translate-y-2 bg-transparent backdrop-blur-xl mshadow-md drop-shadow-2xl border-2 border-violet-900 rounded-2xl">
                <div>
                    <div className="flex">
                        <p className="text-2xl font-semibold">{name}</p>
                        <div className="relative top-0 right-0 flex">
                            <a
                                className="hover:text-violet-400"
                                onClick={openModal}
                                aria-label="View Project"
                            >
                                <svg
                                    className="fill-white hover:fill-violet-400 mx-2"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z" />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                className="hover:text-violet-400"
                                href={link}
                            >
                                <svg
                                    className="fill-white hover:fill-violet-400 mx-1"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                >
                                    <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p>{shortDescription}</p>
                    <Image
                        src={image}
                        width={250}
                        height={250}
                        alt="Project Wildspace Logo"
                        className="rounded-md drop-shadow-md my-4"
                    ></Image>
                    <ul className="flex flex-wrap">
                        {tags?.map((tag: string) => (
                            <li
                                key=""
                                className="m-1 bg-purple-950 p-1 rounded-md drop-shadow-md italic"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            </li>

            {isModalOpen && (
                <div
                    className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10 ${modalAnimation}`}
                    style={{ transition: "opacity .5s ease-out" }}
                >
                    <ProjectModal
                        longDescription={longDescription}
                        name={name}
                        date={date}
                        onClose={closeModal}
                    />
                </div>
            )}
        </>
    );
}

export default Project;
