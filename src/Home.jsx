import React from "react";

function Home() {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0">


        {/* Box 1 */}
        <div className="col-md-6 ">

<div className="image border w-100 p-5 bg-light text-light " >
            <h1 className=" shop text-center fw-bold">We Are Hexashop</h1>
            <p className="fst-italic ps-5 fs-5 ">Awesome,clean & creative HTML5 Templete</p>
              {/* button */}
            {/* <button className="btn btn-outline-light p-3 ms-5">Purchase Now</button> */}
          </div>
        </div>




        {/* Box 2 */}



        <div className="col-md-6">
          <div className=" p-3">

          
            <div className="row g-2">



{/* Box 1st */}
<div className="women col-6">
  <div className="img-size position-relative overflow-hidden">

    {/* Hover Overlay */}
    <div className="overlay m-4">
      <h2 className="fw-bold">Women</h2>
      <p className="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <button className="btn btn-outline-light">
        Discover Me
      </button>
    </div>

  </div>
</div>


 {/* Box 2nd */}
          
<div className="men col-6">
  <div className="img-size position-relative overflow-hidden">

    {/* Hover Overlay */}
    <div className="overlay m-4">
      <h2 className="fw-bold">Men</h2>
      <p className="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <button className="btn btn-outline-light">
        Discover Me
      </button>
    </div>

  </div>
</div>

{/* Box 3rd */}

<div className="kids col-6">
  <div className="img-size position-relative overflow-hidden">

    
    {/* Hover Overlay */}
    <div className="overlay m-4">
      <h2 className="fw-bold">Kids</h2>
      <p className="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <button className="btn btn-outline-light">
        Discover Me
      </button>
    </div>

  </div>
</div>


{/* Box 4th */}
<div className="access col-6">
  <div className="img-size position-relative overflow-hidden">

    {/* Hover Overlay */}
    <div className="overlay m-4">
      <h2 className="fw-bold">Accessories</h2>
      <p className="small">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      <button className="btn btn-outline-light">
        Discover Me
      </button>
    </div>

  </div>
</div>

                  </div>
                      </div>
                         </div>
      </div>
   <hr className="dashed-line" />
    </div>
  );
}

export default Home;