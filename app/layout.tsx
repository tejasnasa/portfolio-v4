import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tejas Nasa - Full Stack Developer",
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
          <div className="absolute inset-0 bg-neutral-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
