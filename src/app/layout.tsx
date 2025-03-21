import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LFG Consulting - Project Management & AI Consulting Services",
  description: "LFG Consulting delivers outstanding results in project management, change management, process improvement, and AI consulting.",
  keywords: "project management, change management, process improvement, AI consulting, business consulting",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
