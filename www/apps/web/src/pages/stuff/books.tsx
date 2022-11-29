import Head from "next/head"
import Image from "next/image"

import { Card } from "@/components/card"
import { Section } from "@/components/section"
import { SimpleLayout } from "@/components/simple-layout"

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <main className="flex flex-row flex-wrap gap-20">{children}</main>
    </Section>
  )
}

const myLoader = ({ src }) => {
  return `/images/${src}`
}

function Book({ title, href, imageSrc, children }) {
  return (
    <Card as="li" className="justify-around w-full sm:w-5/12">
      <Card.Title as="h3" href={href} className="text-lg" target="_blank">
        {title}
      </Card.Title>
      <div className="mt-3 w-full h-auto aspect-w-3 aspect-h-4">
        <Image
          loader={myLoader}
          className="object-cover z-10 w-full h-full rounded-xl"
          src={imageSrc}
          // alt="Image Description"
          width={300}
          height={500}
        />
      </div>

      {/* <Card.Description as="h3" className="font-meiudm text-md">
        {children}
      </Card.Description> */}
    </Card>
  )
}

//Speechless: Controlling Words, Controlling Minds

const books = [
  {
    subject: "TypeScript",
    books: [
      {
        title:
          "Learning TypeScript Enhance Your Web Development Skills Using Type-Safe JavaScript",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.learningtypescript.com/",
        read: true,
        imageSrc: "learning-typescript.png",
        review: "asdfadsf",
        status: "working",
      },
    ],
  },
  {
    subject: "JS-related",
    books: [
      {
        title:
          "Designing Web APIs with Strapi Get started with the Strapi headless CMS by building a complete learning management system API",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.packtpub.com/product/Designing-Web-APIs-with-Strapi/9781800560635",
        read: true,
        imageSrc: "strapi-cover.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
  {
    subject: "Non-Programming",
    books: [
      {
        title: "Speechless: Controlling Words, Controlling Minds",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Speechless-Controlling-Words-Minds/dp/1684510821",
        read: true,
        imageSrc: "speechless.jpg",
        review: "asdfadsf",
        status: "done",
      },
      {
        title:
          "Ego, Authority, Failure: Using Emotional Intelligence Like a Hostage Negotiator to Succeed as a Leader",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Speechless-Controlling-Words-Minds/dp/1684510821",
        read: true,
        imageSrc: "ego-authority.png",
        review: "asdfadsf",
        status: "working",
      },
      {
        title:
          "The End of the World Is Just the Beginning: Mapping the Collapse of Globalization Hardcover",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/End-World-Just-Beginning-Globalization/dp/006323047X",
        read: true,
        imageSrc: "the-end-of-the-world.png",
        review: "asdfadsf",
        status: "done",
      },
      {
        title:
          "Never Split the Difference: Negotiating As If Your Life Depended On It",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Never-Split-Difference-Negotiating-Depended-ebook/dp/B014DUR7L2",
        read: true,
        imageSrc: "never-split.jpg",
        review: "asdfadsf",
        status: "done",
      },
      {
        title: "Spiral Dynamics: Mastering Values, Leadership and Change",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://www.amazon.com/Spiral-Dynamics-Mastering-Values-Leadership/dp/1405133562",
        read: true,
        imageSrc: "spiral-dynamics.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
  {
    subject: "Elixir",
    books: [
      {
        title: `Programming Phoenix 1.4
          Productive |> Reliable |> Fast
          `,
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://pragprog.com/titles/phoenix14/programming-phoenix-1-4/",
        read: true,
        imageSrc: "programming-phoenix-cover.jpg",
        review: "asdfadsf",
        status: "done",
      },
      {
        title: "Programming Phoenix LiveView",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://pragprog.com/titles/liveview/programming-phoenix-liveview/",
        read: true,
        imageSrc: "programming-phoenix-liveview.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
  {
    subject: "Other...",
    books: [
      {
        title:
          "Learning the vi and Vim Editors. Power and Agility Beyond Just Text Editing",
        description:
          "Lorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdfLorema dfasd fasdf asdf adsf adsf asdf",
        href: "https://pragprog.com/titles/phoenix14/programming-phoenix-1-4/",
        read: true,
        imageSrc: "vim-cover.png",
        review: "asdfadsf",
        status: "done",
      },
    ],
  },
]

export default function Uses() {
  return (
    <>
      <Head>
        <title>Софт и гаджеты, которые я использую и рекомендую</title>
        <meta
          name="description"
          content="Софт и гаджеты, которые я использую и рекомендую"
        />
      </Head>
      <SimpleLayout
        title="Книги, про которые я хочу рассказать"
        intro="Сюда попадают только те книги, которые я полностью прочитал и отработал материал, если книга по программированию."
      >
        <section className="py-10">
          <h2 className="mb-10 text-xl font-medium text-zinc-800 dark:text-zinc-100">
            В Работе
          </h2>
          <main className="space-y-20">
            {books.map(collection => {
              const booksToRender = collection.books.filter(
                book => book.status === "working",
              )

              return booksToRender?.length > 0 ? (
                <ToolsSection
                  title={collection.subject}
                  key={collection.subject}
                >
                  {collection.books.map(item =>
                    item.status === "working" ? (
                      <Book
                        key={item.href}
                        title={item.title}
                        href={item.href}
                        imageSrc={item.imageSrc}
                      >
                        {item.description}
                      </Book>
                    ) : null,
                  )}
                </ToolsSection>
              ) : null
            })}
          </main>
        </section>
        <section className="mt-20">
          <h2 className="mb-10 text-xl font-medium text-zinc-800 dark:text-zinc-100">
            Закончил
          </h2>
          <main className="space-y-20">
            {books.map(collection => {
              const booksToRender = collection.books.filter(
                book => book.status === "done",
              )

              return booksToRender?.length > 0 ? (
                <ToolsSection
                  title={collection.subject}
                  key={collection.subject}
                >
                  {collection.books.map(item =>
                    item.status === "done" ? (
                      <Book
                        key={item.href}
                        title={item.title}
                        href={item.href}
                        imageSrc={item.imageSrc}
                      >
                        {item.description}
                      </Book>
                    ) : null,
                  )}
                </ToolsSection>
              ) : null
            })}
          </main>
        </section>
      </SimpleLayout>
    </>
  )
}
