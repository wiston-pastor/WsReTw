
import prueba from "./assets/img/prueba.png"

function App() {
  return (
    <>
      <header className="bg-blue-400 py-2 flex justify-between px-10 items-center ">
        <div className="text-2xl font-black">RKwiston</div>
        <div>Felix navidad y prospero año nuevo</div>
      </header>
      <nav className="bg-blue-100">
        <ul className="flex justify-around mx-20 py-3 bg-blue-200">
          <li>inicio</li>
          <li>contacto</li>
          <li>mas de</li>
          <li>videos</li>
          <li>fanarts</li>
        </ul>
      </nav>
      <main className="bg-blue-500 h-screen flex justify-center items-center flex-col ">
        <h2 className="text-red-800 font-extrabold text-2xl text-center sm:text-6xl my-5">Britani cada que quiere que lea yaoi: </h2>
        
        <img className="rounded-xl " src={prueba} alt="imgane de prueba" />

      </main>
      <footer className="flex justify-center" >Esta pagina esta hecha con mucho amor ♥️</footer>
    </>
  )
}
export default App