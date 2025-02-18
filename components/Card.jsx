import styles from '../styles/Card.module.css'

export default function Card({ url, alt, icon, image, text }) {
  return (
    <div className={styles.container}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className={styles.image} src={image} alt={alt} />
        <div className={styles.content}>
          <h2 className={styles.title}>{text}</h2>
          <img className={styles.icon} src={icon} />
        </div>
      </a>
    </div>
  )
}
