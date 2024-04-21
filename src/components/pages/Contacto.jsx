import React from 'react'
import Form from 'react-bootstrap/Form';

const Contacto = () => {
  return (

  <div>

 <h1>Contactanos
 </h1>


    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <button>Enviar</button>
      </Form.Group>
    </Form>


</div>
  )

}
export default Contacto