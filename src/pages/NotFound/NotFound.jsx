import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <Result
      status="404"
      title="No encontrado"
      subTitle="Asegúrate que el URL que has ingresado es correcto."
      extra={
        <Link to="/">
          <Button type="primary">Ir a Inicio</Button>
        </Link>
      }
    />
  );
}

export default NotFound;
