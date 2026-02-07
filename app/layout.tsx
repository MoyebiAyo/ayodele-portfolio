import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayodele - Software Developer Portfolio",
  description: "Portfolio website of Ayodele, a passionate software developer specializing in building exceptional digital experiences.",
  keywords: ["Ayodele", "Software Developer", "Web Developer", "Portfolio", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Ayodele" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <div className="mesh-bg" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
