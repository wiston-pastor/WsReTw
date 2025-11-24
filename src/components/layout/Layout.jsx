import { Outlet, Link } from 'react-router-dom';
import perfil from "@/assets/img/perfil.webp"
import NavBar from '@/components/ui/NavBar';

function Layout() {
    return (
        <>
            <header className="bg-pink-400 px-2 flex justify-between items-center p-1 sm:flex sm:justify-around">
                <div className="">
                    <h1 className="text-3xl font-black">
                        <Link to="/">Britani</Link>
                    </h1>
                    <p className="italic">"Y si te termino de criar"</p>
                </div>
                <img className="rounded-full size-12 shadow-lg border border-white/20 " src={perfil} alt="foto de perfil" />
            </header>
            <NavBar />

            <main className="bg-[url('./assets/img/bg-k.svg')] bg-cover bg-center bg-no-repeat h-screen flex justify-center items-center flex-col sm:bg-cover sm:bg-center sm:h-screen ">
                <Outlet />
            </main>

            <footer className="flex justify-center" >Esta pagina esta hecha con mucho amor ♥️</footer>
        </>
    )
}
export default Layout