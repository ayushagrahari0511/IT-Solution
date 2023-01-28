import React, { Component } from "react";
import SectionTitle from "../../components/Shared/SectionTitle";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
//Import Icons
import FeatherIcon from "feather-icons-react";

// import FeatherIcon

// Modal Video
import "../../../node_modules/react-modal-video/scss/modal-video.scss";

export default class WhatWeDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      whatwedo: [
        {
          id: 1,
          icon: "uil uil-desktop",
          heading: "Custom Software Development",
          desc: "Translate unique client requirements into custom software solutions with premier quality and advanced technologies."
        },
        {
          id: 3,
          // icon: "uil uil-airplay",
          icon: "uil uil-browser",
          heading: "Web Development",
          desc: "Revolutionize your business ideas using web development services for innovative and next-gen web apps."
        },
        {
          id: 4,
          icon: "uil uil-users-alt",
          heading: "Dedicated Development Team",
          desc: "Grow your business development team as per project size and meet intermittent deadlines utilizing our flexible resource model."
        },
        {
          id: 7,
          icon: "uil uil-cloud-computing",
          heading: "Product Development",
          desc: "Intellectually comprehend client's business ideas to develop innovative software solutions with scalable product architecture."
        },
        {
          id: 9,
          icon: "uil uil-mobile-android",
          heading: "Mobile Apps",
          desc: "Achieve digital transformation by developing scalable, engaging and feature rich mobile applications."
        },
        {
          id: 11,
          // icon: "uil uil-server-connection",
          icon: "uil uil-cloud-check",
          heading: "Software Testing & QA",
          desc: "Maintain Quality Assurance by recctifying errors and debugging applications for a high-performing application."
        },
      ],
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <React.Fragment>
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <div className="col-12 text-center">
                {/* render Section title */}
                <SectionTitle
                  title="What we do ?"
                  // desc=" From IT strategy consulting and comprehensive technology roadmaps to the end-to-end development of scalable solutions, Salvanix delivers a full-cycle software development services that adapt seamlessly to your project requirements and business needs."
                  desc="Our software development services do not restrict to specific domain or technology but inclusively covers every business industry with offerings such as"
                />
              </div>
            </Row>
            <Row>
              {this.state.whatwedo.map((items, key) => (
                <Col lg={4} md={6} className="mt-4 pt-2" key={key}>
                  <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0" style={{ height: "100%" }}>
                    <span className="h1 icon2 text-primary">
                      <i className={items.icon}></i>
                    </span>
                    <div className="card-body p-0 content">
                      <h5>{items.heading}</h5>
                      <p className="para text-muted mb-0">{items.desc}</p>
                    </div>
                    <span className="big-icon text-center">
                      <i className="uil uil-chart-line"></i>
                    </span>
                  </div>
                </Col>
              ))}
            </Row>
            <div className="mt-4 pt-2" style={{display: "flex", alignItems:"center", justifyContent: "center"}}>
              <Link
                to="/services"
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
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
