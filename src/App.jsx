
import prueba from "./assets/img/prueba.png"

function App() {
  return (
    <>
      <header className="bg-pink-400 px-2">
        <div className="text-3xl font-black">Britani</div>
        <div className="italic">"Y si te termino de criar"</div>
      </header>
      <nav className="bg-pink-300">
        <ul className="flex justify-around my-0.25 gap-1">
          <li className="font-light">Inicio</li>
          <li className="font-light">Fanarts</li>
          <li className="font-light">Redes</li>
        </ul>
      </nav>
      <main className="bg-[url('./assets/img/bg-k.svg')] bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col sm:bg-cover sm:bg-center sm:h-screen ">
        <div className="m-3  flex flex-col items-center ">
          <div className="bg-white/20 backdrop-blur-sm my-5 p-3 rounded-xl drop-shadow-xl">

            <h2 className="text-red-900 font-extrabold">Britani cada que quiere que lea yaoi: </h2>

          </div>


          <img className="rounded-xl w-4/5 shadow-2xl " src={prueba} alt="imgane de prueba" />
          <button className="bg-blue-600 shadow-xl p-1 my-9 w-4/5 text-white font-semibold rounded-md sm:w-1/2 hover:bg-blue-500">Tontita</button>
        </div>

      </main>
      <footer className="flex justify-center" >Esta pagina esta hecha con mucho amor ♥️</footer>
    </>
  )
}
export default App