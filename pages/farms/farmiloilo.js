import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../../components/page";
import Layout from "../../components/layout";
import fetch from "isomorphic-fetch";
import Link from 'next/link'
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import dynamic from 'next/dynamic';
import { Carousel } from 'react-responsive-carousel';
import { NextAuth } from "next-auth/client";
import Cookies from "universal-cookie";

  const DynamicComponentWithNoSSR = dynamic(() => import('../../components/farmMaps/Map'), {
    ssr: false
  });


export default class extends Page {

  static async getInitialProps({ req }) {
    let props = await super.getInitialProps({ req });
    props.linkedAccounts = await NextAuth.linked({ req });
    return props;
  }

  constructor(props) {
    super(props);
    this.state = {
      session: props.session,
      isSignedIn: props.session.user ? true : false,
      name: "",
      balance: "",
      email: "",
      mobile: "",
      bank: "",
      emailVerified: false,
      alertText: null,
      alertStyle: null
    };
    if (props.session.user) {
      this.state.name = props.session.user.name;
      this.state.balance = props.session.user.balance;
      this.state.email = props.session.user.email;
      this.state.mobile = props.session.user.mobile;
      this.state.bank = props.session.user.bank;
    }
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const session = await NextAuth.init({ force: true });
    this.setState({
      session: session,
      isSignedIn: session.user ? true : false
    });

    // If the user bounces off to link/unlink their account we want them to
    // land back here after signing in with the other service / unlinking.
    const cookies = new Cookies();
    cookies.set("redirect_url", window.location.pathname, { path: "/" });

    this.getProfile();
  }

  getProfile() {
    fetch("/account/user", {
      credentials: "include"
    })
      .then(r => r.json())
      .then(user => {
        if (!user.name || !user.email) return;
        this.setState({
          name: user.name,
          balance: user.balance,
          email: user.email,
          bank: user.bank,
          mobile: user.mobile,
          emailVerified: user.emailVerified
        });
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async onSubmit(e) {
    // Submits the URL encoded form without causing a page reload
    e.preventDefault();

    this.setState({
      alertText: null,
      alertStyle: null
    });

    const formData = {
      _csrf: await NextAuth.csrfToken(),
      name: this.state.name || "",
      balance: this.state.balance || "",
      email: this.state.email || "",
      mobile: this.state.mobile || "",
      bank: this.state.bank || ""
    };

    // URL encode form
    // Note: This uses a x-www-form-urlencoded rather than sending JSON so that
    // the form also in browsers without JavaScript
    const encodedForm = Object.keys(formData)
      .map(key => {
        return (
          encodeURIComponent(key) + "=" + encodeURIComponent(formData[key])
        );
      })
      .join("&");

    fetch("/account/user", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encodedForm
    }).then(async res => {
      if (res.status === 200) {
        this.getProfile();
        this.setState({
          alertText: "Changes to your profile have been saved",
          alertStyle: "alert-success"
        });
        // Force update session so that changes to name or email are reflected
        // immediately in the navbar (as we pass our session to it).
        this.setState({
          session: await NextAuth.init({ force: true }) // Update session data
        });
      } else {
        this.setState({
          session: await NextAuth.init({ force: true }), // Update session data
          alertText: "Failed to save changes to your profile",
          alertStyle: "alert-danger"
        });
      }
    });
  }

  render() {
    if (this.state.isSignedIn === true) {
      const alert =
        this.state.alertText === null ? (
          <div />
        ) : (
          <div className={`alert ${this.state.alertStyle}`} role="alert">
            {this.state.alertText}
          </div>
        );
    return (
      <Layout {...this.props}>
        <h1 className="display-2">iloilo farm</h1>
        <Row>
         <Col xs="12" md="5" lg="4">
            <p className="lead">Farm Owner: Joe</p>
            <p className="lead">Farm Location: Iloilo, Philippines</p>
            <p className="lead">Types of Crops Grown: Sugarcane, Barley, Sweet potato</p> 
            <p></p>
         </Col>
         <Col xs="12" md="6" lg="7"> {/*increase lg="5" to show 2 farms per row*/}
            <DynamicComponentWithNoSSR />
         </Col>
         <h3 className="display-3" style={{margin:"0px 10px"}}> Farm Pictures</h3>
          <Col xs="12" md="8" lg="10"> {/*increase lg="5" to show 2 farms per row*/}
              <Carousel autoPlay interval={5000} infiniteLoop>
                <div>
                    <img src="../static/testimonials/farm_4.jpg" />
                    <p className="legend">Farm Picture May 2018</p>
                </div>
                <div>
                    <img src="../static/testimonials/farm_3.jpg" />
                    <p className="legend">Farm Picture November 2018</p>
                </div>
                <div>
                    <img src="../static/testimonials/farm_1.jpg" />
                    <p className="legend">Farm Picture January 2019</p>
                </div>
              </Carousel>
          </Col>
          <Col xs="12" md="8" lg="10">
          <h1>Invest Amount: </h1>
            <Form
                  method="post"
                  action="/account/user"
                  onSubmit={this.onSubmit}
                >
              <FormGroup row>
                <Label sm={2}>Balance:</Label>
                <Col sm={10} md={8}>
                  <Input
                      type="number"
                      name="balance"
                      value={this.state.balance}
                      onChange={this.handleChange}
                  />
                  </Col>
              </FormGroup>

              <FormGroup row>
                  <Col sm={12} md={10}>
                    <p className="text-right">
                      <Button color="primary" type="submit">
                        Save Changes
                      </Button>
                    </p>
                  </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Layout>
    );
    }
  }
}

export class LinkAccounts extends React.Component {
  render() {
    return (
      <React.Fragment>
        {Object.keys(this.props.linkedAccounts).map((provider, i) => {
          return (
            <LinkAccount
              key={i}
              provider={provider}
              session={this.props.session}
              linked={this.props.linkedAccounts[provider]}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export class LinkAccount extends React.Component {
  render() {
    if (this.props.linked === true) {
      return (
        <form
          method="post"
          action={`/auth/oauth/${this.props.provider.toLowerCase()}/unlink`}
        >
          <input
            name="_csrf"
            type="hidden"
            value={this.props.session.csrfToken}
          />
          <p>
            <button className="btn btn-block btn-outline-danger" type="submit">
              Unlink from {this.props.provider}
            </button>
          </p>
        </form>
      );
    } else {
      return (
        <p>
          <a
            className="btn btn-block btn-outline-primary"
            href={`/auth/oauth/${this.props.provider.toLowerCase()}`}
          >
            Link with {this.props.provider}
          </a>
        </p>
      );
    }
  }
}
