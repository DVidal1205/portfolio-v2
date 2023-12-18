"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

interface PositionProps {
    title: string;
    company: string;
    description: string;
    contributions: string[];
    tags: string[];
    image: string;
    date: {
        start: string;
        end: string;
    };
}

const PositionModal = ({
    title,
    company,
    description,
    contributions,
    image,
    onClose,
}: {
    title: string;
    company: string;
    description: string;
    contributions: string[];
    image: string;
    onClose: () => void;
}) => {
    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10"
            style={{ transition: "opacity .5s ease-out" }}
        >
            <div
                className="bg-white rounded-lg p-5 mx-2 my-8 max-w-lg w-full animate-fade-in-down"
                style={{ transition: "opacity .5s ease-out" }}
            >
                <div className="mb-4 text-gray-900 break-words">
                    <p className="text-2xl mb-1">
                        {title} - {company}
                    </p>
                    <Image
                        src={image}
                        width={250}
                        height={250}
                        alt={`${company} Image`}
                        className="rounded-md drop-shadow-xl my-4 mx-auto"
                    ></Image>
                    <ul>
                        {contributions.map((contribution, index) => (
                            <li key={index} className="mb-2">
                                <span className="mr-2">&#8226;</span> {contribution}
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    className="px-4 py-2 bg-purple-950 hover:bg-purple-800 text-white rounded-md"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

function Position({
    title,
    company,
    description,
    contributions,
    tags,
    image,
    date,
}: PositionProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalAnimation, setModalAnimation] = useState("");

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
            setModalAnimation("animate-fade-in-down");
        } else {
            document.body.style.overflow = "";
            setModalAnimation("animate-fade-out-up");
        }
    }, [isModalOpen]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setModalAnimation("animate-fade-out-up");
        setTimeout(() => {
            setIsModalOpen(false);
            setModalAnimation("");
        }, 500);
    };

    return (
        <>
            <li className="p-4 bg-gradient-to-tl from-purple-950 via-purple-800 to-violet-950 transition-transform hover:-translate-y-2 bg-transparent backdrop-blur-xl mshadow-md drop-shadow-2xl border-2 border-violet-900 rounded-2xl flex flex-col">
                <div className="flex items-center space-x-2">
                    <div className="text-xl font-bold">{title}</div>
                    <div className="text-xl">- {company}</div>
                    <a className="hover:text-violet-400" onClick={openModal}>
                        <svg
                            className="fill-white hover:fill-violet-400 mx-2"
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                            fillRule="evenodd"
                            clipRule="evenodd"
                        >
                            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z" />
                        </svg>
                    </a>
                </div>
                <div className="text-xl italic mb-2">
                    {date.start}-{date.end}
                </div>
                <div className="text-xl">{description}</div>
            </li>
            {isModalOpen && (
                <PositionModal
                    title={title}
                    company={company}
                    description={description}
                    contributions={contributions}
                    image={image}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default Position;
