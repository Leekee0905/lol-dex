import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Noto_Sans_KR } from "next/font/google";
import Providers from "@/providers/RQProvider";
import { Suspense } from "react";
import Loading from "./loading";

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
    <html lang="ko" className={`${noto_kr.className}`}>
      <body className="py-[100px] min-h-screen">
        <Providers>
          <Header />
          <Suspense fallback={<Loading />}>
            <main className="container mx-auto mt-10 h-full">{children}</main>
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
