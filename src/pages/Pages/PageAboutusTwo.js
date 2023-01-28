import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import CountUp from "react-countup";

import about2 from "../../assets/images/company/about2.png";
import amazon from "../../assets/images/client/amazon.svg";
import google from "../../assets/images/client/google.svg";
import lenovo from "../../assets/images/client/lenovo.svg";
import paypal from "../../assets/images/client/paypal.svg";
import shopify from "../../assets/images/client/shopify.svg";
import spotify from "../../assets/images/client/spotify.svg";
import WorkProcess from "../../components/Shared/WorkProcess";
import ExperienceTeam from "../CorporateBusiness/ExperienceTeam";
import PageBreadcrumb from "../../components/Shared/PageBreadcrumb";

export default class PageAboutusTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "1",
      partners: [
        {
          id: 1,
          img: amazon,
        },
        {
          id: 2,
          img: google,
        },
        {
          id: 3,
          img: lenovo,
        },
        {
          id: 4,
          img: paypal,
        },
        {
          id: 5,
          img: shopify,
        },
        {
          id: 6,
          img: spotify,
        },
      ],
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    this.setState({ activeTab: tab });
  }
  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }

  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };
  render() {
    return (
      <React.Fragment>
        <PageBreadcrumb title="About Us" />

        {/* <section
          className="bg-half d-table w-100"
        // style={{ background: `url(${aboutus})` }}
        >
          <div className="bg-overlay"></div>
          <Container>
            <Row className="justify-content-center">
              <Col lg={12} className="text-center">
                <div className="page-next-level title-heading">
                  <h1 className="text-white title-dark"> Aboutus </h1>
                  <p className="text-white-50 para-desc mb-0 mx-auto">
                    Start working with Landrick that can provide everything you
                    need to generate awareness, drive traffic, connect.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section> */}
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <section className="section">
          <Container>
            <Row className="align-items-center" id="counter">
              <Col md={6}>
                <img src={about2} className="img-fluid" alt="" />
              </Col>

              <Col md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="ml-lg-4">
                  <div className="d-flex mb-4">
                    <span className="text-primary h1 mb-0">
                      <span className="counter-value display-1 font-weight-bold">
                        <CountUp start={0} end={10} duration={9} />
                      </span>
                      +
                    </span>
                    <span className="h6 align-self-end ml-2">
                      Years <br /> Experience
                    </span>
                  </div>
                  <div className="section-title">
                    <h4 className="title mb-4">Who we are ?</h4>
                    <p className="text-muted">
                      We're Everything Best That You{" "}
                      <span className="text-primary font-weight-bold">
                        Need!
                      </span>{" "}
                    </p>
                    <p>
                      Our mission is to maintain a constant learn and build approach.
                      This will lead us to serve better and progress faster as the industry moves forward.
                      As we say, We power brands to build big, we strengthen ourselves in a well-cultivated manner to serve better.
                      This helps us sustain relationships with our esteemed clients both before and after fulfilling their requirements.
                    </p>
                    <Link to="/contact-us" className="btn btn-primary mt-3">
                      Contact us
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
          <Container className="mt-4">
            <Row className="justify-content-center">
              {this.state.partners.map((image, key) => (
                <Col
                  lg={2}
                  md={2}
                  xs={6}
                  className="text-center pt-4"
                  key={key}
                >
                  <img src={image.img} className="avatar avatar-ex-sm" alt="" />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        <section className="section bg-light">
          {/* Work process render */}
          <WorkProcess />
        </section>
        <Row className="my-md-5 pt-md-3 my-4 pt-2 pb-lg-5 mt-sm-0 pt-sm-0 justify-content-center">
          <Col xs={12} className="text-center">
            <div className="section-title">
              <h4 className="title mb-4">Have Question ? Get in touch!</h4>
              <p className="text-muted para-desc mx-auto">
                Let us know what you are looking for?
              </p>
              <Link to="/contact-us" className="btn btn-primary mt-4">
                <i className="mdi mdi-phone"></i> Contact us
              </Link>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
