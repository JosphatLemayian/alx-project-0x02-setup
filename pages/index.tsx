
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project 2</title>
        <meta name="description" content="A Next.js project scaffolded for ALX" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to ALX Project 2!
        </h1>
      </main>
    </>
  );
}
