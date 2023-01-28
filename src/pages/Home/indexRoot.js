// React basic and bootstrap
import React, { Component, Suspense } from "react";
import { Container } from "reactstrap";

// Scroll up button
import ScrollUpButton from "react-scroll-up-button";

//Import Icons
import FeatherIcon from "feather-icons-react";

// Import css
import "./css/demo.css";
// import Collection from "../Shop/Collection";
import About from "../LandingThree/About";
import Reviews from "../Job/Reviews";
import WhatWeDo from "../ITSolution/WhatWeDo";
import Appointment from "../Hospital/Appointment";
import Contact from "./Contact";
import Team from "../Saas Onepage/Team";
import Partners from "../../components/Shared/Partners";
import FeatureDescription from "../Classic Saas/FeatureDescription";
import user from "../../assets/images/icon/user.svg";
import calendar from "../../assets/images/icon/calendar.svg";
import sandclock from "../../assets/images/icon/sand-clock.svg";
import seo from "../../assets/images/digital/seo.gif";
import WorkProcess from "../../components/Shared/WorkProcess";

// Import sub components
const Topbar = React.lazy(() => import("./Topbar"));
const Home = React.lazy(() => import("./Home"));


const CustomDot = () => {
  return (
    <i>
      <FeatherIcon icon="arrow-up" className="icons" />
    </i>
  );
};

class IndexRoot extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    facilities: [
      {
        icon: "shield",
        title: "Our Expert Team",
        desc:
          "Moreover, in Latin only words at the beginning of sentences are capitalized.",
      },
      {
        icon: "cpu",
        title: "Creative approach",
        desc:
          "If the fill text is intended to illustrate the characteristics of sometimes.",
      },
      {
        icon: "",
        title: "On time delivery"
      },
      {
        icon: "",
        title: "Progressive Roadmap"
      },
      {
        icon: "",
        title: "Robust architecture"
      },
    ],
  };


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

          <Home />
          <WhatWeDo />
          <Container className="pt-5 pb-5 bg-light">
            <Partners />
          </Container>
          {/* <Collection /> */}

          <About />
          <FeatureDescription
            image1={seo}
            image2={seo}
            facilities={this.state.facilities}
          />

          <WorkProcess />
          <Team />
          {/* <Appointment /> */}


          {/* <Reviews /> */}

          <Contact />

          <ScrollUpButton
            ContainerClassName="classForContainer"
            style={{ height: 36, width: 36 }}
            TransitionClassName="classForTransition"
          >
            <CustomDot />
          </ScrollUpButton>
        </Suspense>
      </React.Fragment>
    );
  }
}

export default IndexRoot;
