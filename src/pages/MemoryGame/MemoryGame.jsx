import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MemoryGame.scss'

const POKEMONS = [
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
].flatMap((image) => [`a|${image}`,`b|${image}`]).sort(() => Math.random() - 0.5);


const MemoryGame = () => {
    const [guessed, setGuessed] = useState([])
    const [selected, setSelected] = useState([])
    const [hasWon, setHasWon] = useState(false)

    useEffect(() => {
        if (selected.length === 2) {
            if(selected[0].split("|")[1]===selected[1].split("|")[1]){
                setGuessed((guessed) => guessed.concat(selected))
            }
            setTimeout(() => setSelected([]), 300)
        }
    }, [selected])

    useEffect(()=>{
        guessed.length === POKEMONS.length && setHasWon(true)
    }, [guessed])
    return (
        <main className="memorygame-container">
            <ul className="memorygame-itemlist">
                {POKEMONS.map((image) =>  {
                    const [,url] = image.split("|")
                    return (
                    <li onClick={() => selected.length < 2 && setSelected((selected)=> selected.concat(image))} key={image} className="memorygame-item">
                    {guessed.includes(image) || selected.includes(image) ? 
                        <img className="memorygame-item-img nes-pointer" src={url} alt="pokemon icon" />
                    :
                        <img className='nes-pointer memorygame-item-img' src='/question-mark.png'/>
                    }
                    </li>
                    )
            })}
            </ul>
            {hasWon && 
                <div className='nes-container id-rounded haswon-container'>
                    <p className='nes-text'>¡Muy bien, has ganado!</p>
                    <button onClick={() => location.reload()} className='nes-btn is-primary'>Volver a jugar</button>
                </div>
            }
            <Link className='nes-btn is-warning' to="/">Volver a inicio</Link>
        </main>
    )
}
export default MemoryGame