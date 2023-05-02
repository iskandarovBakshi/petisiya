import Head from "next/head";
import React from "react";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className="bg-slate-900 text-white">
                <div>{children}</div>
            </main>
        </>
    );
}
