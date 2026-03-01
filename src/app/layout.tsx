import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iron & Grit | Elite Steroid Encyclopedia & AI Cycle Builder",
  description: "The world's most advanced scientific resource for elite bodybuilding. AI-powered cycle planning, 3D anatomical tracking, and SpaceRemit-secured coaching.",
  keywords: ["Bodybuilding", "Steroid Cycles", "AI Fitness", "SpaceRemit Payments", "Pro Coaching", "Muscle Analytics"],
  authors: [{ name: "George Maurice" }],
  openGraph: {
    title: "Iron & Grit - Scientific Bodybuilding",
    description: "Unlock the secrets of the Muscle Giants.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} font-display antialiased overflow-x-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
