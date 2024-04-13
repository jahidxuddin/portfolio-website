import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import React from "react";
import {Toaster} from "@/components/ui/toaster";

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
      <body className="bg-background text-text overflow-x-hidden">
        <Navbar />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
