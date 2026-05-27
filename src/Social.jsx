import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import insta1 from "./assets/instagram-01.jpg";
import insta2 from "./assets/instagram-02.jpg";
import insta3 from "./assets/instagram-03.jpg";
import insta4 from "./assets/instagram-04.jpg";
import insta5 from "./assets/instagram-05.jpg";
import insta6 from "./assets/instagram-06.jpg";

function Social() {
  return (
    <Container fluid className="px-3">
      <Row className="g-0">

{/* img1 */}
        <Col xs={6} md={2}>
          <div
            className="box"
            style={{ backgroundImage: `url(${insta1})` }}
          >
            <div className="over">
              <div className="text">Fashion</div>
            </div>
          </div>
        </Col>

{/* img2 */}
        <Col xs={6} md={2}>
          <div
            className="box"
            style={{ backgroundImage: `url(${insta2})` }}
          >
            <div className="over">
              <div className="text">New</div>
            </div>
          </div>
        </Col>

{/* img3 */}
        <Col xs={6} md={2}>
          <div className="box" style={{ backgroundImage: `url(${insta3})` }} >

            <div className="over">
              <div className="text">Brand</div>
            </div>
          </div>
        </Col>

{/* img4 */}
        <Col xs={6} md={2}>

          <div  className="box" style={{ backgroundImage: `url(${insta4})` }} >

            <div className="over">
              <div className="text">Makeup</div>
            </div>
          </div>
        </Col>

{/* img5 */}
        <Col xs={6} md={2}>

          <div className="box"  style={{ backgroundImage: `url(${insta5})` }} >

            <div className="over">
              <div className="text">Leather</div>
            </div>
          </div>
        </Col>

{/* img6 */}
        <Col xs={6} md={2}>

          <div className="box" style={{ backgroundImage: `url(${insta6})` }}>

            <div className="over">
              <div className="text">Bag</div>
            </div>
          </div>
        </Col>

{/*  */}
        <br /><hr className="p-5" /><hr />

      </Row>
    </Container>
  );
}

export default Social;