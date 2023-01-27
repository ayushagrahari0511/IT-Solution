import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class PageBreadcrumb extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="bg-half bg-light d-table w-100">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12" className="text-center">
                <div className="page-next-level">
                  {this.props.title ? (
                    <h4 className="title"> {this.props.title}</h4>
                  ) : null}
                  {this.props.children ? this.props.children : null}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default PageBreadcrumb;
