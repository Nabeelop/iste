import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import ParticlesBackground from "@/components/ParticlesBackground";


export const metadata: Metadata = {
  title: "ISTE NITK",
  description: "A student chapter website for ISTE",
  icons: {
    icon: "/download.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ParticlesBackground />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
