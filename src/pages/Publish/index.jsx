import { Typography } from "antd";
import React from "react";
import FormJob from "../../components/JobForm";

function Publish() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="container">
        <header>
          <Typography.Title level={2}>Publicar un trabajo</Typography.Title>
          <Typography.Text>
            Cuánto más precisa sea tu selección y descripción, más fácil será para el
            freelancer adecuado encontrar tu proyecto.
          </Typography.Text>
        </header>
        <FormJob />
      </div>
    </>
  );
}

export default Publish;
