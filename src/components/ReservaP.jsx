import React, { useState, useEffect } from "react";
import { eliminarE } from "@/api/datos";

export const ReservaP = () => {
  const [cliente, setCliente] = useState(null);
  const [reservas, setReservas] = useState([]);

  // Obtener cliente de localStorage
  useEffect(() => {
    const clienteGuardado = localStorage.getItem("cliente");
    if (clienteGuardado) {
      const clienteParsed = JSON.parse(clienteGuardado);
      setCliente(clienteParsed);
      setReservas(clienteParsed.reservas || []);
    }
  }, []);

  // Manejar eliminación de reserva
  const handleEliminarReserva = async (evento) => {
    try {
      const datos = { usuario: cliente.usuario, evento }; // Datos necesarios para eliminar la reserva
      await eliminarE(datos);

      // Actualizar reservas localmente tras eliminar
      const nuevasReservas = reservas.filter((reserva) => reserva.evento !== evento);
      setReservas(nuevasReservas);

  
      const clienteActualizado = { ...cliente, reservas: nuevasReservas };
      localStorage.setItem("cliente", JSON.stringify(clienteActualizado));
    } catch (error) {
      console.error("Error eliminando la reserva:", error);
      alert("Hubo un error al eliminar la reserva.");
    }
  };

  return (
    <div className="mt-8 absolute overflow-y-scroll h-52 ">
      <h2 className="text-2xl font-bold mb-4">Reservas</h2>
      {reservas.length > 0 ? (
        <ul className="space-y-4">
          {reservas.map((reserva, index) => (
            <li key={index} className="flex items-center justify-between border p-4 rounded shadow">
              <div>
                <p className="font-semibold">Evento: {reserva.evento}</p>
                <p>Fecha: {reserva.fecha}</p>
                {reserva.imagen && (
                  <img
                    src={reserva.imagen}
                    alt={`Imagen de ${reserva.evento}`}
                    className="w-16 h-16 rounded mt-2"
                  />
                )}
              </div>
              <button
                onClick={() => handleEliminarReserva(reserva.evento)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay reservas disponibles.</p>
      )}
    </div>
  );
};

