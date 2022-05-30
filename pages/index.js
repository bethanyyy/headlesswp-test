import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-200 ">
      <Head>
        <title>Nekonuma Test Site 001</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Test Homepage</h3>
      <Link href={"/blog"}>
        <a className="underline hover:text-red-400">Go to blog</a>
      </Link>
    </div>
  );
}
