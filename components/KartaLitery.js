import { useState } from "react"
import { KartaLiteryStyled } from "../styles/Quiz.styles"
export default function KartaLitery({ litera, literaIdx, wordIdx, isSelected, onClick }) {
    const [isVisible, setIsVisible] = useState(false)
    const handleClick = () => {
        if (isSelected & !isVisible) {
            setIsVisible(true)
            onClick(wordIdx, literaIdx)
        }
    }
    return (
        <KartaLiteryStyled isSelected={isSelected && !isVisible} onClick={handleClick}>
            {isVisible && litera}
        </KartaLiteryStyled>
    )
}