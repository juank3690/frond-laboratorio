import React from "react";

export const AgregarH = ({ usuario, actualizarHistorial, setAgregar }) => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;

        const musculo = form.elements.musculo.value;
        const tiempo = parseInt(form.elements.tiempo.value, 10);
        const fecha = form.elements.fecha.value;

        // Validar los datos antes de enviarlos
        const datos = {
            usuario,
            musculo,
            tiempo,
            fecha,
        };

        console.log("Datos enviados para actualizar historial:", datos); // Debug

        try {
            // Simulación de registro (puedes reemplazar esto con tu lógica de API)
            await new Promise((resolve) => setTimeout(resolve, 500));

            // Actualizar historial local
            actualizarHistorial(datos);

            // Cerrar formulario
            setAgregar(false);
            alert("Datos registrados");
        } catch (error) {
            console.error("Error al registrar los datos:", error);
            alert("Datos no válidos");
        }
    };

    return (
        <div className="bg-orange-500 z-20 ml-6 absolute top-3/4 left-20 w-1/3">
            <h2>Agregar asistencia</h2>
            <form onSubmit={onSubmit}>
                <div className="flex flex-col mt-10">
                    <label htmlFor="musculo">Músculos:</label>
                    <input
                        type="text"
                        name="musculo"
                        id="musculo"
                        placeholder="Músculos trabajados"
                        className="border-solid border-black border-2 rounded-lg"
                        required
                    />
                </div>
                <div className="flex flex-col mt-8 mb-9">
                    <label htmlFor="tiempo">Tiempo:</label>
                    <input
                        type="number"
                        name="tiempo"
                        id="tiempo"
                        placeholder="Minutos"
                        className="border-solid border-black border-2 rounded-lg"
                        required
                    />
                </div>
                <div className="flex flex-col mt-8 mb-9">
                    <label htmlFor="fecha">Fecha:</label>
                    <input
                        type="date"
                        name="fecha"
                        id="fecha"
                        placeholder="dd/mm/aaaa"
                        className="border-solid border-black border-2 rounded-lg"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="border-s-black border-2 px-4 rounded-lg text-white bg-orange-400"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
};
