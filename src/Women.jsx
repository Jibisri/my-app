import React from "react";
import Carousel from "react-bootstrap/Carousel";

import women1 from "./assets/women-01.jpg";
import women2 from "./assets/women-02.jpg";
import women3 from "./assets/women-03.jpg";

function Women() {
  return (
    <>
      {/* Heading */}
      <div className="container-fluid">
        <h1 className="name ps-5 pt-5 fw-bold">Women's Latest</h1>
        <p className="fst-italic text-secondary ps-5">
          Details to details is what makes Hexashop different
        </p>
      </div>

      {/* Carousel */}
      <div className="container mt-4">
        <Carousel>

          {/* Slide 1 */}
          <Carousel.Item>
            <div className="row text-center">

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women1} className="img-fluid women-img" alt="men1" />
                  <h5 className="fw-bold mt-3">New Green Jacket</h5>
                  <p className="text-secondary">$75.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women2} className="img-fluid women-img" alt="men2" />
                  <h5 className="fw-bold mt-3">Classic Dress</h5>
                  <p className="text-secondary">$45.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women3} className="img-fluid women-img" alt="men3" />
                  <h5 className="fw-bold mt-3">Spring Collection</h5>
                  <p className="text-secondary">$130.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <div className="row text-center">

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women2} className="img-fluid men-img" alt="men2" />
                  <h5 className="fw-bold mt-3">Classic Dress</h5>
                  <p className="text-secondary">$45.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women3} className="img-fluid men-img" alt="men3" />
                  <h5 className="fw-bold mt-3">Classic Dress</h5>
                  <p className="text-secondary">$130.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women1} className="img-fluid men-img" alt="men1" />
                  <h5 className="fw-bold mt-3">New Green Jacket</h5>
                  <p className="text-secondary">$75.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <div className="row text-center">

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women3} className="img-fluid men-img" alt="men3" />
                  <h5 className="fw-bold mt-3">Classic Dress</h5>
                  <p className="text-secondary">$130.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women1} className="img-fluid men-img" alt="men1" />
                  <h5 className="fw-bold mt-3">New Green Jacket</h5>
                  <p className="text-secondary">$75.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={women2} className="img-fluid men-img" alt="men2" />
                  <h5 className="fw-bold mt-3">Classic Dress</h5>
                  <p className="text-secondary">$45.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>

        </Carousel>
      </div>
      <hr/>
    </>
  );
}

export default Women;