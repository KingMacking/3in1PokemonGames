import { BrowserRouter, Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import MemoryGame from "./pages/MemoryGame/MemoryGame"
import PokemonQuizz from "./pages/PokemonQuizz/PokemonQuizz"
import WordsPerMinute from "./pages/WordsPerMinute/WordsPerMinute"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/pokemonquizz" element={<PokemonQuizz />}/>
                <Route path="/memorygame" element={<MemoryGame />}/>
                <Route path="/wordsxminute" element={<WordsPerMinute />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
