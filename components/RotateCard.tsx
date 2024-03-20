"use client";
import React from "react";
import { useState } from "react";

const RotateCard = ({ children }: { children: React.ReactNode }) => {
    const [rotationX, setRotationX] = useState(0);
    const [rotationY, setRotationY] = useState(0);

    const multi = 70;
    const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        const x =
            ((e.clientX - (rect.left + rect.width / 2)) / rect.width) * multi;
        const y =
            ((e.clientY - (rect.top + rect.height / 2)) / rect.height) * multi;
        setRotationX(x);
        setRotationY(y);
    };
    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {
                setRotationX(0);
                setRotationY(0);
            }}
            style={{
                transform: `perspective(1000px) scale3d(1, 1, 1) rotateY(${-rotationX}deg) rotateX(${rotationY}deg)`,
            }}
        >
            {children}
        </div>
    );
};

export default RotateCard;
