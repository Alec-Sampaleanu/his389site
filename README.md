This is a [Next.js](https://nextjs.org/) project, which relies on [MDX](https://mdxjs.com/) to allow for entirely statically generated dynamic articles presenting various information regarding the criminalization of protest in Latin America, built for the UofT course HIS389. MDX allows for JSX to be inserted into markdown, while still preserving the ease of use and simplicity of normal markdown. This means that anybody can quickly add an article by formatting it into a .mdx file, and they also have the flexibility to include premade React components, such as timelines, image wheels, etc., if desired. 

## Getting Started

Clone this repository to your local device, then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The homepage can be found at `pages/index.js`. Pages auto-update as you edit their files while the development server is running.

## Articles

Articles, which are stored as .mdx files in the `articles` file directory, are dynamically routed. This means that when, for example, you go to the Women's committee homepage, the application searches through all articles for those which have the `committee: Women` frontmatter, and displays them in a column. Upon clicking an article, the application then finds the .mdx file associated with that article, transforms it into JSX, and uses it to saturate `pages/[id].jsx`, which is then routed by `site-name.com/<committee>/<article-id>`.

To add a new article, simply create a markdown file, but save it as .mdx instead of .md, and save it to the articles folder. Ensure that the article frontmatter includes the title, author, committee, and tags for the article.

## Bootstrap + Styling

For styling, I relied on Bootsrap, mainly for the navbar, and styled-jsx. However, any other solutions should also work, keeping in mind that this is a Next.js application and so some styling libraries or frameworks may not play nicely without additional troublefixing.

## Deployment

For my proof of concept, I chose to deploy on the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

However, for real life deployment, there are most likely cheaper solutions if significant traffic is expected. [Here](https://nextjs.org/docs/deployment) is a guide to deployment of Next.js applications, outlining some possible solutions.

## Extension

Obviously this is a very bare-bones prototype, and a final product will require significant iteration from here forwards. Feel free to fork this repository for any future changes you wish to make, and do not hesitate to contact me if any questions come up.
