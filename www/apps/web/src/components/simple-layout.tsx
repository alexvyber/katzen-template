import { Container } from "@/components/container"

interface Props {
  title: string
  intro?: string
}

export function SimpleLayout({
  title,
  intro,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-800 dark:text-zinc-100">
          {title}
        </h1>
        <h2 className="mt-6 text-xl text-zinc-600 dark:text-zinc-400">
          {intro}
        </h2>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
