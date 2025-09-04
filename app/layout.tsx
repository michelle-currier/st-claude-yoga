import type { Metadata } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saint Claude Yoga Center",
  description: "Need to add the description here...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} antialiased`}>
      {/* <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > */}
      <body className="text-black px-8 h-screen justify-between">
        <Header />
        <div className="container mx-auto mt-12 max-w-6xl">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
