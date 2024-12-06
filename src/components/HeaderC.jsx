import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

export const HeaderC = () => {

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
    <div className="flex items-center mt-3 w-full absolute top-0">
      <Link href="/login/cliente">
        <button className="w-36 ml-6">
          <img
            src="/logoprincipal.jpg"
            alt="Logo"
            className="w-36 h-16 rounded-md"
          />
        </button>
      </Link>
      <div className="flex gap-9 text-3xl w-full pr-6 items-center justify-end">
        <h2>{usuarioValido.usuario}</h2>
        <h3>Nivel {usuarioValido.nivel}</h3>
        <button
        onClick={() => {
          localStorage.removeItem("usuario"); // Eliminar datos al cerrar sesión
          window.location.href = "/";
        }}
        className=" bg-red-500 text-white px-4 py-2 rounded-lg"
      >
        Cerrar Sesión
      </button>
      </div>
    </div>
  );
};
