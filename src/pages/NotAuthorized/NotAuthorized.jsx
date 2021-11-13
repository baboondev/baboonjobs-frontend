import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

function NotAuthorized() {
  return (
    <Result
      status="403"
      title="No autorizado"
      subTitle="Lo sentimos, no está autorizado para acceder a esta página."
      extra={
        <Link to="/">
          <Button type="primary">Ir a Inicio</Button>
        </Link>
      }
    />
  );
}

export default NotAuthorized;
