import React from 'react'
import prueba from "@/assets/img/prueba.avif" // Asegúrate de mover la importación aquí
import Boton from "@/components/ui/Boton"

const HomePage = () => {
  return (
    <div className="m-3 flex flex-col items-center">
      <div className="bg-white/20 backdrop-blur-sm my-5 p-3 rounded-xl drop-shadow-xl">
        <h2 className="text-red-900 font-extrabold">Britani cada que quiere que lea yaoi: </h2>
      </div>
      <img className="rounded-xl w-4/5 shadow-2xl" src={prueba} alt="imagen de prueba" />
      <Boton estilado="bg-pink-600 shadow-xl p-1 my-9 w-4/5 text-white font-semibold rounded-md sm:w-1/2 hover:bg-blue-500" titulo="Tontita" />
    </div>
  )
}

export default HomePage