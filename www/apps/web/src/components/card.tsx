import clsx from "clsx"
import Image from "next/image"
import Link, { LinkProps } from "next/link"
import React from "react"

// --

interface AsComponent {
  as?: keyof JSX.IntrinsicElements
}

interface ClassName {
  className?: string
}

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Card({
  as: Component = "div",
  className,
  children,
}: React.PropsWithChildren<AsComponent & ClassName>) {
  return (
    <Component
      className={clsx(className, "group relative flex flex-col items-start")}
    >
      {children}
    </Component>
  )
}

// --

Card.Image = function CardImage({ imageSrc }: { imageSrc: string }) {
  return (
    <Image
      src={imageSrc}
      layout="fill" // required
      objectFit="cover" // change as you like
      className="aspect-w-16 aspect-h-9"
      alt=""
    />
  )
}

Card.Link = function CardLink({
  children,
  target,
  ...props
}: React.PropsWithChildren<
  { target?: React.HTMLAttributeAnchorTarget } & LinkProps
>) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 opacity-0 transition scale-95 sm:-inset-x-6 sm:rounded-2xl group-hover:opacity-100 group-hover:scale-100 bg-zinc-50 dark:bg-zinc-800/50" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

Card.Title = function CardTitle({
  as: Component = "h2",
  className,
  children,
  href,
  ...linkProps
}: React.PropsWithChildren<
  {
    target: Extract<React.HTMLAttributeAnchorTarget, string>
  } & AsComponent &
    ClassName &
    Omit<LinkProps, "as">
>) {
  return (
    <Component
      className={clsx(
        "text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100",
        className,
      )}
    >
      {href ? (
        <Card.Link href={href} {...linkProps}>
          {children}
        </Card.Link>
      ) : (
        children
      )}
    </Component>
  )
}

Card.Description = function CardDescription({
  as: Component = "p",
  children,
  className,
}: React.PropsWithChildren<ClassName & AsComponent>) {
  return (
    <Component
      className={clsx(
        "relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400",
        className,
      )}
    >
      {children}
    </Component>
  )
}

Card.Cta = function CardCta({ children }: React.PropsWithChildren<unknown>) {
  return (
    <div
      aria-hidden="true"
      className="flex relative z-10 items-center mt-4 text-sm font-medium text-orange-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 w-4 h-4 stroke-current" />
    </div>
  )
}

Card.Eyebrow = function CardEyebrow({
  as: Component = "p",
  decorate = false,
  className,
  children,
  ...props
}: React.PropsWithChildren<{ decorate: boolean } & ClassName & AsComponent>) {
  return (
    <Component
      className={clsx(
        className,
        "relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500",
        decorate && "pl-3.5",
      )}
      {...props}
    >
      {decorate && (
        <span
          className="flex absolute inset-y-0 left-0 items-center"
          aria-hidden="true"
        >
          <span className="w-0.5 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}
