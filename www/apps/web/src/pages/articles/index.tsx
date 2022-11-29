import Head from "next/head"

import { Card } from "@/components/card"
import { SimpleLayout } from "@/components/simple-layout"
import { formatDate } from "@/lib/format-date"
import { getAllArticles } from "@/lib/get-all-articles"

export function Article({ article, slugPath, callToAction }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/${slugPath}/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>{callToAction}</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="hidden mt-1 md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Статьи</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
      </Head>
      <SimpleLayout
        title="Пишу о софте, маркетинге и продажах"
        // intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      >
        <div className="md:pl-6 md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
          <div className="flex flex-col space-y-16 max-w-3xl">
            {articles.map(article => (
              <Article
                key={article.slug}
                article={article}
                slugPath="articles"
                callToAction="Читать Статью"
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()).map(({ component, ...meta }) => meta),
    },
  }
}
