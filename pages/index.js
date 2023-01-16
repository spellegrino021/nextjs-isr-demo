import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  const res = await fetch("https://www.randomnumberapi.com/api/v1.0/random");
  const randomnum = await res.json();
  return {
    props: {
      randomnum,
    }, // will be passed to the page component as props
    revalidate: 30, // In seconds
  };
}

export default function Home({ randomnum }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS ISR</title>
        <meta name="description" content="NextJS ISR" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {randomnum.map((item) => (
          <div key={item}>
            <h1>Random number: {item}</h1>
            </div>
        ))}
      </main>
    </div>
  );
}
