import "./Footer.css";

export default function Footer () {
    const d = new Date();
    let year = d.getFullYear();
    return (
        <footer>
            <p class="copyright">&copy; {year} Jim Carpenter</p>
        </footer>
    )
}