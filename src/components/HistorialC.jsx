import React from 'react'
import { useState, useEffect } from "react";

 export const HistorialC = () => {

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
          <h1 className="text-center text-3xl mb-10">Historial</h1>
          <div className="p-4">
            {usuarioValido.historial && usuarioValido.historial.length > 0 ? (
              usuarioValido.historial.map((registro, index) => (
                <div
                  key={index}
                  className="border p-4 mb-4 rounded-lg shadow-md bg-white"
                >
                  <p className="text-lg font-semibold">Músculo: {registro.musculo}</p>
                  <p>Tiempo: {registro.tiempo} minutos</p>
                  <p>Fecha: {registro.feha}</p>
                </div>
              ))
            ) : (
              <p>No hay historial disponible.</p>
            )}
          </div>
        </div>
      );
    };


