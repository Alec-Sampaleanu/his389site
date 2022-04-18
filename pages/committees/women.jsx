import {getArticleDataByCommittee} from "../../lib/articles";
import ArticleBrowser from "../../components/articlebrowser";

export async function getStaticProps() {
    const womenArticleData = await getArticleDataByCommittee("Tech");

    return {
        props: {
            womenArticleData
        }
    }
}

export default function Women({womenArticleData}) {
    return (
        <div className="women">
            <ArticleBrowser articleData={womenArticleData} />
        </div>
    )
}