import React, { Component } from "react";
import { Container, Row, Col, Badge } from "reactstrap";

class CTA extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="section bg-light">
          <Container>
            <Row className="justify-content-center">
              <Col xs="12" className="text-center">
                <div className="section-title">
                  <h4 className="title mb-4">
                    See everything about your employee at one place.
                  </h4>
                  <p className="text-muted para-desc mx-auto mb-0">
                    Start working with{" "}
                    <span className="text-primary font-weight-bold">
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, connect.
                  </p>

                  <div className="mt-4 pt-2">
                    <a
                      href="https://1.envato.market/Landrickreactjs"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Get Started{" "}
                      <Badge pill color="danger" className="ml-2">
                        v2.2
                      </Badge>
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default CTA;
