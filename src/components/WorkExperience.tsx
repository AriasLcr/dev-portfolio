import ExperienceItem from "./ExperienceItem"

const experiences = {
    "jobs" : [
        {
        "company": "G&S",
        "date": "Jan 2026 — Present",
        "title": ".NET Software Engineer Intern",
        "location": "Remote",
        "technologies": "C#, React.js, Microsoft Azure",
        "description": "At G&S, I worked on a production Identity and Access Management platform supporting user lifecycle management, company provisioning, and role based access control across internal systems. I maintained and extended an AngularJS frontend backed by .NET services and Amazon RDS, improving reliability of access workflows and reducing authorization defects. I collaborated closely with backend and security teams to ship RBAC enhancements that improved access consistency across environments and strengthened platform security posture.",
        "image": "./src/assets/gs_gestion_y_sistemas_sac_logo.jpeg",
        },
        {
        "company": "KPMG",
        "date": "Jun 2025 — Dec 2025",
        "title": "Software Engineer Intern",
        "location": "Lima, Peru",
        "technologies": "SAP, S4/HANA, Role-based Access Control",
        "description": "At KPMG, I contributed to enterprise SAP systems supporting regulated financial workflows across international markets. I migrated SAP S/4HANA workloads to Azure to unblock compliant access to Peru’s national banking currency exchange API, reducing infrastructure complexity while improving reliability. I redesigned access control models across hundreds of roles and transactions, strengthened audit readiness, and reduced production risk through extensive testing and fixes across ABAP, SQL, and role based authorization logic.",
        "image": "./src/assets/kpmg_logo.jpeg",
        },
        {
        "company": "SSE",
        "date": "Jan 2024 — Dec 2024",
        "title": ".NET Software Engineer Intern",
        "location": "Rochester, NY",
        "technologies": "C#, React.js, Microsoft Azure",
        "description": "As Lead Frontend Engineer for SSE, I led the rebuild of the organization’s academic platform using TypeScript, React, Next.js, Prisma, and PostgreSQL, supporting 200+ active students across tutoring and engineering resources. I structured onboarding, technical spikes, and contribution standards that increased returning contributors while improving code quality. I also mentored junior developers through pair programming and reviews, helping the team ship faster and more reliably.",
        "image": "./src/assets/sse-logo.png",
        },
    ],
};

const WorkExperience = () => {
    return (
        <>
            <div className="my-1 w-4/5 sm:w-1/2">
                <h2 className="text-3xl font-bold mb-10">Work Experience</h2>
                <div className="flex flex-col w-full">
                {
                    experiences.jobs.map(experience  => (
                        
                        <ExperienceItem company={experience.company} date={experience.date} title={experience.title} location={experience.location} technologies={experience.technologies} description={experience.description} image={experience.image} />
                    ))
                }
                </div>
            </div>
        </>
    )
}

export default WorkExperience;