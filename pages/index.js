import Head from 'next/head'
import styles from '../styles/Home.module.css'

// import data from '../data/data.json'

export default function Home() {
  return (
    <div className={styles.container}>
      <ul>
        {data.first.map(x => (
          <li>{x.title} | {x.description}</li>
        ))}
      </ul>
    </div>
  )
}

// Home.getInitialProps = async () => {
//   const res = await fetch(`../data/data.json`)
//   const data = await res.json()
//   return { data }
// }
