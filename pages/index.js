import Head from "next/head";
import Login from "../components/login";
import Comics from "../components/comics";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Comics List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Login />
        <Comics />
      </main>
    </div>
  );
}
