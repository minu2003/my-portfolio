"use client";

export default function ExperienceSection() {
  return (
    <div id="experience">
    <section className="text-white py-10 px-6 md:px-16 mt-15">
      <h2 className="text-5xl text-center mb-10 text-gray-900 dark:text-white">Experience</h2>
      
      <div className="max-w-4xl mx-auto bg-[#111827] p-15 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold">Cyber Security Analyst Intern</h3>
            <p className="text-blue-400">Sinetcom (Pvt) Ltd</p>
            <p className="text-gray-400 text-sm mt-1">August 2025 – Present</p>
          </div>
        </div>

        <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
          <li>Managing and monitoring network threats and vulnerabilities.</li>
          <li>Learning and working with enterprise firewalls and security tools.</li>
          <li>Assisting in incident response and threat analysis.</li>
          <li>Developing foundational skills in cybersecurity management and monitoring.</li>
        </ul>
      </div>
    </section>
    </div>
  );
}
