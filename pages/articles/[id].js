import {getAllArticleIDs, getArticleDataByID} from '../../lib/articles'
import {getMDXComponent} from "mdx-bundler/client";
import {useMemo} from "react";

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
        <div>
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.author}</h3>
            <article>
                <Component/>
            </article>

            <style jsx>{`
                h3 {
                  font-style: italic;
                }
            `}</style>
        </div>
    )
}