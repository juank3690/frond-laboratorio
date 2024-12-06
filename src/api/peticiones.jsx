"use client";

import { Header } from "@/components/Header";
import { Foother } from "@/components/Foother";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const nombre = form.elements.nombre.value;
    const contraseña = form.elements.contraseña.value;

    try {

      const response = await axios.get('http://localhost:1234/datos');
      
      const usuarioValido = response.data.find(
        (user) => user.usuario === nombre && user.contraseña === contraseña
      );

      if (usuarioValido) {
        setData(usuarioValido);
        setError(""); 
        console.log("Usuario validado:", usuarioValido);
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      setError("Error en la comunicación con el servidor");
    } 
  };



    return(
        
        <div className="w-full h-80">
        <Header/>
        <main className="w-72 mx-auto my-36  mb-48">
        <h1 className="text-center text-4xl text-orange-400">Login</h1>
        <form onSubmit={onSubmit}>

        <div className="flex flex-col mt-10">
            <label htmlFor="nombre">usuario:</label>
            <input type="text" name="nombre" placeholder="username" className="border-solid border-black border-2 rounded-lg"/>
        </div>
        <div className="flex flex-col mt-8 mb-9">
            <label htmlFor="contraseña">contraseña</label>
            <input type="password" name="contraseña" placeholder="password" className="border-solid border-black border-2 rounded-lg"/>
        </div>

        <button type="submit" className="border-s-black border-2 px-4 rounded-lg text-white bg-orange-400">login</button>

        </form>
        </main>
        <div className='bg-black w-full text-white absolute bottom-0 '>
        <h2 className='text-center mb-11'>conocenos</h2>
        <div className='flex  justify-center px-28'>
            <a href="https://www.instagram.com/befit.c?igsh=YmNjanlqcHo5eGg0" target="_blank" className='mr-12'>BE Fit</a>
            <a href="https://www.instagram.com/juank3693?igsh=MXc2b3pmYmQ4Mnp3bQ==" target="_blank" className='mr-12'>juank</a>
            <a href="https://www.facebook.com/share/184GWRyUJr/" target="_blank" className='mr-12'>sebas</a>
            <a href="https://www.facebook.com/share/17ZFvWgMwN/" target="_blank" className='mr-12'>ema</a>
            <a href="https://www.facebook.com/share/1DRQWPgVPJ/" target="_blank" className='mr-12'>chris</a>
        </div>
      
    </div>
    </div>
    )
}


