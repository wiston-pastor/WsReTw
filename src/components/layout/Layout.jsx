import React from 'react';
import { Outlet ,Link } from 'react-router-dom';
import prueba from "@/assets/img/prueba.avif"
import perfil from "@/assets/img/perfil.webp"

function Layout() {
    return (
        <div>
            <header className="bg-pink-400 px-2 flex justify-between items-center p-1 sm:flex sm:justify-around">
                <div className="">
                    <div className="text-3xl font-black">
                        <Link to="/">Britani</Link>
                    </div>
                    <div className="italic">"Y si te termino de criar"</div>
                </div>
                <img className="rounded-full size-12 shadow-lg border border-white/20 " src={perfil} alt="foto de perfil" />
            </header>
            <nav className="bg-pink-300">
                <ul className="flex justify-around my-0.25 gap-1 sm:max-w-4/5 sm:mx-auto">
                    <li className="font-light hover:font-bold">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="font-light hover:font-bold">
                        <Link to="/fan-art">Fanarts</Link>
                    </li>
                    <li className="font-light hover:font-bold">
                        <Link to="/redes">Redes</Link>
                    </li>
                </ul>
            </nav>

            <main className="bg-[url('./assets/img/bg-k.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col sm:bg-cover sm:bg-center sm:h-screen ">
                <Outlet />
            </main>

            <footer className="flex justify-center" >Esta pagina esta hecha con mucho amor ♥️</footer>
        </div>
    )
}
export default Layout