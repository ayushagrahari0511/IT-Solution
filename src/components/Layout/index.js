import React, { Component, Suspense } from "react";
import { withRouter } from "react-router-dom";

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Switcher

//Import Icons
import FeatherIcon from "feather-icons-react";
import Topbar from "../../pages/Home/Topbar";

const CustomDot = () => {
  return (
    <i>
      <FeatherIcon icon="arrow-up" className="icons" />
    </i>
  );
};

class Layout extends Component {
  Loader = () => {
    return (
      <div id="preloader">
        <div id="status">
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <React.Fragment>
        <Suspense fallback={this.Loader()}>
          <Topbar />

          {this.props.children}

          {/* <div className="btn btn-icon btn-soft-primary back-to-top"> */}
          {/* scrollup button */}
          <ScrollUpButton
            ContainerClassName="classForContainer"
            style={{ height: 36, width: 36 }}
            TransitionClassName="classForTransition"
          >
            <CustomDot />
          </ScrollUpButton>
          {/* </div> */}

          {/* theme switcher */}
          {/* <ThemeSwitcher /> */}
        </Suspense>
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
