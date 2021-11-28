import React from "react";
import { Layout, Menu, Row, Col, Button } from "antd/";
import logo from "../../assets/baboon-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/users.actions";

function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const { Header } = Layout;
  return (
    <>
      <Header style={{ background: "white", color: "grey" }}>
        <Row justify="space-between">
          <Col>
            <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key={1}>
                <Logo />
              </Menu.Item>
              <Menu.Item key={2}>
                <Link to="/explore">Explorar trabajos</Link>
              </Menu.Item>
              <Menu.Item key={3}>
                <Link to="/publish">Publicar trabajo</Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col>
            <Button type="default" danger onClick={handleLogout}>Cerrar sesion</Button>
          </Col>
        </Row>
      </Header>
    </>
  );
}

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} className="baboon" alt="logo" />
      <span className="text">BaboonJobs.</span>
    </Link>
  );
}

export default Header;
