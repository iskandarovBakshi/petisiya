import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, ...appProps }: AppProps) {
    if (["/terms-and-conditions"].includes(appProps.router.pathname)) {
        return <Component {...pageProps} />;
    }
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
