/* global window */
import React from "react";
import { Row, Col } from "reactstrap";
import Page from "../../components/page";
import Layout from "../../components/layout";
import AsyncData from "../../components/async-data";

export default class extends Page {
  /* eslint no-undefined: "error" */
  static async getInitialProps({ req }) {
    // Inherit standard props from the Page (i.e. with session data)
    let props = await super.getInitialProps({ req });

    // If running on server, perform Async call
    if (typeof window === "undefined") {
      try {
        props.posts = await AsyncData.getData();
      } catch (e) {
        props.error = "Unable to fetch AsyncData on server";
      }
    }

    return props;
  }

  // Set posts on page load (only if prop is populated, i.e. running on server)
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts || null,
      error: props.error || null
    };
  }

  // This is called after rendering, only on the client (not the server)
  // This allows us to render the page on the client without delaying rendering,
  // then load the data fetched via an async call in when we have it.
  async componentDidMount() {
    // Only render posts client side if they are not populate (if the page was
    // rendered on the server, the state will be inherited from the server
    // render by the client)
    if (this.state.posts === null) {
      try {
        this.setState({
          posts: await AsyncData.getData(),
          error: null
        });
      } catch (e) {
        this.setState({
          error: "Unable to fetch AsyncData on client"
        });
      }
    }
  }

  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">Philippines</h1>
        <p>
          Agriculture in the Philippines employs 27.7% of the Filipino workforce
          as of 2017, according to the World Bank
        </p>
        <Row>
          <Col xs="12" md="6">
            <h3>Rice</h3>
            <p>
              The Philippines is the 8th largest rice producer in the world,
              accounting for 2.8% of global rice production.[2] The Philippines
              was also the world's largest rice importer in 2010.[3] In 2010,
              nearly 15.7 million metric tons of palay (pre-husked rice) were
              produced.[4] In 2010, palay accounted for 21.86% percent of gross
              value added in agriculture and 2.37% of GNP.[5] Self-sufficiency
              in rice reached 88.93% in 2015.[6] Rice production in the
              Philippines has grown significantly since the 1950s. Improved
              varieties of rice developed during the Green Revolution, including
              at the International Rice Research Institute based in the
              Philippines have improved crop yields. Crop yields have also
              improved due to increased use of fertilisers. Average productivity
              increased from 1.23 metric tons per hectare in 1961 to 3.59 metric
              tons per hectare in 2009.[2] Harvest Yields have increased
              significantly by using foliar fertilizer (Rc 62 -> 27% increase,
              Rc 80 -> 40% increase, Rc 64 -> 86% increase) based on PhilRice
              National Averages. The table below shows some of the agricultural
              products of the country per region.[7]
            </p>
          </Col>
          <Col xs="12" md="6">
            <h3>Sugar</h3>
            <p>
              There are at least 19 provinces and 11 regions that produce
              sugarcane in the Philippines. A range from 360,000 to 390,000
              hectares are devoted to sugarcane production. The largest
              sugarcane areas are found in the Negros Island Region, which
              accounts for 51% of sugarcane areas planted. This is followed by
              Mindanao which accounts for 20%; Luzon by 17%; Panay by 07%; and
              Eastern Visayas by 04%.[8][8] It is estimated that as of 2012, the
              industry provides direct employment to 700,000 sugarcane workers
              spread across 19 sugar producing provinces.[9] Sugar growing in
              the Philippines pre-dates colonial Spanish contact.[10] Sugar
              became the most important agricultural export of the Philippines
              between the late eighteenth century and the mid-1970s.[10] During
              the 1950s and 60s, more than 20 percent income of Philippine
              exports came from the sugar industry.[10] Between 1913 and 1974,
              the Philippines sugar industry enjoyed favoured terms of trade
              with the US, with special access to the protected and subsidized
              the American sugar market.
            </p>
          </Col>
        </Row>
        <p>
          And many others, including: Coconuts, Abaca, Fruits, Corn, Rubber and
          so on...
        </p>
      </Layout>
    );
  }
}

export class RenderPosts extends React.Component {
  render() {
    if (this.props.error) {
      // Display error if posts have failed to load
      return (
        <p>
          <span className="font-weight-bold">Error loading posts:</span>{" "}
          {this.props.error}
        </p>
      );
    } else if (!this.props.posts) {
      // Display place holder if posts are still loading (and no error)
      return (
        <p>
          <i>Loading content…</i>
        </p>
      );
    } else {
      // Display posts
      return (
        <React.Fragment>
          {this.props.posts.map((post, i) => (
            <div key={i}>
              <span className="font-weight-bold">{post.title}</span>
              <p>
                <i>{post.body}</i>
              </p>
            </div>
          ))}
        </React.Fragment>
      );
    }
  }
}
