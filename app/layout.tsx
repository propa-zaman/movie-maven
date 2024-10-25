"use client";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Poppins } from "next/font/google";
import { QueryClientComponent } from "@/components/global";
import { Suspense } from "react";
import useMode, { useModeType } from "@/hooks/useMode";
import { metadata } from "./metadata.config";

const poppins = Poppins({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isDark, modeCheckerDefault } = useMode() as useModeType;

  return (
    <html lang="en" className={`${isDark ? "dark" : ""}`}>
      <head>
      <title>{metadata.title as string}</title>
      <meta name="description" content={metadata.description as string} />
      <link rel="icon" href={metadata.icons?.icon as string} />
      </head>
      <body className={poppins.className}>
        <div className="w-full dark:bg-gray-900 transition-all duration-500 bg-white">
          <Suspense fallback={<div>Loading...</div>}>
            <QueryClientComponent>{children}</QueryClientComponent>
          </Suspense>
        </div>
      </body>
    </html>
  );
}
