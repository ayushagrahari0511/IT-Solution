// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Alert,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardBody,
} from "reactstrap";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Icons
import FeatherIcon from "feather-icons-react";

// import images
import contact from "../../../assets/images/contact.png";

class PageContactOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pathItems: [
        //id must required
        { id: 1, name: "Landrick", link: "/index" },
        { id: 2, name: "Page", link: "#" },
        { id: 3, name: "Contact", link: "#" },
        { id: 4, name: "Contact One" },
      ],
      Contactvisible: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMail.bind(this);
    this.callNumber.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ Contactvisible: true });
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

  sendMail() {
    window.location.href = "mailto:contact@example.com";
  }

  callNumber() {
    window.location.href = "tel:+152534-468-854";
  }

  render() {
    return (
      <React.Fragment>
        {/* breadcrumb */}
        <PageBreadcrumb title="Contact Us" pathItems={this.state.pathItems} />
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

        <section className="section pb-0">
          <Container>
            <Row>
              <Col md={4}>
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-phone d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Phone</h4>
                    <Link
                      to="#"
                      onClick={this.callNumber}
                      className="text-primary"
                    >
                      +152 534-468-854
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-envelope d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Email</h4>
                    <Link
                      to="#"
                      onClick={this.sendMail}
                      className="text-primary"
                    >
                      contact@example.com
                    </Link>
                  </div>
                </Card>
              </Col>

              <Col md={4} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                <Card className="border-0 text-center features feature-clean">
                  <div className="icons text-primary text-center mx-auto">
                    <i className="uil uil-map-marker d-block rounded h3 mb-0"></i>
                  </div>
                  <div className="content mt-3">
                    <h4 className="title font-weight-bold">Location</h4>
                    <p className="text-muted">
                      C/54 Northwest Freeway, Suite 558, <br />
                      Houston, USA 485
                    </p>
                    <Link to="#" className="video-play-icon h6 text-primary">
                      View on Google map
                    </Link>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>

          <Container className="mt-100 mt-60">
            <Row className="align-items-center">
              <Col
                lg={5}
                md={6}
                className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
              >
                <Card className="shadow rounded border-0" id="getInTouch">
                  <CardBody className="py-5">
                    <h4 className="card-title">Get In Touch !</h4>
                    <div className="custom-form mt-4">
                      <div id="message"></div>
                      <Alert
                        color="primary"
                        isOpen={this.state.Contactvisible}
                        toggle={() => {
                          this.setState({
                            Contactvisible: !this.state.Contactvisible,
                          });
                        }}
                      >
                        Contact details send successfully.
                      </Alert>
                      <Form
                        method="post"
                        onSubmit={this.handleSubmit}
                        name="contact-form"
                        id="contact-form"
                      >
                        <Row>
                          <Col md={6}>
                            <FormGroup>
                              <Label>
                                Your Name <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="user"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="name"
                                id="name"
                                type="text"
                                className="form-control pl-5"
                                placeholder="First Name :"
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup className="position-relative">
                              <Label>
                                Your Email{" "}
                                <span className="text-danger">*</span>
                              </Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="mail"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="email"
                                id="email"
                                type="email"
                                className="form-control pl-5"
                                placeholder="Your email :"
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col md={12}>
                            <FormGroup className="position-relative">
                              <Label>Subject</Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="book"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <Input
                                name="subject"
                                id="subject"
                                className="form-control pl-5"
                                placeholder="Your subject :"
                                required
                              />
                            </FormGroup>
                          </Col>
                          <Col md={12}>
                            <FormGroup className="position-relative">
                              <Label>Comments</Label>
                              <div className="position-relative">
                                <i>
                                  <FeatherIcon
                                    icon="message-circle"
                                    className="fea icon-sm icons"
                                  />
                                </i>
                              </div>
                              <textarea
                                name="comments"
                                id="comments"
                                rows="4"
                                className="form-control pl-5"
                                placeholder="Your Message :"
                              ></textarea>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col sm={12} className="text-center">
                            <Input
                              type="submit"
                              id="submit"
                              name="send"
                              className="submitBnt btn btn-primary btn-block"
                              value="Send Message"
                            />
                            <div id="simple-msg"></div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              <Col lg={7} md={{ size: 6, order: 2 }} xs={{ order: 1 }}>
                <Card className="border-0">
                  <CardBody className="p-0">
                    <img src={contact} className="img-fluid" alt="Landrick" />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
export default PageContactOne;
