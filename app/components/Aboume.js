"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
    {
        category: "Frontend",
        skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Angular", "Vue.js"],
    },
    {
        category: "Backend",
        skills: ["Node.js", "Java", "PostgreSQL", "MongoDB", "SQL", "Supabase", "REST APIs"],
    },
    {
        category: "Mobile",
        skills: ["Flutter", "Dart", "Firebase"],
    },
    {
        category: "DevOps & AI",
        skills: ["Docker", "AWS", "Git", "CI/CD", "OpenAI API", "Pinecone", "n8n"],
    },
];

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: "easeOut" },
        },
    };

    return (
        <section id="about-me" className="relative py-16 sm:py-20 px-4 sm:px-6" ref={ref}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                {/* Left: Bio */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-400 mb-5 block">
                        About Me
                    </span>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-3">
                        Who I{" "}
                        <span className="gradient-text">Am</span>
                    </h2>

                    <div className="w-14 h-[2px] bg-gradient-to-r from-white/50 to-transparent mb-8" />

                    <p className="text-base sm:text-[1.05rem] text-white/55 leading-[1.85]">
                        I&apos;m a BSc (Hons) Software Engineering graduate with a Second Class (Upper Division),{" "}
                        <span className="text-white/80">{" "}1 year of professional industry experience</span> and over{" "}
                        <span className="text-white/80">3 years</span> building full-stack web and cross-platform
                        applications. I specialize in React, Next.js, and Node.js — with hands-on experience in
                        authentication, RBAC, cloud deployment, and AI integration using OpenAI, Pinecone, and n8n.
                    </p>

                    <p className="text-base sm:text-[1.05rem] text-white/55 leading-[1.85] mt-5">
                        With a strong foundation in OOP, SOLID principles, and software architecture, I focus on
                        writing clean, scalable code and delivering secure, maintainable software that solves real
                        problems.
                    </p>
                </motion.div>

                {/* Right: Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500 mb-6 block">
                        Tech Stack
                    </span>

                    <motion.div
                        className="space-y-5"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {skillGroups.map(({ category, skills }) => (
                            <motion.div key={category} variants={itemVariants}>
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-white/40 shrink-0">
                                        {category}
                                    </span>
                                    <div className="flex-1 h-px bg-white/10" />
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span key={skill} className="tech-tag text-xs">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
