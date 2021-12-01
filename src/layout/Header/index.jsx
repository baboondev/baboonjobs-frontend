import React from "react";
import { Layout, Menu, Row, Col, Button } from "antd/";
import logo from "../../assets/baboon-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/users.actions";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.users);

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
              {role === "employeer" && (
                <>
                  <Menu.Item key={2}>
                    <Link to="/publish">Publicar trabajo</Link>
                  </Menu.Item>
                  <Menu.Item key={3}>
                    <Link to="/jobs-published">Trabajos publicados</Link>
                  </Menu.Item>
                </>
              )}
              {role === "employee" && (
                <Menu.Item key={4}>
                  <Link to="/jobs-accepted">Mis Trabajos</Link>
                </Menu.Item>
              )}
            </Menu>
          </Col>
          <Col>
            <Button type="default" danger onClick={handleLogout}>
              Cerrar sesion
            </Button>
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
