import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NOT WHATSAPP</title>
        <meta name="description" content="WhatsApp Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
    </div>
  );
}
