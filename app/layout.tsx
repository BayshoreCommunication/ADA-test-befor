import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import localFont from "next/font/local";

// TAN ANGLETON (Headline)
const tanAngleton = localFont({
  src: "./fonts/TAN - Angleton Regular.ttf",
  variable: "--font-heading",
  display: "swap",
});

// CANVA SANS (Body + Subheadline)
const canvaSans = localFont({
  src: [
    {
      path: "./fonts/canva-sans-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Medical Weight Loss",
  description: "Medical Weight Loss website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tanAngleton.variable} ${canvaSans.variable}`}
    >
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
