import BurnToken from "@/components/BurnToken";
import Footer from "@/components/Footer";
import Minters from "@/components/Minters";
import MintInfo from "@/components/MintInfo";
import Navbar from "@/components/Navbar";
import Transactions from "@/components/Transactions";
import Hero from "@/components/Hero";
import styles from "@/styles/Home.module.css";
import Head from 'next/head'; 
import Upload from "@/components/Upload";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ECO Reward Token</title>
      </Head>
      <Navbar />
      <Hero />
      <MintInfo />
      <Minters />
      <BurnToken />
      <Transactions />
      <Upload />
      <Footer />
    </div>
  );
}
