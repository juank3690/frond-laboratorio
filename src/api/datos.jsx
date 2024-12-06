import axios from "axios";


export const obtener = async () => {
  try {
    const response = await axios.get("http://localhost:1234/datos");
    return response.data;
  } catch (error) {
    return [{ mensaje: -1 }];
  }
};
export const obtenerC = async () => {
  try {
    const response = await axios.get("http://localhost:1234/datos/clientes");
    return response.data;
  } catch (error) {
    return [{ mensaje: -1 }];
  }
};

export const agregarH= async(datos)=>{
  try{
    const response= await axios.post("http://localhost:1234/cliente/historial",datos,{
      headers:{
        "Content-Type":"application/json"
      }
    })
    alert("datos registrados")
    
  }catch{
    ""
  }

}

export const eliminarE = async (datos) => {
  try {
    const response = await axios.delete("http://localhost:1234/cliente/evento", {
      headers: {
        "Content-Type": "application/json",
      },
      data: datos, 
    });

    return response.data; 
  } catch (error) {
    console.error("Error eliminando el evento:", error);
    throw error; 
  }
};


//cambiar dieta
export const cambiarD = async (datos) => {
  try {
    const response = await axios.patch("http://localhost:1234/cliente/dieta", datos, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data; 
  } catch (error) {
    console.error("Error cambiando la dieta:", error);
    throw error; 
  }
};