/**
 * Single source of truth for all portfolio content.
 *
 * Facts come from the CV; the wording is deliberately condensed for the web —
 * short lines that a recruiter can scan, not CV prose. Keep it that way.
 */

export const profile = {
  name: "Awais Ahmad",
  firstName: "Awais",
  lastName: "Ahmad",
  role: ".NET Engineer",
  /** One value-focused line. Nothing else belongs in the hero. */
  tagline: "I build .NET applications end to end — from the API layer to the interface.",
  location: "Pakistan",
  email: "softwarengineer@gmail.com",
  phone: "+92 306 1060669",
  phoneHref: "+923061060669",
  linkedin: "https://linkedin.com/in/awais-linked-in",
  linkedinLabel: "/in/awais-linked-in",
  cv: "/Awais-Ahmad-Software-Engineer.pdf",
  photo: "/profile.png",
  photoAlt: "Awais Ahmad, .NET software engineer",
} as const;

/** Two sentences. Placement, then current work — no overlap with the hero. */
export const about = {
  summary:
    "Backend-leaning engineer working in ASP.NET Core, C# and Entity Framework Core, with cross-platform delivery in .NET MAUI.",
  current:
    "Currently at Systonova, building a case management system for external clients.",
} as const;

export const stats = [
  { value: "3", label: "Engineering roles" },
  { value: "4", label: "Systems delivered" },
  { value: "3.55", label: "CGPA / 4.0" },
] as const;

export type Experience = {
  company: string;
  role: string;
  project: string;
  period: string;
  current?: boolean;
  /** Three or four impact-focused lines. Never more. */
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Systonova",
    role: "Software Engineer",
    project: "Case Management System",
    period: "Jan 2026 — Present",
    current: true,
    points: [
      "Built a cross-platform case-tracking application in .NET MAUI, C# and XAML.",
      "Integrated RESTful Web APIs across multiple backend services.",
      "Secured external client access with Microsoft Entra ID External Identities.",
      "Shipped case assignment, document uploads and full activity history.",
    ],
    stack: [".NET MAUI", "C#", "XAML", "REST APIs", "Entra ID", "Azure DevOps"],
  },
  {
    company: "Tekhqs",
    role: "Associate Software Engineer",
    project: "Human Resource Management System",
    period: "Jul 2025 — Dec 2025",
    points: [
      "Developed and extended core HRMS modules in ASP.NET Core and C#.",
      "Delivered RESTful Web APIs for HR processes and business workflows.",
      "Worked in an Agile team using Jira and GitHub.",
    ],
    stack: ["ASP.NET Core", "C#", "Web API", "Jira", "GitHub"],
  },
  {
    company: "Halim Sol",
    role: ".NET Intern",
    project: "Employee Attendance Management System",
    period: "Jun 2023 — Aug 2023",
    points: [
      "Rebuilt WPF desktop interfaces in XAML using Material Design.",
      "Wrote SQL Server queries for accurate attendance reporting.",
    ],
    stack: ["WPF", "XAML", "SQL Server"],
  },
];

export type Project = {
  slug: string;
  name: string;
  kind: string;
  context: string;
  featured?: boolean;
  /** One or two sentences: what it is and what it delivers. */
  blurb: string;
  /** Featured project only — three short capability lines. */
  highlights?: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "online-auction",
    name: "Online Auction Platform",
    kind: "Full-stack web application",
    context: "Final Year Project · University of Education",
    featured: true,
    blurb:
      "A full-stack auction platform where bids update live for every bidder in the room and payments settle through Stripe.",
    highlights: [
      "Live bidding and bidder chat over SignalR",
      "Stripe checkout with payment confirmation",
      "Authentication, admin controls and order management",
    ],
    stack: [
      "ASP.NET Core MVC",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "SignalR",
      "Stripe",
    ],
  },
  {
    slug: "case-management-system",
    name: "Case Management System",
    kind: "Cross-platform application",
    context: "Systonova",
    blurb:
      "Case tracking for external clients across platforms — assignment, documents and activity history, secured with Microsoft Entra ID.",
    stack: [".NET MAUI", "C#", "XAML", "REST APIs", "Entra ID"],
  },
  {
    slug: "hrms",
    name: "HR Management System",
    kind: "Backend modules and APIs",
    context: "Tekhqs",
    blurb:
      "Core modules and RESTful Web APIs powering HR processes and data exchange between application components.",
    stack: ["ASP.NET Core", "C#", "Web API"],
  },
  {
    slug: "attendance-system",
    name: "Employee Attendance System",
    kind: "Desktop application",
    context: "Halim Sol",
    blurb:
      "A WPF attendance tool rebuilt around Material Design, backed by SQL Server queries written for accurate reporting.",
    stack: ["WPF", "XAML", "SQL Server"],
  },
];

export type SkillGroup = { title: string; items: string[] };

/** Only what is actually used in the work above. */
export const skillGroups: SkillGroup[] = [
  { title: "Languages", items: ["C#", "JavaScript", "SQL", "HTML", "CSS", "XAML"] },
  { title: "Backend", items: ["ASP.NET Core", "Web API", "MVC", "SignalR", "WPF"] },
  { title: "Frontend", items: [".NET MAUI", "Blazor", "Razor", "Tailwind CSS", "Bootstrap"] },
  { title: "Data", items: ["SQL Server", "Entity Framework Core"] },
  {
    title: "Security",
    items: ["JWT", "ASP.NET Core Identity", "Entra ID External Identities"],
  },
  { title: "Tools", items: ["Azure DevOps", "Jira", "Git", "GitHub", "Agile"] },
];

export const education = {
  degree: "Bachelor of Computer Science",
  institution: "University of Education Lahore",
  campus: "Vehari Campus",
  grade: "3.55",
  gradeMax: "4.0",
} as const;

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;
