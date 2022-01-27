import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
        <h1>Pick Your Game</h1>
        <nav>
            <Link class="game-button" to={'zeroone'}>
              _01
            </Link>
            <Link class="game-button" to={'cricket'}>
            Cricket
            </Link>
        </nav>
        </>
    )
}