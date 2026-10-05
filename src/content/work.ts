export interface WorkMedia {
  src: string;
  poster?: string;
  alt: string;
  label: string;
  aspect: string;
}

export interface CaseStudy {
  id: string;
  org: string;
  edgeCode: string;
  location: string;
  stack: string[];
  url?: string;
  paragraphs: string[];
  media: WorkMedia[];
}

export interface TextEntry {
  id: string;
  org: string;
  edgeCode: string;
  location: string;
  paragraphs: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ezre',
    org: 'Ezre LLC',
    edgeCode: 'EZRE  SOFTWARE ENGINEER INTERN  MAY 2026 — PRESENT',
    location: 'Remote, Washington DC',
    stack: ['React Native', 'Ruby on Rails', 'Square API', 'Clover API'],
    url: 'https://ezre.app',
    paragraphs: [
      'Ezre replaces paper receipts with digital ones that blind and low-vision customers can actually read. The receipts are generated from POS transaction data and delivered to a phone, no paper, no sight required to understand what you bought and what you paid.',
      'I joined during the run-up to the National Federation of the Blind 2026 National Convention, the platform\'s first live merchant deployment. During prep I found and fixed a VoiceOver bug: the card-entry fields were completely invisible to screen readers. The platform processed over 2,000 receipts at the convention. I\'m also building out a Clover POS integration alongside the existing Square one, so merchants on either terminal network can use the service.',
      'The trickiest part was tipping. Square terminals lock a transaction after capture, there\'s no way to modify the original charge once the customer has paid. So tips can\'t work the way they do at most restaurants. The solution was to vault the card through Square\'s tokenization and post the gratuity as a separate transaction later. That design also keeps Ezre out of PCI-DSS scope: no raw card data ever touches Ezre\'s servers.',
    ],
    media: [
      {
        src: '/Phone_Asset_1.png',
        alt: 'Ezre app receipts list screen showing accessible digital receipts from Corinne\'s Coffee',
        label: 'EZRE  RECEIPT LIST  REACT NATIVE',
        aspect: '9/16',
      },
      {
        src: '/Phone_Asset_2.png',
        alt: 'Ezre app receipt detail screen showing itemized purchase, built for TalkBack screen reader',
        label: 'EZRE  RECEIPT DETAIL  REACT NATIVE',
        aspect: '9/16',
      },
      {
        src: '/Phone_Asset_3.png',
        alt: 'Ezre app payment methods screen with card management via Stripe',
        label: 'EZRE  PAYMENT METHODS  REACT NATIVE',
        aspect: '9/16',
      },
    ],
  },
  {
    id: 'collaboratory',
    org: "Crafty Studio's Collaboratory",
    edgeCode: 'COLLABORATORY  TECH LEAD  JAN 2026 — PRESENT',
    location: 'Rochester, NY',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'AWS', 'Auth0', 'Stripe'],
    url: 'https://github.com/Collaboratory-Makerspace-Sleepers/collaboratory-makerspace',
    paragraphs: [
      'Crafty Studio\'s Collaboratory is a makerspace management platform I built for an external client through RIT. The client needed a way to handle member accounts, equipment reservations, access control for the physical space, and subscription billing. I came in as tech lead: I scoped the project from an open-ended brief, designed the architecture, and directed a seven-person team through to delivery.',
      'The most interesting part is the door. I replaced a manual check-in process with an event-driven RFID system that verifies membership, training completion, and waiver status before granting entry. The verification is synchronous, a wrong answer at the door is immediately costly, so there\'s no room to defer it. Logging is asynchronous through AWS SQS, EventBridge, and Lambda: durable, but no added latency on the entry path.',
      'Permissions are a flat role list with explicit grants, not a hierarchy. Seniority and equipment access are different axes, a trained member can operate a machine an untrained manager cannot, and a hierarchy would collapse that distinction. The billing side is a Spring Boot service with an insert-first idempotency guard on Stripe events, so duplicate webhook deliveries produce exactly one payment record regardless of retries.',
    ],
    media: [
      {
        src: '/Screenshot%20from%202026-10-04%2023-38-56.png',
        alt: 'Collaboratory landing page with makerspace overview and member dashboard preview',
        label: 'COLLABORATORY  LANDING PAGE  REACT',
        aspect: '16/9',
      },
      {
        src: '/Screenshot%20from%202026-10-04%2023-39-21.png',
        alt: 'Collaboratory equipment rental page showing available laser cutter, 3D printer, and CNC router',
        label: 'COLLABORATORY  EQUIPMENT RENTAL  REACT',
        aspect: '16/9',
      },
      {
        src: '/Screenshot%20from%202026-10-04%2023-39-39.png',
        alt: 'Collaboratory member account page with profile information and membership plan',
        label: 'COLLABORATORY  MEMBER ACCOUNT  REACT',
        aspect: '16/9',
      },
    ],
  },
];

export const textEntries: TextEntry[] = [
  {
    id: 'gs',
    org: 'Gestion y Sistemas',
    edgeCode: 'G&S  SOFTWARE ENGINEER  JAN 2026 — MAY 2026',
    location: 'Remote, Lima, Peru',
    paragraphs: [
      'I worked on a clinical platform connecting dental practices and their labs, the software that sits between the doctor who orders a crown and the technician who makes it. My part was the case lifecycle: the state machine that moves a case from submission through image validation with Azure AI Vision, iterative correction, and completion. I built those backend services in .NET, appending correction history rather than overwriting records.',
      'I also designed the UI in Figma for both the Doctor and Laboratory profiles, and wired up Microsoft Entra ID via MSAL for authentication, with token-based sessions and RBAC on top.',
    ],
  },
  {
    id: 'kpmg',
    org: 'KPMG',
    edgeCode: 'KPMG  TECHNOLOGY ADVISORY  JUN 2025 — DEC 2025',
    location: 'Lima, Peru',
    paragraphs: [
      'I spent six months on an SAP S/4HANA migration at KPMG in Lima. The project consolidated cloud infrastructure from twelve Azure instances down to three and unblocked access to Peru\'s national banking API, which required the workloads to run in Azure Brazil for regulatory reasons.',
      'I also automated the separation-of-duty audit process, validating access against 600+ roles and 1,000+ transactions with SQL and ABAP queries. The previous process was manual review.',
    ],
  },
];
