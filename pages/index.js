import Head from 'next/head'
import styles from '../styles/Home.module.css'

export async function getServerSideProps() {
  const res = await fetch('http://reyne-drops.vercel.app/api/drops')
  const drops = await res.json()
  return {
    props: { drops },
  }
}

export default function Home({ drops }) {
  const links = drops.links

  return (
    <>
      <Head>
        <title>Reyne Drops</title>
        <meta
          name="description"
          content="Alexander Reyne - Software Developer @ TELUS Digital &amp; Freelance Graphic Designer"
        />
        <meta property="og:image" content="./social-sharing-reyne-drops.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="960" />
        <meta property="og:image:height" content="488" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src={'/alex-reyne-logo.png'}
          alt={'Alex Reyne Profile Picture'}
          style={{ maxHeight: '10rem', marginTop: '2rem' }}
        />

        <div>
          <h1 className={styles.title}>Alexander Reyne</h1>

          <div className={styles.description}>
            <p>Software Developer @ TELUS Digital</p>
            <p>Freelance Graphic Designer</p>
          </div>
        </div>

        <div className={styles.linkList}>
          {links.map((link) => {
            return (
              <a href={link.url} key={link.id}>
                <button>{link.name}</button>
              </a>
            )
          })}
          <p>creativereyne@gmail.com</p>
        </div>

        <footer className={styles.footer}>
          <p>Designed and Developed by</p>
          <a
            href="https://github.com/Alex-Reyne/reyne-drops"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexander Reyne.
          </a>
        </footer>
      </main>
    </>
  )
}
