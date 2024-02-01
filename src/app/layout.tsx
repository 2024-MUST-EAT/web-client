import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Light.woff",
      weight: "300",
    },
    {
      path: "./fonts/Pretendard-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/Pretendard-Medium.woff",
      weight: "500",
    },
    {
      path: "./fonts/Pretendard-SemiBold.woff",
      weight: "700",
    },
    {
      path: "./fonts/Pretendard-Bold.woff",
      weight: "700",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "머스트잇",
  description: "내가 다녀온 맛집들",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
