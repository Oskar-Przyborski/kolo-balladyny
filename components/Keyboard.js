import { KeyboardStyled } from "../styles/Quiz.styles"

export default function Keyboard({ onKeyClicked, usedLetters }) {
    const KEYS = ["A", "Ą", "B", "C", "Ć", "D", "E","Ę" ,"F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"]
    return (
        <KeyboardStyled>
            {KEYS.map((key, keyIdx) => {
                return <button key={keyIdx} onClick={() => onKeyClicked(key)} disabled={usedLetters.includes(key)}>{key}</button>
            })}
        </KeyboardStyled>
    )
}