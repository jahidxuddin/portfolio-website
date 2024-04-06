import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Jahid Uddin",
  description: "Diese Webseite zeigt meine Projekte als Hobby Entwickler.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="bg-background text-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
