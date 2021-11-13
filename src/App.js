import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Header from "./layout/Header/Header";
// pages
import NotAuthorized from "./pages/NotAuthorized/NotAuthorized";
import NotFound from "./pages/NotFound/NotFound";

export default function App() {
  const { Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route index element={<Home />} />
            <Route path="notauthorized" element={<NotAuthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer style={{ textAlign: "center" }}>BaboonJobs 2021</Footer>
      </Layout>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}
