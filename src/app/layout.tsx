import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Noto_Sans_KR } from "next/font/google";
import Providers from "@/providers/RQProvider";
import { Suspense } from "react";
import Loading from "./loading";
import { ThemeProvider } from "next-themes";
import ThemeButton from "@/components/layout/ThemeButton";
export const metadata: Metadata = {
  title: "League Of Legends Dex",
  description: "리그오브레전드 정보를 볼 수 있는 페이지 입니다.",
};

const noto_kr = Noto_Sans_KR({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto_kr.className}`} suppressHydrationWarning>
      <body className="min-h-screen">
        <Providers>
          <ThemeProvider attribute="class">
            <Header />
            <Suspense fallback={<Loading />}>
              <main className="mx-auto min-h-screen flex flex-col items-center">
                {children}
              </main>
              <ThemeButton />
            </Suspense>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
