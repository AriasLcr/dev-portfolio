# Content

Source copy for the portfolio, derived from the resume. Components read this from
`src/content/`. Edit here first, then sync.

Accuracy rules:
- Anything not yet shipped stays in present progressive ("Building", "Developing").
- Do not invent metrics, dates, or technologies that are not listed here.
- `TODO` marks copy that needs the author's input. Do not fill these in.

---

## Identity

Name: Gabriel Arias
Location: Rochester, NY
Email: ariaslcr@gmail.com
LinkedIn: linkedin.com/in/gabriel-arias-lacruz
GitHub: github.com/AriasLcr

Education: Rochester Institute of Technology, B.S. Information Technology,
Aug 2022 to Dec 2026.

Availability: full-time from January 2027.

---

## `/` Intro copy

> Backend-leaning full-stack engineer. I work on payments, access control, and
> accessibility: the parts of a system that have to stay correct when things go
> wrong.
>
> Currently a software engineer intern at Ezre, building digital receipts that
> blind and low-vision customers can read. Tech lead on a makerspace platform
> delivered for an external client.
>
> Available full-time from January 2027.

---

## `/work` entries

### Ezre LLC

Role: Software Engineer Intern
Dates: May 2026 to present
Location: Remote, Washington, DC
Edge-code line: `EZRE  SOFTWARE ENGINEER INTERN  2026`
Stack: React Native, Ruby on Rails, Square API, Clover API

What it is: Ezre turns point-of-sale transactions into digital receipts that blind
and low-vision customers can read on their phones, replacing paper receipts that
require sight to use.

Work:
- Built a tipping proof-of-concept around a Square POS constraint: terminals lock
  transactions after capture, so post-payment tips are not possible. Cards are
  vaulted through Square's tokenization and gratuity posts as a separate
  transaction, which keeps Ezre out of PCI-DSS scope.
- Developing a Clover POS integration to ingest itemized transaction data from
  merchant terminals.
- Supported the live merchant deployment at the National Federation of the Blind
  2026 National Convention, where the platform processed 2,000+ accessible
  receipts through Square, and fixed a card-entry bug blind testers surfaced where
  payment fields were invisible to VoiceOver.

Decision worth explaining: why tipping had to become a separate transaction rather
than a modification of the original, and what tokenization buys in compliance scope.

Media: Google Play listing screenshots, plus Figma frames if approved.
TODO: confirm with Alberto which assets can be published.

### Crafty Studio's Collaboratory

Role: Tech Lead
Dates: Jan 2026 to present
Location: Rochester, NY
Edge-code line: `COLLABORATORY  TECH LEAD  2026`
Stack: Java, Spring Boot, React, Vite, PostgreSQL, AWS, Auth0, Stripe

What it is: a makerspace management platform built for an external client, covering
member accounts, equipment reservations, permission-based access control, and
subscription billing. Serves 1,000+ members.

Work:
- Acted as solutions architect and primary technical contact, turning an open-ended
  client request into a scoped platform, while directing a seven-person team.
- Built the REST API layer in Java and Spring Boot, securing endpoints with Spring
  Security, OAuth 2.0, and Auth0 identity federation, and modeled PostgreSQL schemas
  for membership, access logs, and payment records.
- Designed an event-driven RFID access control system to replace manual,
  staff-supervised entry, with synchronous membership, training, and waiver
  verification at the door and asynchronous logging through AWS SQS, EventBridge,
  and Lambda.
- Building the Stripe billing integration, with a Spring Boot service that owns all
  database writes and an insert-first idempotency guard so duplicate event
  deliveries produce exactly one payment record.

Decisions worth explaining:
- Why the entry decision is synchronous while logging is asynchronous.
- Why permissions are a flat role list with explicit grants rather than a hierarchy:
  seniority and capability are different axes, and a trained member can use a
  machine an untrained manager cannot.

Media: UI screenshots.
Repo: github.com/Collaboratory-Makerspace-Sleepers/collaboratory-makerspace

### Gestion y Sistemas (text entry)

Role: Software Engineer
Dates: Jan 2026 to May 2026
Location: Remote, Lima, Peru
Edge-code line: `G&S  SOFTWARE ENGINEER  2026`

> Full-stack work on a clinical case management platform connecting dental practices
> and laboratories. Built backend API services in .NET for case lifecycle state
> transitions from submission through Azure AI Vision image validation and iterative
> correction, appending correction history rather than overwriting records. Designed
> the product's UI/UX in Figma for the Doctor and Laboratory profiles, and integrated
> Microsoft Entra ID via MSAL into the .NET authentication layer with token-based
> sessions and RBAC.

No media.

### KPMG (text entry)

Role: Technology Advisory Assistant, SAP S/4HANA Cloud Migration
Dates: Jun 2025 to Dec 2025
Location: Lima, Peru
Edge-code line: `KPMG  TECHNOLOGY ADVISORY  2025`

> Supported the migration of SAP S/4HANA workloads to Azure Brazil, consolidating
> cloud infrastructure from 12 instances to 3 and unblocking integration with Peru's
> national banking API. Automated separation-of-duty auditing across 600+ roles and
> 1,000+ transactions with SQL and ABAP validation queries.

No media.

---

## `/animation`

TODO: inventory. One entry per piece with medium, context, and year.
Labels follow the edge-code pattern: `MEDIUM  CONTEXT  YEAR`.
Alt text describes the work, not the filename.

---

## `/about`

> I'm finishing a B.S. in Information Technology at RIT in December 2026.
>
> I work on backend systems where correctness matters under failure: payments that
> must not double-charge, access control that must not let the wrong person through,
> receipts that have to be readable by someone who cannot see them. Most of what I
> build lives at the boundary between a system and something outside it, a payment
> processor, an identity provider, a card reader on a door.
>
> Before Ezre I worked full-stack on a clinical platform at G&S in Lima, and before
> that in technology consulting at KPMG on an SAP migration.
>
> TODO: one or two sentences on the animation work and why it is here.
>
> Available full-time from January 2027.

### Skills

Languages: Java, Python, SQL, TypeScript/JavaScript, Ruby, C#
Backend: Spring Boot, Ruby on Rails, .NET, Node.js, REST APIs, JWT/OAuth 2.0,
Hibernate/JPA, PostgreSQL, MySQL, SQL Server
Frontend and mobile: React Native, React, Angular, Tailwind, HTML/CSS,
WCAG 2.1 accessibility
Cloud and tooling: AWS (Lambda, SQS, EventBridge, EC2, RDS, S3), Azure (Entra ID,
API Management, AI Vision), Docker, Git, CI/CD, JUnit, Postman, Swagger, Agile/Scrum