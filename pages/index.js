import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Koło Balladyny</title>
      </Head>
      <h1>Koło Balladyny - Quiz o Balladynie</h1>
      <div className={styles.startBtn}><Link href="/quiz/1">Rozpocznij!</Link></div>
      <p>
        Autorzy:<br/>
        Karol Kowalczewski<br/>
        Oskar Przyborski
      </p>
    </div>
  )
}
