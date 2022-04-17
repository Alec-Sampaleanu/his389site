import Head from 'next/head';
import MyNavbar from "../components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "../components/layout";


function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>HIS389 Final Project</title>

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="container">
                <MyNavbar/>
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
