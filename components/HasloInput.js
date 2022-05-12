import { useState } from "react"
export default function HasloInput({ OnSubmit }) {
    const [haslo, setHaslo] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        OnSubmit(haslo)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={haslo} onChange={(e) => setHaslo(e.target.value)} />
            <button type="submit">Sprawdź</button>
        </form>
    )
}