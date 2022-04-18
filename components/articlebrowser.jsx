import {Card} from "react-bootstrap";
import Link from "next/link";

function ArticleBrowser({articleData}) {
    return (
        <div className="article-browser">
            <ul>
                {articleData.length ? articleData.map(article => (
                    <Link href={`/articles/${article.ID}`} passHref key={article.ID} >
                        <Card style={{ cursor: 'pointer' }}>
                            <Card.Body>
                                <Card.Title>{article.frontmatter.title}</Card.Title>
                                <Card.Subtitle>{article.frontmatter.author}</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Link>
                )) : <div></div>}
            </ul>
        </ div>
    )
}

export default ArticleBrowser