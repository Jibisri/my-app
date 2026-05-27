import React from "react";

import ex1 from "./assets/ex1.jpg";
import ex2 from "./assets/ex2.jpg";


function Content() {
  return (
    <div className="container-fluid py-5">
      <div className="row g-4 px-3">

        {/* 1st Box - TEXT */}
        <div className="col-md-6">
          <div className="p-5 bg-light h-100">

            <h2 className="fw-bold pt-5">Explore Our Products</h2>

            <p className="text-secondary pt-4">
              You are allowed to use this HexaShop HTML CSS template. You can
              feel free to modify or edit this layout.
            </p>

            <p className="fst-italic">
              <span className="fw-bold fs-2 pt-5">"</span> You are not allowed to redistribute this template ZIP file on any
              other website.
            </p>

            <p className="text-secondary pt-3">
             There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.
            </p>

            <p className="text-secondary pt-4">
            If this template is beneficial for your website or business, please kindly <a className="text" href="">support us</a> a little via PayPal. Please also tell your friends about our great website. Thank you.
            </p>

            <button className="btn btn-outline-dark rounded-0 mt-4 p-3">
              Discover Me
            </button>

          </div>
        </div>

{/* 2nd Box - IMAGE GRID */}
        <div className="col-md-6">
          <div className="row g-3 h-100">

 {/* Box 1 */}
           <div className="col-6 bg-secondary-subtle d-flex flex-column justify-content-center align-items-center text-center p-4">

  <h2 className="fw-bold">Leather Bag</h2>
  <p className="text-muted mb-0">Latest Collection</p>

</div>

 {/* Box 2 */}
            <div className="col-6">
              <div className="overflow-hidden h-100">
                <img src={ex1} className="w-100 h-100 object-fit-cover" alt="2" />
              </div>
            </div>

 {/* Box 3 */}
            <div className="col-6">
              <div className="overflow-hidden h-100">
                <img src={ex2} className="w-100 h-100 object-fit-cover" alt="3" />
              </div>
            </div>

{/* Box 4 */}
        <div className="col-6 bg-secondary-subtle d-flex flex-column justify-content-center align-items-center text-center p-4">

  <h2 className="fw-bold">Different Types</h2>
  <p className="text-muted mb-0">Latest Collection</p>

</div>


          </div>
        </div>

      </div>
      <hr />
    </div>
  );
}

export default Content;