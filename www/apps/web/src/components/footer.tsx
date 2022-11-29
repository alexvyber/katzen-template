import Link from "next/link"

import { Container } from "@/components/container"

function NavLink({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <Link
      href={href}
      className="transition hover:text-orange-500 dark:hover:text-orange-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="pt-10 pb-16 border-t border-zinc-100 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col gap-6 justify-between items-center sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/about">Обо Мне</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink> */}
                {/* <NavLink href="/speaking">Speaking</NavLink> */}
                <NavLink href="/uses">Мой Стаф</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} Alex Vyber{" "}
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
