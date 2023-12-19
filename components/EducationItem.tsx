"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface EducationItemProps {
    school: string;
    degree: string;
    courses: string[];
    extracurriculars: string[];
    shortDescription: string;
    longDescription: string;
    image: string;
    location: string;
    date: {
        start: string;
        end: string;
    };
}

function EducationItem({
    school,
    degree,
    courses,
    extracurriculars,
    date,
    shortDescription,
    longDescription,
    image,
    location
}: EducationItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="my-5 p-4 bg-gradient-to-tl from-purple-950 via-purple-800 to-violet-950 bg-transparent backdrop-blur-xl mshadow-md drop-shadow-2xl border-2 border-violet-900 rounded-2xl">
            <div className="flex justify-between items-center p-4 rounded-lg flex-wrap">
                {image && (
                    <div className="flex-shrink-0">
                        <Image
                            src={image}
                            width={540}
                            height={540}
                            alt={`${school} Image`}
                            className="rounded-md drop-shadow-xl my-4 h-28 w-auto"
                        ></Image>
                    </div>
                )}
                <div className="flex-grow ml-4">
                    <h3 className="text-lg font-bold">
                        {school} - {degree}
                    </h3>
                    <p className="italic">
                        {date?.start} - {date?.end}
                    </p>
                    <p className="text-sm">
                        {location}
                    </p>
                    <p className="">{shortDescription}</p>
                </div>
                <button
                    onClick={toggleAccordion}
                    className="flex-none bg-purple-700 rounded p-2 hover:bg-purple-500 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-6 w-6 transform transition-transform ${
                            isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
            </div>
            <div
                ref={contentRef}
                className="transition-all duration-500 ease-in-out overflow-hidden"
                style={{
                    height: isOpen
                        ? `${contentRef.current?.scrollHeight}px`
                        : "0px",
                }}
            >
                <div className="p-4">
                    <p className="mb-2">{longDescription}</p>
                    <h4 className="font-bold">Courses</h4>
                    <ul className="list-disc pl-5 mb-2">
                        {courses?.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                    <h4 className="font-bold">Extracurriculars</h4>
                    <ul className="list-disc pl-5">
                        {extracurriculars?.map((activity, index) => (
                            <li key={index}>{activity}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EducationItem;
