import Image from 'next/image'
import styles from './Card.module.css'

export default function Card() {
    return (
        <div className={styles.cardContainer}>
            <h5>Tomorrow</h5>
            <div className={styles.img}>
                <Image
                    src={'/weather-app-master/Sleet.png'}
                    fill
                    style={{objectFit: 'contain'}}
                    alt='weather'
                />
            </div>
            <div className={styles.deegres}>
                <span>16°C</span>
                <span className={styles.lastchild}>11°C</span>
            </div>
        </div>
    )
}
