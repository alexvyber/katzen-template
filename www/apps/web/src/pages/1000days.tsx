import Head from "next/head"

import { SimpleLayout } from "@/components/simple-layout"
import { Octokit } from "octokit"

function Commits({ commits }) {
  return (
    <ul role="list">
      {commits.map(commit => (
        <li
          key={commit.sha}
          className="relative py-5 px-4 bg-white rounded-xl focus-within:ring-2 focus-within:ring-inset focus-within:ring-orange-600 hover:bg-orange-50 dark:bg-zinc-900 dark:hover:bg-zinc-50/5"
        >
          <div className="flex justify-between space-x-3">
            <div className="flex-1 min-w-0">
              <a href={commit.html_url} className="block focus:outline-none">
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-sm font-medium text-gray-900 dark:text-zinc-200">
                  {commit.commit.message}
                </p>
                <p className="mt-1 text-sm text-orange-500 truncate">
                  {commit.sha.slice(0, 8)}
                </p>
              </a>
            </div>
            <time
              dateTime={commit.commit.committer.date}
              className="flex-shrink-0 text-sm whitespace-nowrap text-zinc-600 dark:text-zinc-300"
            >
              {new Date(commit.commit.committer.date).toLocaleDateString(
                "ru-RU",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                },
              )}
            </time>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function Days({ commits }) {
  return (
    <>
      <Head>
        <title>1000 дней кода - челлендж такой...</title>
        <meta name="description" content="1000 дней кода - челлендж такой..." />
      </Head>
      <SimpleLayout
        title="1000 дней кода - челлендж такой..."
        intro="Идея в том, чтобы почти 3 года подряд писать год и учиться писать код."
      >
        <main className="max-w-2xl">
          <Commits commits={commits} />
        </main>
      </SimpleLayout>
    </>
  )
}

const TOKEN = process.env.GH_TOKEN

async function getCommits() {
  const octokit = new Octokit({ auth: TOKEN })

  const { data } = await octokit.request("GET /repos/{owner}/{repo}/commits", {
    owner: "alexvyber",
    repo: "1000DaysOfCode",
  })

  // const repo = "https://github.com/alexvyber/1000daysofcode.git";
  // // Aray for dev purposes
  // const testArray: Commit[] = [];
  // for (let i = 0; i < 10; i++) {
  //   const commit = {
  //     commitId: "29bc7c1",
  //     comment: "Day 21(React | 1.5 hours): React and TypeScript...",
  //     time: "1d ago",
  //     datetime: "2021-01-27T16:35",
  //     README: `
  //     Learned more about React and TypeScript.
  //     - Higher-Order Components
  //     - Function Overloading
  //     - React built-in types`,
  //   };
  //   testArray.push(commit);
  // }

  return data
}

export const getStaticProps = async () => {
  const commits = await getCommits()

  return {
    revalidate: 60 * 60 * 2,
    props: {
      commits,
    },
  }
}
