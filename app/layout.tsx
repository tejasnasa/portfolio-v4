import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PROJECTS from "@/data/projects.json";
import SKILLS from "@/data/skills.json";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://www.tejasnasa.me";
const SITE_NAME = "Tejas Nasa";
const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      url: SITE_URL,
      email: "tejasnasa1908@gmail.com",
      image: `${SITE_URL}/resume-pfp.png`,
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://github.com/tejasnasa",
        "https://linkedin.com/in/tejasnasa",
        "https://x.com/tejasnasa",
      ],
      knowsAbout: SKILLS,
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Maharaja Surajmal Institute of Technology",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Tejas Nasa - Full Stack Developer",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      name: "Projects",
      itemListElement: PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "SoftwareSourceCode",
          name: project.title,
          description: project.shortDesc,
          codeRepository: project.github,
          url: project.live ?? project.github,
          keywords: project.stack.join(", "),
          author: { "@id": PERSON_ID },
        },
      })),
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tejas Nasa - Full Stack Developer",
  description:
    "Full Stack Developer focused on backend systems and real-time architectures. Building Nimbus, Illume, and high-performance APIs.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Tejas Nasa - Full Stack Developer",
    description:
      "Full Stack Developer focused on backend systems and real-time architectures.",
    siteName: SITE_NAME,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejas Nasa - Full Stack Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Nasa - Full Stack Developer",
    description:
      "Full Stack Developer focused on backend systems and real-time architectures.",
    images: ["/og-image.png"],
    site: "@tejasnasa",
    creator: "@tejasnasa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-neutral-950 text-neutral-100 antialiased selection:bg-neutral-800 selection:text-neutral-100`}
      >
        <div
          className="fixed inset-0 z-[-1] bg-neutral-950"
          style={{
            backgroundImage:
              "radial-gradient(circle at center, #444 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="absolute inset-0 bg-neutral-950 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
