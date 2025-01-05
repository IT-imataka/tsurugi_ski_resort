import styles from '../styles/Sample.module.css'

export default function Home() {
  return (
    <div>
      <iframe className={styles.main} src="portfolio/index.html"/>
    </div>
  )
}

