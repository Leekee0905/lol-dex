import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Noto_Sans_KR } from "next/font/google";
import Providers from "@/providers/RQProvider";

export const metadata: Metadata = {
  title: "League Of Legends Dex",
  description: "리그오브레전드 정보를 볼 수 있는 페이지 입니다.",
};

const noto_kr = Noto_Sans_KR({
  display: "swap",
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${noto_kr.className} relative`}>
      <body className="py-[100px] h-screen">
        <Providers>
          <Header />
          <main className="container mx-auto mt-10 h-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
