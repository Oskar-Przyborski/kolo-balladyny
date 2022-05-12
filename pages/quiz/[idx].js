import styles from '../../styles/Quiz.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import KartaLitery from '../../components/KartaLitery'
import { useState } from 'react'
import Keyboard from '../../components/Keyboard'
import HasloInput from '../../components/HasloInput'
import NextHasloBtn from '../../components/NextHasloBtn'
import Questions from '../../data/pytania.json'
export default function Quiz({ idx, kategoria, hasloWords }) {
    const [selectedLetter, setSelectedLetter] = useState(null)
    const [usedLetters, setUsedLetters] = useState([])
    const [shownLettersLeft, setShownLettersLeft] = useState()
    const [isGuessed, setIsGuessed] = useState(false)
    const SelectLetter = (letter) => {
        if (usedLetters.includes(letter)) return
        if (shownLettersLeft > 0) return
        setSelectedLetter(letter)
        setUsedLetters([...usedLetters, letter])
        const lettersCount = hasloWords.join("").match(new RegExp(letter, "g"))
        setShownLettersLeft(lettersCount != null ? lettersCount.length : 0)
    }
    const LiteraClick = (wordIdx, letterIdx) => {
        const litera = hasloWords[wordIdx][letterIdx]
        if (selectedLetter != litera) return;
        setShownLettersLeft(shownLettersLeft - 1)
    }
    const SprawdzHaslo = (haslo) => {
        haslo = haslo.toUpperCase()
        if (haslo === hasloWords.join(' ')) {
            setIsGuessed(true)
        }
    }
    return (
        <div className={styles.container}>
            <Head>
                <title>Hasło {idx}</title>
            </Head>
            <div className={styles.Kategoria}>
                <h2>kategoria</h2>
                <h1>{kategoria}</h1>
            </div>
            <div className={styles.hasloContainer}>
                {hasloWords.map((word, wordIdx) => {
                    return <div className={styles.wordContainer} key={wordIdx}>
                        {
                            word.split("").map((litera, literaIdx) => {
                                return <KartaLitery key={literaIdx} litera={litera} literaIdx={literaIdx} wordIdx={wordIdx} isSelected={selectedLetter == litera} onClick={LiteraClick} />
                            })
                        }
                    </div>
                })}
            </div>
            {!isGuessed ?
                <>
                    <Keyboard onKeyClicked={SelectLetter} usedLetters={usedLetters} />
                    <HasloInput OnSubmit={SprawdzHaslo} />
                </> :
                <div>
                    <NextHasloBtn hasloIdx={parseInt(idx) + 1} />
                </div>
            }
        </div>
    )
}

export function getStaticPaths() {
    const paths = []
    Questions.forEach((question, idx) => {
        paths.push({ params: { idx: (idx + 1).toString() } })
    })
    return {
        paths,
        fallback: false
    }
}
export async function getStaticProps({ params }) {
    const pytanie = Questions[parseInt(params.idx) - 1]
    const kategoria = pytanie.kategoria
    const hasloWords = pytanie.slowaHasla
    return {
        props: {
            idx: params.idx,
            kategoria,
            hasloWords,
            key: params.idx
        }
    }
}