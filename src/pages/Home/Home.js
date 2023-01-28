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
                  <h4 className="heading mt-4 mb-3">
                    {/* Software Development &nbsp; */}
                    Our Creativity is Your
                    &nbsp;
                    <br />
                    <Typist>
                      <span className="element text-primary">Success</span>
                      {/* <Typist.Backspace count={11} delay={400} /> */}
                      {/* <span className="element text-primary"></span> */}
                    </Typist>
                  </h4>
                  <p className="para-desc text-muted">
                    We power brands to build big!
                  </p>
                  <p className="para-desc text-muted">
                    Salvanix excels in solving complex software development challenges using thought process and technoloy solutions.
                  </p>

                  <div className="mt-4 pt-2">
                    <ScrollspyNav
                      scrollTargetIds={["getInTouch"]}
                      activeNavClass="active"
                      scrollDuration="800"
                      headerBackground="true"
                    >
                      <a
                        href="#getInTouch"
                        className="btn btn-primary rounded mr-2 mb-2"
                      >
                        Let's Connect
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
