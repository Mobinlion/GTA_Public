import React from "react";
import Router from "next/router";
import Head from "next/head";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  Button,
  Form,
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import {
  FacebookIcon,
  TwitterIcon,
} from 'react-share';
import Signin from "./signin";
import { NextAuth } from "next-auth/client";
import Cookies from "universal-cookie";
import Package from "../package";
import Styles from "../css/index.scss";

export default class extends React.Component {
  static propTypes() {
    return {
      session: React.PropTypes.object.isRequired,
      providers: React.PropTypes.object.isRequired,
      children: React.PropTypes.object.isRequired,
      fluid: React.PropTypes.boolean,
      navmenu: React.PropTypes.boolean,
      signinBtn: React.PropTypes.boolean
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      navOpen: false,
      modal: false,
      providers: null
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  async toggleModal(e) {
    if (e) e.preventDefault();

    // Save current URL so user is redirected back here after signing in
    if (this.state.modal !== true) {
      const cookies = new Cookies();
      cookies.set("redirect_url", window.location.pathname, { path: "/" });
    }

    this.setState({
      providers: this.state.providers || (await NextAuth.providers()),
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <React.Fragment>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title || "Green Thumb Agriculture"}</title>
          <style dangerouslySetInnerHTML={{ __html: Styles }} />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Head>
        <Navbar light className="navbar navbar-expand-md pt-3 pb-3">
          <Link prefetch href="/">
            <NavbarBrand href="/" style={{ color: "green" }}>
              <img src="/static/logo_resized.png" height="50" /> {Package.name}
            </NavbarBrand>
          </Link>
          <input
            className="nojs-navbar-check"
            id="nojs-navbar-check"
            type="checkbox"
            aria-label="Menu"
          />
          <label
            tabIndex="1"
            htmlFor="nojs-navbar-check"
            className="nojs-navbar-label mt-2"
          />
          <div className="nojs-navbar">
            <Nav navbar>
              <NavItem>
                <Link prefetch href="/about">
                  <a href="/about" className="nav-link">
                    About
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link prefetch href="/farms">
                  <a href="/farms" className="nav-link">
                    Farms
                  </a>
                </Link>
              </NavItem>
              {/*<NavItem>
                <Link prefetch href="/invest">
                  <a href="/invest" className="nav-link">
                    Invest
                  </a>
                </Link>
              </NavItem> */}
              <NavItem>
                <Link prefetch href="/contact">
                  <a href="/contact" className="nav-link">
                    Contact
                  </a>
                </Link>
              </NavItem>
              <NavItem>
                <Link prefetch href="/faq">
                  <a href="/faq" className="nav-link">
                    FAQ
                  </a>
                </Link>
              </NavItem>
              <div tabIndex="1" className="dropdown nojs-dropdown">
                <div className="nav-item">
                  <span className="dropdown-toggle nav-link">Countries</span>
                </div>
                <div className="dropdown-menu">
                  <Link prefetch href="/countries/china">
                    <a href="/countries/china" className="dropdown-item">
                      China
                    </a>
                  </Link>
                  <Link prefetch href="/countries/philippines">
                    <a href="/countries/philippines" className="dropdown-item">
                      Philippines
                    </a>
                  </Link>
                  <Link prefetch href="/countries/uzbekistan">
                    <a href="/countries/uzbekistan" className="dropdown-item">
                      Uzbekistan
                    </a>
                  </Link>
                  <Link prefetch href="/countries/russia">
                    <a href="/countries/russia" className="dropdown-item">
                      Russia
                    </a>
                  </Link>
                  <Link prefetch href="/countries/england">
                    <a href="/countries/england" className="dropdown-item">
                      United Kingdom
                    </a>
                  </Link>
                </div>
              </div>
                <a href="#" style={{margin:"5px 20px"}}>
                  <FacebookIcon size={24} round={false} /> 
                </a>
                <a href="#" style={{margin:"5px 20px"}}>
                  <TwitterIcon size={26} round={true} />
                </a>

            </Nav>
            <UserMenu
              session={this.props.session}
              toggleModal={this.toggleModal}
              signinBtn={this.props.signinBtn}
            />
          </div>
        </Navbar>
        <MainBody
          navmenu={this.props.navmenu}
          fluid={this.props.fluid}
          container={this.props.container}
        >
          {this.props.children}
        </MainBody>
        <Container fluid={this.props.fluid}>
          <hr className="mt-3" />
          <p className="text-muted small">
            Copyright &copy; 2017 - {new Date().getFullYear()} Green Thumb
            Agriculture, Inc. All Rights Reserved.
          </p>
        </Container>
        <SigninModal
          modal={this.state.modal}
          toggleModal={this.toggleModal}
          session={this.props.session}
          providers={this.state.providers}
        />
      </React.Fragment>
    );
  }
}

export class MainBody extends React.Component {
  render() {
    if (this.props.container === false) {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    } else if (this.props.navmenu === false) {
      return (
        <Container fluid={this.props.fluid} style={{ marginTop: "1em" }}>
          {this.props.children}
        </Container>
      );
    } else {
      return (
        <Container fluid={this.props.fluid} style={{ marginTop: "1em" }}>
          <Row>
            <Col xs="12" md="9" lg="10">
              {this.props.children}
            </Col>
           {/* <Col xs="12" md="3" lg="2" style={{ paddingTop: "1em" }}>
              <h5 className="text-muted text-uppercase">Countries</h5>
              <ListGroup>
                <ListGroupItem>
                  <Link prefetch href="/countries/china">
                    <a href="/countries/china" className="d-block">
                      China
                    </a>
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link prefetch href="/countries/philippines">
                    <a href="/countries/philippines" className="d-block">
                      Philippines
                    </a>
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link prefetch href="/countries/uzbekistan">
                    <a href="/countries/uzbekistan" className="d-block">
                      Uzbekistan
                    </a>
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link prefetch href="/countries/russia">
                    <a href="/countries/russia" className="d-block">
                      Russia
                    </a>
                  </Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link prefetch href="/countries/england">
                    <a href="/countries/england" className="d-block">
                      United Kingdom
                    </a>
                  </Link>
                </ListGroupItem>
              </ListGroup>
            </Col>*/}
          </Row>
        </Container>
      );
    }
  }
}

export class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignoutSubmit = this.handleSignoutSubmit.bind(this);
  }

  async handleSignoutSubmit(event) {
    event.preventDefault();

    // Save current URL so user is redirected back here after signing out
    const cookies = new Cookies();
    cookies.set("redirect_url", window.location.pathname, { path: "/" });

    await NextAuth.signout();
    Router.push("/");
  }

  render() {
    if (this.props.session && this.props.session.user) {
      // If signed in display user dropdown menu
      const session = this.props.session;
      return (
        <Nav className="ml-auto" navbar>
          {/*<!-- Uses .nojs-dropdown CSS to for a dropdown that works without client side JavaScript ->*/}
          <div tabIndex="2" className="dropdown nojs-dropdown">
            <div className="nav-item">
              <span className="dropdown-toggle nav-link d-none d-md-block">
                <span
                  className="icon ion-md-contact"
                  style={{
                    fontSize: "2em",
                    position: "absolute",
                    top: -5,
                    left: -25
                  }}
                />
              </span>
              <span className="dropdown-toggle nav-link d-block d-md-none">
                <span className="icon ion-md-contact mr-2" />
                {session.user.name || session.user.email}
              </span>
            </div>
            <div className="dropdown-menu">
              <Link prefetch href="/account">
                <a href="/account" className="dropdown-item">
                  <span className="icon ion-md-person mr-1" /> Your Account
                </a>
              </Link>
              <AdminMenuItem {...this.props} />
              <div className="dropdown-divider d-none d-md-block" />
              <div className="dropdown-item p-0">
                <Form
                  id="signout"
                  method="post"
                  action="/auth/signout"
                  onSubmit={this.handleSignoutSubmit}
                >
                  <input
                    name="_csrf"
                    type="hidden"
                    value={this.props.session.csrfToken}
                  />
                  <Button
                    type="submit"
                    block
                    className="pl-4 rounded-0 text-left dropdown-item"
                  >
                    <span className="icon ion-md-log-out mr-1" /> Sign out
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Nav>
      );
    }
    if (this.props.signinBtn === false) {
      // If not signed in, don't display sign in button if disabled
      return null;
    } else {
      // If not signed in, display sign in button
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            {/**
             * @TODO Add support for passing current URL path as redirect URL
             * so that users without JavaScript are also redirected to the page
             * they were on before they signed in.
             **/}
            <a
              href="/auth?redirect=/"
              className="btn btn-outline-primary"
              onClick={this.props.toggleModal}
            >
             {/* <span className="icon ion-md-log-in mr-1" /> Sign up / Sign in */}
             <span className="icon ion-md-log-in mr-1" /> Account
            </a>
          </NavItem>
        </Nav>
      );
    }
  }
}

export class AdminMenuItem extends React.Component {
  render() {
    if (this.props.session.user && this.props.session.user.admin === true) {
      return (
        <React.Fragment>
          <Link prefetch href="/admin">
            <a href="/admin" className="dropdown-item">
              <span className="icon ion-md-settings mr-1" /> Admin
            </a>
          </Link>
        </React.Fragment>
      );
    } else {
      return <div />;
    }
  }
}

export class SigninModal extends React.Component {
  render() {
    if (this.props.providers === null) return null;

    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggleModal}
        style={{ maxWidth: 700 }}
      >
         <ModalHeader>Sign up / Sign in</ModalHeader> 
        {/*<ModalHeader>Account</ModalHeader>*/}
        <ModalBody style={{ padding: "1em 2em" }}>
          <Signin
            session={this.props.session}
            providers={this.props.providers}
          />
        </ModalBody>
      </Modal>
    );
  }
}
