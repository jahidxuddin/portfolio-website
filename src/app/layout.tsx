import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jahid Uddin",
  description: "This website shows my projects as a hobby developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
