import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Header from "./layout/Header/Header";
// pages
import NotAuthorized from "./pages/NotAuthorized/NotAuthorized";
import NotFound from "./pages/NotFound/NotFound";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Publish from "./pages/Publish/Publish";
import Job from "./pages/Job/Job";

export default function App() {
  const { Footer, Content } = Layout;
  return (
    <>
      <Layout>
        <Header />
        <Content>
          <Routes>
            <Route index element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="notauthorized" element={<NotAuthorized />} />
            <Route path="publish" element={<Publish />} />
            <Route path="job/:id" element={<Job />} />
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
