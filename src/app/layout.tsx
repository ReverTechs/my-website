import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blessings Chilemba - Full Stack Developer & Digital Innovator",
  description: "Welcome to my digital space! I'm Blessings Chilemba, a passionate full-stack developer creating innovative web solutions with modern technologies.",
  keywords: ["web developer", "full stack", "react", "nextjs", "typescript", "portfolio"],
  authors: [{ name: "Blessings Chilemba" }],
  creator: "Blessings Chilemba",
  openGraph: {
    title: "Blessings Chilemba - Full Stack Developer",
    description: "Passionate full-stack developer creating innovative web solutions",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
