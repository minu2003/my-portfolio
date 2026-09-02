"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutMe() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { category: "Frontend", items: ["Next.js", "React.js", "TypeScript", "JavaScript", "Angular", "Vue.js", "jQuery", "HTML5", "CSS3", "Tailwind CSS", "MUI", "Bootstrap"] },
        { category: "Mobile App", items: ["Flutter", "Dart", "Firebase"] },
        { category: "Backend", items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "RBAC", "Java", "SQL", "MongoDB", "Supabase", "PostgreSQL", "Database Design"] },
        { category: "AI & Automation", items: ["OpenAI API", "Pinecone", "n8n"] },
        { category: "DevOps", items: ["CI/CD", "Docker", "Git", "AWS", "Cloud Deployment", "Vercel"] },
    ];

    const stats = [
        { number: "3+", label: "Years Hands-on" },
        { number: "1+", label: "Year Industry" },
        { number: "15+", label: "Technologies" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="about-me" className="relative py-16 px-6" ref={ref}>
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-4 block">
                        Get to Know Me
                    </span>
                    <h2 className="section-heading">
                        About <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card p-8 mb-8">
                            <p className="text-lg text-white/60 leading-relaxed mb-6">
                                BSc (Hons) Software Engineering graduate with a Second Class (Upper Division),
                                <span className="text-white font-medium"> 1 year of professional industry experience</span>,
                                and over <span className="text-white font-medium">3 years of hands-on experience</span> in
                                full-stack web and cross-platform application development.
                            </p>
                            <p className="text-base text-white/45 leading-relaxed mb-4">
                                Proficient in React.js, Next.js, Node.js, TypeScript, JavaScript, Java, SQL,
                                MongoDB, and RESTful APIs, with a strong foundation in OOP, SOLID principles,
                                data structures and algorithms, software architecture, SDLC, and secure programming.
                            </p>
                            <p className="text-base text-white/45 leading-relaxed">
                                Experienced in authentication, Role-Based Access Control (RBAC), Git, CI/CD,
                                Docker, AWS, cloud deployment, and database design. Hands-on with AI integration
                                using OpenAI API, Pinecone, and n8n — focused on building secure, scalable,
                                and maintainable software.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                        >
                            {stats.map(({ number, label }, index) => (
                                <motion.div
                                    key={label}
                                    variants={itemVariants}
                                    className={`glass-card p-5 text-center group ${index === 2 ? 'col-span-2' : ''}`}
                                >
                                    <p className="text-3xl font-bold gradient-text mb-1">{number}</p>
                                    <p className="text-xs text-white/40 uppercase tracking-wider">{label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-xl font-semibold text-white/80 mb-6">Tech Stack</h3>
                        <div className="space-y-6">
                            {skills.map(({ category, items }) => (
                                <motion.div
                                    key={category}
                                    className="glass-card p-6"
                                    variants={itemVariants}
                                >
                                    <p className="text-sm font-medium text-neutral-400 mb-3 uppercase tracking-wider">
                                        {category}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((skill) => (
                                            <span key={skill} className="tech-tag">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
