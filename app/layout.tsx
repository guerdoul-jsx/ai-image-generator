import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });
import { NextUiProvider } from "@/providers/next-ui";

export const metadata: Metadata = {
  title: "Ai Image Generator",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUiProvider>
          <NextThemeProvider attribute="class" defaultTheme="dark">
            {children}
          </NextThemeProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}