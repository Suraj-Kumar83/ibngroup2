import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/SharedComponent/Header";
import Footer from "@/SharedComponent/Footer";

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "IBN Medical",
  description: "Advanced Wound Healing with NPWT Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#07141c] text-white overflow-x-hidden font-sans">

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-20">
          {children}
        </main>

        {/* FOOTER */}
        <Footer />

      </body>
    </html>
  );
}