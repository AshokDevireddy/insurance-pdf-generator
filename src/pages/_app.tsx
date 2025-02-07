import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Banner from "@/components/Banner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Banner />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
