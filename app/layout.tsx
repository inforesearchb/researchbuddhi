import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.researchbuddhi.com"),
  title: {
    default: "ResearchBuddhi – Your Trusted Academic Research Partner",
    template: "%s | ResearchBuddhi",
  },
  description:
    "ResearchBuddhi provides expert academic research services including thesis writing, research papers, dissertations, synopsis, editing & proofreading for PhD scholars and students.",
  keywords: [
    "thesis writing",
    "research paper writing",
    "dissertation help",
    "PhD assistance",
    "academic research",
    "synopsis writing",
    "plagiarism check",
    "ResearchBuddhi",
  ],
  authors: [{ name: "ResearchBuddhi" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.researchbuddhi.com",
    siteName: "ResearchBuddhi",
    title: "ResearchBuddhi – Your Trusted Academic Research Partner",
    description:
      "Expert academic research services for PhD scholars, college students, and researchers. Thesis writing, research papers, dissertation support & more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ResearchBuddhi – Your Trusted Academic Research Partner",
    description:
      "Expert academic research services for PhD scholars and students.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
