import React, { Component } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

export default class WorkProcess extends Component {
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="section-title text-center mb-4 pb-2">
                <h6 className="text-primary">Work Process</h6>
                <h4 className="title mb-4">How do we works ?</h4>
                {/* <p className="text-muted para-desc mx-auto mb-0">
                  Start working with{" "}
                  <span className="text-primary font-weight-bold">
                    Landrick
                  </span>{" "}
                  that can provide everything you need to generate awareness,
                  drive traffic, connect.
                </p> */}
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={4} className="mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-presentation-edit d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Explore Our Services</h5>
                  <p className="text-muted mb-0">
                    We have a wide variety of services to help you develop your product.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-3 mt-4 pt-2">
              <Card className="card features feature-clean work-process bg-transparent process-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-airplay d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Consult with Us</h5>
                  <p className="text-muted mb-0">
                    To analyse your requirement in a better way and find the best possible solution.
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col md={4} className="mt-md-5 pt-md-5 mt-4 pt-2">
              <Card className="features feature-clean work-process bg-transparent d-none-arrow border-0 text-center">
                <div className="icons text-primary text-center mx-auto">
                  <i className="uil uil-image-check d-block rounded h3 mb-0"></i>
                </div>

                <CardBody>
                  <h5 className="text-dark">Get your Product</h5>
                  <p className="text-muted mb-0">
                    A cost effective solution, in the least possible time.
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
