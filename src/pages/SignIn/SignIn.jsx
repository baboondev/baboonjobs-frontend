import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Form, Input, Button, Col, Row, Alert } from "antd";
import { MailOutlined } from "@ant-design/icons";

import { signInThunk } from "../../redux/actions/users.actions";

const SignIn = () => {
  const dispatch = useDispatch();

  const handleEmailLogin = ({ email, password }) => {
    dispatch(signInThunk(email, password));
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
      <Col xs={24} md={6}>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleEmailLogin}
          autoComplete="off"
          style={{
            border: "1px solid #eee",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3 style={{ marginBottom: '40px' }}>Iniciar Sesion</h3>

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
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item style={{ marginTop: "20px" }}>
            <Button type="primary" htmlType="submit">
              Iniciar sesion
            </Button>
          </Form.Item>

          <Form.Item>
            <Link to="/signup">
              <Button type="link">You are not registered?</Button>
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

export default SignIn;
