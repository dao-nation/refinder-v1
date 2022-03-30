import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import Head from "next/head";
import { FC } from "react";
import createEmotionCache from "../../theme/createEmotionCache";
import MUIThemeProvider from "./MUIThemeProvider";

const clientSideEmotionCache = createEmotionCache();

interface PageProviderProps {
  emotionCache?: EmotionCache;
  children: React.ReactNode;
}

const PageProvider: FC<PageProviderProps> = ({
  children,
  emotionCache = clientSideEmotionCache,
}) => {
  return (
    <PreferredThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <MUIThemeProvider>{children}</MUIThemeProvider>
      </CacheProvider>
    </PreferredThemeProvider>
  );
};

export default PageProvider;
