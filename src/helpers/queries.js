const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES

console.log(URI_HABITACIONES);

//  Solicitud tipo GET (o Request) para el array de habitaciones
export const leerHabitacionesAPI = async() => {
  try {
    const response = await fetch(URI_HABITACIONES)
    const listaHabitaciones = await response.json()
    return listaHabitaciones
  } catch (error) {
    console.log(error);
  }
}

//  Solicitud tipo GET (o Request) para una única habitación
export const obtenerHabitacionAPI = async(id) => {
  try {
    const response = await fetch(`${URI_HABITACIONES}/${id}`)
    return response
  } catch (error) {
    console.log(error);
  }
}