import Head from "next/head"

import { Card } from "@/components/card"
import { Section } from "@/components/section"
import { SimpleLayout } from "@/components/simple-layout"

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

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
        title="Софт и гаджеты, которые я использую и рекомендую"
        intro="Меня вообще никто не спрашивал о том, что я использую. Однако я считаю, что кто бы ни открыл эту страницу, он обязательно должен знать, с чем я рабюотаю 😂"
      >
        <div className="space-y-20">
          <ToolsSection title="Рабочий Компьютер">
            <Tool title="AMD Ryzen 7 5700G">
              {/* I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations. */}
            </Tool>
            <Tool title="32gb RAM Kingston Fury">
              {/* The only display on the market if you want something HiDPI and
              bigger than 27”. When you’re working at planetary scale, every
              pixel you can get counts. */}
            </Tool>
            <Tool title="23.8” Монитор Philips 245E1S">
              {/* They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main. */}
            </Tool>
            <Tool title="Много дисков - Много терабайтов">
              {/* They don’t make keyboards the way they used to. I buy these any
              time I see them go up for sale and keep them in storage in case I
              need parts or need to retire my main. */}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Операционные Системы">
            <Tool title="Linux Fedora">
              {/* I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, Sublime Text is still the best text
              editor ever made. */}
            </Tool>
            <Tool title="Windows 11">
              {/* I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use. */}
            </Tool>
            <Tool title="Linux Ubuntu">
              {/* Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years. */}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Инструменты Разработки">
            <Tool title="Visual Studio Code">
              {/* I don’t care if it’s missing all of the fancy IDE features
              everyone else relies on, Sublime Text is still the best text
              editor ever made. */}
            </Tool>
            <Tool title="NeoVim">
              {/* I’m honestly not even sure what features I get with this that
              aren’t just part of the macOS Terminal but it’s what I use. */}
            </Tool>
            <Tool title="Alacritty">
              {/* Great software for working with databases. Has saved me from
              building about a thousand admin interfaces for my various projects
              over the years. */}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Графика">
            <Tool title="Photoshop">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="Lightroom">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="Premier Pro">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="After Effects">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
          </ToolsSection>
          <ToolsSection title="Технологии">
            <Tool title="JavaScript | TypeScript">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="React... и компания">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="Tailwind">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="Node.js">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="Elixir">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="Phoenix">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
            <Tool title="PostgreQL">
              {/* We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook. */}
            </Tool>
          </ToolsSection>
          {/* <ToolsSection title="Productivity">
            <Tool title="Alfred">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="Reflect">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="SavvyCal">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
            <Tool title="Focus">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
          </ToolsSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
