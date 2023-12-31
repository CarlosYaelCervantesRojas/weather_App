import styles from './High.module.css'

export default function High({ high }) {
  // console.log(high)
  return (
    <>
      <div className={styles.highContainer}>
        <span>Wind status</span>
        <h1>{Math.round(high.wind.speed)} mph</h1>
      </div>
      <div className={styles.highContainer}>
        <span>Humidity</span>
        <h1>{high.main.humidity} %</h1>
      </div>
      <div className={styles.highContainer}>
        <span>Visibility</span>
        <h1>{high.visibility} miles</h1>
      </div>
      <div className={styles.highContainer}>
        <span>Air Pressure</span>
        <h1>{high.main.pressure} mb</h1>
      </div>
    </>
  )
}
