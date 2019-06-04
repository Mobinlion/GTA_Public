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
                <span className="mr-3 icon ion-md-leaf" />
                <br className="v-block d-sm-none" />
                Green Thumb
              </span>
              <br className="v-block d-lg-none" /> Agriculture
            </h1>
            {/*<p className="lead mb-5">A new era of Farming and Organic food</p>*/}
            <p className="lead mb-5">A New Era of Farming</p>
            <p className="text-right">
              <Link prefetch href="/farms">
                <a href="/farms" className="btn btn-outline-light btn-lg">
                  <span className="icon ion-md-leaf mr-2" />
                  Our Farms
                </a>
              </Link>
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
              <h1 className="icon ion-md-heart text-danger text-center" />
              <h3 className="text-center mb-4">Contribute</h3>
              <ListGroup>
                <ListGroupItem>
                  By contributing certain amount to our cause, we will be able
                  to finance our farmers production cost.
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col xs="12" sm="4" className="pt-5">
              <h1 className="icon ion-logo-usd text-primary text-center" />
              <h3 className="text-center mb-4">Be Rewarded</h3>
              <ListGroup>
                <ListGroupItem>
                  Take a risk in farming industry and be rewarded. Reap your
                  reward for every successful project in a cycle.
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <h2 className="text-center display-4 mt-2 mb-5">How Does It Work?</h2>
        <h2>Investment</h2>
        <p>
          GreenThumb uses the concept of crowdfunding in assisting our farmers.
          How to participate?{" "}
        </p>
        <p>
          In every season GreenThumb will open a number of new farms, of which
          the nature will depend on the the marketability of the products, and
          the proficiency of the farmers enrolled. These farms will then be open
          to be funded by the investors for a period of two months, before then
          investment window closes. Within this window of two months, investors
          are free to choose a specific or a range of products to invest in. The
          farms that received enough funding to reach the "softcap" or the
          "hardcap" will kicked off according to the execution plan after the
          two months period.
        </p>
        <p>
          GTAers who have invested in the farms will receive reward only after
          the crops have been harvested and sold. Each community member must
          also acknowledge the risks involved in farming, as returns on
          investment are not guaranteed and may vary. In the cases of extreme
          losses suffered from an unforeseen event such as super typhoon that
          destroys the crop, , it is anticipated that investors will not be able
          to receive their returns immediately after the projected growth
          season. GTA will protect the interest of our investors by replaceing
          the seeds and replanting the crops with NO ADDITIONAL cost.
        </p>

        <h2>The Future</h2>
        <p>
          We at GreenThumb believe that there is a bright future in farming. We
          aim to change the misconception of people about it by encouraging them
          to go back to farming. We will continue to inspire them by innovating
          it and by bringing GreenThumb closer to your home and within the reach
          of your hands.{" "}
        </p>
        <p>
          We want to promote farming and introduce it to younger generation, so
          that they will know the importance of this massive yet unappreciated
          and underestimated industry.{" "}
        </p>
        <p>
          GreenThumb wants to provide good quality and marketable products
          throughout the country.{" "}
        </p>
        <p>
          By supporting our team and our products, by joining us, you will be
          able to help our farmers secure a brighter future for themselves and
          for their families.{" "}
        </p>
        <p>And the top of it, you will be rewarded! </p>
        <p>
          Join us! Be part of our growing family. Let us help our farmers, let
          us help alleviate poverty among them.{" "}
        </p>
        <p>
          Because here on GreenThumb, we take pride on giving the best service
          and quality agricultural products in the region.{" "}
        </p>
        <p>So Help! Contribute! And Be Rewarded! </p>
        <p>
          There is a future in farming and the future is now in your hands.{" "}
        </p>
        <p>Make a choice! Be a GreenThumber!</p>
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
