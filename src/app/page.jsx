"use client";
//npm run dev    para ejecutar
import { useState } from "react";
import { Mensaje } from "@/components/Mensaje";
import Link from "next/link"; // Importar Link de Next.js
import { Promociones } from "@/components/Promociones";
import { Header } from "@/components/Header"
import { Foother } from "@/components/Foother";

export default function Homepage() {
  const [showPromociones, setShowPromociones] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
     <Header/>
      <section className="w-full mt-28 px-5">
        <div className="flex rounded-t-md px-10 text-xl bg-red-600 justify-between font-bold">
          <h2>No esperes más</h2>
          <h2>Únete</h2>
        </div>
        <a href="https://maps.app.goo.gl/xH9MZxVw25mHAUYU9">
          <button>
            <img src="befit-inicio2.jpg" alt="" />
          </button>
        </a>
        <div className="flex rounded-b-md px-10 text-xl bg-orange-400 relative bottom-2 font-bold justify-center items-center">
          <h2>MÁS BENEFICIOS, MEJORES RESULTADOS</h2>
        </div>
      </section>
      <section className="w-full">
        <h2 className="text-center text-4xl mt-10">
          Vive la{" "}
          <span className="text-orange-400">experiencia BE FIT:</span>{" "}
          tecnología de punta y las mejores instalaciones
        </h2>
        <div className="flex mr-10 px-20 rounded-tr-2xl pb-10 rounded-br-2xl rounded-bl-2xl ml-10 pt-16 justify-center bg-slate-200 mt-14">
          <video
            src="./befit1.mp4"
            controls
            loop
            muted
            autoPlay
            className="w-60 mr-auto rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-solid border-8 border-orange-400"
          ></video>
          <video
            src="./befit2.mp4"
            controls
            loop
            muted
            autoPlay
            className="w-60 mr-auto border-solid rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-8 border-orange-400"
          ></video>
          <video
            src="./befit3.mp4"
            controls
            loop
            muted
            autoPlay
            className="w-60 border-solid border-8 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-orange-400"
          ></video>
        </div>
      </section>
      <section className="w-full">
        <h2 className="text-center text-4xl mt-10">
          Entrena con{" "}
          <span className="text-orange-400">Nuestros</span> instructores
        </h2>
        <div className="flex mr-10 pb-10 px-20 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl ml-10 pt-16 justify-center bg-slate-200 mt-14">
          <img
            src="./profesor1.jpg"
            className="w-60 mr-auto rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-solid border-8 border-orange-400"
          ></img>
          <img
            src="./profesor2.jpg"
            className="w-60 mr-auto border-solid rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-8 border-orange-400"
          ></img>
          <img
            src="./profesor3.jpg"
            className="w-60 border-solid border-8 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border-orange-400"
          ></img>
        </div>
      </section>
      <Mensaje />
      <Foother/>
      
      
    </div>
  );
}
