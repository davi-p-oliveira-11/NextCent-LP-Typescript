import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCent |",
  description: "Smart and seamless suggestion platform.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />;
    </div>
  );
}
