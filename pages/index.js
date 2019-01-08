import Link from "next/link";
import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Jumbotron,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} navmenu={false} container={false}>
        <Jumbotron
          className="text-light rounded-0"
          style={{
            backgroundColor: "rgba(92,184,92,1)",
            background:
              "radial-gradient(ellipse at center, rgba(92,184,92,1) 0%, rgba(92,184,92,1) 100%)",
            boxShadow: "inset 0 0 100px rgba(0,0,0,0.1)"
          }}
        >
          <Container className="mt-2 mb-2">
            <h1 className="display-2 mb-3" style={{ fontWeight: 300 }}>
              <span style={{ fontWeight: 600 }}>
                <span className="mr-3">▲</span>
                <br className="v-block d-sm-none" />
                Green Thumb
              </span>
              <br className="v-block d-lg-none" /> Agriculture
            </h1>
            <p className="lead mb-5">A new era of Farming and Organic food</p>
            <p className="text-right">
              <a href="/" className="btn btn-outline-light btn-lg">
                <span className="icon ion-md-leaf mr-2" />
                Farms
              </a>
            </p>
            <style jsx>{`
              .display-2 {
                text-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
                color: rgba(255, 255, 255, 0.9);
              }
              .lead {
                font-size: 3em;
                opacity: 0.7;
              }
              @media (max-width: 767px) {
                .display-2 {
                  font-size: 3em;
                  margin-bottom: 1em;
                }
                .lead {
                  font-size: 1.5em;
                }
              }
            `}</style>
          </Container>
        </Jumbotron>
        <Container>
          <p className="text-muted small">Farming Opportunity Awaits You!</p>
          <h2 className="text-center display-4 mt-5 mb-2">Features</h2>
          <Row className="pb-5">
            <Col xs="12" sm="4" className="pt-5">
              <h1 className="icon ion-md-leaf text-success text-center" />
              <h3 className="text-center mb-4">Help Farms</h3>
              <ListGroup>
                <ListGroupItem>
                  Let us help our local farmers. Reach out to them! Support our
                  project! Let us give importance to farming.
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" sm="4" className="pt-5">
              <h1 className="icon ion-logo-usd text-primary text-center" />
              <h3 className="text-center mb-4">Contribute</h3>
              <ListGroup>
                <ListGroupItem>
                  By contributing certain amount to our cause, we will be able
                  to finance our farmers production cost.
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" sm="4" className="pt-5">
              <h1 className="icon ion-md-heart text-danger text-center" />
              <h3 className="text-center mb-4">Be Rewarder</h3>
              <ListGroup>
                <ListGroupItem>
                  Take a risk in farming industry and be rewarded. Reap your
                  reward for every successful project in a cycle.
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <h2 className="text-center display-4 mt-2 mb-5">Getting Started</h2>
          <h2>Our Mission</h2>
          <p>
            It is the mission of GreenThumb to re-introduce farming to everyone
            by providing them with a virtual world to experience "real-life"
            farming. GreenThumb encourages and develops entrepreneurs and
            farmers to produce healthy, quality and organic crops and livestock.
            In achieving this mission, partnership between farmers, venture
            capitalists and entrepreneurs and linkages with the experts in the
            field will be established.{" "}
          </p>
          <h2>Our Vision</h2>
          <p>
            It is the Vision of GreenThumb to maintain close working
            relationship between the farmers and the partners in order to
            produce excellent quality of organic crops and livestock's.
            Innovation will constantly and consistently be made and the latest
            farming technologies will be utilized at all times. Trainings and
            seminars will be made available to farmers and they will be
            frequently and closely supervised and monitored by a team of
            experts. It is also our Vision to create a sustainable community for
            both entrepreneurs and farmers who joined hands here on GreenThumb!
          </p>
        </Container>
      </Layout>
    );
  }
}
