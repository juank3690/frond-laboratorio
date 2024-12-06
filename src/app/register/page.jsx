"use client";
import { HeaderC } from "@/components/HeaderC";
import React from "react";
import { Header } from "@/components/Header";
import axios from "axios"; // Importar Axios
import { useRouter } from "next/navigation";
import { obtenerC } from "@/api/datos";
import { useState, useEffect } from "react";

export default function RegisterPage() {

  const [clienteValido, setClienteValido] = useState(null);
  const onSubmit = async (event) => {
    event.preventDefault();
  
    const form = event.target;
    const datos = {
      usuario: form.elements.usuario.value,
      nombre: form.elements.nombre.value,
      contraseña: form.elements.contraseña.value,
      imagen: form.elements.imagen.value,
      tipo: 1, // Puedes configurar dinámicamente este valor si es necesario
      nivel: parseInt(form.elements.nivel.value, 10),
      meta: form.elements.meta.value,
      historial: [],
      reservas: [],
    };
  
    try {
      // Verificar si el usuario ya existe
      const clientes = await obtenerC();
      const clienteExiste = clientes.some((user) => user.usuario === datos.usuario);
  
      if (clienteExiste) {
        alert("El nombre de usuario no es válido o ya está en uso.");
        return;
      }
  
      // Registrar cliente si no existe
      const response = await axios.post("http://localhost:1234/cliente", datos, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      console.log("Cliente registrado:", response.data);
      alert("Registro exitoso");
      window.location.href = "/";
    } catch (error) {
      if (error.response) {
        console.error("Error al registrar cliente:", error.response.data);
        alert(
          "Error: " +
            (error.response.data.error || "No se pudo completar el registro")
        );
      } else if (error.request) {
        console.error(
          "Error: No se recibió respuesta del servidor",
          error.request
        );
        alert("Error de conexión con el servidor.");
      } else {
        console.error("Error al configurar la solicitud:", error.message);
        alert("Error al configurar la solicitud.");
      }
    }
  };
  return (
    <div className="w-full h-80">
      <Header />
      <main className="w-72 mx-auto my-36 mb-48">
        <h1 className="text-center text-4xl text-orange-400">Register</h1>
        <form onSubmit={onSubmit}>
          <div className="flex flex-col mt-10">
            <label htmlFor="usuario">Usuario:</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              autoComplete="off"
              placeholder="username"
              className="border-solid border-black border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-10">
            <label htmlFor="nombre">Nombre completo:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              autoComplete="off"
              placeholder="username"
              className="border-solid border-black border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-8 mb-9">
            <label htmlFor="contraseña">Contraseña:</label>
            <input
              type="password"
              id="contraseña"
              name="contraseña"
              autoComplete="off"
              placeholder="password"
              className="border-solid border-black border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-8 mb-9">
            <label htmlFor="imagen">Imagen:</label>
            <input
              type="text"
              id="imagen"
              name="imagen"
              autoComplete="off"
              placeholder="URL punto jpg"
              className="border-solid border-black border-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col mt-8 mb-9">
            <label htmlFor="meta">Meta:</label>
            <select
              id="meta"
              name="meta"
              className="border-solid border-black border-2 rounded-lg"
            >
              <option value="Bajar peso">Bajar peso</option>
              <option value="Ganar masa muscular">Ganar masa muscular</option>
              <option value="Recuperación de lesión">Recuperación de lesión</option>
              <option value="Por salud">Por salud</option>
            </select>
          </div>
          <div className="flex flex-col mt-8 mb-9">
            <label htmlFor="nivel">Tipo membresia:</label>
            <input
              type="number"
              id="nivel"
              name="nivel"
              min="1"
              max="4"
              autoComplete="off"
              placeholder="tipo de 1 a 4"
              className="border-solid border-black border-2 rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="border-s-black border-2 px-4 rounded-lg text-white bg-orange-400"
          >
            Register
          </button>
        </form>
      </main>
      <div className="bg-black w-full text-white">
        <h2 className="text-center mb-11">Conócenos</h2>
        <div className="flex justify-center px-28">
          <a
            href="https://www.instagram.com/befit.c?igsh=YmNjanlqcHo5eGg0"
            target="_blank"
            className="mr-12"
          >
            BE Fit
          </a>
          <a
            href="https://www.instagram.com/juank3693?igsh=MXc2b3pmYmQ4Mnp3bQ=="
            target="_blank"
            className="mr-12"
          >
            Juank
          </a>
          <a
            href="https://www.facebook.com/share/184GWRyUJr/"
            target="_blank"
            className="mr-12"
          >
            Sebas
          </a>
          <a
            href="https://www.facebook.com/share/17ZFvWgMwN/"
            target="_blank"
            className="mr-12"
          >
            Ema
          </a>
          <a
            href="https://www.facebook.com/share/1DRQWPgVPJ/"
            target="_blank"
            className="mr-12"
          >
            Chris
          </a>
        </div>
      </div>
    </div>
  );
}
