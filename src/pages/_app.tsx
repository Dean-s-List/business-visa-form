// global css styles
import "@/src/styles/globals.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";

import ToastNotification from "../components/common/ToastNotification";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <main className={`${inter.variable} bg-background-1 text-white`}>
                <Head>
                    <title>Business Visa Form</title>
                    <link rel="icon" href="/favicon.ico" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>

                <Component {...pageProps} />

                <ToastNotification />
            </main>
        </QueryClientProvider>
    );
}

export default MyApp;
