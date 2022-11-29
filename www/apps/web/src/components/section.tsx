import { useId } from "react"

export function Section({ title, children }) {
  let id = useId()

  return (
    <section
      aria-labelledby={id}
      className="md:pl-6 md:border-l md:border-zinc-100 md:dark:border-zinc-700/40"
    >
      <div className="grid grid-cols-1 gap-y-8 items-baseline max-w-3xl md:grid-cols-4">
        <h2
          id={id}
          className="mr-4 text-sm font-semibold text-zinc-800 dark:text-zinc-100"
        >
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
