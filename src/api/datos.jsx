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
