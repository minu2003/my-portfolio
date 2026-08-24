"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Software Engineer | Cyber Security Analyst Intern",
      company: "Sinetcom (Pvt) Ltd",
      period: "2025 – Present",
      highlights: [
        "Developed a full-stack internal CRM platform using Next.js, React, TypeScript, Supabase, and PostgreSQL to manage partners, customers, deals, sales pipelines, tasks, products, revenue, expenses, and reports.",
        "Implemented deal and expense management workflows, allowing teams to track deal activities, customer visits, partner support, expenses, currencies, and supporting receipts within the CRM.",
        "Built secure role-based access control and Row Level Security (RLS) to protect sensitive business data and ensure users can access only the information permitted by their roles.",
        "Developed the company’s official corporate website using Next.js, Node.js, JavaScript, and Tailwind CSS, focusing on responsive design, scalability, and SEO.",
        "Integrated an AI-powered chatbot using the OpenAI API, n8n automation, and Pinecone vector database to provide intelligent, document-based responses and automate customer support.",
        "Used Next.js Server Actions for server-side validation and secure database operations, improving the reliability and consistency of CRM workflows.",
      ],
      techUsed: [
        "Next.js",
        "React",
        "TypeScript",
        "Supabase",
        "PostgreSQL",
        "Node.js",
        "JavaScript",
        "Tailwind CSS",
        "OpenAI API",
        "n8n",
        "Pinecone",
        "RLS",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-12 sm:py-16 px-4 sm:px-6 overflow-hidden" ref={ref}>
      <div className="max-w-4xl mx-auto w-full min-w-0">
        {/* Section Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-neutral-400 mb-3 sm:mb-4 block">
            Career Path
          </span>
          <h2 className="section-heading !text-[1.75rem] sm:!text-4xl md:!text-5xl">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative w-full min-w-0">
          {/* Vertical line */}
          <div className="absolute left-[11px] sm:left-[15px] md:left-[19px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/30 via-white/10 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              className="relative flex w-full min-w-0 mb-8 sm:mb-12 last:mb-0"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[4px] sm:left-[8px] md:left-[12px] top-3 sm:top-4 w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0">
                <div className="w-full h-full rounded-full bg-white shadow-lg shadow-white/50" />
                <div className="absolute inset-0 w-full h-full rounded-full bg-white animate-ping opacity-30 hidden sm:block" />
              </div>

              {/* Card */}
              <div className="ml-8 sm:ml-12 md:ml-16 flex-1 min-w-0 w-full">
                <div className="glass-card p-4 sm:p-6 md:p-8 max-w-full overflow-hidden">
                  {/* Header */}
                  <div className="flex flex-col gap-3 mb-3 sm:mb-4 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white/90 leading-snug break-words">
                        {exp.role}
                      </h3>
                      <p className="text-sm sm:text-base text-neutral-400 font-medium mt-1 break-words">
                        {exp.company}
                      </p>
                    </div>
                    <span className="inline-flex w-fit flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 sm:space-y-3 mt-3 sm:mt-4">
                    {exp.highlights.map((item, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start gap-2.5 sm:gap-3 text-white/50 text-xs sm:text-sm leading-relaxed min-w-0"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 mt-1.5 flex-shrink-0" />
                        <span className="break-words min-w-0">{item}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  {exp.techUsed && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-white/5">
                      {exp.techUsed.map((tech) => (
                        <span key={tech} className="tech-tag text-[0.7rem] sm:text-xs py-1 px-2 sm:px-2.5">
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
