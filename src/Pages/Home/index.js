import React from "react";

import Navbar1 from "../../components/navbar1/index.js";
import Navbar2 from "../../components/navbar2/index.js";
import Navbar3 from "../../components/navbar3/index.js";
import Navbar4 from "../../components/navbar4/index.js";
import Categorias from "../../components/Categories/index.js";
import Carousel from "../../components/Carousel/index.js";
import Seccion3 from "../../components/seccion3/index.js";
import Slider1 from "../../components/slider1/index.js";
import Slider2 from "../../components/slider2/index.js";
import Slider3 from "../../components/slider3/index.js";
import Informacion from "../../components/informacion/index.js";
import Footer from "../../components/Footer/index.js";
export default function Home() {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Navbar3 />
      <Navbar4 />
      <div className="container-fluid px-4">
        <div className="row mt-4 px-5">
          <div className="col-xl-3">
            <Categorias />
          </div>
          <div className="col-xl-6">
            <Carousel />
          </div>
          <div className="col-xl-3">
            <Seccion3 />
          </div>
        </div>
        <Slider1 />
        <br></br>
        <Slider2 />
        <br></br>
        <Slider3 />
        <br></br>
        <Informacion />
      </div>

      <Footer />
    </>
  );
}
