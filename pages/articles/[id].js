import {getAllArticleIDs, getArticleDataByID} from '../../lib/articles'
import {getMDXComponent} from "mdx-bundler/client";
import {useMemo} from "react";
import {Container} from "react-bootstrap";

export async function getStaticProps({params}) {
    const articleData = await getArticleDataByID(params.id)
    return {
        props: {
            ...articleData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllArticleIDs()
    return {
        paths,
        fallback: false
    }
}

export default function Article({code, frontmatter}) {
    const Component = useMemo(() => getMDXComponent(code), [code]);

    return (
        <Container>
            <h1>{frontmatter.title}</h1>
            <h3 className="author">{frontmatter.author}</h3>
            <article>
                <Component/>
            </article>

            <style jsx>{`
                .author {
                  font-style: italic;
                }
            `}</style>
        </Container>
    )
}