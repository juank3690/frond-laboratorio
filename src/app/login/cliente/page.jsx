"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { HeaderC } from "@/components/HeaderC";
import { HistorialC } from "@/components/HistorialC";
import { Reservasc } from "@/components/Reservasc";

export default function ClientePage() {
  const [usuarioValido, setUsuarioValido] = useState(null);
  const [showHistorial, setShowHistorial] = useState(false);
  const [showReservas, setShowReservas] = useState(false);
  const router = useRouter();

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
    <div>
      <HeaderC />

      <div className="p-4 flex bg- flex-row justify-center items-center mt-36"style={{ backgroundImage: "url('../../../../public/fondo1.jpg')" }}>
      <img className="w-52 rounded-lg" src={usuarioValido.imagen} alt="" />
      <div className="ml-48">
        <h2 className="text-5xl">Proposito:</h2>
        <h3 className="text-4xl mt-12">{usuarioValido.meta}</h3>
        <div className="flex justify-around mt-6 text-red-500">
          <button onClick={() => setShowHistorial(!showHistorial)}>historial</button>
          {showHistorial && <HistorialC />}
          <button onClick={() => setShowReservas(!showReservas)}>reservas</button>
          {showReservas && <Reservasc />}
          <button>Reservar</button>
        </div>
      </div>
      </div>
    </div>
  );
}
