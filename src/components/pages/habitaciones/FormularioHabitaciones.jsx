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
            <Form.Control
              type="number"
              placeholder="1, 2, 3..."
              {
                ...register("numHabitacion",{
                  required: 'El número de la habitación es obligatorio.',
                  min: {
                    value: 1,
                    message: 'El número mínimo de habitación es 1.'
                  },
                  max: {
                    value: 100,
                    message: 'El número máximo de habitación es 100.'
                  }
                })
              }/>
            <Form.Text className="text-danger">{errors.numHabitacion?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formTipoHabitacion">
            <Form.Label>Tipo de habitación</Form.Label>
            <Form.Select
              {
                ...register("tipoHabitacion",{
                  required: 'El tipo de habitación es obligatorio.'
                })
              }
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
            <Form.Text className="text-danger">{errors.tipoHabitacion?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPrecio">
            <Form.Label>Precio de habitación</Form.Label>
            <Form.Control
              type="number"
              placeholder="$5.000 - $30.000"
              {
                ...register("precioHabitacion",{
                  required: 'El precio de la habitación es obligatorio.',
                  min: {
                    value: 5000,
                    message: 'El precio mínimo de una habitación es 5000.'
                  },
                  max: {
                    value: 30000,
                    message: 'El precio máximo de una habitación es 30000.'
                  }
                })
              }/>
            <Form.Text className="text-danger">{errors.precioHabitacion?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDisponibilidad">
            <Form.Label>Disponibilidad de habitación</Form.Label>
            <Form.Select
              {
                ...register("disponibilidad",{
                  required: 'La disponibilidad de la habitación es obligatoria.'
                })
              }
            >
              <option value="">Seleccione una opción</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </Form.Select>
            <Form.Text className="text-danger">{errors.disponibilidad?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>URL de imagen de habitación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg"
              {
                ...register("imagenHabitacion",{
                  required: 'La URL de la imagen de la habitación es obligatorio.',
                  pattern:{
                    value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                    message: 'La URL ingresada debe ser una imagen de formato .jpg, .jpeg, .png o .gif.'
                  }
                })
              }/>
            <Form.Text className="text-danger">{errors.imagenHabitacion?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescripcionBreve">
            <Form.Label>Descripción breve</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Una habitación reconfortante."
              as="textarea"
              {
                ...register("descripcionBreve",{
                  required: 'La descripcion breve de la habitación es obligatoria.',
                  minLength:{
                    value: 10,
                    message: 'Debe ingresar como mínimo 10 carácteres para la descripción de la habitación.'
                  },
                  maxLength:{
                    value: 80,
                    message: 'Debe ingresar como máximo 80 carácteres para la descripción de la habitación.'
                  }
                })
              }/>
            <Form.Text className="text-danger">{errors.descripcionBreve?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescripcionAmplia">
            <Form.Label>Descripción amplia</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Una habitación reconfortante con vista a los valles calchaquíes que podrás disfrutar con toda tu familia."
              as="textarea"
              {
                ...register("descripcionAmplia",{
                  required: 'La descripcion amplia de la habitación es obligatoria.',
                  minLength:{
                    value: 20,
                    message: 'Debe ingresar como mínimo 20 carácteres para la descripción de la habitación.'
                  },
                  maxLength:{
                    value: 500,
                    message: 'Debe ingresar como máximo 500 carácteres para la descripción de la habitación.'
                  }
                })
              }/>
            <Form.Text className="text-danger">{errors.descripcionAmplia?.message}</Form.Text>
          </Form.Group>

          <Button type="submit" variant="success">Guardar</Button>
        </Form>
      </section>
    </main>
  )
}

export default FormularioHabitaciones