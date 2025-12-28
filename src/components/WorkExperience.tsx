const experiences = {
    "jobs" : [
        {
        "company": "G&S",
        "date": "Jan 2026 - Present",
        "title": ".NET Software Engineer Intern",
        "location": "Remote",
        "skills": "C#, React.js, Microsoft Azure",
        "image": "../assets/gs_gestion_y_sistemas_sac_logo.jpeg",
        "color": "FF65A3"
        },
        {
        "company": "KPMG",
        "date": "Jun 2025 - Dec 2025",
        "title": "Software Engineer Intern",
        "location": "Lima, Peru",
        "skills": "SAP, S4/HANA, Role-based Access Control",
        "image": "../assets/kpmg_logo.jpeg",
        "color": "7AFCFF"
        },
        {
        "company": "G&S",
        "date": "Jan 2026 - Present",
        "title": ".NET Software Engineer Intern",
        "location": "Remote",
        "skills": "C#, React.js, Microsoft Azure",
        "image": "../assets/sse-logo.png",
        "color": "FEFF9C"
        },
    ],
};

const WorkExperience = () => {
    return (
        <>
            <h2 className="text-3xl font-bold">Work Experience</h2>
            <div className="my-6">
                {
                    experiences.jobs.map(experience  => (
                        <div className={`bg-[#` + experience.color + `]`}>
                            
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default WorkExperience;