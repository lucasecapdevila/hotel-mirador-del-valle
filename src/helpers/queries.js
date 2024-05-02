const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;
const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;
const URI_USUARIOS_GET = import.meta.env.VITE_API_USUARIOS_GET;
const URI_LOGIN = import.meta.env.VITE_API_LOGIN;
const URI_RESERVAS = import.meta.env.VITE_API_RESERVAS;

//----------------------- HABITACIONES -----------------------//

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
        "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
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
        "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
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
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//----------------------- USUARIOS -----------------------//

export const leerUsuarioAPI = async () => {
  try {
    const response = await fetch(URI_USUARIOS_GET);
    const listaUsuarios = await response.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuarioAPI = async (id) => {
  try {
    const response = await fetch(`${URI_USUARIOS}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAPI = async (nuevoUsuario) => {
  try {
    const response = await fetch(URI_USUARIOS + "registrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoUsuario),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuarioAPI = async (id, usuario) => {
  try {
    const response = await fetch(`${URI_USUARIOS_GET}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
      },
      body: JSON.stringify(usuario),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuarioAPI = async (id) => {
  try {
    const response = await fetch(`${URI_USUARIOS_GET}/${id}`, {
      method: "DELETE",
      "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

//----------------------- RESERVAS -----------------------//

export const leerReservasAPI = async () => {
  try {
    const response = await fetch(URI_RESERVAS);
    const listaReservas = await response.json();
    return listaReservas;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerReservaAPI = async (id) => {
  try {
    const response = await fetch(`${URI_RESERVAS}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const crearReservaAPI = async (nuevaReserva) => {
  try {
    const response = await fetch(URI_RESERVAS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
      },
      body: JSON.stringify(nuevaReserva),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editarReservaAPI = async (id, reserva) => {
  try {
    const response = await fetch(`${URI_RESERVAS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
      },
      body: JSON.stringify(reserva),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const borrarReservaAPI = async (id) => {
  try {
    const response = await fetch(`${URI_RESERVAS}/${id}`, {
      method: "DELETE",
      headers: {
        "x-token": JSON.parse(sessionStorage.getItem('inicioHotelMiradorDelValle')).token
      }
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const iniciarSesion = async (usuario) => {
  console.log(usuario)
  try {
    const respuesta = await fetch(URI_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return null;
  }
};
