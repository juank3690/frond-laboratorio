"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HeaderP } from "@/components/HeaderP";
import { FaSearch } from "react-icons/fa";
import { obtenerC } from "@/api/datos";
import { Foother } from "@/components/Foother";
import { HistorialP } from "@/components/HistorialP";
import { ReservaP } from "@/components/ReservaP";
import { CambiarD } from "@/components/CambiarD";

export default function ProfesorPage() {
  const [usuarioValido, setUsuarioValido] = useState(null);
  const [clienteValido, setClienteValido] = useState(null);
  const [showHistorial, setShowHistorial] = useState(false);
  const [mostrarDieta, setMostrarDieta] = useState(false);
  const [showReservas, setShowReservas] = useState(false);
  const [showDieta, setShowDieta] = useState(false);

  const router = useRouter();

  // Cargar datos del instructor desde localStorage
  useEffect(() => {
    const usuario = localStorage.getItem("usuario");
    try {
      const parsedUsuario = usuario ? JSON.parse(usuario) : null;
      if (parsedUsuario) {
        setUsuarioValido(parsedUsuario);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.error("Error al cargar el usuario:", error);
      router.push("/");
    }
  }, [router]);

  if (!usuarioValido) {
    return <div>Cargando...</div>;
  }

  // Buscar cliente
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const nombre = form.elements.nombre.value.trim();

    if (!nombre) {
      alert("Por favor, ingrese un nombre válido.");
      return;
    }

    try {
      const datos = await obtenerC();
      const cliente = datos.find((user) => user.usuario === nombre);

      if (!cliente) {
        alert("Cliente no encontrado.");
        return;
      }

      setClienteValido(cliente);
      localStorage.setItem("cliente", JSON.stringify(cliente));

      if (cliente.nivel === 4) {
        setMostrarDieta(true);
      } else {
        setMostrarDieta(false);
      }
    } catch (error) {
      console.error("Error al obtener los datos del cliente:", error);
      alert("Ocurrió un error al buscar el cliente.");
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
          <img src={usuarioValido.imagen} alt="" className="w-80 rounded-md mb-8" />
          <div>
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
              {clienteValido ? (
                <div className="mt-3 text-xl">
                  <h2>Usuario: {clienteValido.usuario}</h2>
                  <div className="flex">
                    <h3>Nombre: {clienteValido.nombre}</h3>
                    <h3 className="ml-3">
                      <span className="text-orange-500">Nivel: </span>
                      {clienteValido.nivel}
                    </h3>
                  </div>
                  <h2>Meta: {clienteValido.meta}</h2>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="mt-16 flex gap-5">
              <button
                onClick={() => setShowHistorial(!showHistorial)}
                className="border-solid border-red-500 border-2 bg-orange-500 rounded-lg px-1"
              >
                Historial
              </button>
              {showHistorial && clienteValido && <HistorialP />}
              <button
                onClick={() => setShowReservas(!showReservas)}
                className="border-solid border-red-500 border-2 bg-orange-500 rounded-lg px-1"
              >
                Reservas
              </button>
              {showReservas && clienteValido && <ReservaP />}
              {mostrarDieta ? (
                <button
                  onClick={() => setShowDieta(!showDieta)}
                  className="border-solid border-red-500 border-2 bg-orange-500 rounded-lg px-1"
                >
                  Dieta
                </button>
              ) : (
                ""
              )}
              {showDieta && <CambiarD />}
            </div>
          </div>
        </div>
        <div className="bg-black w-full text-white">
          <h2 className="text-center mb-11">Conócenos</h2>
          <div className="flex justify-center px-28">
            <a
              href="https://www.instagram.com/befit.c?igsh=YmNjanlqcHo5eGg0"
              target="_blank"
              className="mr-12"
              rel="noreferrer"
            >
              BE Fit
            </a>
            <a
              href="https://www.instagram.com/juank3693?igsh=MXc2b3pmYmQ4Mnp3bQ=="
              target="_blank"
              className="mr-12"
              rel="noreferrer"
            >
              Juank
            </a>
            {/* Otros enlaces */}
          </div>
        </div>
      </main>
    </div>
  );
}
