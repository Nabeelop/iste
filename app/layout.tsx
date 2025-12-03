import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";


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
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
