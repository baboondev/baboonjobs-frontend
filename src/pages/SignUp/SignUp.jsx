import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Col, Row, Alert } from "antd";
import { MailOutlined } from "@ant-design/icons";

import { signUpThunk } from "../../redux/actions/users.actions";

const SignUp = () => {
  const dispatch = useDispatch();

  const handleEmailRegister = (user) => {
    dispatch(signUpThunk(user));
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} md={6}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleEmailRegister}
          autoComplete="off"
          style={{
            border: "1px solid #eee",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: "40px" }}>Crear Cuenta</h3>

          <Form.Item
            name="firstname"
            rules={[
              { required: true, message: "Please input your firstanem!" },
            ]}
          >
            <Input type="text" placeholder="Nombre" />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input type="text" placeholder="Apellido" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input type="email" placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Contraseña" />
          </Form.Item>

          <Form.Item style={{ marginTop: "20px" }}>
            <Button type="primary" htmlType="submit">
              Crear cuenta
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/login">
              <Button type="link">Are you already registered?</Button>
            </Link>
          </Form.Item>
        </Form>
        {/* {errorMsg !== "" && (
          <Alert
            style={{ textAlign: "center" }}
            message={errorMsg}
            type="error"
          />
        )} */}
      </Col>
    </Row>
  );
};

export default SignUp;
