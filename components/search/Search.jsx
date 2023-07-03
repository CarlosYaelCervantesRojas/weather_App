import Image from 'next/image'
import styles from './Search.module.css'

export default function Search({onClick}) {
    // console.log(onClick)
    return (
        <div className={styles.searchContainer} >
            <div className={styles.close}>
                <Image
                    src={'/close_FILL0_wght400_GRAD0_opsz48.svg'}
                    width={30}
                    height={30}
                    alt='close'
                    onClick={onClick}
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
    )
}
