import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import {
  Container,
  Form,
  Modal,
  ModalBody,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//Import images
// import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";
import shop1 from "../../assets/images/shop/product/s-1.jpg";
import shop2 from "../../assets/images/shop/product/s-2.jpg";
import shop3 from "../../assets/images/shop/product/s-3.jpg";
import NavbarButtons from "../Shared/NavbarButtons";

class Topbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpenShop: false,
      navLinks: [
        //Note : each child and nested child must have unique id
        { id: 1, title: "Home", link: "/index" },
        {
          id: 2,
          title: "Landing",
          link: "/#",
          isMegaMenu: true,
          isOpenSubMenu: false,
          child: [
            { id: 1, title: "Saas", link: "/index-saas" },
            { id: 2, title: "Classic Saas", link: "/index-classic-saas" },
            { id: 3, title: "Agency", link: "/index-agency" },
            { id: 4, title: "Application", link: "/index-apps" },
            { id: 5, title: "Classic Application", link: "/index-classic-app" },
            { id: 6, title: "Studio", link: "/index-studio" },
            { id: 7, title: "Marketing", link: "/index-marketing" },
            { id: 8, title: "Enterprise", link: "/index-enterprise" },
            { id: 9, title: "Services", link: "/index-services" },
            { id: 10, title: "Payments", link: "/index-payments" },
            { id: 11, title: "Cryptocurrency", link: "/index-crypto" },
            { id: 12, title: "Hosting & Domain", link: "/index-hosting" },
            {
              id: 13,
              title: "IT Solution",
              link: "/index-it-solution",
              isNew: true,
            },
            { id: 14, title: "Business", link: "/index-business" },
            {
              id: 15,
              title: "Modern Business",
              link: "/index-modern-business",
            },
            {
              id: 16,
              title: "Corporate Business",
              link: "/index-corporate",
              isNew: true,
            },
            { id: 17, title: "Hotel", link: "/index-hotel" },
            {
              id: 18,
              title: "Developer",
              link: "/index-developer",
              isNew: true,
            },
            {
              id: 19,
              title: "SEO Agency",
              link: "/index-seo-agency",
              isNew: true,
            },
            {
              id: 20,
              title: "Construction",
              link: "/index-construction",
              isNew: true,
            },
            {
              id: 21,
              title: "Real Estate",
              link: "/index-real-estate",
              isNew: true,
            },
            {
              id: 22,
              title: "Hospital",
              link: "/index-hospital",
              isNew: true,
            },
            {
              id: 23,
              title: "Integration",
              link: "/index-integration",
              isNew: true,
            },
            {
              id: 24,
              title: "LandingFour",
              link: "/index-landing-four",
              isNew: true,
            },
            {
              id: 25,
              title: "Task Management",
              link: "/index-task-management",
              isNew: true,
            },
            {
              id: 26,
              title: "Email Inbox",
              link: "/index-email-inbox",
              isNew: true,
            },
            {
              id: 27,
              title: "Landing One",
              link: "/index-landing-one",
              isNew: true,
            },
            {
              id: 28,
              title: "Landing Two",
              link: "/index-landing-two",
              isNew: true,
            },
            {
              id: 29,
              title: "Landing Three",
              link: "/index-landing-three",
              isNew: true,
            },
            {
              id: 30,
              title: "Travel",
              link: "/index-travel",
              isNew: true,
            },
            {
              id: 31,
              title: "Blog",
              link: "/index-blog",
              isNew: true,
            },
            {
              id: 32,
              title: "Forums",
              link: "/index-forums",
              isNew: true,
            },
            { id: 32, title: "Personal", link: "/index-personal" },

            { id: 33, title: "Shop", link: "/index-shop", isupdatePage: true },
            {
              id: 34,
              title: "Insurance",
              link: "/index-insurance",
              isNew: true,
            },
            { id: 35, title: "Coworking", link: "/index-coworking" },
            { id: 36, title: "Course", link: "/index-course" },
            {
              id: 37,
              title: "Online Learning",
              link: "/index-online-learning",
            },
            { id: 38, title: "Event", link: "/index-event" },
            { id: 39, title: "Product", link: "/index-single" },
            { id: 40, title: "Portfolio", link: "/index-portfolio" },
            { id: 41, title: "Job", link: "/index-job" },
            { id: 42, title: "Social Media", link: "/index-social-marketing" },
            { id: 43, title: "Digital Agency", link: "/index-digital-agency" },
            { id: 44, title: "Car Ride", link: "/index-car-riding" },
            { id: 45, title: "Customer", link: "/index-customer" },
            { id: 46, title: "Software", link: "/index-software" },
            {
              id: 47,
              title: "E-Book",
              link: "/index-ebook",
              isupdatePage: true,
            },
            { id: 48, title: "Saas", link: "/index-onepage", isOnePage: true },
          ],
        },
        {
          id: 3,
          title: "Pages",
          link: "/#",
          isOpenSubMenu: false,
          child: [
            {
              id: 4,
              title: "Company",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "About Us", link: "/page-aboutus" },
                { title: "About Us Two", link: "/page-aboutus-two" },
                { title: "History", link: "/page-history" },
                { title: "Services", link: "page-services" },
                { title: "Pricing", link: "/page-pricing" },
                { title: "Team", link: "/page-team" },
              ],
            },
            {
              id: 5,
              title: "Account",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Profile", link: "/page-profile", isupdatePage: true },
                { title: "Members", link: "/page-members", isNewPage: true },
                { title: "Works", link: "/page-works", isNewPage: true },
                { title: "Messages", link: "/page-messages", isNewPage: true },
                { title: "Payments", link: "/page-payments", isNewPage: true },
                { title: "Account Setting", link: "/page-profile-edit" },
                { title: "Invoice", link: "/page-invoice" },
              ],
            },
            {
              id: 6,
              title: "Shop",
              link: "/#",
              isOpenNestedSubMenu: false,
              isNew: true,
              nestedChild: [
                {
                  title: "Products Grids",
                  link: "/shop-grids",
                },
                {
                  title: "Products List",
                  link: "/shop-lists",
                  isNewPage: true,
                },
                {
                  title: "Product Details",
                  link: "/shop-product-detail",
                },
                { title: "Shop Cart", link: "/shop-cart" },
                {
                  title: "Checkouts",
                  link: "/shop-checkouts",
                },
                {
                  title: "My Account",
                  link: "/shop-myaccount",
                },
              ],
            },
            {
              id: 7,
              title: "Help center",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                {
                  title: "Helpcenter",
                  link: "/helpcenter-overview",
                  isNewPage: true,
                },
                { title: "Faqs", link: "/helpcenter-faqs", isNewPage: true },
                {
                  title: "Guides",
                  link: "/helpcenter-guides",
                  isNewPage: true,
                },
                {
                  title: "Support Call",
                  link: "/helpcenter-support-request",
                  isNewPage: true,
                },
              ],
            },
            {
              id: 8,
              title: "Forums",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Overview", link: "/forums" },
                { title: "Forums Topic", link: "/forums-topic" },
                { title: "Forums Comments", link: "/forums-comments" },
              ],
            },
            {
              id: 9,
              title: "Email Template",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Confirmation", link: "/email-confirmation" },
                { title: "Reset Password", link: "/email-password-reset" },
                { title: "Alert", link: "/email-alert" },
                { title: "Invoice", link: "/email-invoice" },
              ],
            },
            {
              id: 10,
              title: "Careers",
              link: "/#",
              isOpenNestedSubMenu: false,
              isNew: true,
              nestedChild: [
                { title: "Jobs", link: "/page-job" },
                { title: "Jobs - Sidebar", link: "/page-jobs-sidebar" },
                { title: "Job Detail", link: "/page-job-detail" },
                { title: "Job Apply", link: "/page-job-apply" },
                {
                  title: "Company Listing",
                  link: "/page-job-company-list",
                  isNewPage: true,
                },
                { title: "Company Detail", link: "/page-job-company" },
                {
                  title: "Candidate Listing",
                  link: "/page-job-candidate-list",
                  isNewPage: true,
                },
                { title: "Candidate Details", link: "/page-job-candidate" },
              ],
            },
            {
              id: 11,
              title: "Blog",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Blog Grid", link: "/page-blog-grid" },
                { title: "Blog with Sidebar", link: "/page-blog-sidebar" },
                { title: "Blog Listing", link: "/page-blog-list" },
                {
                  title: "Blog List & Sidebar",
                  link: "/page-blog-list-sidebar",
                },
                { title: "Blog Detail", link: "/page-blog-detail" },
                { title: "Blod Detail 2", link: "/page-blog-detail-two" },
              ],
            },
            {
              id: 12,
              title: "Case Study",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "All Cases", link: "/page-all-cases" },
                { title: "Case Detail", link: "/page-case-detail" },
              ],
            },
            {
              id: 13,
              title: "Works",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Works Modern", link: "/page-work-modern" },
                { title: "Works Classic", link: "/page-work-classic" },
                { title: "Works Grid", link: "/page-work-grid" },
                { title: "Works Masonry", link: "/page-work-masonry" },
                { title: "Work Detail", link: "/page-work-detail" },
              ],
            },
            {
              id: 14,
              title: "Auth Pages",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Login", link: "/auth-login" },
                { title: "Login Cover", link: "/auth-cover-login" },
                { title: "Login Simple", link: "/auth-login-three" },
                { title: "Signup", link: "/auth-signup" },
                { title: "Signup Cover", link: "/auth-cover-signup" },
                { title: "Signup Simple", link: "/auth-signup-three" },
                { title: "Reset Password", link: "/auth-re-password" },
                {
                  title: "Reset Password Cover",
                  link: "/auth-cover-re-password",
                },
                {
                  title: "Reset Password Simple",
                  link: "/auth-re-password-three",
                },
              ],
            },
            {
              id: 15,
              title: "Utility",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Terms of Services", link: "/page-terms" },
                { title: "Privacy Policy", link: "/page-privacy" },
              ],
            },
            {
              id: 16,
              title: "Special",
              link: "/#",
              isOpenNestedSubMenu: false,
              isNew: true,
              nestedChild: [
                { title: "Coming Soon", link: "/page-comingsoon" },
                { title: "Coming Soon Two", link: "/page-comingsoon2" },
                { title: "Maintenance", link: "/page-maintenance" },
                { title: "Error", link: "/page-error" },
                { title: "Thank you", link: "/page-thankyou", isNewPage: true },
              ],
            },
            {
              id: 17,
              title: "Contact",
              link: "/#",
              isOpenNestedSubMenu: false,
              nestedChild: [
                { title: "Contact Detail", link: "/page-contact-detail" },
                { title: "Contact One", link: "/page-contact-one" },
                { title: "Contact Two", link: "/page-contact-two" },
                { title: "Contact Three", link: "/page-contact-three" },
              ],
            },
          ],
        },
        {
          id: 4,
          title: "Docs",
          link: "/#",
          isOpenSubMenu: false,
          child: [
            { title: "Documentations", link: "/documentation" },
            { title: "Changelog", link: "/changelog" },
            { title: "Components", link: "/components" },
            { title: "Widget", link: "/widget" },
          ],
        },
      ],
      wishlistModal: false,
      dropdownIsOpen: false,
    };
    this.toggleLine = this.toggleLine.bind(this);
    this.openBlock.bind(this);
    this.openNestedBlock.bind(this);
    this.toggleDropdownShop.bind(this);
    this.toggleWishlistModal.bind(this);
    this.toggleDropdownIsOpen.bind(this);
  }

  toggleWishlistModal = () => {
    this.setState((prevState) => ({
      wishlistModal: !prevState.wishlistModal,
    }));
  };

  toggleDropdownShop = () => {
    this.setState({
      dropdownOpenShop: !this.state.dropdownOpenShop,
    });
  };
  toggleDropdownIsOpen = () => {
    this.setState({
      dropdownIsOpen: !this.state.dropdownIsOpen,
    });
  };

  toggleLine() {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  componentDidMount() {
    var matchingMenuItem = null;
    var ul = document.getElementById("top-menu");
    var items = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (this.props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      this.activateParentDropdown(matchingMenuItem);
    }
  }

  activateParentDropdown = (item) => {
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent1 = parent.parentElement;
      parent1.classList.add("active"); // li
      if (parent1) {
        const parent2 = parent1.parentElement;
        parent2.classList.add("active"); // li
        if (parent2) {
          const parent3 = parent2.parentElement;
          parent3.classList.add("active"); // li
          if (parent3) {
            const parent4 = parent3.parentElement;
            parent4.classList.add("active"); // li
          }
        }
      }
    }
  };

  openBlock = (level2_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? (tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu)
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  openNestedBlock = (level2_id, level3_id) => {
    var tmpLinks = this.state.navLinks;
    tmpLinks.map((tmpLink) =>
      //Match level 2 id
      tmpLink.id === level2_id
        ? tmpLink.child.map((tmpchild) =>
            //if level1 id is matched then match level 3 id
            tmpchild.id === level3_id
              ? //if id is matched then update status(level 3 sub menu will be open)
                (tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu)
              : (tmpchild.isOpenNestedSubMenu = false)
          )
        : false
    );
    this.setState({ navLinks: tmpLinks });
  };

  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <Container>
            <div>
              <Link className="logo" to="/index">
                <img src={logolight} id="brandLogo" height="24" alt="" />
              </Link>
            </div>
            {(() => {
              if (this.props.location.pathname === "/index-developer") {
                return <NavbarButtons />;
              } else if (this.props.location.pathname === "/index-shop") {
                return (
                  <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                      <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggleDropdown}
                      >
                        <DropdownToggle
                          direction="right"
                          color="none"
                          type="button"
                          className="btn btn-link text-decoration-none p-0 pr-2"
                        >
                          <i className="mdi mdi-magnify h4 text-muted"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          right
                          className="dd-menu bg-white shadow rounded border-0 mt-3 py-0"
                          style={{ width: "300px" }}
                        >
                          <Form>
                            <input
                              type="text"
                              id="text"
                              name="name"
                              className="form-control border bg-white"
                              placeholder="Search..."
                            />
                          </Form>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item mb-0 pr-1">
                      <Dropdown
                        isOpen={this.state.dropdownOpenShop}
                        toggle={this.toggleDropdownShop}
                      >
                        <DropdownToggle
                          type="button"
                          className="btn btn-icon btn-primary "
                        >
                          <i className="uil uil-shopping-cart align-middle icons"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          direction="left"
                          className="dd-menu bg-white shadow rounded border-0 mt-3 p-4"
                          style={{ width: "300px" }}
                        >
                          <div className="pb-4">
                            <Link to="#" className="media align-items-center">
                              <img
                                src={shop1}
                                className="shadow rounded"
                                style={{ maxWidth: "64px" }}
                                alt=""
                              />
                              <div className="media-body text-left ml-3">
                                <h6 className="text-dark mb-0">T-shirt (M)</h6>
                                <p className="text-muted mb-0">$320 X 2</p>
                              </div>
                              <h6 className="text-dark mb-0">$640</h6>
                            </Link>

                            <Link
                              to="#"
                              className="media align-items-center mt-4"
                            >
                              <img
                                src={shop2}
                                className="shadow rounded"
                                alt=""
                                style={{ maxWidth: "64px" }}
                              />
                              <div className="media-body text-left ml-3">
                                <h6 className="text-dark mb-0">Bag</h6>
                                <p className="text-muted mb-0">$50 X 5</p>
                              </div>
                              <h6 className="text-dark mb-0">$250</h6>
                            </Link>

                            <Link
                              to="#"
                              className="media align-items-center mt-4"
                            >
                              <img
                                src={shop3}
                                className="shadow rounded"
                                style={{ maxWidth: "64px" }}
                                alt=""
                              />
                              <div className="media-body text-left ml-3">
                                <h6 className="text-dark mb-0">Watch (Men)</h6>
                                <p className="text-muted mb-0">$800 X 1</p>
                              </div>
                              <h6 className="text-dark mb-0">$800</h6>
                            </Link>
                          </div>

                          <div className="media align-items-center justify-content-between pt-4 border-top">
                            <h6 className="text-dark mb-0">Total($):</h6>
                            <h6 className="text-dark mb-0">$1690</h6>
                          </div>

                          <div className="mt-3 text-center">
                            <Link to="#" className="btn btn-primary mr-2">
                              View Cart
                            </Link>
                            <Link to="#" className="btn btn-primary">
                              Checkout
                            </Link>
                          </div>
                          <p className="text-muted text-left mt-1 mb-0">
                            *T&C Apply
                          </p>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item mb-0 pr-1">
                      <Link
                        to="#"
                        className="btn btn-icon btn-soft-primary"
                        onClick={this.toggleWishlistModal}
                      >
                        <i className="uil uil-heart align-middle icons"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Dropdown
                        color="primary"
                        isOpen={this.state.dropdownIsOpen}
                        toggle={this.toggleDropdownIsOpen}
                      >
                        <DropdownToggle
                          type="button"
                          // color="primary"
                          className="btn btn-icon btn-soft-primary"
                        >
                          <i className="uil uil-user align-middle icons"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          direction="left"
                          className="dd-menu bg-white shadow rounded border-0 mt-3 py-3"
                          style={{ width: "200px" }}
                        >
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-user align-middle mr-1"></i>{" "}
                            Account
                          </Link>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-clipboard-notes align-middle mr-1"></i>{" "}
                            Order History
                          </Link>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-arrow-circle-down align-middle mr-1"></i>{" "}
                            Download
                          </Link>
                          <div className="dropdown-divider my-3 border-top"></div>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-sign-out-alt align-middle mr-1"></i>{" "}
                            Logout
                          </Link>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                  </ul>
                );
              } else if (
                this.props.location.pathname === "/shop-grids" ||
                this.props.location.pathname === "/shop-lists"
              ) {
                return (
                  <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0">
                      <Dropdown
                        isOpen={this.state.dropdownOpen}
                        toggle={this.toggleDropdown}
                      >
                        <DropdownToggle
                          direction="right"
                          color="none"
                          type="button"
                          className="btn btn-link text-decoration-none p-0 pr-2"
                        >
                          <i className="mdi mdi-magnify h4 text-muted"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          right
                          className="dd-menu bg-white shadow rounded border-0 mt-3 py-0"
                          style={{ width: "300px" }}
                        >
                          <Form>
                            <input
                              type="text"
                              id="text"
                              name="name"
                              className="form-control border bg-white"
                              placeholder="Search..."
                            />
                          </Form>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item mb-0 pr-1">
                      <Dropdown
                        isOpen={this.state.dropdownOpenShop}
                        toggle={this.toggleDropdownShop}
                      >
                        <DropdownToggle
                          type="button"
                          className="btn btn-icon btn-soft-primary "
                        >
                          <i className="uil uil-shopping-cart align-middle icons"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          direction="left"
                          className="dd-menu bg-white shadow rounded border-0 mt-3 p-4"
                          style={{ width: "300px" }}
                        >
                          <div className="pb-4">
                            <Link to="#" className="media align-items-center">
                              <img
                                src={shop1}
                                className="shadow rounded"
                                style={{ maxWidth: "64px" }}
                                alt=""
                              />
                              <div className="media-body text-left ml-3">
                                <h6 className="text-dark mb-0">T-shirt (M)</h6>
                                <p className="text-muted mb-0">$320 X 2</p>
                              </div>
                              <h6 className="text-dark mb-0">$640</h6>
                            </Link>

                            <Link
                              to="#"
                              className="media align-items-center mt-4"
                            >
                              <img
                                src={shop2}
                                className="shadow rounded"
                                alt=""
                                style={{ maxWidth: "64px" }}
                              />
                              <div className="media-body text-left ml-3">
                                <h6 className="text-dark mb-0">Bag</h6>
                                <p className="text-muted mb-0">$50 X 5</p>
                              </div>
                              <h6 className="text-dark mb-0">$250</h6>
                            </Link>

                            <Link
                              to="#"
                              className="media align-items-center mt-4"
                            >
                              <img
                                src={shop3}
                                className="shadow rounded"
                                style={{ maxWidth: "64px" }}
                                alt=""
                              />
                              <div className="media-body text-left ml-3">
                                <h6 className="text-dark mb-0">Watch (Men)</h6>
                                <p className="text-muted mb-0">$800 X 1</p>
                              </div>
                              <h6 className="text-dark mb-0">$800</h6>
                            </Link>
                          </div>

                          <div className="media align-items-center justify-content-between pt-4 border-top">
                            <h6 className="text-dark mb-0">Total($):</h6>
                            <h6 className="text-dark mb-0">$1690</h6>
                          </div>

                          <div className="mt-3 text-center">
                            <Link to="#" className="btn btn-primary mr-2">
                              View Cart
                            </Link>
                            <Link to="#" className="btn btn-primary">
                              Checkout
                            </Link>
                          </div>
                          <p className="text-muted text-left mt-1 mb-0">
                            *T&C Apply
                          </p>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                    <li className="list-inline-item mb-0 pr-1">
                      <Link
                        to="#"
                        className="btn btn-icon btn-soft-primary"
                        onClick={this.toggleWishlistModal}
                      >
                        <i className="uil uil-heart align-middle icons"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item mb-0">
                      <Dropdown
                        color="primary"
                        isOpen={this.state.dropdownIsOpen}
                        toggle={this.toggleDropdownIsOpen}
                      >
                        <DropdownToggle
                          type="button"
                          className="btn btn-icon btn-soft-primary"
                        >
                          <i className="uil uil-user align-middle icons"></i>
                        </DropdownToggle>
                        <DropdownMenu
                          direction="left"
                          className="dd-menu bg-white shadow rounded border-0 mt-3 py-3"
                          style={{ width: "200px" }}
                        >
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-user align-middle mr-1"></i>{" "}
                            Account
                          </Link>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-clipboard-notes align-middle mr-1"></i>{" "}
                            Order History
                          </Link>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-arrow-circle-down align-middle mr-1"></i>{" "}
                            Download
                          </Link>
                          <div className="dropdown-divider my-3 border-top"></div>
                          <Link className="dropdown-item text-dark" to="#">
                            <i className="uil uil-sign-out-alt align-middle mr-1"></i>{" "}
                            Logout
                          </Link>
                        </DropdownMenu>
                      </Dropdown>
                    </li>
                  </ul>
                );
              } else if (this.props.location.pathname === "/index-seo-agency") {
                return (
                  <div className="buy-button">
                    <Link
                      to="//1.envato.market/Landrickreactjs"
                      target="_blank"
                      className="btn btn-pills btn-primary"
                    >
                      Buy Now
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div className="buy-button">
                    <Link
                      to="//1.envato.market/Landrickreactjs"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="buyButton"
                      className="btn btn-primary"
                    >
                      Buy Now
                    </Link>
                  </div>
                );
              }
            })()}

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

            <div
              id="navigation"
              style={{ display: this.state.isOpen ? "block" : "none" }}
            >
              <ul className="navigation-menu" id="top-menu">
                {this.state.navLinks.map((navLink, key) =>
                  navLink.child ? (
                    <li className="has-submenu" key={key}>
                      {/* child item(menu Item) - Level 1 */}
                      <Link
                        to={navLink.link}
                        onClick={(event) => {
                          event.preventDefault();
                          this.openBlock(navLink.id);
                        }}
                      >
                        {navLink.title}
                      </Link>
                      {/* <i className="mdi mdi-chevron-right mr-1"></i> */}
                      <span className="menu-arrow"></span>
                      {navLink.isMegaMenu ? (
                        // if menu is mega menu(2 columns grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu
                              ? "submenu megamenu open"
                              : "submenu megamenu"
                          }
                        >
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 18 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isNew ? (
                                        <span className="badge badge-danger rounded ml-2">
                                          new
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id < 33 && item.id > 17 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isNew ? (
                                        <span className="badge badge-danger rounded ml-2">
                                          new
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                          <li>
                            <ul>
                              {navLink.child.map((item, childKey) =>
                                item.id > 32 ? (
                                  <li key={childKey}>
                                    <Link to={item.link}>
                                      {item.title}
                                      {item.isOnePage ? (
                                        <span className="badge badge-warning rounded ml-2">
                                          Onepage
                                        </span>
                                      ) : null}
                                      {item.isupdatePage ? (
                                        <span className="badge badge-pill badge-info">
                                          Updated
                                        </span>
                                      ) : null}
                                    </Link>
                                  </li>
                                ) : null
                              )}
                            </ul>
                          </li>
                        </ul>
                      ) : (
                        // if menu is not mega menu(1grid)
                        <ul
                          className={
                            navLink.isOpenSubMenu ? "submenu open" : "submenu"
                          }
                        >
                          {navLink.child.map((childArray, childKey) =>
                            childArray.nestedChild ? (
                              // sub menu item - Level 2
                              <li className="has-submenu" key={childKey}>
                                <Link
                                  to={childArray.link}
                                  onClick={(event) => {
                                    event.preventDefault();
                                    this.openNestedBlock(
                                      navLink.id,
                                      childArray.id
                                    );
                                  }}
                                >
                                  {childArray.title}{" "}
                                  {childArray.isNew ? (
                                    <span className="badge badge-pill badge-success">
                                      Added
                                    </span>
                                  ) : null}
                                </Link>
                                <span className="submenu-arrow"></span>
                                <ul
                                  className={
                                    childArray.isOpenNestedSubMenu
                                      ? "submenu open"
                                      : "submenu"
                                  }
                                >
                                  {childArray.nestedChild.map(
                                    (nestedChildArray, nestedKey) => (
                                      // nested sub menu item - Level 3
                                      <li key={nestedKey}>
                                        <Link to={nestedChildArray.link}>
                                          {nestedChildArray.title}{" "}
                                          {nestedChildArray.isNewPage ? (
                                            <span className="badge badge-danger rounded">
                                              NEW
                                            </span>
                                          ) : null}
                                          {nestedChildArray.isupdatePage ? (
                                            <span className="badge badge-pill badge-info">
                                              Updated
                                            </span>
                                          ) : null}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </li>
                            ) : (
                              <li key={childKey}>
                                <Link to={childArray.link}>
                                  {childArray.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  ) : (
                    <li key={key}>
                      <Link to={navLink.link}>{navLink.title}</Link>
                    </li>
                  )
                )}
              </ul>
              <div className="buy-menu-btn d-none">
                <Link
                  to="https://1.envato.market/Landrickreactjs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </Container>
        </header>

        <Modal
          isOpen={this.state.wishlistModal}
          tabIndex="-1"
          centered
          contentClassName="rounded shadow-lg border-0 overflow-hidden"
          toggle={this.toggleWishlistModal}
        >
          <ModalBody className="py-5">
            <div className="text-center">
              <div
                className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                style={{ height: "95px", width: "95px" }}
              >
                <h1 className="mb-0">
                  <i className="uil uil-heart-break align-middle"></i>
                </h1>
              </div>
              <div className="mt-4">
                <h4>Your wishlist is empty.</h4>
                <p className="text-muted">
                  Create your first wishlist request...
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-outline-primary">
                    + Create new wishlist
                  </Link>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withRouter(Topbar);
