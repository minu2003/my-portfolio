"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Web Developer | Cyber Security Analyst Intern",
      company: "Sinetcom (Pvt) Ltd",
      period: "2025 – Present",
      highlights: [
        "Developing the company's official website using Next.js, Node JS, JavaScript, and Tailwind CSS, delivering a responsive, scalable, and SEO-optimized corporate platform.",
        "Integrating an AI-powered chatbot using OpenAI API, n8n automation workflows, and Pinecone vector database, enabling intelligent document-based responses and automated customer support.",
        "Managing API integrations, VPS deployment (Hostinger), performance optimization, testing, debugging, and secure coding practices, while supporting basic firewall monitoring for system security.",
      ],
      techUsed: ["Next.js", "Node.js", "Tailwind CSS", "OpenAI API", "n8n", "Pinecone", "VPS"],
    },
  ];

  return (
    <section id="experience" className="relative py-16 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium tracking-widest uppercase text-neutral-400 mb-4 block">
            Career Path
          </span>
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="relative flex flex-col items-start mb-12"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[8px] md:left-[12px] w-4 h-4 mt-2">
                <div className="w-4 h-4 rounded-full bg-white shadow-lg shadow-white/50" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-white animate-ping opacity-30" />
              </div>

              {/* Card */}
              <div className="ml-12 md:ml-16 w-full">
                <div className="glass-card p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white/90">{exp.role}</h3>
                      <p className="text-neutral-400 font-medium mt-1">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mt-4">
                    {exp.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-3 text-white/50 text-sm leading-relaxed"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-1.5 flex-shrink-0" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {exp.techUsed && (
                    <div className="flex flex-wrap gap-1.5 mt-6 pt-5 border-t border-white/5">
                      {exp.techUsed.map((tech) => (
                        <span key={tech} className="tech-tag text-xs py-1 px-2.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
