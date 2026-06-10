import type { Metadata, Viewport } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: "Adfily | Defying Marketing Limitations",
  description: "A full-spectrum digital marketing, creative production, and talent management agency elevating brands to new heights through hyper-targeted strategies and disruptive content.",
  keywords: ["digital marketing", "creative agency", "talent management", "UGC production", "SEO optimization", "web development", "social media strategy"],
  authors: [{ name: "Adfily Agency" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-purple selection:text-white">
        {/* Decorative ambient glowing backdrops */}
        <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-accent-purple/10 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-purple-light/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        {/* Navigation Navbar */}
        <Navbar />
        
        {/* Main Content Area */}
        <main className="flex-grow pt-24">
          {children}
        </main>
        
        {/* Site Footer */}
        <Footer />
      </body>
    </html>
  );
}
