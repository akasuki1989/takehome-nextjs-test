import { useEffect, useState } from "react"
import type { NextPage } from 'next'
import Head from 'next/head'

import Ballots from 'views/Ballots'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  const [ballotData, setBallotData] = useState([])

  useEffect(() => {
    fetchBallotsData()
  }, []);

  const fetchBallotsData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/ballots');
      const { items = [] } = await res.json();

      setBallotData(items);
    } catch (err) {}
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Take Home Test</title>
        <meta name="description" content="Movie Awards 2021" />
        <link rel="icon" href="/favicon.ico" />
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css' />
      </Head>
      
      <main className={styles.main}>
        <Ballots ballotData={ballotData} />
      </main>
    </div>
  )
}

export default Home