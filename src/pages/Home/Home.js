// React basic and bootstrap
import React, { Component } from "react";
import Typist from "react-typist";
import ScrollspyNav from "./ScrollspyNav";

// Import  Images
import rocket from "../../assets/images/home/rocket.svg";
import { Container, Row, Col } from "reactstrap";

//Import Images
import logo_dark from "../../assets/images/logo-dark.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <section className="bg-half-170 home-wrapper d-table w-100" id="home">
          <Container>
            <Row className="align-items-center">
              <Col lg={7} md={7}>
                <div className="title-heading">
                  <img src={logo_dark} height="36" alt="" />
                  <h4 className="heading mt-4 mb-3">
                    Built For &nbsp;
                    <Typist>
                      <span className="element text-primary">T-Shirts</span>
                      <Typist.Backspace count={10} delay={400} />
                      <span className="element text-primary">Goodies</span>
                    </Typist>
                  </h4>
                  <p className="para-desc text-muted">
                    Start working with that can provide everything you need to
                    generate awareness, drive traffic, connect.
                  </p>

                  <div className="mt-4 pt-2">
                    <ScrollspyNav
                      scrollTargetIds={["demos"]}
                      activeNavclassName="active"
                      scrollDuration="800"
                      headerBackground="true"
                    >
                      <a
                        href="#demos"
                        className="btn btn-primary rounded mouse-down mr-2 mb-2"
                      >
                        View Demos
                      </a>
                      <a
                        href="https://1.envato.market/Landrickreactjs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary rounded ml-1 mb-2"
                      >
                        Download Now
                      </a>
                    </ScrollspyNav>
                  </div>
                </div>
              </Col>

              <Col lg={5} md={5} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <img src={rocket} className="img-fluid mover" alt="" />
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
