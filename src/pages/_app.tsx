import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import GlobalStyle from "@/src/pages/styles/themes/GlobalStyle";
import MainLayout from "@/src/components/layouts/MainLayout";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <>
            <RecoilRoot>
                <SessionProvider session={pageProps.session}>
                    <GlobalStyle />
                    <MainLayout>
                        <Component {...pageProps} />;
                    </MainLayout>
                </SessionProvider>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
