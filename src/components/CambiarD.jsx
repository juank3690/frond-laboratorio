import React, { useState, useEffect } from "react";
import { cambiarD } from "@/api/datos";

export const CambiarD = () => {
  const [dieta, setDieta] = useState("");
  const [usuario, setUsuario] = useState("");

  // Cargar datos del cliente desde localStorage al montar el componente
  useEffect(() => {
    const cliente = JSON.parse(localStorage.getItem("cliente"));
    if (cliente) {
      setDieta(cliente.dieta || ""); // Usar dieta actual o cadena vacía
      setUsuario(cliente.usuario);  // Usuario del cliente
    }
  }, []);

  const handleSave = async () => {
    try {
      const datos = { usuario, dieta };
      const response = await cambiarD(datos); // Llamada a la API
      alert("Dieta actualizada correctamente");
      // Actualizar localStorage
      const clienteActualizado = { ...JSON.parse(localStorage.getItem("cliente")), dieta };
      localStorage.setItem("cliente", JSON.stringify(clienteActualizado));
    } catch (error) {
      alert("Error al actualizar la dieta");
    }
  };

  return (
    <div className=" p-4 h-52 bg-orange-500 rounded shadow-md absolute top-3/4 ">
      <h3 className="text-xl mb-4">Editar Dieta</h3>
      <textarea
        value={dieta}
        onChange={(e) => setDieta(e.target.value)}
        rows="4"
        className="w-full p-1 h-20 rounded-lg"
        placeholder="Escribe la nueva dieta aquí..."
      ></textarea>
      <button
        onClick={handleSave}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Guardar Cambios
      </button>
    </div>
  );
};

