import { Link } from "react-router-dom"
import './Dashboard.scss'

const Dashboard = () => {
    return (
        <main className="dashboard-container">
            <div className="dashboard-gameslist nes-container is-rounded">
                <h2 className="dashboard-title">Selecciona tu pokemon inicial</h2>
                <div className="dashboard-games">
                    <Link className="dashboard-game-link nes-container is-rounded" to="/memorygame">
                        <h2 className="dashboard-game-title">Memory Game</h2>
                        <img className="dashboard-game-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokemon image"/>
                    </Link>
                    <Link className="dashboard-game-link nes-container is-rounded" to="/pokemonquizz">
                        <h2 className="dashboard-game-title">Pokemon Quizz Game</h2>
                        <img className="dashboard-game-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" alt="Pokemon image"/>
                    </Link>
                    <Link className="dashboard-game-link nes-container is-rounded" to="/wordsxminute">
                        <h2 className="dashboard-game-title">Words Per Minute Game</h2>
                        <img className="dashboard-game-img" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="Pokemon image"/>
                    </Link>
                </div>
            </div>
        </main>
    )
}
export default Dashboard