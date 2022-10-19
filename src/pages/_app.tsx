import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "@/src/pages/styles/themes/GlobalStyle";
import MainLayout from "@/src/components/layouts/MainLayout";
import { Session } from "next-auth";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
    return (
        <>
            <RecoilRoot>
                <QueryClientProvider client={queryClient}>
                    <SessionProvider session={pageProps.session}>
                        <GlobalStyle />
                        <MainLayout>
                            <Component {...pageProps} />;
                        </MainLayout>
                    </SessionProvider>
                </QueryClientProvider>
            </RecoilRoot>
        </>
    );
}

export default MyApp;
