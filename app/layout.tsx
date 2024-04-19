import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NextThemeProvider from "@/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });
import { NextUiProvider } from "@/providers/next-ui";
import { Header } from "@/components/header";
import { Toaster } from "react-hot-toast";
import { metaObject } from "@/lib/config";

export const metadata: Metadata = {
  ...metaObject(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // required this one for next-themes, remove it if you are not using next-theme
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        // required this one for next-themes, remove it if you are not using next-theme
        suppressHydrationWarning
        className={inter.className}
      >
        <NextUiProvider>
          <NextThemeProvider attribute="class" defaultTheme="light">
            <Toaster />
            <Header />
            {children}
          </NextThemeProvider>
        </NextUiProvider>
      </body>
    </html>
  );
}
