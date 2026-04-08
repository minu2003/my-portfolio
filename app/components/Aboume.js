"use client";
import { useEffect, useState } from "react";

export default function AboutMe() {
    // Typing animation state
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "I'm a passionate and detail-oriented Software Engineering graduate with over 4 years of experience in front-end, full-stack, and mobile application development. I enjoy transforming ideas into responsive, user-friendly digital experiences through clean and efficient code. Driven by curiosity and continuous learning, I thrive in collaborative environments where I can contribute to building innovative and impactful solutions that make a real difference.";

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 30); // Adjust typing speed here (lower = faster)

        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div id="about-me" className="mt-17 ml-5 md:ml-35 lg:ml-35 mr-5 md:mr-35 lg:mr-35">
            <h1 className="text-5xl text-center">About Me</h1>
            <p className="text-2xl text-gray-500 text-center mt-5 ml-2 mr-2 md:ml-6 md:mr-6 lg:ml-6 lg:mr-6">
                {displayedText}
                <span className="animate-pulse"></span>
            </p>
        </div>
    )
}
