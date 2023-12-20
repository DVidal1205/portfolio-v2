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
            className="cursor-pointer fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10"
            style={{ transition: "opacity .5s ease-out" }}
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-lg shadow-md m-4
                mx-auto mt-24
                max-w-xl w-full
                sm:max-w-md sm:w-3/4
                md:max-w-lg md:w-1/2
                lg:max-w-xl lg:w-1/3
                xl:max-w-2xl
                animate-fade-in-down"
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
                        className="rounded-md drop-shadow-xl my-4 mx-auto h-48 w-auto"
                    ></Image>
                    <ul>
                        {contributions.map((contribution, index) => (
                            <li key={index} className="mb-2">
                                <span className="mr-2">&#8226;</span>{" "}
                                {contribution}
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
            <li
                className="cursor-pointer p-4 bg-gradient-to-tl from-purple-950 via-purple-800 to-violet-950 bg-transparent backdrop-blur-xl mshadow-md drop-shadow-2xl border-2 border-violet-900 rounded-2xl transition-transform hover:-translate-y-2  flex flex-col"
                onClick={openModal}
            >
                <div className="flex items-center space-x-2 flex-wrap">
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
                    {date.start} - {date.end}
                </div>
                <div className="text-xl">{description}</div>
            </li>
            {isModalOpen && (
                <div
                    className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center z-10 ${modalAnimation}`}
                    style={{ transition: "opacity .5s ease-out" }}
                >
                    <PositionModal
                        title={title}
                        company={company}
                        description={description}
                        contributions={contributions}
                        image={image}
                        onClose={closeModal}
                    />
                </div>
            )}
        </>
    );
}

export default Position;
