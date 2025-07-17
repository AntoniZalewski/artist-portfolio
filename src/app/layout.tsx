// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontPlayfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Marcin Zalewski - Artysta",
  description: "Portfolio artysty malarza i rzeźbiarza Marcina Zalewskiego.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable,
          fontPlayfair.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}