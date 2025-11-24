import { Link } from 'react-router-dom'

const NavBar = () => {

    const styleNavLink = "font-light hover:font-bold"

    return (
        <nav className="bg-pink-300">
            <ul className="flex justify-around my-0.25 gap-1 sm:max-w-4/5 sm:mx-auto">
                <li className={styleNavLink}>
                    <Link to="/">Inicio</Link>
                </li>
                <li className={styleNavLink}>
                    <Link to="/fan-art">Fanarts</Link>
                </li>
                <li className={styleNavLink}>
                    <Link to="/redes">Redes</Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar