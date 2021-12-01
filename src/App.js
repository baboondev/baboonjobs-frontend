import React from "react";
import { useSelector } from "react-redux";

import PrivateRoutes from "./routes/PrivateRoutes";
import PublicRoutes from "./routes/PublicRoutes";

export default function App() {
  const { logged } = useSelector((state) => state.users);
  return <>{logged ? <PrivateRoutes /> : <PublicRoutes />}</>;
}
