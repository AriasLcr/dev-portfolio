const About = () => {
    return (
        <section className="pt-18" id="about">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl font-bold text-white mb-8 md:mb-12 text-center">
                    About Me
                </h2>
                
                <div className="hidden md:flex items-center gap-8 lg:gap-12">
                    <div className="flex-1">
                        <div className="text-gray-300 space-y-4 text-base lg:text-lg leading-relaxed">
                            <p>
                                I`m a computing student who enjoys building structured, secure systems and thinking through how everything fits together behind the scenes.
                                I like breaking problems down, designing clean architectures, and refining my solutions until they`re both practical and maintainable.
                                My goal is to keep growing by turning thoughtful engineering decisions into real projects that people can actually use.
                            </p>
                        </div>
                    </div>
                    
                    {/* <div className="flex-1 flex justify-center">
                        <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gray-700 rounded-2xl flex items-center justify-center border-2 border-gray-600">
                            <div className="text-center text-gray-400">
                                <div className="w-16 h-16 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>
                
                <div className="md:hidden">
                    <div className="mb-8">
                        <div className="text-gray-300 space-y-4 text-sm leading-relaxed">
                            <p>
                                I`m a computing student who enjoys building structured, secure systems and thinking through how everything fits together behind the scenes.
                                I like breaking problems down, designing clean architectures, and refining my solutions until they`re both practical and maintainable.
                                My goal is to keep growing by turning thoughtful engineering decisions into real projects that people can actually use.
                            </p>
                        </div>
                    </div>
{/* 
                    <div className="flex justify-center">
                        <div className="w-68 h-68  bg-gray-700 rounded-2xl flex items-center justify-center border-2 border-gray-600">
                            <div className="text-center text-gray-400">
                                <div className="w-12 h-12 mx-auto mb-3 bg-gray-600 rounded-full flex items-center justify-center">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default About