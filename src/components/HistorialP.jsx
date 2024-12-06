import React, { useState, useEffect } from "react";
import { AgregarH } from "@/components/AgregarH";

export const HistorialP = () => {
    const [usuarioValido, setUsuarioValido] = useState(null);
    const [agregar, setAgregar] = useState(false);
    const [mostrarHistorial, setMostrarHistorial] = useState(true);

    // Cargar datos del usuario desde localStorage
    useEffect(() => {
        const usuario = localStorage.getItem("cliente");
        if (usuario) {
            const parsedUsuario = JSON.parse(usuario);
            console.log("Datos del usuario cargados:", parsedUsuario); // Debug
            setUsuarioValido(parsedUsuario);
        } else {
            router.push("/"); // Redirigir si no hay datos
        }
    }, []);

    // Guardar cambios en localStorage cuando usuarioValido cambie
    useEffect(() => {
        if (usuarioValido) {
            localStorage.setItem("cliente", JSON.stringify(usuarioValido));
            console.log("Datos guardados en localStorage:", usuarioValido); 
        }
    }, [usuarioValido]);

    // Función para actualizar el historial
    const actualizarHistorial = (nuevoRegistro) => {
        console.log("Actualizando historial con:", nuevoRegistro); 
        setUsuarioValido((prevState) => {
            const updatedHistorial = [...(prevState.historial || []), nuevoRegistro];
            return { ...prevState, historial: updatedHistorial };
        });
    };

    if (!usuarioValido) {
        return <div>Cargando...</div>;
    }

    return (
        mostrarHistorial && (
            <div className="bg-slate-200 z-20 ml-6 absolute top-60 left-1/3 w-1/3 max-h-[300px] overflow-y-auto">
                <h1 className="text-center text-3xl mb-10">Historial</h1>
                <button
                    onClick={() => setMostrarHistorial(!mostrarHistorial)}
                    className="absolute top-0 right-0 p-2 text-2xl text-red-500"
                >
                    X
                </button>
                <div className="p-4 relative text-sm">
                    {usuarioValido.historial && Array.isArray(usuarioValido.historial) && usuarioValido.historial.length > 0 ? (
                        usuarioValido.historial.map((registro, index) => (
                            <div key={index} className="border p-4 py-0 mb-2 rounded-lg shadow-md bg-white">
                                <p className="text-base font-semibold">
                                    Fecha: {registro.fecha} | Minutos: {registro.tiempo} | Músculos: {registro.musculo}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p>No hay historial disponible.</p>
                    )}
                </div>
                <div className="w-full flex justify-end">
                    <button
                        onClick={() => setAgregar(!agregar)}
                        className="w-12 h-12 text-5xl bg-orange-500 rounded-full"
                    >
                        +
                    </button>
                    {agregar && (
                        <AgregarH
                            usuario={usuarioValido.usuario}
                            actualizarHistorial={actualizarHistorial}
                            setAgregar={setAgregar}
                        />
                    )}
                </div>
            </div>
        )
    );
};
