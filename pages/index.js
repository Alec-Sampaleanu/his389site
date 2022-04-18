import Map from "../components/map";
import Layout from "../components/layout";

export default function Home({allArticleIDs}) {
    return (
        <Layout>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Map/>
            </div>
        </Layout>
    )
}
