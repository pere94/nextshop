import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link';
import styles from '../styles/pages_styles/Home.module.scss';

import {Nav} from '../templates/Nav/Nav';
import {Grid} from '../templates/Grid/Grid';
import {Search} from '../Components/Search/Search';
import {OrderFilter} from '../Components/OrderFilter/OrderFilter';

export default function Home() {

  return (
    <>
      <Head>
        <title>React Shop HomePage</title>
      </Head>
      <Nav />
      <div className={styles.HomeContainer}>
        <div className={styles.HomeContainer__searchFilter}>
          <Search className={styles.HomeContainer__searchFilter_search} />
          <OrderFilter 
            className={styles.HomeContainer__searchFilter_order}
            option={[["1", "Clothes"], ["2", "Electronics"], ["3", "Furniture"], ["4", "Shoes"], ["5", "Others"]]}  
          />
        </div>
        <div className={styles.HomeContainer__ProductGrid}>
          <Grid />
        </div>
      </div>
    </>
  )
}
