import { Alert } from "react-bootstrap"

const Error = () => {
  return (
    <div>
      <Alert key='danger' variant='danger' className="fs-3 text-center">
        Algo salió mal, por favor intenta esta acción más tarde.
      </Alert>
    </div>
  )
}

export default Error