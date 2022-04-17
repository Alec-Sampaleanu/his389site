import Head from 'next/head';
import Nav from "../components/nav";
import 'bootstrap/dist/css/bootstrap.css';
import {useEffect} from "react";
import Layout from "../components/layout";


function MyApp({Component, pageProps}) {
    useEffect(() => {
        import("bootstrap/dist/js/bootstrap");
    }, []);

    return (
        <>
            <Head>
                <title>HIS389 Final Project</title>

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <Nav/>
                <main>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </main>
            </div>
        </>
    )
}

export default MyApp
