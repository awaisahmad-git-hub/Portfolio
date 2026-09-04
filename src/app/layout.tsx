import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { profile } from "@/data/site";
import "./globals.css";

/**
 * One family for the whole site. The variable file covers every weight we use
 * (400 / 500 / 600) in a single request, subset to latin and swapped in so
 * text is never invisible while it loads.
 */
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const description =
  ".NET engineer building web and cross-platform applications with ASP.NET Core, C#, Web APIs and .NET MAUI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.linkedin }],
  creator: profile.name,
  keywords: [
    profile.name,
    ".NET Engineer",
    "Software Engineer",
    "ASP.NET Core",
    ".NET MAUI",
    "C#",
    "Entity Framework Core",
    "Web API",
    "SQL Server",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  image: `${siteUrl}${profile.photo}`,
  sameAs: [profile.linkedin],
  address: { "@type": "PostalAddress", addressCountry: "PK" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Education Lahore",
  },
  knowsAbout: [
    "ASP.NET Core",
    ".NET MAUI",
    "C#",
    "Entity Framework Core",
    "Web API",
    "SQL Server",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        <script
          type="application/ld+json"
          // Static, author-controlled structured data.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
