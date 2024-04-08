const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;

//  Solicitud tipo GET (o Request) para el array de habitaciones
export const leerHabitacionesAPI = async () => {
  try {
    const response = await fetch(URI_HABITACIONES);
    const listaHabitaciones = await response.json();
    return listaHabitaciones;
  } catch (error) {
    console.log(error);
  }
};

//  Solicitud tipo GET (o Request) para una única habitación
export const obtenerHabitacionAPI = async (id) => {
  try {
    const response = await fetch(`${URI_HABITACIONES}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

//  Solicitud tipo POST (crear)
export const crearHabitacionAPI = async (nuevaHabitacion) => {
  try {
    const response = await fetch(URI_HABITACIONES, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevaHabitacion),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//  Solicitud tipo PUT (editar)
export const editarHabitacionAPI = async (id, habitacion) => {
  try {
    const response = await fetch(`${URI_HABITACIONES}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habitacion),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//  Solicitud tipo DELETE (eliminar)
export const borrarHabitacionAPI = async (id) => {
  try {
    const response = await fetch(`${URI_HABITACIONES}/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};





//  Cuando tengamos backend, se realizará petición POST para el login
const admin = {
  email: "hotelmiradordelvalle.25.07@gmail.com",
  password: "hotelMiradorDelValle123"
}

export const login = (usuario) => {
  if(usuario.email === admin.email && usuario.password === admin.password){
    sessionStorage.setItem('inicioHotelMiradorDelValle', JSON.stringify(usuario.email))
    return true
  } else{
    return false
  }
}