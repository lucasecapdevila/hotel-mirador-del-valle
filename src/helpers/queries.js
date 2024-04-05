const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES

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

//  Solicitud tipo POST (crear)
export const crearHabitacionAPI = async(nuevaHabitacion) => {
  try {
    const response = await fetch(URI_HABITACIONES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevaHabitacion)
    })
    return response
  } catch (error) {
    console.log(error);
  }
}

//  Solicitud tipo PUT (editar)
export const editarHabitacionAPI = async(id, habitacion) => {
  try {
    const response = await fetch(`${URI_HABITACIONES}/${id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(habitacion)
    })
    return response
  } catch (error) {
    console.log(error);
  }
}

//  Solicitud tipo DELETE (eliminar)
export const borrarHabitacionAPI = async(id) => {
  try {
    const response = await fetch(`${URI_HABITACIONES}/${id}`,{
      method: "DELETE"
    })
    return response
  } catch (error) {
    console.log(error);
  }
}