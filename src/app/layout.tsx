import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "google clone",
  description: "google clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
