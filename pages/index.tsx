import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp</title>
        <meta name="description" content="Generated by vgkdev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <h1>Hello world</h1> */}

      <Sidebar />
    </>
  );
}
