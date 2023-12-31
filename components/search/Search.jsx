'use client'
import Image from 'next/image'
import styles from './Search.module.css'
import { useState } from 'react'

const getDataInput = async (urlSearch) => {
    const res = await fetch(urlSearch)
    const inputData = await res.json()
    return inputData
}

export default function Search() {
    
    const [botonState, setBotonState] = useState(false)
    
    function showSearch() {
        setBotonState(!botonState)
    }
    
    const [inputValue, setInputValue] = useState('')
    
    function seachPlace(e) {
        setInputValue(e.target.value)
    }
    async function seachPlaceButton() {
        setInputValue(inputValue)
        const urlSearch = `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=3&appid=608aa8411698ca2511927838a7977ba2`
        const places = await getDataInput(urlSearch)
        console.log(places)
    }

    return (
        <>
            {
                botonState ?
                    <div className={styles.searchContainer} >
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
                                <input onChange={seachPlace} value={inputValue} className={styles.searchLocation} type="text" placeholder='search location' />
                            </div>
                            <button onClick={seachPlaceButton} type='button'>Search</button>
                        </div>                        
                    </div>
                    :
                    <button type='button' className={styles.botonSearch} onClick={showSearch}>
                        Search for places
                    </button>
            }
        </>
    )
}
