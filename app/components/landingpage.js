"use client";
import MinuriImage from "@/app/assets/minuri2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LandingPage(){
    const router = useRouter();

    const navigateToContact = () => {
        router.push('/contact');
    };

    const downloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Minuri_Viranga_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5,
            }
        }
    };

    // Typing animation state
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Web & Mobile App Developer";
    
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed here (lower = faster)

        return () => clearInterval(typingInterval);
    }, []);

    return(
        <motion.div 
            className="flex flex-col lg:flex-row min-h-screen max-w-7xl mx-auto gap-6 lg:gap-10 justify-center items-center px-4 lg:px-8 pt-16 sm:pt-20 md:pt-24 lg:pt-32"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            {/* Right Section - Desktop & Large Tablets */}
            <motion.div 
                className="w-full lg:w-1/2 justify-center lg:justify-end 2xl:mr-17 hidden lg:flex max-w-2xl mx-auto items-start order-1 lg:order-1 mt-6"
                variants={itemVariants}
            >
            <div className="w-full max-w-[320px] xl:max-w-[380px] 2xl:max-w-[450px] h-fit bg-gray-800 rounded-3xl shadow-2xl p-4 mx-auto mt-0 mb-12">
                <Image
            src={MinuriImage}
            alt="Minuri - Web & Mobile App Developer"
            className="object-cover rounded-xl shadow-2xl w-full h-auto max-w-md mx-auto"
            />
            </div>
            </motion.div>

            {/* left section */}
            <div className="w-full lg:w-1/2 flex-col flex mt-12 sm:mt-16 md:mt-20 lg:mt-0 2xl:mr-10 lg:mr-5 max-w-2xl mx-auto mb-4 order-2 lg:order-2">
            {/* Mobile & iPad: Hello, I'm on one line, Minuri Viranga on next line */}
            <motion.div 
                className="block 2xl:hidden max-w-xl mx-auto text-center"
                variants={itemVariants}
            >
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-1 font-bold text-center">Hello, I&apos;m</h1>
              <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl mb-3 font-bold text-center">Minuri Viranga</h1>
            </motion.div>
            {/* Desktop: original design */}
            <motion.h1 
                className="hidden 2xl:block text-6xl mb-3 font-bold text-center max-w-xl mx-auto"
                variants={itemVariants}
            >
                Hello,
            </motion.h1>
            <motion.h1 
                className="hidden 2xl:block text-6xl mb-3 font-bold text-center max-w-xl mx-auto"
                variants={itemVariants}
            >
                I&apos;m Minuri Viranga
            </motion.h1>
            <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-gray-500 text-center max-w-xl mx-auto"
                variants={itemVariants}
            >
                {displayedText}
                <span className="animate-blink"></span>
            </motion.h2>
            
            {/* Mobile & iPad image under subtitle */}
            <motion.div 
                className="block lg:hidden w-full mt-8 sm:mt-10 md:mt-12 px-6 sm:px-8 md:px-12"
                variants={itemVariants}
            >
            <div className="w-full max-w-[90vw] sm:max-w-[85vw] md:max-w-[80vw] h-[70vh] sm:h-[75vh] md:h-[80vh] bg-gray-800 rounded-3xl shadow-2xl p-4 sm:p-5 md:p-6 mx-auto mt-0 mb-12 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={MinuriImage}
                alt="Minuri - Web & Mobile App Developer"
                className="object-cover w-full h-full rounded-2xl"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
                quality={100}
                priority
              />
            </div>
          </div>
            </motion.div>
            
            <div className="w-full flex flex-col sm:flex-row gap-4 lg:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-8 max-w-xl mx-auto justify-center">
            
            {/* Projects Card */}
            <motion.div 
                className="w-full sm:max-w-xs lg:max-w-xs 2xl:w-70 bg-gray-800 rounded-2xl p-4 lg:p-5 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-3xl mb-0 mx-auto"
                variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-4xl">20+</p>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl">Projects Done</p>
              </div>
            </motion.div>

            {/* Contact Now Button Card */}
            <motion.div 
                onClick={navigateToContact}
                className="w-full sm:max-w-xs lg:max-w-xs 2xl:w-70 bg-blue-950 rounded-2xl p-6 lg:p-8 shadow-2xl transition-all duration-300 hover:shadow-3xl cursor-pointer transform hover:scale-105 mx-auto"
                variants={itemVariants}
            >
              <div className="flex items-center justify-center h-full gap-2">
                <span className="text-white text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl text-center">Contact Now</span>
                <svg 
                    className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800 dark:text-white" 
                    aria-hidden="true" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" 
                    fill="none" 
                    viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"/>
                </svg>

              </div>
            </motion.div>
          </div>

          {/* download cv button */}
          <motion.button
            onClick={downloadResume}
            className="p-8 lg:p-11 w-full 2xl:w-145 h-12 lg:h-14 xl:h-16 mt-6 sm:mt-8 md:mt-10 lg:mt-5 bg-gray-800 rounded-xl shadow-2xl transition-all duration-300 hover:shadow-3xl cursor-pointer group transform hover:scale-105 max-w-xl mx-auto"
            variants={itemVariants}
          >
            <div className="flex items-center justify-center h-full gap-3 lg:gap-4">
              <span className="text-white text-base sm:text-lg md:text-xl lg:text-lg xl:text-2xl text-center">Download CV</span>
              <svg 
                  className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800 dark:text-white" 
                  aria-hidden="true" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  fill="none" 
                  viewBox="0 0 24 24"
              >
                <path 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                />
              </svg>
            </div>
          </motion.button>


            {/* social media */}
            <motion.div 
                className="flex gap-2 lg:gap-3 mt-6 sm:mt-8 md:mt-10 lg:mt-4 justify-center flex-wrap max-w-xl mx-auto"
                variants={itemVariants}
            >
                {/* LinkedIn */}
                <motion.a 
                    href="https://www.linkedin.com/in/minuri-viranga-b9bb3829a/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                      <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                    </svg>

                </motion.a>

                {/* GitHub */}
                <motion.a 
                    href="https://github.com/minu2003" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-6 h-6 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </motion.a>

                {/* WhatsApp */}
                <motion.a 
                    href="https://wa.me/qr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-6 h-6 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
                    </svg>
                </motion.a>

                {/* Facebook */}
                <motion.a 
                    href="https://www.facebook.com/share/1E4fYbrjGC/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-6 h-6 lg:w-6 lg:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a 
                    href="https://www.instagram.com/minu_viranga?igsh=ZWg2NDRpamEyeHdi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                    </svg>

                </motion.a>
            </motion.div>
            </div>


            
        </motion.div>
    );
}