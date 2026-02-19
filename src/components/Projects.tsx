const projects = [
    {
        title: "Collaboratory Makerspace Platform",
        company: "Senior Development Project",
        description: "A full stack makerspace management system that streamlines equipment access, project tracking, and member collaboration.",
        technologies: ["React.js", "Java", "Spring", "PostgreSQL", "AWS"],
        status: "Active",
        type: "Enterprise",
        github: null
    },
    {
        title: "Jukebox",
        company: "RIT SHPE Chapter",
        description: "A full stack interactive jukebox that integrates microcontroller based hardware with a real time web platform for song selection and queue synchronization.",
        technologies: ["Python", "React.js", "Hardware"],
        status: "Active",
        type: "Club Project",
        github: " https://github.com/csm2029/RIT-SHPE-2026-Jukebox-Project",
    },
    {
        title: "Developer Portfolio",
        company: "Personal",
        description: "Modern portfolio website showcasing professional experience and technical skills.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        status: "Development",
        type: "Portfolio",
        github: "https://github.com/AriasLcr/dev-portfolio",
        website: "https://ariaslcr.github.io"
    },
    {
        title: "Professional Society Voting Platform",
        company: "Database App Development Class",
        description: "A secure web based voting platform designed to manage elections, ballots, and role based access for professional organizations.",
        technologies: ["Node.js", "Express", "PostgreSQL", "React.js", "JWT", "Pandas"],
        status: "Completed",
        type: "Academic",
        github: "https://github.com/AriasLcr/election-app"
    },
        {
        title: "SSE Website Rebuild",
        company: "Society of Software Engineers",
        description: "A complete redesign and rebuild of the SSE website focused on improving performance, usability, and modern UI standards.",
        technologies: ["TypeScript", "React.js", "Next.js", "Prisma", "PostgreSQL"],
        status: "Production",
        type: "Club Project",
        github: "https://github.com/rit-sse/WebsiteTheSSEquel",
        website: "https://sse.rit.edu",
    },
    {
        title: "Faculty Research Database",
        company: "Database Access Class",
        description: "A Java CLI application that uses JDBC for efficient match based search and SQL querying of faculty research data.",
        technologies: ["Java", "JDBC", "MySQL"],
        status: "Completed",
        type: "Academic",
        github: "https://github.com/AriasLcr/ISTE-330-Group-1-Project",
    }
];

const Projects = () => {
    const getStatusBadge = (status: string) => {
        const statusClasses = {
            "Production": "bg-green-900 text-green-200",
            "Completed": "bg-blue-900 text-blue-200",
            "Active": "bg-purple-900 text-purple-200",
            "Development": "bg-yellow-900 text-yellow-200"
        };
        return statusClasses[status as keyof typeof statusClasses] || "bg-gray-700 text-gray-300";
    };

    const getTypeBadge = (type: string) => {
        const typeClasses = {
            "Enterprise": "bg-red-900 text-red-200",
            "Academic": "bg-indigo-900 text-indigo-200",
            "Portfolio": "bg-pink-900 text-pink-200",
            "Club Project": "bg-orange-900 text-orange-200"
        };
        return typeClasses[type as keyof typeof typeClasses] || "bg-gray-700 text-gray-300";
    };

    return (
        <section className="pt-18 w-4/5 sm:w-3/4 max-w-6xl" id="projects">
            <h2 className="text-5xl font-bold mb-10 text-white">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-[#2d2d2d] rounded-xl shadow-lg border-2 border-gray-500 p-6 hover:bg-[#353535] transition-colors flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                                <p className="text-gray-400 font-medium">{project.company}</p>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 mb-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(project.status)}`}>
                                {project.status}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeBadge(project.type)}`}>
                                {project.type}
                            </span>
                        </div>
                        
                        <p className="text-gray-300 text-left leading-relaxed mb-4 text-sm">
                            {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.map((tech, techIndex) => (
                                <span 
                                    key={techIndex}
                                    className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex gap-2 mt-auto pt-4">
                            {project.github && (
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-gray-800 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors text-sm flex-1 justify-center"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                    GitHub
                                </a>
                            )}
                            {project.website && (
                                <a 
                                    href={project.website} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 bg-blue-800 text-blue-200 rounded-lg hover:bg-blue-700 transition-colors text-sm flex-1 justify-center"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"/>
                                        <path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                                    </svg>
                                    Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects;