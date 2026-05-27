import React from "react";
import Carousel from "react-bootstrap/Carousel";

import men1 from "./assets/men-01.jpg";
import men2 from "./assets/men-02.jpg";
import men3 from "./assets/men-03.jpg";

function Men() {
  return (
    <>
{/* Heading */}
      <div className="container-fluid">
        <h1 className="name ps-5  pt-5 fw-bold">Men's Latest</h1>
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
                  <img src={men1} className="img-fluid men-img" alt="men1" />
                  <h5 className="fw-bold mt-3">Classic Spring</h5>
                  <p className="text-secondary">$120.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men2} className="img-fluid men-img" alt="men2" />
                  <h5 className="fw-bold mt-3">Air Force 1X</h5>
                  <p className="text-secondary">$90.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men3} className="img-fluid men-img" alt="men3" />
                  <h5 className="fw-bold mt-3">Love Nana'20</h5>
                  <p className="text-secondary">$150.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>

{/* Slide 2 */}
          <Carousel.Item>
            <div className="row text-center">

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men2} className="img-fluid men-img" alt="men2" />
                  <h5 className="fw-bold mt-3">Air Force 1X</h5>
                  <p className="text-secondary">$90.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men3} className="img-fluid men-img" alt="men3" />
                  <h5 className="fw-bold mt-3">Love Nana'20</h5>
                  <p className="text-secondary">$150.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men1} className="img-fluid men-img" alt="men1" />
                  <h5 className="fw-bold mt-3">Classic Spring</h5>
                  <p className="text-secondary">$120.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <div className="row text-center">

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men3} className="img-fluid men-img" alt="men3" />
                  <h5 className="fw-bold mt-3">Love Nana'20</h5>
                  <p className="text-secondary">$150.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men1} className="img-fluid men-img" alt="men1" />
                  <h5 className="fw-bold mt-3">Classic Spring</h5>
                  <p className="text-secondary">$120.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={men2} className="img-fluid men-img" alt="men2" />
                  <h5 className="fw-bold mt-3">Air Force 1X</h5>
                  <p className="text-secondary">$90.00</p>
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

export default Men;