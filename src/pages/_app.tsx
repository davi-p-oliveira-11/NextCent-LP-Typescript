import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextCent |",
  description: "Smart and seamless suggestion platform.",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-primary",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
