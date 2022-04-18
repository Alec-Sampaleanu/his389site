import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {bundleMDX} from "mdx-bundler";
import remarkGfm from "remark-gfm";
import {remarkMdxImages} from "remark-mdx-images";

const articlesDirectory = path.join(process.cwd(), 'articles')

export function getArticlesData() {
    const fileNames = fs.readdirSync(articlesDirectory)
    return fileNames.map(fileName => {
        const id = fileName.replace(/\.mdx$/, '')

        const fullPath = path.join(articlesDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })
}

export function getAllArticleIDs() {
    const fileNames = fs.readdirSync(articlesDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.mdx$/, '')
            }
        }
    })
}

export async function getArticleDataByID(id) {
    const fullPath = path.join(articlesDirectory, `${id}.mdx`)
    const source = fs.readFileSync(fullPath, 'utf8')

    const {code, frontmatter} = await bundleMDX({
        source: source,
        mdxOptions(options, frontmatter) {
            options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm, remarkMdxImages]

            return options
        },
    })

    return {
        id,
        frontmatter,
        code
    }
}

export async function getArticleDataByCommittee(committee) {
    const allIDs = getAllArticleIDs().map(article => article.params.id)
    let committeeData = []

    for (const ID of allIDs) {
        const fullPath = path.join(articlesDirectory, `${ID}.mdx`)
        const source = fs.readFileSync(fullPath, 'utf8')

        const { code, frontmatter } = await bundleMDX({source: source})

        if (frontmatter.committee === committee) committeeData.push({ID, code, frontmatter})
    }

    return committeeData
}
