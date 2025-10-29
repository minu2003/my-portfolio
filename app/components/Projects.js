"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ProjectData from "./Project-Details";

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (project) => {
    const encoded = encodeURIComponent(JSON.stringify(project));
    router.push(`/projects-Description?project=${encoded}`);
  };  

  return (
    <div id="projects">
      <h1 className="text-5xl text-center mt-20">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-4 md:px-8 xl:px-44 mt-10 w-full">
        {ProjectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-2xl p-4 shadow-lg transition-all duration-300 hover:to-[#18222e]"
          >
            {/* Image with hover effect */}
            <div className="relative flex justify-center items-center h-70 bg-[#0f172a] rounded-xl mb-6 overflow-hidden group cursor-pointer"
            onClick={() => handleProjectClick(project)}
            >
              {typeof project.image === "string" ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:blur-[1px] group-hover:scale-105"
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover rounded-xl transition-all duration-300 group-hover:blur-[1px] group-hover:scale-105"
                />
              )}
              
              {/* Hover and display the Arrow  */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-gray-800 bg-opacity-80 rounded-full p-4">
                  <FaExternalLinkAlt className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-white bg-blue-600 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full"
              >
                <FaGithub className="w-6 h-6 text-white" />
              </a>
            </div>

            <h2 className="text-2xl font-semibold mt-4 text-white">{project.title}</h2>
            
            {/* Description with see more functionality */}
            <div className="mt-2">
              <p className="text-gray-300 leading-relaxed">
                {project.shortdesc}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 rounded text-sm bg-gray-800 text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
