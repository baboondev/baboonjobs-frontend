import React from "react";
import { useSelector } from "react-redux";

import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import PublicRoutes from "./routes/PublicRoutes.jsx";

export default function App() {
  const { logged } = useSelector(state => state.users);
  return (
    <>
      { logged ? <PrivateRoutes /> : <PublicRoutes /> }
    </>
  );
}
