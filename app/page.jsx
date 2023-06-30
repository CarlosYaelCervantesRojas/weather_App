import Image from 'next/image'
import styles from './page.module.css'
import Card from '@/components/Card'

export default function Home() {
  return (
    <>
      <section className={styles.secPrincipal}>
        <div className={styles.boton_Ubicacion}>
          <button type='button' className={styles.botonSearch}>
            Search for places
          </button>
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
      </section>

      <section className={styles.secHigh}>
      <h4>Today’s Hightlights</h4>
      </section>
    </>
  )
}
