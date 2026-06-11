"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaGlobe } from "react-icons/fa";

export default function ProjectDescription() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const projectData = searchParams.get("project");

  if (!projectData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-white/50 mb-8">Please select a project from the projects page.</p>
          <button
            onClick={() => router.push("/")}
            className="btn-primary"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  let project = null;
  try {
    project = JSON.parse(projectData);
  } catch (error) {
    console.error("Error parsing project data:", error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Invalid Project Data</h1>
          <button
            onClick={() => router.push("/")}
            className="btn-primary"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const getProjectImages = (projectTitle) => {
    const title = projectTitle.trim();
    switch (title) {
      case "Sinetcom Official Website":
        return [project.image1];
      case "Dual Money Tracker":
        return [project.image1, project.image2];
      case "My Portfolio":
        return [project.image1];
      case "Cinemax":
        return [project.image1, project.image2];
      case "Green Super Market":
        return [project.image1,];
      case "VI Learning Platform":
        return [project.image1, project.image2];
      case "Movie library":
        return [project.image1];
      default:
        return [project.image1];
    }
  };

  const projectImages = getProjectImages(project.title);
  const showScreenshotWebsiteOverlay =
    project.websiteLink && project.title !== "Sinetcom Official Website";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen text-white">
      {/* Background orbs */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        className="max-w-4xl mx-auto px-6 py-8 md:py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-10 group"
          variants={itemVariants}
        >
          <FaArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Portfolio</span>
        </motion.button>

        {/* Project Header */}
        <motion.div className="mb-10" variants={itemVariants}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 mb-4 inline-block">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white/95 tracking-tight">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-5"
                >
                  <FaGithub className="w-4 h-4" />
                  GitHub
                  <FaExternalLinkAlt className="w-3 h-3 opacity-60" />
                </a>
              )}
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm py-2 px-5"
                >
                  <FaGlobe className="w-4 h-4" />
                  Website
                  <FaExternalLinkAlt className="w-3 h-3 opacity-60" />
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div className="glass-card p-8 mb-10" variants={itemVariants}>
          <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
            About this project
          </h3>
          <p className="text-white/50 leading-relaxed text-base md:text-lg">
            {project.description}
          </p>
        </motion.div>

        {/* Tech Stack */}
        {project.techStack && (
          <motion.div className="mb-10" variants={itemVariants}>
            <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        )}

        {/* Screenshots */}
        <motion.div variants={itemVariants}>
          <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6">
            Screenshots
          </h3>
          <div className="grid grid-cols-1 gap-6">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                className="glass-card overflow-hidden p-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.15 }}
              >
                <div className="rounded-xl overflow-hidden relative group">
                  <Image
                    src={image}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    width={800}
                    height={500}
                    className={`w-full h-auto object-cover rounded-xl transition-all duration-500 ${showScreenshotWebsiteOverlay ? "group-hover:blur-sm group-hover:scale-105" : ""
                      }`}
                  />
                  {showScreenshotWebsiteOverlay && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                      <a
                        href={project.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary px-6 py-3 flex items-center gap-2"
                      >
                        Live Website
                        <FaExternalLinkAlt className="w-4 h-4" />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
