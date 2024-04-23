const URI_HABITACIONES = import.meta.env.VITE_API_HABITACIONES;
const URI_USUARIOS = import.meta.env.VITE_API_USUARIOS;
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

//----------------------- USUARIOS -----------------------//

export const leerUsuarioAPI = async () => {
  try {
    const response = await fetch(URI_USUARIOS);
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
    const response = await fetch(URI_USUARIOS, {
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
    const response = await fetch(`${URI_USUARIOS}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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
    const response = await fetch(`${URI_USUARIOS}/${id}`, {
      method: "DELETE",
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
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};


//  Cuando tengamos backend, se realizará petición POST para el login
const admin = {
  email: "hotelmiradordelvalle.25.07@gmail.com",
  password: "Grupo2Rolling",
  rol: 'Administrador',
  userName: 'Administrador'
}

export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URI_USUARIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    
    // Verificar si la respuesta es exitosa (código de estado 200)
    if (respuesta.ok) {
      const datosUsuario = await respuesta.json(); // Obtener el cuerpo de la respuesta en formato JSON
      console.log(datosUsuario)
      return datosUsuario; // Devolver los datos del usuario
    } else {
      // En caso de una respuesta de error, lanzar un Error con el mensaje de error obtenido
      throw new Error(`Error al iniciar sesión: ${respuesta.status} ${respuesta.statusText}`);
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    return null; // Devolver null en caso de error
  }
};
/*export const login = (usuario) => {
  if(usuario.email === admin.email && usuario.password === admin.password){
    sessionStorage.setItem('inicioHotelMiradorDelValle', JSON.stringify(usuario.email))
    return true
  } else{
    return false
  }
}*/