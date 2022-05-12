import Link from 'next/link'
import { NextHasloBtnStyled } from '../styles/Quiz.styles'
export default function NextHasloBtn({ hasloIdx }) {
    return (
        <NextHasloBtnStyled>{
            hasloIdx === -1 ?
                <>
                    <h1>Gratulację! Ukończyliście cały quiz!</h1>
                    <Link href="/">Strona główna</Link>
                </> :
                <>
                    <h1>Gratulacje!</h1>
                    <Link href={"/quiz/" + hasloIdx}>Następne hasło</Link>
                </>
        }
        </NextHasloBtnStyled>
    )
}