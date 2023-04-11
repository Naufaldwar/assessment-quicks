import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: {
          blue: [
            "#E7F5FF",
            "#D0EBFF",
            "#A5D8FF",
            "#74C0FC",
            "#4DABF7",
            "#339AF0",
            "#228BE6",
            "#1C7ED6",
            "#1971C2",
            "#1864AB",
          ],
        },
        primaryColor: "blue",
        fontFamily: "Lato, sans-serif",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
