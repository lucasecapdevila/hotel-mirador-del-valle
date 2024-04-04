import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormularioHabitaciones = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const validar = () => {
    console.log('Formulario enviado');
  }

  return (
    <main className="mainPage">
      <section className="container">
        <h1 className="mt-4 titulos">Agregar habitación</h1>
        <hr />

        <Form className="my-4" onSubmit={handleSubmit(validar)}>
          <Form.Group className="mb-3" controlId="formNumHabitacion">
            <Form.Label>Número de habitación</Form.Label>
            <Form.Control>

            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTipoHabitacion">
            <Form.Label>Tipo de habitación</Form.Label>
            <Form.Control>

            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio</Form.Label>
            <Form.Control>

            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDisponibilidad">
            <Form.Label>Disponibilidad</Form.Label>
            <Form.Control>

            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen de habitación</Form.Label>
            <Form.Control>

            </Form.Control>
          </Form.Group>

          <Button type="submit" variant="success">Guardar</Button>
        </Form>
      </section>
    </main>
  )
}

export default FormularioHabitaciones