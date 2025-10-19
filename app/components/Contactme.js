"use client";
import { useState } from "react";

export default function ContactMe() {
    const [copied, setCopied] = useState(false);
    const email = "minuriviranga@gmail.com";

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div id="contact" className="min-h-screen flex flex-col justify-center items-center px-4 py-16 mt-15">
            {/* Contact Card */}
            <div className="w-full max-w-xl">
                <div className="bg-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                    <div className="text-center">
                        {/* Email Icon */}
                        <div className="w-20 h-20 bg-blue-950 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                            <svg 
                                className="w-10 h-10 text-white" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth="2" 
                                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>

                        {/* Email Section */}
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Email Me</h2>
                        
                        <div className="bg-gray-700 rounded-2xl p-6 mb-8 border border-gray-600">
                            <div className="flex items-center justify-between">
                                <div className="flex-1">
                                    <p className="text-gray-300 text-sm mb-2">Email Address</p>
                                    <a 
                                        href={`mailto:${email}`}
                                        className="text-white text-lg md:text-xl font-medium break-all hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                                    >
                                        {email}
                                    </a>
                                </div>
                                <button
                                    onClick={copyToClipboard}
                                    className="ml-4 p-3 bg-blue-950 hover:bg-blue-900 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-600 hover:border-gray-500"
                                    title="Copy email"
                                >
                                    {copied ? (
                                        <svg 
                                            className="w-6 h-6 text-green-400" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth="2" 
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    ) : (
                                        <svg 
                                            className="w-6 h-6 text-white" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth="2" 
                                                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                            {copied && (
                                <div className="mt-3 text-center">
                                    <p className="text-green-400 text-sm font-medium">
                                        Email copied to clipboard!
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Additional Contact Methods */}
            <div className="mt-4 text-center">
                <p className="text-gray-400 text-lg mb-2">You can also find me on:</p>
                <div className="flex gap-3 justify-center flex-wrap">
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/minuri-viranga-b9bb3829a/" target="_blank" rel="noopener noreferrer" 
                       className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd"/>
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z"/>
                        </svg>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/minu2003" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/qr/" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488"/>
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a href="https://www.facebook.com/share/1E4fYbrjGC/" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600">
                        <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/minu_viranga?igsh=ZWg2NDRpamEyeHdi" target="_blank" rel="noopener noreferrer"
                       className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-700 hover:border-gray-600">
                        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
