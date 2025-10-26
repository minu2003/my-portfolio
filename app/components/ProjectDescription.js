"use client";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectDescription() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const projectData = searchParams.get("project");

  if (!projectData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <p className="text-lg">Please select a project from the projects page.</p>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  // ✅ Safe JSON parsing with try/catch
  let project = null;
  try {
    project = JSON.parse(projectData);
  } catch (error) {
    console.error("Error parsing project data:", error);
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0f172a] text-white">
        <h1 className="text-3xl font-bold mb-4">Invalid Project Data</h1>
        <button
          onClick={() => router.push("/")}
          className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  // ✅ Trim title to avoid whitespace mismatches
  const getProjectImages = (projectTitle) => {
    const title = projectTitle.trim();
    switch (title) {
      case "Dual Money Tracker":
        return [project.image1, project.image2];
      case "My Portfolio":
        return [project.image1];
      case "Cinemax":
        return [project.image1, project.image2];
      case "Green Super Market":
        return [project.image1, project.image2];
      case "VI Learning Platform":
        return [project.image1];
      case "Movie library":
        return [project.image, project.image1];
      default:
        return [project.image1];
    }
  };

  const projectImages = getProjectImages(project.title);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* 🔙 Back Button */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </button>

        {/* 🧱 Project Details Box */}
        <div className="bg-gradient-to-br from-[#111827] to-[#1f2937] rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          {/* Title and GitHub Links */}
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-4xl font-bold text-white">{project.title}</h1>
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                <span className="text-sm">GitHub</span>
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>

              {/* Portfolio Website */}
              {project.title === "My Portfolio" && (
                <a
                  href="https://minuriviranga.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <span className="text-sm">Website</span>
                  <FaExternalLinkAlt className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-400 leading-relaxed text-lg">
              {project.description}
            </p>
          </div>

          {/* Images */}
          <div className="mb-8">
            <div className="grid grid-cols-1 gap-6">
              {projectImages.map((image, index) => (
                <div key={index} className="bg-[#0f172a] rounded-xl p-4">
                  <Image
                    src={image}
                    alt={`${project.title} Screenshot ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
