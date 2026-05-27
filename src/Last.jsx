import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Layout() {
  return (
    <Container fluid>
      <Row>
{/* ================= BOX 1 (60%) ================= */}
 
<Col
  md={6}
  className="d-flex flex-column justify-content-center align-items-start text-start bg-light"
  style={{ height: "350px", padding: "30px" }}
>
  <h2 className="text-dark">
    By Subscribing To Our Newsletter You <br />
    Can Get 30% Off
  </h2>

  <p className="text-secondary fst-italic">
    Details to details is what makes Hexashop different from the other themes.
  </p>

  {/* INLINE FORM */}
  <Form className="d-flex gap-2 mt-3 w-100" style={{ maxWidth: "500px" }}>


    <Form.Control type="text" placeholder="Your Name"  className="rounded-0 p-2 fst-italic"/>
    <Form.Control type="email" placeholder="Your Email Address"  className="rounded-0 p-2 fst-italic"/>


  </Form>
</Col>




{/* ================= BOX 2 (40%) ================= */}
        <Col md={6}>
          <Row className="g-0">


{/* box1 */}
            <Col xs={6}
              className=" d-flex flex-column justify-content-center align-items-center text-center"
              style={{ height: "100px" }}>

              <h6>Store Location:</h6>
              <p className="mb-0 small text-secondary">Sunny Isles Beach</p>

            </Col>


{/* box2 */}
            <Col xs={6}
              className=" d-flex flex-column justify-content-center align-items-center text-center"
              style={{ height: "100px" }}  >

              <h6>Work Hours:</h6>
              <p className="mb-0 small text-secondary">07:30 AM - 9:30 PM</p>

            </Col>


{/* box3 */}
            <Col xs={6}

              className=" d-flex flex-column justify-content-center align-items-center text-center"
              style={{ height: "100px" }} >
              <h6>Phone:</h6>
              <p className="mb-0 small text-secondary">010-020-0340</p>

            </Col>


{/* box4 */}
            <Col xs={6}

              className=" d-flex flex-column justify-content-center align-items-center text-center"
              style={{ height: "100px" }} >

              <h6>Email:</h6>
              <p className="mb-0 small text-secondary">info@company.com</p>

            </Col>


{/* box5 */}
            <Col xs={6}

              className=" d-flex flex-column justify-content-center align-items-center text-center"
              style={{ height: "100px" }} >

              <h6>Office:</h6>
              <p className="mb-0 small text-secondary">North Miami Beach</p>

            </Col>


{/* box6 */}
            <Col  xs={6}

              className=" d-flex flex-column justify-content-center align-items-center text-center"
              style={{ height: "100px" }} >

              <h6>Social:</h6>
              <p className="mb-0 small text-secondary">Facebook, Instagram, LinkedIn</p>

            </Col>

          </Row>
        </Col>

      </Row>
    </Container>
  );
}

export default Layout;