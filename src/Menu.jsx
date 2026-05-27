import React from "react";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top shadow">


{/* Logo */}
      <div className="d-flex flex-column">
        <span className="fs-3 fw-bold ps-5 pt-2">HEXASHOP</span>
        <span className="fs-6 text-muted ps-5 ">online shopping</span>
      </div>


{/* Hamburger button */}
      <button
        className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"  >
        <span className="navbar-toggler-icon"></span>
      </button>



{/* Navbar links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <a className="nav-link fw-semibold p-3" href="#">Home</a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold p-3" href="#">Men's</a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold p-3" href="#">Women's</a>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold p-3" href="#">Kid's</a>
          </li>



{/* Dropdown */}
{/* pages */}
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle fw-semibold p-3"
              href="#" role="button"
              data-bs-toggle="dropdown">Pages</a>


            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">About Us</a></li>
              <li><a className="dropdown-item" href="#">Products</a></li>
              <li><a className="dropdown-item" href="#">Single Product</a></li>
              <li><a className="dropdown-item" href="#">Contact Us</a></li>
            </ul>
          </li>


{/* features  */}

         <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle fw-semibold p-3"
              href="#" role="button"
              data-bs-toggle="dropdown">Features</a>


            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Features page1 </a></li>
              <li><a className="dropdown-item" href="#">Features page2</a></li>
              <li><a className="dropdown-item" href="#">Features page3</a></li>
              <li><a className="dropdown-item" href="#"> Features page4</a></li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link fw-semibold p-3" href="#">Explore</a>
          </li>

        </ul>
      </div>

    </nav>
  );
}

export default Menu;