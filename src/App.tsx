import React from "react";
import { Routes, Route } from "react-router-dom";

import ClientApp from "./Pages/Client/ClientApp";
import AdminApp from "./Pages/Admin/AdminApp";

import "./App.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path={"/*"} element={<ClientApp />} />
      <Route path={"/admin/*"} element={<AdminApp />} />
    </Routes>
  );
};

export default App;
