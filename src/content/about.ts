type Segment = string | { text: string; href: string };
export type BioParagraph = string | Segment[];

export const bio: BioParagraph[] = [
  "I'm finishing a B.S. in Information Technology at RIT in December 2026.",
  "I work on backend systems where correctness matters under failure: payments that must not double-charge, access control that must not let the wrong person through, receipts that have to be readable by someone who cannot see them. Most of what I build lives at the boundary between a system and something outside it, a payment processor, an identity provider, a card reader on a door.",
  "Before Ezre I worked full-stack on a clinical platform at G&S in Lima, and before that in technology consulting at KPMG on an SAP migration.",
  [
    "I also draw and animate. There's a page of animation coursework ",
    { text: "here", href: "/animation" },
    ".",
  ],
  [
    "I'm available full-time from January 2027, and you can reach me at ",
    { text: "ariaslcr@gmail.com", href: "mailto:ariaslcr@gmail.com" },
    ".",
  ],
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['Java', 'Python', 'SQL', 'TypeScript/JavaScript', 'Ruby', 'C#'],
  },
  {
    label: 'Backend',
    items: [
      'Spring Boot', 'Ruby on Rails', '.NET', 'Node.js',
      'REST APIs', 'JWT/OAuth 2.0', 'Hibernate/JPA',
      'PostgreSQL', 'MySQL', 'SQL Server',
    ],
  },
  {
    label: 'Frontend and mobile',
    items: ['React Native', 'React', 'Angular', 'HTML/CSS', 'WCAG 2.1 accessibility'],
  },
  {
    label: 'Cloud and tooling',
    items: [
      'AWS (Lambda, SQS, EventBridge, EC2, RDS, S3)',
      'Azure (Entra ID, API Management, AI Vision)',
      'Docker', 'Git', 'CI/CD', 'JUnit', 'Postman', 'Agile/Scrum',
    ],
  },
];

export const contact = {
  email: 'ariaslcr@gmail.com',
  linkedin: 'https://linkedin.com/in/gabriel-arias-lacruz',
  github: 'https://github.com/AriasLcr',
  resume: '/resume.pdf',
};
