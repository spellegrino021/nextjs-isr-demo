import Head from "next/head";
import styles from "../styles/Home.module.css";

export async function getStaticProps(context) {
  // get random number between 1 and 100
  const randomnum = Array.from({ length: 1 }, () =>
    Math.floor(Math.random() * 100)
  );
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
            <h1>UPDATE IS WORKING: {item}</h1>
            </div>
        ))}
      </main>
    </div>
  );
}
