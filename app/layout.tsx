import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ApplicationShell } from "@/components/layout/application-shell";

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
  applicationName: "TrueFinds",
  title: {
    default: "TrueFinds",
    template: "%s | TrueFinds",
  },
  description:
    "A premium educational and product discovery platform for learning product sourcing and resale in Azerbaijan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="az"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full">
        <ApplicationShell>{children}</ApplicationShell>
      </body>
    </html>
  );
}
