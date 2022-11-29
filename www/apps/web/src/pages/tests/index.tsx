import Head from "next/head"

import { Card } from "@/components/card"
import { SimpleLayout } from "@/components/simple-layout"

import { getAllTests } from "@/lib/get-all-tests"

import { Article } from "../articles"

const Test = ({ test }) => {
  return (
    <Card as="li" key={test.slug}>
      <Card.Image imageSrc={test.imageSrc} />
      <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={test.slug}>{test.name}</Card.Link>
      </h2>
      <Card.Description>{test.description}</Card.Description>
    </Card>
  )
}

export default function Projects({ tests }) {
  return (
    <>
      <Head>
        <title>Тестовые Задания - Алексей Соколов</title>
        <meta name="description" content="Проект - Алексей Соколов" />
      </Head>
      <SimpleLayout
        title="Мне дают тестовые — я их выполняю..."
        // intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
      >
        <div className="md:pl-6 md:border-l md:border-zinc-100 md:dark:border-zinc-700/40">
          <div className="flex flex-col space-y-16 max-w-3xl">
            {tests.map(test => (
              <Article
                key={test.slug}
                article={test}
                slugPath="tests"
                callToAction="Открыть Проект"
              />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

// export async function getStaticProps(_context) {
//   return {
//     props: {
//       tests: Tests.getAllTests(),
//     },
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      tests: (await getAllTests()).map(({ component, ...meta }) => meta),
    },
  }
}
