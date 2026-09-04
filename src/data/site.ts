/**
 * Single source of truth for all portfolio content.
 * Every fact here comes from the CV — edit this file to update the site.
 */

export const profile = {
  name: "Awais Ahmad",
  firstName: "Awais",
  lastName: "Ahmad",
  role: ".NET Engineer",
  roleLong: "Software Engineer · .NET",
  tagline:
    "I build reliable .NET backends and cross-platform applications — from RESTful Web APIs and Entity Framework Core data layers to responsive .NET MAUI interfaces.",
  summary:
    ".NET Engineer with experience developing web and cross-platform applications using ASP.NET Core, MVC, RESTful Web APIs, .NET MAUI, C# and Entity Framework Core. Skilled in building reliable backend functionality, integrating APIs, managing database operations and creating responsive, user-friendly application interfaces.",
  location: "Pakistan",
  email: "awais.softwarengineer@gmail.com",
  phone: "+92 306 1060669",
  phoneHref: "+923061060669",
  linkedin: "https://linkedin.com/in/awais-linked-in",
  linkedinLabel: "/in/awais-linked-in",
  cv: "/Awais-Ahmad-Software-Engineer.pdf",
  photo: "/profile.png",
  photoAlt:
    "Portrait of Awais Ahmad, a .NET software engineer, wearing a navy suit and white shirt",
} as const;

export const stats = [
  { value: "4", label: "Systems built", note: "CMS · HRMS · Auction · Attendance" },
  { value: "3", label: "Engineering roles", note: "Systonova · Tekhqs · Halim Sol" },
  { value: "3.55", label: "CGPA out of 4.0", note: "BS Computer Science" },
] as const;

export const focusAreas = [
  {
    title: "Backend engineering",
    body: "Designing and extending ASP.NET Core modules, business workflows and RESTful Web APIs in C#.",
  },
  {
    title: "Cross-platform apps",
    body: "Building responsive .NET MAUI applications in C# and XAML that talk to multiple backend services.",
  },
  {
    title: "Data and persistence",
    body: "Modelling and querying SQL Server through Entity Framework Core and hand-written SQL.",
  },
  {
    title: "Identity and access",
    body: "Securing applications with JWT, ASP.NET Core Identity and Microsoft Entra ID External Identities.",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  project: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
  highlights: { label: string; body: string }[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Systonova",
    role: "Software Engineer",
    project: "Case Management System (CMS)",
    period: "Jan 2026 — Present",
    location: "Pakistan",
    current: true,
    summary:
      "Building a cross-platform case-tracking application and wiring it into the services behind it.",
    highlights: [
      {
        label: "Mobile application development",
        body: "Developed a responsive case-tracking mobile application for multiple platforms using .NET MAUI, C# and XAML.",
      },
      {
        label: "RESTful API integration",
        body: "Connected the application to multiple backend services by integrating RESTful Web APIs securely and efficiently.",
      },
      {
        label: "Case management",
        body: "Delivered case creation and updates, status tracking, case assignment and reassignment, and case-related meeting management.",
      },
      {
        label: "Documentation and collaboration",
        body: "Implemented document and attachment uploads, notes and comments, and complete activity history tracking.",
      },
      {
        label: "Identity management",
        body: "Implemented secure external access with Microsoft Entra ID External Identities for client authentication and authorization.",
      },
      {
        label: "Team workflow",
        body: "Worked in Azure DevOps — Azure Boards for tasks, bugs and work items, Azure Repos for Git-based source control and code collaboration.",
      },
    ],
    stack: [".NET MAUI", "C#", "XAML", "REST APIs", "Entra ID", "Azure DevOps"],
  },
  {
    company: "Tekhqs",
    role: "Associate Software Engineer",
    project: "Human Resource Management System (HRMS)",
    period: "Jul 2025 — Dec 2025",
    location: "Pakistan",
    summary: "Developed and extended core modules of a human resource management platform.",
    highlights: [
      {
        label: "Backend development",
        body: "Developed and enhanced key modules of a Human Resource Management System using ASP.NET Core and C#.",
      },
      {
        label: "API integration",
        body: "Created and integrated RESTful Web APIs supporting core HR processes, business workflows and data exchange between components.",
      },
      {
        label: "Team workflow",
        body: "Used Jira for task, work item and project tracking, and GitHub for version control, repository management and code collaboration.",
      },
    ],
    stack: ["ASP.NET Core", "C#", "Web API", "Jira", "GitHub"],
  },
  {
    company: "Halim Sol",
    role: ".NET Intern",
    project: "Employee Attendance Management System",
    period: "Jun 2023 — Aug 2023",
    location: "Pakistan",
    summary:
      "Modernised a WPF desktop application and supported it with accurate SQL Server queries.",
    highlights: [
      {
        label: "UI modernisation",
        body: "Redesigned WPF desktop application interfaces using XAML and Material Design principles for a modern, user-friendly experience.",
      },
      {
        label: "Database work",
        body: "Created and updated SQL Server queries to retrieve required data and produce accurate results, supporting effective system management.",
      },
    ],
    stack: ["WPF", "XAML", "Material Design", "SQL Server"],
  },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  context: string;
  year: string;
  featured?: boolean;
  blurb: string;
  features: string[];
  stack: string[];
  /** Short mark used in the abstract card artwork. */
  mark: string;
};

export const projects: Project[] = [
  {
    slug: "online-auction",
    name: "Online Auction Web Application",
    kind: "Full-stack web application",
    context: "Final Year Project · University of Education",
    year: "Final Year Project",
    featured: true,
    mark: "OA",
    blurb:
      "A complete online auction platform. Bidders browse and search listings, place bids that update live for everyone in the room, chat with each other mid-auction, and pay securely through Stripe.",
    features: [
      "Real-time bid updates and live bidder chat powered by SignalR",
      "Stripe Payment Gateway integration with payment confirmation",
      "User authentication, profile management and administrative controls",
      "Auction browsing and search, bid placement and order management",
      "Responsive, interactive interfaces built with Razor Views and Bootstrap",
      "SQL Server data layer managed through Entity Framework Core",
    ],
    stack: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "SignalR",
      "Stripe",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    slug: "case-management-system",
    name: "Case Management System",
    kind: "Cross-platform mobile application",
    context: "Systonova",
    year: "2026 — Present",
    mark: "CMS",
    blurb:
      "A responsive case-tracking application built with .NET MAUI, wired into multiple backend services and secured for external clients with Microsoft Entra ID.",
    features: [
      "Case creation, updates and status tracking",
      "Case assignment, reassignment and meeting management",
      "Document and attachment uploads with notes and comments",
      "Complete activity history tracking",
      "External identity and access via Microsoft Entra ID External Identities",
    ],
    stack: [".NET MAUI", "C#", "XAML", "RESTful Web APIs", "Entra ID"],
  },
  {
    slug: "hrms",
    name: "Human Resource Management System",
    kind: "Backend modules and APIs",
    context: "Tekhqs",
    year: "2025",
    mark: "HR",
    blurb:
      "Key modules of an HR platform built in ASP.NET Core, with RESTful Web APIs supporting core HR processes and data exchange between components.",
    features: [
      "Core HRMS modules developed and enhanced in ASP.NET Core and C#",
      "RESTful Web APIs for HR processes and business workflows",
      "Data exchange between application components",
    ],
    stack: ["ASP.NET Core", "C#", "Web API"],
  },
  {
    slug: "attendance-system",
    name: "Employee Attendance Management System",
    kind: "WPF desktop application",
    context: "Halim Sol",
    year: "2023",
    mark: "EA",
    blurb:
      "A desktop attendance system whose interface was rebuilt around Material Design principles, backed by SQL Server queries written for accurate reporting.",
    features: [
      "WPF interfaces redesigned in XAML using Material Design principles",
      "SQL Server queries created and updated for accurate data retrieval",
    ],
    stack: ["WPF", "XAML", "Material Design", "SQL Server"],
  },
];

export type SkillGroup = { title: string; note: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    note: "Day to day",
    items: ["C# (.NET 8 / 9 / 10)", "JavaScript", "HTML5", "CSS3", "XAML", "SQL"],
  },
  {
    title: "Backend",
    note: "Services and APIs",
    items: ["ASP.NET Core", "Web API", "MVC", "SignalR", "WPF"],
  },
  {
    title: "Frontend",
    note: "Interfaces",
    items: ["Blazor", ".NET MAUI", "Tailwind CSS", "Bootstrap", "Razor Views"],
  },
  {
    title: "Data",
    note: "Storage and ORM",
    items: ["SQL Server", "Entity Framework Core", "SSMS"],
  },
  {
    title: "Security and auth",
    note: "Identity",
    items: ["JWT", "ASP.NET Core Identity", "Entra ID External Identities"],
  },
  {
    title: "Ways of working",
    note: "Process and tools",
    items: ["Agile (Scrum, Kanban)", "DevOps practices", "Azure DevOps", "Jira", "GitHub"],
  },
  {
    title: "AI tooling",
    note: "Assisted development",
    items: ["Claude Code", "Codex"],
  },
  {
    title: "Professional",
    note: "How I work",
    items: ["Problem solving", "Teamwork", "Strong work ethic"],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "University of Education Lahore",
  campus: "Vehari Campus",
  grade: "3.55 / 4.0",
  gradeLabel: "CGPA",
  detail:
    "Final Year Project: an online auction web application built with ASP.NET Core MVC, Entity Framework Core, SignalR and Stripe.",
} as const;

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;
