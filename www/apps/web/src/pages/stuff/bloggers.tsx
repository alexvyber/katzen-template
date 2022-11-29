import Head from "next/head"

import { Card } from "@/components/card"
import { Section } from "@/components/section"
import { SimpleLayout } from "@/components/simple-layout"

import BlogLogo from "../../images/logos/blog.svg"
import YouTubeLogo from "../../images/logos/youtube.svg"

import Image from "next/image"

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children, logoIcon }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} target="_blank">
        <div className="flex items-center align-center">
          <Image
            src={logoIcon}
            width={28}
            height={28}
            className="inline z-10 mr-3 w-6 h-6"
          />
          {title}
        </div>
      </Card.Title>

      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

const bloggers = [
  // Traversy Media
  // Ben Awad
  // DistroTube
  // ChrisTitusTech
  // Ryan Carniato
  // Learn With Jason

  {
    title: "Кодинг",
    items: [
      {
        title: "Theo - ping․gg",
        href: "https://www.youtube.com/c/TheoBrowne1017",
        description:
          'Theo для меня почти образец человека, кто "get shit done". Он довольно много бугуртит, часто - по делу.',
        logoIcon: YouTubeLogo,
      },
      {
        title: "Overreacted | Dan Abramov",
        href: "https://overreacted.io/",
        description:
          "Персональный блог Дена Абрамова. Человек, сделавший значимый вклад в React и виновный в появлении Redux 🙃",
        logoIcon: BlogLogo,
      },
      {
        title: "ThePrimeagen",
        href: "https://www.youtube.com/c/ThePrimeagen",
        description:
          'ThePrimeagen любит NeoVim и "blazingly fasy software". Смотреть его — почти всегда офигенно весело.',
        logoIcon: YouTubeLogo,
      },
      {
        title: "Fireship",
        href: "https://www.youtube.com/c/Fireship",
        description:
          "Просто большой и жирный лайк! Если по какой-то причине вы еще не подписались на канал, то сейчас самое время!",
        logoIcon: YouTubeLogo,
      },
      {
        title: "Jack Herrington",
        href: "https://www.youtube.com/c/JackHerrington",
        description:
          "Хороший канал для фронтендов. Очень широкий набор тем и много видео на продвинутые темы. Регулярно выходят видео по свежим технологиям.",
        logoIcon: YouTubeLogo,
      },
      {
        title: "TJ DeVries",
        href: "https://www.youtube.com/c/TJDeVries",
        description:
          "TJ - core NeoVim developer. Когда я хочу узнать что-нибудь про NeoVim, я в первую очередь чекаю TJ",
        logoIcon: YouTubeLogo,
      },
      {
        title: "TJ DeVries",
        href: "https://www.youtube.com/c/TJDeVries",
        description:
          "TJ - core NeoVim developer. Когда я хочу узнать что-нибудь про NeoVim, я в первую очередь чекаю TJ",
        logoIcon: YouTubeLogo,
      },
    ],
  },
  {
    title: "Не Кодинг",

    items: [
      {
        title: "Chris Williamson",
        href: "https://www.youtube.com/c/ModernWisdomPodcast",
        description:
          "Для меня это один из лучших подкастов! Гости Криса - это выдающиеся люди современности. И они рассказывают ему дофигище полезной инфы!",
        logoIcon: YouTubeLogo,
      },
      {
        title: "Ben Awad",
        href: "https://www.youtube.com/c/BenAwad97",
        description:
          "Coffeezilla в очень смешной манере рассказывает про скам в интернете. Приемушественно, Youtube и крипта. Hilarious - лучшее слово, чтобы описать его контент.",
        logoIcon: YouTubeLogo,
      },
    ],
  },
]

export default function Uses() {
  return (
    <>
      <Head>
        <title>Блоги — читаю, YouTube-каналы — смотрю. </title>
        <meta
          name="description"
          content="Блоги — читаю, YouTube-каналы — смотрю. "
        />
      </Head>
      <SimpleLayout
        title="Блоги — читаю, YouTube-каналы — смотрю. "
        intro="Довольно часто короткий видос даем мне столько же инсайта, сколько глава из книги..."
      >
        <div className="space-y-20">
          {bloggers.map(platform => {
            return (
              <ToolsSection title={platform.title} key={platform.title}>
                {platform.items.map(item => (
                  <Tool
                    title={item.title}
                    href={item.href}
                    key={item.href}
                    logoIcon={item.logoIcon}
                  >
                    {item.description}
                  </Tool>
                ))}
              </ToolsSection>
            )
          })}
        </div>
      </SimpleLayout>
    </>
  )
}
