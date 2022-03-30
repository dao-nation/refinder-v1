import "../styles/globals.css";
import NavBar from "../src/components/NavBar";
import { EmotionCache } from "@emotion/react";
import type { AppProps } from "next/app";
import PageProvider from "../src/components/helpers/PageProvider";

export interface MUIAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache }: AppProps) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <NavBar />
      <Component {...pageProps} />
    </PageProvider>
  );
}

export default MyApp;
