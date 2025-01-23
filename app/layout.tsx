import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const senSans = localFont({
    src: [
        {
            path: "./fonts/Sen-Regular.ttf",
            style: "normal",
            weight: "400"
        },
        {
            path: "./fonts/Sen-Medium.ttf",
            style: "normal",
            weight: "500"
        },
        {
            path: "./fonts/Sen-SemiBold.ttf",
            style: "normal",
            weight: "600"
        },
        {
            path: "./fonts/Sen-Bold.ttf",
            style: "normal",
            weight: "700"
        },
        {
            path: "./fonts/Sen-ExtraBold.ttf",
            style: "normal",
            weight: "800"
        }
    ],
    variable: "--font-sen-sans",
})

export const metadata: Metadata = {
  title: "Startups",
  description: "Explore startups and publish your own!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${senSans.variable} font-sen-sans antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
