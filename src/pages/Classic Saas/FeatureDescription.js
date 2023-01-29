import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

//Import Icons
import FeatherIcon from "feather-icons-react";

//Images
import client01 from "../../assets/images/client/01.jpg";
import client02 from "../../assets/images/client/02.jpg";
import client03 from "../../assets/images/client/03.jpg";
import client04 from "../../assets/images/client/04.jpg";
import client05 from "../../assets/images/client/05.jpg";
import client06 from "../../assets/images/client/06.jpg";

class FeatureDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cols: 4,
      step1: true,
      step2: false,
      step3: false,
      step4: false,
      step5: false,
      step6: false,
    };
    this.updateWindowSize.bind(this);
  }

  updateWindowSize = () => {
    if (window.outerWidth >= 1230) {
      this.setState({ itemCount: 3, cols: 4 });
    } else if (window.outerWidth >= 970 && window.outerWidth < 1230) {
      this.setState({ itemCount: 2, cols: 6 });
    } else if (window.outerWidth <= 970) {
      this.setState({ itemCount: 1, cols: 12 });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
    this.updateWindowSize();
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    return (
      <React.Fragment>
        <Container className="mt-100" style={{ marginBottom: 100 }}>
          <Row className="align-items-center">
            <Col
              lg={{ size: 5, order: 1 }}
              xs={{ order: 2 }}
              className="mt-4 pt-2 mt-lg-0 pt-lg-0"
            >
              <div className="section-title mr-lg-4">
                <h1 className="title mb-3">Why Choose us ?</h1>
                {/* <p className="para-desc text-muted">
                  At Salvanix we are keen to work with new age technology to serve our customers with the latest tech stack.
                  We focus on each and every client individually and make sure they stick with us for the long run.
                  This is what makes us one of the top Software Development Companies in India.
                </p> */}
                <Row>
                  {this.props.facilities.map((facility, key) => (
                    <Col xs="12" key={key}>
                      <ul className="list-unstyled text-muted">
                        <li className="mb-0">
                          <span className="text-primary h4 mr-2">
                            <i className="uil uil-check-circle align-middle"></i>
                          </span>
                          {facility.title}
                        </li>
                      </ul>

                      {/* <div className="d-flex align-items-center pt-4">
                        <h2>
                          <i>
                            <FeatherIcon
                              icon={facility.icon}
                              className="fea icon-m-md text-primary"
                            />
                          </i>
                        </h2>
                        <div className="ml-3">
                          <h5> {facility.title} </h5>
                          <p className="text-muted mb-0">{facility.desc}</p>
                        </div>
                      </div> */}
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>

            <Col lg={{ size: 7, order: 2 }} xs={{ order: 1 }}>
              <div className="saas-feature-shape-right position-relative">
                <img
                  src={this.props.image1}
                  className="img-fluid mx-auto d-block rounded"
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default FeatureDescription;
