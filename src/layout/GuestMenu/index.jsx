import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
export function GuestMenu() {
  return (
    <>
      <Link to="/signin">
        <Button type="link">Iniciar sesión</Button>
      </Link>
      <Link to="/signup">
        <Button type="primary">Registrarse</Button>
      </Link>
    </>
  );
}
