import { Disclosure, Popover, Transition } from "@headlessui/react"
import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

import { Container } from "@/components/container"
import avatarImage from "@/images/avatar.jpg"
import React, { Fragment, useEffect, useRef } from "react"

const navLinks = [
  {
    title: "Эбаут",
    href: "/about",
  },
  {
    title: "Статьи",
    href: "/articles",
  },
  {
    title: "Проекты",
    href: "/projects",
  },
  {
    title: "1000Days",
    href: "/1000days",
  },
  // {
  //   title: 'Тестовые',
  //   href: '/tests',
  // },

  {
    title: "Стафф",
    href: "/stuff",
    links: [
      { title: "Софт и Железо", href: "/uses", base: "/stuff" },
      // { title: 'TODO', href: '/TODO', base: '/stuff' },
      // { title: 'Софт', href: '/software', base: '/stuff' },
      { title: "Блогеры", href: "/bloggers", base: "/stuff" },
      // { title: 'Курсы', href: '/courses', base: '/stuff' },
      { title: "Книги", href: "/books", base: "/stuff" },
    ],
  },
]

function CloseIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronDownIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SunIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z" />
      <path
        d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
        fill="none"
      />
    </svg>
  )
}

function MoonIcon(props: React.SVGAttributes<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavItem({
  href,
  children,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <li>
      <Popover.Button as={Link} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  )
}

function MobileNavigation(props) {
  return (
    <Popover {...props}>
      <Popover.Button className="flex items-center py-2 px-4 text-sm font-medium rounded-full ring-1 shadow-lg group bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Меню
        <ChevronDownIcon className="ml-3 w-2 h-auto stroke-zinc-500 dark:group-hover:stroke-zinc-400 group-hover:stroke-zinc-700" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 p-8 bg-white rounded-3xl ring-1 origin-top ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse justify-between items-center">
              <Popover.Button aria-label="Close menu" className="p-1 -m-1">
                <CloseIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Меню
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base divide-y divide-zinc-100 text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {navLinks.map(item => {
                  if (item.links) {
                    return (
                      <li className="block py-2" key={item.href}>
                        <Disclosure>
                          <Disclosure.Button className="block py-2">
                            {item.title}
                          </Disclosure.Button>
                          <Disclosure.Panel className="text-gray-500">
                            {item.links.map(item => (
                              <MobileNavItem
                                href={`${item.base}${item.href}`}
                                key={item.href}
                              >
                                {item.title}
                              </MobileNavItem>
                            ))}
                          </Disclosure.Panel>
                        </Disclosure>
                      </li>
                    )
                  } else {
                    return (
                      <MobileNavItem href={item.href} key={item.href}>
                        {item.title}
                      </MobileNavItem>
                    )
                  }
                })}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function NavItem({
  href,
  children,
  onClose,
}: React.PropsWithChildren<{ href: string; onClose?: () => void }>) {
  let isActive = useRouter().pathname === href

  return (
    <li>
      <Link
        onClick={() => {
          typeof onClose === "function" && onClose()
        }}
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition ",
          isActive
            ? "text-orange-500 dark:text-orange-400"
            : "hover:text-orange-500 dark:hover:text-orange-400",
        )}
      >
        <>
          <span className="block w-full">{children}</span>
          {isActive && (
            <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-orange-500/0 via-orange-500/40 to-orange-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-orange-400/0" />
          )}
        </>
      </Link>
    </li>
  )
}

function DropDownNavItemsGroup({
  title,
  href,
  links,
}: {
  title: string
  href: string
  links: any
}) {
  let isActive = `/${useRouter().pathname.split("/")[1]}` === href
  // const [isShowing, setIsShowing] = useState(false)

  return (
    <Popover className="relative">
      {({ open, close }) => (
        <>
          <Popover.Button
            className={clsx(
              "relative block px-3 py-2 transition",
              isActive
                ? "text-orange-500 dark:text-orange-400"
                : "hover:text-orange-500 dark:hover:text-orange-400",
            )}
          >
            {title}
          </Popover.Button>

          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Popover.Panel
              static
              className="absolute top-2 -right-2 z-10 p-3 bg-white rounded-xl shadow-md dark:bg-zinc-800/90"
            >
              <div className="flex flex-col">
                {links.map(item => (
                  <NavItem
                    href={`${item.base}${item.href}`}
                    onClose={close}
                    key={item.href}
                  >
                    {item.title}
                  </NavItem>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}

function DesktopNavigation(props: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav {...props}>
      <ul className="flex px-3 text-sm font-medium rounded-full ring-1 shadow-lg bg-white/90 text-zinc-800 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {navLinks.map(item => {
          if (item.links) {
            return (
              <DropDownNavItemsGroup
                title={item.title}
                href={item.href}
                links={item.links}
                key={item.href}
              />
            )
          } else {
            return (
              <NavItem href={item.href} key={item.href}>
                {item.title}
              </NavItem>
            )
          }
        })}
      </ul>
    </nav>
  )
}

function ModeToggle() {
  function disableTransitionsTemporarily() {
    document.documentElement.classList.add("[&_*]:!transition-none")
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none")
    }, 0)
  }

  function toggleMode() {
    disableTransitionsTemporarily()

    let darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    let isSystemDarkMode = darkModeMediaQuery.matches
    let isDarkMode = document.documentElement.classList.toggle("dark")

    if (isDarkMode === isSystemDarkMode) {
      delete window.localStorage.isDarkMode
    } else {
      window.localStorage.isDarkMode = isDarkMode
    }
  }

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="py-2 px-3 rounded-full ring-1 shadow-lg transition group bg-white/90 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-orange-50 [@media(prefers-color-scheme:dark)]:stroke-orange-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-orange-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-orange-600" />
      <MoonIcon className="hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-orange-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-orange-500" />
    </button>
  )
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        "h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10",
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(className, "pointer-events-auto")}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? "4rem" : "2.25rem"}
        className={clsx(
          "rounded-full bg-zinc-100 object-cover dark:bg-zinc-800",
          large ? "h-16 w-16" : "h-9 w-9",
        )}
        priority
      />
    </Link>
  )
}

export function Header() {
  let isHomePage = useRouter().pathname === "/"

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 220

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight,
      )

      if (isInitial.current) {
        setProperty("--header-position", "sticky")
      }

      setProperty("--content-offset", `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty("--header-height", `${downDelay + height}px`)
        setProperty("--header-mb", `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty("--header-height", `${offset}px`)
        setProperty("--header-mb", `${height - offset}px`)
      } else if (top === 0) {
        setProperty("--header-height", `${scrollY + height}px`)
        setProperty("--header-mb", `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty("--header-inner-position", "fixed")
        removeProperty("--header-top")
        removeProperty("--avatar-top")
      } else {
        removeProperty("--header-inner-position")
        setProperty("--header-top", "0px")
        setProperty("--avatar-top", "0px")
      }
    }

    function updateAvatarStyles() {
      if (!isHomePage) {
        return
      }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty(
        "--avatar-image-transform",
        `translate3d(${x}rem, 0, 0) scale(${scale})`,
      )

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty("--avatar-border-transform", borderTransform)
      setProperty("--avatar-border-opacity", scale === toScale ? 1 : 0)
    }

    function updateStyles() {
      updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener("scroll", updateStyles, { passive: true })
    window.addEventListener("resize", updateStyles)

    return () => {
      window.removeEventListener("scroll", updateStyles, { passive: true })
      window.removeEventListener("resize", updateStyles)
    }
  }, [isHomePage])

  return (
    <>
      <header
        className="flex relative z-50 flex-col pointer-events-none"
        style={{
          height: "var(--header-height)",
          marginBottom: "var(--header-mb)",
        }}
      >
        {isHomePage && (
          <>
            <div
              ref={avatarRef}
              className="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"
            />
            <Container
              className="top-0 order-last pt-3 -mb-3"
              style={{ position: "var(--header-position)" }}
            >
              <div
                className="top-[var(--avatar-top,theme(spacing.3))] w-full"
                style={{ position: "var(--header-inner-position)" }}
              >
                <div className="relative">
                  <AvatarContainer
                    className="absolute left-0 top-3 transition-opacity origin-left"
                    style={{
                      opacity: "var(--avatar-border-opacity, 0)",
                      transform: "var(--avatar-border-transform)",
                    }}
                  />
                  <Avatar
                    large
                    className="block w-16 h-16 origin-left"
                    style={{ transform: "var(--avatar-image-transform)" }}
                  />
                </div>
              </div>
            </Container>
          </>
        )}
        <div
          ref={headerRef}
          className="top-0 z-10 pt-6 h-16"
          style={{ position: "var(--header-position)" }}
        >
          <Container
            className="top-[var(--header-top,theme(spacing.6))] w-full"
            style={{ position: "var(--header-inner-position)" }}
          >
            <div className="flex relative gap-4">
              <div className="flex flex-1">
                {!isHomePage && (
                  <AvatarContainer>
                    <Avatar />
                  </AvatarContainer>
                )}
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNavigation className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="hidden pointer-events-auto md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ModeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
      {isHomePage && <div style={{ height: "var(--content-offset)" }} />}
    </>
  )
}
