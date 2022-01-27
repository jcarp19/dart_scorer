import { Link } from "react-router-dom";

export default function Cricket() {
    return (
        <div>
            <h1>Cricket</h1>
            <nav>
                <Link class="game-button" to={"/"}>Home</Link>
                <Link class="game-button" to={"/zeroone"}>_01</Link>
            </nav>
        </div>
    )
}