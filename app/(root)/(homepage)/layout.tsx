import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from '@clerk/themes';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AK-Flix",
  description: "Watch Movies And Series For Free",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme:neobrutalism
    }}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
