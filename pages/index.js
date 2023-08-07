import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../Components/Banner";
export default function Home() {
  return (
    <div>
      <Head>
        <title>ClaimChecker</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Banner />
    </div>
  );
}
