import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../../Components/Header/Header";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Footer from "../../Components/Footer/Footer";

import Home from "./Home/Home";
// import Menu from "./Menu/Menu";
// import News from "./News/News";
// import About from "./About/About";
// import Contact from "./Contact/Contact";
// import Login from "./Login/Login";

const ClientApp: React.FC = () => {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path={"/"} element={<Home />} />
        {/* <Route path={"/menu"} element={<Menu />} /> */}
        {/* <Route path={"/news"} element={<News />} /> */}
        {/* <Route path={"/about"} element={<About />} /> */}
        {/* <Route path={"/contact"} element={<Contact />} /> */}
        {/* <Route path={"/login"} element={<Login />} /> */}
      </Routes>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default ClientApp;
