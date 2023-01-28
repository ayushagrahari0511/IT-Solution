import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Modal Video
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

// import images
import online1 from "../../assets/images/course/online/ab01.jpg";
import online2 from "../../assets/images/course/online/ab02.jpg";
import online3 from "../../assets/images/course/online/ab03.jpg";

export default class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className="mt-100 mt-60">
          <Row className="align-items-center">
            <Col lg={6} md={6}>
              <Row className="align-items-center">
                <Col lg={6} xs={6} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                    <CardBody className="p-0">
                      <img src={online1} className="img-fluid" alt="" />
                      <div className="overlay-work bg-dark"></div>
                    </CardBody>
                  </Card>
                </Col>

                <Col lg={6} xs={6}>
                  <Row>
                    <Col lg={12} md={12} className="mt-4 mt-lg-0 pt-2 pt-lg-0">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                        <CardBody className="p-0">
                          <img src={online2} className="img-fluid" alt="" />
                          <div className="overlay-work bg-dark"></div>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={12} md={12} className="mt-4 pt-2">
                      <Card className="work-container work-modern overflow-hidden rounded border-0 shadow-md">
                        <CardBody className="p-0">
                          <img src={online3} className="img-fluid" alt="" />
                          <div className="overlay-work bg-dark"></div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>

            <Col lg={6} md={6} className="mt-4 mt-lg-0 pt- pt-lg-0">
              <div className="ml-lg-4">
                <div className="section-title mb-4 pb-2">
                  <h4 className="title mb-4">About Our Story</h4>
                  <p className="text-muted para-desc">
                    We're Everything Best That You{" "}
                    <span className="text-primary font-weight-bold">
                      Need!
                    </span>{" "}
                  </p>
                  <p className="text-muted para-desc mb-0">
                    Our mission is to maintain a constant learn and build approach.
                    This will lead us to serve better and progress faster as the industry moves forward.
                    As we say, We power brands to build big, we strengthen ourselves in a well-cultivated manner to serve better.
                    This helps us sustain relationships with our esteemed clients both before and after fulfilling their requirements.
                  </p>
                </div>

                {/* <ul className="list-unstyled text-muted">
                  <li className="mb-0">
                    <span className="text-primary h4 mr-2">
                      <i className="uil uil-check-circle align-middle"></i>
                    </span>
                    Fully Responsive
                  </li>
                </ul> */}

                <div className="watch-video mt-4 pt-2">
                  <Link
                    to="/about-us"
                    className="btn btn-primary m-1"
                  >
                    Read More{" "}
                    <i>
                      <FeatherIcon
                        icon="chevron-right"
                        className="fea icon-sm"
                      />
                    </i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
