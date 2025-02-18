import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export async function getServerSideProps() {
  const res = await fetch('http://reyne-drops.vercel.app/api/drops')
  // const res = await fetch('http://localhost:3000/api/drops')
  const drops = await res.json()
  return {
    props: { drops },
  }
}

export default function Home({ drops }) {
  const links = drops.links

  /* do-not remove or edit these functions or thier related functions, states, or svg. */
  /* (you may change the styles in the css as long as it is still easily visible) */
  const [toolTip, setToolTip] = useState(styles.hidden)

  useEffect(() => {
    // setTimeout(() => {
    //   setToolTip(styles.visible)
    // }, 5000)
  }, [])

  const visible = () => {
    if (toolTip === styles.hidden) {
      return setToolTip(styles.visible)
    }

    setToolTip(styles.hidden)
  }
  /* END */

  return (
    <>
      <Head>
        <title>Alexander Reyne</title>
        <meta property="og:title" content="Alexander Reyne" />
        <meta
          property="og:description"
          content="Software Developer @ TELUS Digital &amp; Freelance Graphic Designer"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/Alex-Reyne/reyne-drops/main/public/social-sharing-reyne-drops.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contentWrap}>
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
              const { id, name, url, icon, image } = link
              return (
                <Card
                  id={id}
                  url={url}
                  alt={`${name} Image`}
                  icon={icon}
                  image={image}
                  text={name}
                ></Card>
              )
            })}
          </div>
          <p>creativereyne@gmail.com</p>
          <footer className={styles.footer}>
            <div>
              <p>Designed and Developed by</p>
              <a
                href="https://github.com/Alex-Reyne/reyne-drops"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alexander Reyne.
              </a>
            </div>

            {/* do-not remove or edit this svg, it's css, or it's related functions and states. */}
            {/* (you may change the styles in the css as long as it is still easily visible) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 330"
              fill="#ffc959"
              style={{ cursor: 'pointer' }}
              onClick={(e) => visible()}
            >
              <path
                d="M512,0c0,110,0,220,0,330c-1.83-0.05-3.66-0.16-5.49-0.16c-167.01-0.01-334.02-0.01-501.03,0c-1.83,0-3.66,0.1-5.49,0.16
	C0,220,0,110,0,0c1.83,0.05,3.66,0.16,5.49,0.16c167.01,0.01,334.02,0.01,501.03,0C508.34,0.16,510.17,0.05,512,0z M37.03,292.69
	c146.3,0,292.03,0,437.74,0c0-85.34,0-170.38,0-255.38c-146.11,0-291.84,0-437.74,0C37.03,122.55,37.03,207.47,37.03,292.69z"
              />
              <path
                d="M73.18,72.81c22.81,0.71,45.32-0.49,67.22,2.61c25.06,3.54,42.46,27.12,42.57,52.57c0.1,24.65,0.09,49.3,0.01,73.94
	c-0.1,29.21-23,53.38-52.29,54.44c-18.3,0.66-36.63,0.13-54.95,0.11c-0.8,0-1.6-0.25-2.56-0.42
	C73.18,195.32,73.18,134.74,73.18,72.81z M110.05,219.76c6.73,0,12.9,0.37,19-0.09c9.41-0.7,16.76-7.66,16.87-16.69
	c0.31-25.32,0.27-50.65,0.01-75.97c-0.08-8-6.03-15.01-13.96-16.01c-7.14-0.9-14.47-0.19-21.94-0.19
	C110.05,146.95,110.05,183.05,110.05,219.76z"
              />
              <path
                d="M444.6,73.51c-2.78,12.2-5.33,23.51-7.94,34.81c-9.88,42.78-19.79,85.55-29.66,128.33c-2.87,12.42-11.26,19.76-22.81,19.85
	c-11.73,0.09-20.27-7.31-23.19-19.99c-12.15-52.67-24.32-105.33-36.47-157.99c-0.33-1.41-0.47-2.86-0.82-5.03
	c9.39,0,18.33,0,27.26,0c10.08,0,10.15-0.02,12.38,9.57c6.56,28.18,13.07,56.38,19.61,84.57c0.15,0.64,0.34,1.26,1.51,2.15
	c0.49-1.89,1.03-3.78,1.47-5.68c6.67-28.84,13.29-57.69,20.08-86.5c0.36-1.53,2.06-3.89,3.19-3.92
	C420.66,73.4,432.14,73.51,444.6,73.51z"
              />
              <path
                d="M256.22,110.09c0,12.5,0,24.12,0,36.33c12.12,0,24.03,0,36.27,0c0,12.49,0,24.4,0,36.86c-11.88,0-23.81,0-36.11,0
	c0,12.29,0,24.03,0,36.32c11.78,0,23.7,0,36.04,0c0,12.41,0,24.3,0,36.65c-1.54,0.08-3.16,0.24-4.78,0.24
	c-10.33,0.02-20.67,0.05-31,0c-21.14-0.1-37.23-15.58-37.39-36.77c-0.27-36.5-0.27-73,0-109.49c0.16-21.18,16.27-36.65,37.42-36.74
	c11.81-0.05,23.61-0.01,35.79-0.01c0,12.32,0,24.18,0,36.59C280.42,110.09,268.52,110.09,256.22,110.09z"
              />
            </svg>
            {/* END */}
          </footer>
        </div>

        {/* do-not remove or edit this div, it's css, or it's related functions, states, or svg. */}
        {/* (you may change the styles in the css as long as it is still easily visible) */}
        <div className={toolTip}>
          <div className={styles.close} onClick={(e) => visible()}></div>
          <div className={styles.tipBox}>
            <p>
              This project is open source and free to use for your own links.
            </p>
            <div>
              <a
                href="https://github.com/Alex-Reyne/reyne-drops"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>More Info</button>
              </a>
              <button onClick={(e) => visible()}>close</button>
            </div>
          </div>
        </div>
        {/* END */}
      </main>
    </>
  )
}
