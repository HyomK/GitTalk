import type { AppProps } from "next/app";
import GlobalStyle from "@/src/pages/styles/themes/GlobalStyle";
import MainLayout from "@/src/components/layouts/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalStyle />
            <MainLayout>
                <Component {...pageProps} />;
            </MainLayout>
        </>
    );
}

export default MyApp;
