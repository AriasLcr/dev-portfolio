

const ExperienceItem = ({company, date, title, location, technologies, description, image}: {company :string, date: string, title: string, location: string, technologies: string, description: string, image: string}) => {

    return (
        <div className="bg-[#2d2d2d] rounded-xl shadow-lg border-2 border-gray-500 p-4 sm:p-6 hover:bg-[#353535] transition-colors my-4 sm:my-6">
            {/* Header Section - Logo + Company Info */}
            <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="shrink-0">
                    <img 
                        src={image} 
                        alt={`${company} logo`} 
                        className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain rounded-lg bg-white/5 p-1" 
                    />
                </div>
                
                <div className="flex-1 min-w-0">
                    {/* Title and Company */}
                    <div className="mb-1 flex justify-start">
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight mr-1">
                            {title}
                        </h3>
                        |
                        <p className="text-lg sm:text-xl font-semibold text-gray-300 leading-tight ml-1">
                            {company}
                        </p>
                    </div>
                    
                    {/* Date and Location - Stack on mobile, inline on larger screens */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-gray-400">
                        <span className="font-medium">{date}</span>
                        <span className="hidden sm:inline text-gray-500">•</span>
                        <span>{location}</span>
                    </div>
                </div>
            </div>

            {/* Technologies */}
            <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                    {technologies.split(', ').map((tech, index) => (
                        <span 
                            key={index}
                            className="px-2 py-1 bg-gray-700 text-gray-300 text-xs font-medium rounded"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>

            {/* Description */}
            <div className="text-gray-300 text-left text-sm sm:text-base leading-relaxed">
                {description}
            </div>
        </div>
    )
}

export default ExperienceItem;