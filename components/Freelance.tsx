"use client";
import Image from "next/image";

interface FreelanceProps {
    name: string;
    shortDescription: string;
    image: string;
    link: string;
}

function Freelance({ name, shortDescription, image, link }: FreelanceProps) {
    const handleClick = () => {
        window.open(link, "_blank");
    };
    return (
        <>
            <li
                className="cursor-pointer p-4 bg-gradient-to-tl from-purple-950 via-purple-800 to-violet-950 transition-transform hover:-translate-y-2 bg-transparent backdrop-blur-xl mshadow-md drop-shadow-2xl border-2 border-violet-900 rounded-2xl my-3"
                onClick={handleClick}
            >
                <div>
                    <div className="flex">
                        <p className="text-2xl font-semibold">{name}</p>
                        <div className="relative top-0 right-0 flex">
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
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <p>{shortDescription}</p>
                    <Image
                        src={image}
                        width={1920}
                        height={1080}
                        alt={`${name} Image`}
                        className="rounded-md drop-shadow-xl my-4 h-44 lg:h-96 xl:h-96 w-auto mx-auto aspect-auto"
                    ></Image>
                </div>
            </li>
        </>
    );
}

export default Freelance;
