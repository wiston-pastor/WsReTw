import { Outlet, Link } from 'react-router-dom';
import perfil from "@/assets/img/perfil.webp"
import NavBar from '@/components/ui/NavBar';

function Layout() {
    return (
        <div className='min-h-screen flex flex-col'>
            <header className="bg-pink-400 px-2 flex justify-between items-center p-1 sm:flex sm:justify-around relative z-50 shadow-md">
                <div className="">
                    <h1 className="text-3xl font-black">
                        <Link to="/">Britani</Link>
                    </h1>
                    <p className="italic">"Y si te termino de criar"</p>
                </div>
                <img className="rounded-full size-12 shadow-lg border border-white/20 " src={perfil} alt="foto de perfil" />
            </header>
            <div>
                <NavBar className="relative z-40"/>
            </div>
            

            <main className="
                flex-grow          /* Ocupa el espacio restante y CRECE con el contenido */
                w-full             /* Ancho completo */
                bg-[url('./assets/img/bg-k.svg')] 
                bg-cover 
                bg-center 
                bg-no-repeat 
                bg-fixed           /* CLAVE: El fondo se queda quieto al hacer scroll */
                flex               /* Mantenemos flex, pero... */
                flex-col           /* ...en columna */
            ">
                <Outlet />
            </main>

            <footer className="flex justify-center py-1 bg-pink-400 text-white font-extralight relative z-50" >Esta pagina esta hecha con mucho amor ♥️</footer>
        </div>
    )
}
export default Layout