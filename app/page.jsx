'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/card/Card'
import High from '@/components/high/High'
import { useState } from 'react'

export default function Home() {

  const [botonState, setBotonState] = useState(false)

  function showSearch() {
    setBotonState(!botonState)
  }

  return (
    <>
      <section className={styles.secPrincipal}>
        <div className={styles.boton_Ubicacion}>
          {
          botonState ? 
          <div className={styles.searchContainer}>
            <div className={styles.close}>
              <Image
                src={'/close_FILL0_wght400_GRAD0_opsz48.svg'}
                width={30}
                height={30}
                alt='close'
                onClick={showSearch}
              />
            </div>
            <div className={styles.searchAndButton}>
              <div className={styles.searchLocationContainer}>
                <Image
                  src={'/search_FILL0_wght400_GRAD0_opsz48.svg'}
                  width={24}
                  height={24}
                  alt='search'
                />
                <input className={styles.searchLocation} type="text" placeholder='search location' />
              </div>
              <button type='button'>Search</button>
            </div>
          </div>
          :
            <button type='button' className={styles.botonSearch} onClick={showSearch}>
              Search for places
            </button>
          }
          <div className={styles.imgContainer}>
            <Image
              src={'/my_location_FILL1_wght400_GRAD0_opsz48.svg'}
              width={30}
              height={30}
              alt='MyLocation'
            />
          </div>
        </div>
        <div className={styles.clouds}></div>
        <div className={styles.weaImg}>
          <Image
            src={'/weather-app-master/Shower.png'}
            height={234}
            width={202}
            alt='weather'
          />
        </div>
        <div className={styles.info}>
          <div className={styles.temp}>
            <h1>15</h1><p>°C</p>
          </div>
          <h3>Shower</h3>
          <span>Today • Fri, 5 Jun</span>
          <div className={styles.location}>
            <Image
              src={'/location_on_FILL1_wght300_GRAD0_opsz48.svg'}
              width={24}
              height={24}
              alt='Location'
            />
            <span>Helsinki</span>
          </div>
        </div>
      </section>


      <section className={styles.secCards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>

      <section className={styles.secHigh}>
        <h4>Today&#8217;s Hightlights</h4>
        <div className={styles.highCards}>
          <High />
          <High />
          <High />
          <High />
        </div>
      </section>
    </>
  )
}
