import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  crearHabitacionAPI,
  editarHabitacionAPI,
  obtenerHabitacionAPI,
} from "../../../helpers/queries";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../common/Loader";

const FormularioHabitaciones = ({ editar, titulo }) => {
  const { id } = useParams();
  const navegacion = useNavigate();

  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    if (editar) {
      cargarDatosEnFormulario();
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const cargarDatosEnFormulario = async () => {
    //  Traer datos de la habitación:
    const response = await obtenerHabitacionAPI(id);
    if (response.status === 200) {
      const habitacionBuscada = await response.json();
      //  Mostrar datos en el formulario:
      setValue("numeroHabitacion", habitacionBuscada.numeroHabitacion);
      setValue("tipoHabitacion", habitacionBuscada.tipoHabitacion);
      setValue("precioHabitacion", habitacionBuscada.precioHabitacion);
      setValue("disponibilidad", habitacionBuscada.disponibilidad);
      setValue("imagenHabitacion", habitacionBuscada.imagenHabitacion);
      setValue("descripcionBreve", habitacionBuscada.descripcionBreve);
      setValue("descripcionAmplia", habitacionBuscada.descripcionAmplia);
    } else {
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente realizar esta operación en unos minutos.",
        icon: "error",
      });
    }
  };

  const habitacionValidada = async (habitacion) => {
    try {
      setLoading(true)
      if (editar) {
        const response = await editarHabitacionAPI(id, habitacion);
        if (response.status === 200) {
          setLoading(false)
          Swal.fire({
            title: "Habitación editada",
            text: `La habitación número ${habitacion.numeroHabitacion} fue modificada exitosamente.`,
            icon: "success",
          });
          //  Redireccionar a tabla de Admin una vez termine la edición
          navegacion("/administrador");
        } else {
          setLoading(false)
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente modificar la habitación en unos minutos.",
            icon: "error",
          });
        }
      } else {
        const response = await crearHabitacionAPI(habitacion);
        if (response.status === 201) {
          setLoading(false)
          Swal.fire({
            title: "Habitación agregada",
            text: `La habitación número ${habitacion.numeroHabitacion} fue agregada exitosamente.`,
            icon: "success",
          });
          reset();
        } else {
          setLoading(false)
          Swal.fire({
            title: "Ocurrió un error",
            text: "Intente agregar la habitación en unos minutos.",
            icon: "error",
          });
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false)
      Swal.fire({
        title: "Ocurrió un error",
        text: "Intente agregar la habitación en unos minutos.",
        icon: "error",
      });
    }
  };

  return (
    <main className="mainPage fondoCrearHab">
      <section className="container">
        {loading ? (
          <Loader />
        ) : (
        <Card className="cardRegistro p-md-1" sm={12}>
          <>
            <Card.Header className="titulos fs-2" as="h5">
              {titulo}
            </Card.Header>
            <Card.Body>
              <Form
                className="my-4 textos fw-semibold"
                onSubmit={handleSubmit(habitacionValidada)}
              >
                <Form.Group className="mb-3" controlId="formNumeroHabitacion">
                  <Form.Label>
                    Número de habitación<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="1, 2, 3..."
                    {...register("numeroHabitacion", {
                      required: "El número de la habitación es obligatorio.",
                      valueAsNumber: true,
                      min: {
                        value: 1,
                        message: "El número mínimo de habitación es 1.",
                      },
                      max: {
                        value: 100,
                        message: "El número máximo de habitación es 100.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.numeroHabitacion?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formTipoHabitacion">
                  <Form.Label>
                    Tipo de habitación<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Select
                    {...register("tipoHabitacion", {
                      required: "El tipo de habitación es obligatorio.",
                    })}
                  >
                    <option value="">Seleccione una opción</option>
                    <option value="Individual">Individual</option>
                    <option value="Doble">Doble</option>
                    <option value="Deluxe">Deluxe</option>
                    <option value="Twin">Twin</option>
                    <option value="Doble Hollywood">Doble Hollywood</option>
                    <option value="Duplex">Duplex</option>
                    <option value="Cabaña">Cabaña</option>
                    <option value="Estudio">Estudio</option>
                    <option value="Lanai">Lanai</option>
                    <option value="Suite">Suite</option>
                    <option value="Sico">Sico</option>
                  </Form.Select>
                  <Form.Text className="text-danger">
                    {errors.tipoHabitacion?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPrecio">
                  <Form.Label>
                    Precio de habitación<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="$5.000 - $30.000"
                    {...register("precioHabitacion", {
                      required: "El precio de la habitación es obligatorio.",
                      valueAsNumber: true,
                      min: {
                        value: 5000,
                        message: "El precio mínimo de una habitación es 5000.",
                      },
                      max: {
                        value: 30000,
                        message: "El precio máximo de una habitación es 30000.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.precioHabitacion?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formImagen">
                  <Form.Label>
                    URL de imagen de habitación
                    <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
                    {...register("imagenHabitacion", {
                      required:
                        "La URL de la imagen de la habitación es obligatorio.",
                      pattern: {
                        value:
                          /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                        message:
                          "La URL ingresada debe ser una imagen de formato .jpg, .jpeg, .png o .gif.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.imagenHabitacion?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescripcionBreve">
                  <Form.Label>
                    Descripción breve<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Una habitación reconfortante."
                    as="textarea"
                    {...register("descripcionBreve", {
                      required:
                        "La descripcion breve de la habitación es obligatoria.",
                      minLength: {
                        value: 10,
                        message:
                          "Debe ingresar como mínimo 10 carácteres para la descripción de la habitación.",
                      },
                      maxLength: {
                        value: 80,
                        message:
                          "Debe ingresar como máximo 80 carácteres para la descripción de la habitación.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.descripcionBreve?.message}
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDescripcionAmplia">
                  <Form.Label>
                    Descripción amplia<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Una habitación reconfortante con vista a los valles calchaquíes que podrás disfrutar con toda tu familia."
                    as="textarea"
                    {...register("descripcionAmplia", {
                      required:
                        "La descripcion amplia de la habitación es obligatoria.",
                      minLength: {
                        value: 20,
                        message:
                          "Debe ingresar como mínimo 20 carácteres para la descripción de la habitación.",
                      },
                      maxLength: {
                        value: 500,
                        message:
                          "Debe ingresar como máximo 500 carácteres para la descripción de la habitación.",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.descripcionAmplia?.message}
                  </Form.Text>
                </Form.Group>
                <div className="text-end">
                  <Button
                    className="btnCrearHabitacion"
                    type="submit"
                    variant="success"
                  >
                    Guardar
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </>
        </Card>
        )}
      </section>
    </main>
  );
};

export default FormularioHabitaciones;
