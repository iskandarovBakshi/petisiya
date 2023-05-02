import Head from "next/head";
import React from "react";

type Props = {};

export default function HomePage({}: Props) {
    return (
        <>
            <Head>
                <title>Petisiya</title>
            </Head>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Petisiya</h2>
                </div>
            </div>
        </>
    );
}
