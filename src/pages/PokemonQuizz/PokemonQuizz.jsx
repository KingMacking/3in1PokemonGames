import { useState } from "react"
import { Link } from "react-router-dom"
import './PokemonQuizz.scss'

const POKEMON = [
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

const POKEID = Math.floor(Math.random() * POKEMON.length)


const PokemonQuizz = () => {
    const [correct, isCorrect] = useState(false)
    const [incorrect, isIncorrect] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const {pokemon} = e.currentTarget
    
        if(pokemon.value.toLowerCase() === POKEMON[POKEID]){
            isCorrect(true)
            isIncorrect(false)
        } else {
            isCorrect(false)
            isIncorrect(true)
        }
    }
    
    return (
        <main className="pokequizz-container">
            <form className="pokequizz-form nes-container is-rounded" onSubmit={handleSubmit}>
                <label for="name">Ingresa el nombre del pokemon</label>
                <input autoFocus className={`nes-input ${correct && "is-success"} ${incorrect && "is-error"}`} type="text" id="name" name="pokemon"/>
                {incorrect && <p className="nes-text is-error">El pokemon ingresado es incorrecto</p>}
                {!correct ?
                    <>
                        <button className="nes-btn is-primary" type="submit">Adivinar</button>
                        <Link className='nes-btn is-warning' to="/">Volver a inicio</Link>
                    </>
                :
                    <>
                        <p className="nes-text is-success">¡Muy bien, el pokemon era {POKEMON[POKEID]}!</p>
                        <button onClick={()=> location.reload()} className="nes-btn is-success" type="submit">Volver a jugar</button>
                        <Link className='nes-btn is-warning' to="/">Volver a inicio</Link>
                    </>
                }
            </form>
            <div className="pokequizz-img-pokemon">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${POKEID + 1}.png`} style={{imageRendering: "pixelated", filter: correct ? "" : "brightness(0) invert(1)"}}/>
            </div>
            
        </main>
    )
}
export default PokemonQuizz