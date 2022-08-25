import React from "react";

import Hero from "../../../Components/Hero/Hero";
import Popular from "../../../Components/Popular/Popular";
import MainProducts from "../../../Components/MainProducts/MainProducts";
// import Testimony from "../../../Components/Testimony/Testimony";
// import News from "../../../Components/News/News";

const Home: React.FC = () => {
  return (
    <main className="main">
      <Hero />
      <Popular />
      <MainProducts />
      {/* <Testimony /> */}
      {/* <News /> */}
    </main>
  );
};

export default Home;
