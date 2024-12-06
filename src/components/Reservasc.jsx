
import React from 'react'
import { useState, useEffect } from "react";

export const Reservasc = () => {

    const [usuarioValido, setUsuarioValido] = useState(null);
    
  
    useEffect(() => {
      const usuario = localStorage.getItem("usuario");
      if (usuario) {
        setUsuarioValido(JSON.parse(usuario)); // Cargar datos
      } else {
        router.push("/"); // Redirigir si no hay datos
      }
    }, []);
  
    if (!usuarioValido) {
      return <div>Cargando...</div>;
    }


  return (
    <div className="bg-slate-200 z-20 ml-6 absolute top-96 left-20 w-5/6 ">
    <h1 className="text-center text-3xl mb-10">Reservas</h1>
    <div className="p-4">
      {usuarioValido.reservas && usuarioValido.reservas.length > 0 ? (
        usuarioValido.reservas.map((registro, index) => (
          <div
            key={index}
            className="border p-4 mb-4 rounded-lg shadow-md bg-white"
          >
            <p className="text-lg font-semibold">{registro.evento}</p>
            <img src={registro.imagen} alt="" />
            <p>Tiempo: {registro.fecha} minutos</p>
          </div>
        ))
      ) : (
        <p>No hay historial disponible.</p>
      )}
    </div>
  </div>
  )
}


