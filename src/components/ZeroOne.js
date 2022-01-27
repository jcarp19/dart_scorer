import { Link } from "react-router-dom";

export default function ZeroOne() {
    return (
        <div>
            <h1>_01</h1>
            <nav>
                <Link class="game-button" to={"/"}>Home</Link>
                <Link class="game-button" to={"/cricket"}>Cricket</Link>
            </nav>
        </div>
    )
}