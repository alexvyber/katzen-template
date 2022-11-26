import Head from "next/head";

import Image from "next/image";

// imports from ui
import { SubTitle, Title, Button } from "ui";

import { useQuery } from "urql";
import { graphql } from "@/gql/gql";

import katzen from "@img/katzen.png";
// --

const homeQueryDocument = graphql(`
  query Home {
    home {
      data {
        attributes {
          title
          subtitle
          techs {
            name
          }
        }
      }
    }
  }
`);

// const homeTwoQueryDocument = graphql(`
//   query HomeTwo {
//     home {
//       data {
//         attributes {
//           title
//           subtitle
//           techs {
//             name
//           }
//         }
//       }
//     }
//   }
// `);

// --

const items = ["asdf", "asdfasdf", "asdfasdf"];

console.log(items);

export default function Home() {
  const [result] = useQuery({ query: homeQueryDocument });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-800 p-4 pt-2">
      <Head>
        <title>
          {data?.home?.data?.attributes?.title} -
          {data?.home?.data?.attributes?.techs
            ?.map((item) => item?.name)
            .toString()}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <Image
          src={katzen}
          width={250}
          height={250}
          alt="katzen"
          className="mx-auto"
        />
        <Title>{data?.home?.data?.attributes?.title}</Title>

        <SubTitle>{data?.home?.data?.attributes?.subtitle}</SubTitle>

        <SubTitle>
          {data?.home?.data?.attributes?.techs?.map((item, index) => (
            <span key={index}>{item?.name}</span>
          ))}
        </SubTitle>

        <div className="my-4 flex flex-col gap-4">
          <Button href="https://github.com/alexvyber/katzen">GitHub</Button>

          <Button href="https://github.com/alexvyber/katzen" intent="secondary">
            GitHub
          </Button>

          <Button href="https://github.com/alexvyber/katzen">GitHub</Button>

          <Button
            href="https://github.com/alexvyber/katzen"
            rounded="full"
            intent="secondary"
          >
            GitHub
          </Button>
        </div>
      </main>
    </div>
  );
}