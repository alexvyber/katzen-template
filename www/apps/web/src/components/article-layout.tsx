import Head from "next/head"
import { useRouter } from "next/router"

import { Container } from "@/components/container"
import { Prose } from "@/components/prose"
import { formatDate } from "@/lib/format-date"

function ArrowLeftIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface Props {
  meta: any
  isRssFeed?: boolean
  previousPathname: string
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}: React.PropsWithChildren<Props>) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }

  return (
    <>
      <Head>
        <title>{`${meta.title} - Alex Vyber`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Go back to articles"
                className="flex justify-center items-center mb-8 w-10 h-10 bg-white rounded-full ring-1 shadow-md transition lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:left-0 xl:-top-1.5 xl:mt-0 dark:border dark:ring-0 group shadow-zinc-800/5 ring-zinc-900/5 dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
              >
                <ArrowLeftIcon className="w-4 h-4 transition stroke-zinc-500 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400 group-hover:stroke-zinc-700" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl text-zinc-800 dark:text-zinc-100">
                  {meta.title}
                </h1>
                <time
                  dateTime={meta.date}
                  className="flex order-first items-center text-base text-zinc-400 dark:text-zinc-500"
                >
                  <span className="w-0.5 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </Container>
    </>
  )
}
