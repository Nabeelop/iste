import type { Metadata } from "next";
import "./globals.css";
import RouteChrome from "@/components/RouteChrome";


export const metadata: Metadata = {
  title: "ISTE NITK",
  description: "A student chapter website for ISTE"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <RouteChrome>{children}</RouteChrome>
      </body>
    </html>
  );
}
