"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HeaderP } from "@/components/HeaderP";
import { FaSearch } from "react-icons/fa";
import { obtenerC } from "@/api/datos";

export default function ProfesorPage() {
  const [usuarioValido, setUsuarioValido] = useState(null);
  const [clienteValido, setClienteValido] = useState(null);

  const router = useRouter();

  // Obtiene los datos del usuario válido al cargar la página
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    if (usuario) {
      setUsuarioValido(JSON.parse(usuario));
    } else {
      router.push("/"); // Redirigir si no hay datos
    }
  }, []);

  if (!usuarioValido) {
    return <div>Cargando...</div>;
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const nombre = form.elements.nombre.value;

    try {
      const datos = await obtenerC();
      const cliente = datos.find((user) => user.usuario === nombre);

      if (!cliente) {
        alert("Cliente no válido");
        return;
      }

      setClienteValido(cliente); // Guarda el cliente en el estado
    } catch (error) {
      console.error("Error al obtener cliente:", error);
      alert("Error al buscar el cliente");
    }
  };

  return (
    <div>
      <HeaderP />
      <main
        className="h-screen w-full bg-contain bg-center bg-no-repeat bg-fixed absolute"
        style={{ backgroundImage: "url('/fondo1.jpg')" }}
      >
        <h2 className="text-3xl absolute top-24 left-10">A entrenar</h2>
        <div className="flex bg-amber-100 px-24 mt-40 bg-opacity-75 py-20 justify-around">
          <img src={usuarioValido.imagen} alt="" className="w-80 rounded-md" />
          <div className="">
            <div>
              <h2 className="text-2xl">Buscar un usuario</h2>
              <form onSubmit={onSubmit} className="relative w-full max-w-md">
                <input
                  type="text"
                  placeholder="Buscar..."
                  name="nombre"
                  id="nombre"
                  className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-2xl text-gray-700 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-blue-500 hover:bg-blue-600 text-white rounded-r-2xl"
                >
                  <FaSearch className="w-5 h-5" />
                </button>
              </form>
              {clienteValido && (
                <div className="flex mt-3">
                  <h3>{clienteValido.usuario}</h3>
                  <h3>Nivel: {clienteValido.nivel}</h3>
                </div>
              )}
            </div>
            <div className="mt-16 flex gap-5">
              <button className="border-solid border-red-500 border-2 bg-orange-500 rounded-lg px-1">
                Historial
              </button>
              <button className="border-solid border-red-500 border-2 bg-orange-500 rounded-lg px-1">
                Reservas
              </button>
              <button className="border-solid border-red-500 border-2 bg-orange-500 rounded-lg px-1">
                Dietas
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
