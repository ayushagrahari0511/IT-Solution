import React, { Component } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

//Import Images
import logodark from "../../assets/images/logo-dark.png";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        {
          id: 1,
          idnm: "about-us",
          navheading: "About Us",
          url: "/about-us",
        },
        {
          id: 2,
          idnm: "contact-us",
          navheading: "Contact Us",
          url: "/contact-us",
        },
        {
          id: 3,
          idnm: "services",
          navheading: "Services",
          url: "/services",
        },
        {
          id: 4,
          idnm: "Skills",
          navheading: "Skills",
          url: "/contact-us",
        },
        {
          id: 5,
          idnm: "team",
          navheading: "Team",
          url: "/our-team",
        },
        // { id: 2, idnm: "demos", navheading: "Demos" },
        // { id: 3, idnm: "features", navheading: "Features" },
      ],
      isOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
  }

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    //Store all Navigationbar Id into TargetID variable(Used for Scrollspy)

    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <Link className="logo" to="/">
              <img src="./logo.svg" height="60" alt="" />
            </Link>
            <div className="menu-extras">
              <div className="menu-item">
                <Link
                  to="#"
                  onClick={this.toggleLine}
                  className={
                    this.state.isOpen ? "navbar-toggle open" : "navbar-toggle"
                  }
                >
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </div>
            </div>
            {/* <ScrollspyNav
              scrollTargetIds={targetId}
              scrollDuration="800"
              headerBackground="false"
              activeNavClass="active"
            > */}
            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul className="navigation-menu">
                {this.state.navItems.map((item, key) => (
                  <li key={key} className="has-submenu">
                    <Link to={item.url} style={{cursor: "pointer"}}> {item.navheading}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* </ScrollspyNav> */}
          </Container>
        </header>
      </React.Fragment>
    );
  }
}

export default Topbar;
