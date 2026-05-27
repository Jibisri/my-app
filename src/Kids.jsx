import React from "react";
import Carousel from "react-bootstrap/Carousel";

import kid1 from "./assets/kid-01.jpg";
import kid2 from "./assets/kid-02.jpg";
import kid3 from "./assets/kid-03.jpg";

function Kids() {
  return (
    <>

 {/* Heading */}

      <div className="container-fluid">
        <h1 className="name ps-5 pt-5 fw-bold">Kid's Latest</h1>
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
                  <img src={kid1} className="img-fluid kid-img" alt="kid1" />
                  <h5 className="fw-bold mt-3">School Collection</h5>
                  <p className="text-secondary">$80.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid2} className="img-fluid kid-img" alt="kid2" />
                  <h5 className="fw-bold mt-3">Summer Cap</h5>
                  <p className="text-secondary">$12.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid3} className="img-fluid kid-img" alt="kid3" />
                  <h5 className="fw-bold mt-3">Classic Kid</h5>
                  <p className="text-secondary">$30.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>



 {/* Slide 2 */}
          <Carousel.Item>
            <div className="row text-center">

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid2} className="img-fluid kid-img" alt="kid2" />
                  <h5 className="fw-bold mt-3">Summer Cap</h5>
                  <p className="text-secondary">$12.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid3} className="img-fluid kid-img" alt="kid3" />
                  <h5 className="fw-bold mt-3">Classic Kid</h5>
                  <p className="text-secondary">$30.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid1} className="img-fluid kid-img" alt="kid1" />
                  <h5 className="fw-bold mt-3">School Collection</h5>
                  <p className="text-secondary">$80.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>



{/* Slide 3 */}
          <Carousel.Item>
            <div className="row text-center">

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid3} className="img-fluid kid-img" alt="kid3" />
                  <h5 className="fw-bold mt-3">Classic Kid</h5>
                  <p className="text-secondary">$30.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid1} className="img-fluid kid-img" alt="kid1" />
                  <h5 className="fw-bold mt-3">School Collection</h5>
                  <p className="text-secondary">$80.00</p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="product-card">
                  <img src={kid2} className="img-fluid kid-img" alt="kid2" />
                  <h5 className="fw-bold mt-3">Summer Cap</h5>
                  <p className="text-secondary">$12.00</p>
                </div>
              </div>

            </div>
          </Carousel.Item>

        </Carousel>
      </div>

      <hr />
    </>
  );
}

export default Kids;