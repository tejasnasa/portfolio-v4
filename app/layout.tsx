import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://tejasnasa.me"),
  title: "Tejas Nasa - Full Stack Developer",
  description:
    "Full Stack Developer focused on backend systems and real-time architectures. Building Nimbus, Illume, and high-performance APIs.",
  authors: [{ name: "Tejas Nasa" }],
  creator: "Tejas Nasa",
  openGraph: {
    type: "website",
    url: "https://tejasnasa.me",
    title: "Tejas Nasa - Full Stack Developer",
    description:
      "Full Stack Developer focused on backend systems and real-time architectures.",
    siteName: "Tejas Nasa",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tejas Nasa - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejas Nasa - Full Stack Developer",
    description:
      "Full Stack Developer focused on backend systems and real-time architectures.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://tejasnasa.me",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tejas Nasa",
              url: "https://tejasnasa.me",
              email: "tejasnasa1908@gmail.com",
              sameAs: [
                "https://github.com/tejasnasa",
                "https://linkedin.com/in/tejasnasa",
              ],
              jobTitle: "Full Stack Developer",
              knowsAbout: [
                "Node.js",
                "TypeScript",
                "Next.js",
                "FastAPI",
                "PostgreSQL",
                "Redis",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
