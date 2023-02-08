import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './WordsPerMinute.scss'

const POKEMONS = [
    "bulbasaur",
    "ivysaur",
    "venusaur",
    "charmander",
    "charmeleon",
    "charizard",
    "squirtle",
    "wartortle",
    "blastoise",
    "caterpie",
    "metapod",
    "butterfree",
    "weedle",
    "kakuna",
    "beedrill",
    "pidgey",
    "pidgeotto",
    "pidgeot",
    "rattata",
    "raticate",
    "spearow",
    "fearow",
    "ekans",
    "arbok",
    "pikachu",
    "raichu",
    "sandshrew",
    "sandslash"
]
const POKEID = Math.floor(Math.random() * POKEMONS.length)

const WordsPerMinute = () => {
    const [currentWord, setCurrentWord] = useState(() => POKEMONS[(Math.random() * POKEMONS.length) | 0])
    const [wordsCount, setWordsCount] = useState(0)
    const [charactersCount, setCharactersCount] = useState(0)
    const [buffer, setBuffer] = useState("");
    const [crono, setCrono] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(buffer === currentWord){
            setCurrentWord(POKEMONS[(Math.random() * POKEMONS.length) | 0])
            setCharactersCount((charactersCount) => charactersCount + currentWord.length)
            setWordsCount((wordsCount) => wordsCount += 1)
        }

        setBuffer("")
    }

    useEffect(() => {
        if(crono !== 0) {
            const timeout = setTimeout(() => setCrono(crono - 1), 1000)
            return () => clearTimeout(timeout)
        }
    }, [crono])

    return (
        <main className="wpm-container">
            <div className="wpm-header nes-container is-rounded">
                <h1 className="wpm-title">Palabras por minuto</h1>
                <h2 className="wpm-subtitle">Palabras tipeadas: {wordsCount}</h2>
                <h2 className="wpm-subtitle">Caracteres tipeados: {charactersCount}</h2>
                <h3 className="wpm-timer">Tiempo restante: {crono}</h3>
            </div>
            {crono ? (
                <form className="wpm-form nes-container is-rounded" onSubmit={handleSubmit}>
                    <img className="wpm-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${POKEMONS.indexOf(currentWord) + 1}.png`}/>
                    {Boolean(crono) && <h3 className="wpm-current-word">{currentWord}</h3>}
                    <p className="wpm-text">Escribe el nombre del pokemon</p>
                    <input onChange={(e) => setBuffer(e.target.value)} autoFocus className={`nes-input`} type="text" value={buffer}/>
                    <button className="nes-btn is-primary wpm-button" type="submit">Enviar</button>
                </form>
            ) : (
                <>
                    <button className="nes-btn is-primary wpm-play" onClick={() => setCrono(60)}>Jugar</button>
                    <Link className='nes-btn is-warning wpm-play' to="/">Volver a inicio</Link>
                </>
            )}
        </main>
    )
}
export default WordsPerMinute