import {Card} from "react-bootstrap";

function ArticleBrowser({ articleData }) {
    return (
        <div className="article-browser">
            {articleData.map(article => (
                <Card key={article.id}>
                    <Card.Body>
                        <Card.Title>{article.frontmatter.title}</Card.Title>
                        <Card.Subtitle>{article.frontmatter.author}</Card.Subtitle>
                    </Card.Body>
                </Card>
            ))}
        </ div>
    )
}

export default ArticleBrowser