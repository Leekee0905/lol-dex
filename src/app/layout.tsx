import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Noto_Sans_KR } from "next/font/google";
import Providers from "@/providers/RQProvider";
import { getLatestVersion } from "@/utils/ddragonApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

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
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["version"],
    queryFn: () => getLatestVersion(),
  });
  return (
    <html lang="ko" className={`${noto_kr.className} relative`}>
      <body className="py-[100px] h-screen">
        <Providers>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Header />
            <main className="container mx-auto mt-10 h-full">{children}</main>
          </HydrationBoundary>
        </Providers>
      </body>
    </html>
  );
}
