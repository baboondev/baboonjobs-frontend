import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

function SignIn() {
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
          maxWidth: "400px",
        }}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          size="large"
        >
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

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Recuérdame</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Iniciar sesión
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default SignIn;
