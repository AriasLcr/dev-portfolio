const Contact = () => {

    return (
        <section className="py-18" id="contact">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-white mb-8 md:mb-12 text-center">
                    Get In Touch
                </h2>
                
                <div className="grid md:grid-cols-1 gap-8 md:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">
                                Let's Connect
                            </h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                I'm always interested in discussing new opportunities, projects, 
                                or just connecting with fellow developers.
                                <br />Feel free to reach out!
                            </p>
                        </div>
                        
                        {/* Contact Buttons */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* LinkedIn */}
                            <a 
                                href="https://linkedin.com/in/gabriel-arias-lacruz" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-500 hover:bg-gray-700 transition-all group"
                            >
                                <div className="shrink-0 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors">
                                        LinkedIn
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Connect with me professionally
                                    </div>
                                </div>
                            </a>
                            
                            {/* Email */}
                            <a 
                                href="mailto:ariaslcr@gmail.com"
                                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-green-500 hover:bg-gray-700 transition-all group"
                            >
                                <div className="shrink-0 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-white group-hover:text-green-400 transition-colors">
                                        Email
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        ariaslcr@gmail.com
                                    </div>
                                </div>
                            </a>
                            
                            {/* GitHub */}
                            <a 
                                href="https://github.com/AriasLcr" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-orange-500 hover:bg-gray-700 transition-all group"
                            >
                                <div className="shrink-0 w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center group-hover:bg-gray-500 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-white group-hover:text-orange-400 transition-colors">
                                        GitHub
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        View my projects
                                    </div>
                                </div>
                            </a>
                            
                            {/* Resume */}
                            <a 
                                href="/resume.pdf" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 border border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all group"
                            >
                                <div className="shrink-0 w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-white group-hover:text-purple-400 transition-colors">
                                        Resume
                                    </div>
                                    <div className="text-sm text-gray-400">
                                        Download PDF
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact