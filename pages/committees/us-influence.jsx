import {getArticleDataByCommittee} from "../../lib/articles";
import ArticleBrowser from "../../components/articlebrowser";
import {Col, Container, Row} from "react-bootstrap";

export async function getStaticProps() {
    const articleData = await getArticleDataByCommittee("US Influence");

    return {
        props: {
            articleData
        }
    }
}

export default function USInfluence({articleData}) {
    return (
        <div>
            <Container className="px-4 px-lg-5 h-100">
                <Row className="gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <Col className="align-self-end">
                        <h1 className="">US Influence</h1>
                    </Col>
                    <ArticleBrowser articleData={articleData}/>
                </Row>
            </Container>
        </div>
    )
}