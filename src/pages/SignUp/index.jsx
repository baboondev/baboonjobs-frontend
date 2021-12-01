import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Col, Row, Radio, Spin, Alert } from "antd";

import { signUpThunk } from "../../redux/actions/users.actions";
import { useState } from "react";

const SignUp = () => {
  const dispatch = useDispatch();

  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailRegister = (data) => {
    const user = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password
    };
    dispatch(signUpThunk(user, role, setLoading, setError));
  };
  
  const handleSetRole = (e) => {
    setRole(e.target.value);
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

          <Form.Item
            name="radio-button"
            rules={[
              {
                required: true,
                message: "Debes seleccionar un tipo de cuenta",
              },
            ]}
          >
            <Radio.Group size="large" buttonStyle="solid">
              <Radio.Button value="employeer" onClick={handleSetRole}>
                Solicitar un trabajo
              </Radio.Button>
              <Radio.Button value="employee" onClick={handleSetRole}>
                Trabajar como freelancer
              </Radio.Button>
            </Radio.Group>
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
        { loading && <Spin spinning={loading}  /> }
        </Form>
        {error !== "" && (
          <Alert
            style={{ textAlign: "center" }}
            message={error}
            type="error"
          />
        )}
      </Col>
    </Row>
  );
};

export default SignUp;
