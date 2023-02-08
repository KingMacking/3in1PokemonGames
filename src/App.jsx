import { BrowserRouter, Route, Routes } from "react-router-dom"
import PokemonQuizz from "./pages/PokemonQuizz/PokemonQuizz"

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pokemonquizz" element={<PokemonQuizz/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
