import React from "react";
import { Layout, Menu, Row, Col } from "antd/";
import { GuestMenu } from "./GuestMenu";
import logo from "../../baboon-svgrepo-com.svg";
import { Link } from "react-router-dom";

function Header() {
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
              <Menu.Item key={2}>Explorar trabajos</Menu.Item>
              <Menu.Item key={3}>Publicar trabajo</Menu.Item>
            </Menu>
          </Col>
          <Col>
            <GuestMenu />
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
