import React, { Component } from 'react'
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

import FeatherIcon from "feather-icons-react";
import contact from "../../assets/images/contact.png";

class Contact extends Component {
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
            <Container className="mt-100 mt-60" id='getInTouch' >
                <Row className="align-items-center">
                    <Col
                        lg={5}
                        md={6}
                        className="mt-4 mt-sm-0 pt-2 pt-sm-0 order-2 order-md-1"
                    >
                        <Card className="shadow rounded border-0">
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
        )
    }
}

export default Contact