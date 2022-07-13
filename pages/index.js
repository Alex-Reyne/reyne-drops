import Head from "next/head";
import { LinkList } from "../styles/styled-list";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/drops");
  const drops = await res.json();
  return {
    props: { drops },
  };
}

export default function Home({ drops }) {
  const links = drops.links;

  return (
    <>
      <Head>
        <title>Reyne Drops</title>
        <meta name="description" content="Generated by create next app" />
        <meta property="og:image" content="./reyne-drops-social-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="488" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src={"/alex-reyne-logo.png"}
          alt={"Alex Reyne Profile Picture"}
          style={{ maxHeight: "10rem", marginTop: "4rem" }}
        />

        <div>
          <h1 className={styles.title}>Alexander Reyne</h1>

          <div className={styles.description}>
            <p>Software Developer @ TELUS Digital</p>
            <p>Freelance Graphic Designer</p>
          </div>
        </div>

        <LinkList>
          {links.map((link) => {
            return (
              <a href={link.url} key={link.id}>
                <button>{link.name}</button>
              </a>
            );
          })}
          <p>creativereyne@gmail.com</p>
        </LinkList>

        <footer className={styles.footer}>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://github.com/alex-reyne"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alexander Reyne.
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
