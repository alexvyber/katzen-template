import type { AppProps } from "next/app"
import { useEffect, useRef } from "react"

import "@css/globals.css"

import "focus-visible"

import { createClient, Provider } from "urql"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

const client = createClient({
  url: "http://127.0.0.1:7777/graphql",
})

function usePrevious(value: string) {
  let ref = useRef<typeof value>()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function MyApp({ Component, pageProps, router }: AppProps) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <Provider value={client}>
      <div className="flex fixed inset-0 justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative">
        <Header />
        <main>
          <Component previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}
