import React from "react";
import { Form, Input, Button, Radio } from "antd";
import { Typography } from 'antd';
import { Link } from "react-router-dom";

function SignUp() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div
        style={{
          background: "white",
          margin: "50px auto",
          padding: "24px",
          maxWidth: "450px",
        }}
      >
        <Typography.Title level={2}>Crear cuenta</Typography.Title>
        <div>
        <Typography.Text type="secondary">¿Ya tienes cuenta? <Link to="/signin">Inicia sesión</Link></Typography.Text>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          style={{marginTop: "16px"}}
        >
          <Form.Item
        name="radio-button"
        label="Quiero:"
        rules={[{ required: true, message: 'Debes seleccionar un tipo de cuenta'}]}
      >
        <Radio.Group size="large" buttonStyle="solid">
          <Radio.Button value="employer">Solicitar un trabajo</Radio.Button>
          <Radio.Button value="worker">Trabajar como freelancer</Radio.Button>
        </Radio.Group>
      </Form.Item>
          <Form.Item
            label="Nombre"
            name="firstname"
            rules={[{ required: true, message: "Ingrese su nombre" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Apellido"
            name="surname"
            rules={[{ required: true, message: "Ingrese su apellido" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Ingrese su email." }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Ingrese su contraseña" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirmar contraseña"
            name="confirmpassword"
            rules={[{ required: true, message: "Debes confirmar la contraseña" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Crear cuenta
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
