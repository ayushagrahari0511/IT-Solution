import React, { Component } from "react";
import SectionTitle from "../../components/Shared/SectionTitle";
import { Container, Row, Col } from "reactstrap";
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
          icon: "uil uil-chart-line",
          heading: "Hign Performance",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 2,
          icon: "uil uil-crosshairs",
          heading: "Best Securities",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 3,
          icon: "uil uil-airplay",
          heading: "Trusted Service",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 4,
          icon: "uil uil-rocket",
          heading: "Info Technology",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 5,
          icon: "uil uil-clock",
          heading: "24/7 Support",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 6,
          icon: "uil uil-users-alt",
          heading: "IT Management",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 7,
          icon: "uil uil-file-alt",
          heading: "Certified Company",
          desc: "It is a long established fact that a reader.",
        },
        {
          id: 8,
          icon: "uil uil-search",
          heading: "Data Analytics",
          desc: "It is a long established fact that a reader.",
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
                  desc=" that can provide everything you need to generate awareness, drive traffic, connect."
                />
              </div>
            </Row>
            <Row>
              {this.state.whatwedo.map((items, key) => (
                <Col lg={3} md={4} className="mt-4 pt-2" key={key}>
                  <div className="card features fea-primary rounded p-4 bg-light text-center position-relative overflow-hidden border-0">
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
          </Container>
        </section>
      </React.Fragment>
    );
  }
}
