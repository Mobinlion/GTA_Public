import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-4">About</h1>

        <p>
          GreenThumb Agriculture is a community based three-sided online
          marketplace that helps to connect the private investors, farmers and
          crop buyers. Private investors can help farmers on their much-needed
          financial support and at the same time reap rewards for their
          contributions. GreenThumb Agriculture was developed by OBORCHAIN,
          Blockchain and web publishing company based in Shanghai.
        </p>

        <p>
          Established in 2018, and a pioneer in the integration of new
          technology. GreenThumb Agriculture has developed its own concept in
          reintroducing farming with the use of social media and online
          applications; through virtual farming. People who wanted to engage in
          farming but has no time can now participate and help by financing our
          partners at their own expenses.
        </p>

        <p>
          GreenThumb Agriculture currently owns 100 hectares of farmland
          property which we use for farming. These farms are managed by
          experienced local farmers under the supervision of GTA's farm keepers
          and farm masters from the Department of Agriculture.
        </p>

        <p>
          Farmers provides land and man-power in the operation of the farms.
          They make sure that the crops and livestocks are properly taken care
          off, and will be rewarded by the final sale of the produce.
        </p>

        <p>
          Through GreenThumb, we were able to help our farmers in their
          financial needs by providing them capital through the community of
          private investors. We have helped them and have guided them in finding
          the right markets for the products they produce. We provide them with
          advance methodologies and techniques (to further enrich the knowledge
          and enhance the skills of our farmers) which were introduced and
          developed by those who are dedicated to the craft.
        </p>

        <p>
          Agriculturist from the Department of Agriculture and farm
          professionals are also working with us hand-in- hand. They give
          advices and techniques on proper soil management, breeding and raising
          livestocks, crop protection, environmental sustainability, farm
          diseases, and harvesting.
        </p>

        <p>
          With the technical assistance and through the fundings of our
          crowdfunders, we were able to help our farmers farm better and big,
          making farming great again.
        </p>

        <p className="lead">The Idea</p>
        <p>
          In this modern age where technology has become more advanced, people’s
          way of living and thinking has been affected. And so was their views
          and opinions.{" "}
        </p>
        <p>
          Our generation has viewed farming as a lowly occupation. The call for
          industrialization and modernization has become “so great” even
          farmer’s themselves abandon this occupation just to chase their
          “American Dreams”. We aim to alleviate this misconception of people
          about farming, with the help of GreenThumb.{" "}
        </p>

        <p>
          This is why GreenThumb was created. We wanted to help farmers have a
          stable livelihood and income. We aim to reintroduce farming to
          everyone around the world. We aim to bring GreenThumb closer to your
          home and to your heart.{" "}
        </p>
        <p>GreenThumb lets you experience the best of both worlds.</p>

        <p>
          We at GreenThumb believes that there is a bright future in farming. We
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

        <h2 className="display-4">Meet the Team</h2>
        <CardDeck>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/team/team-member.jpg"
              width="256"
              height="256"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Joe</CardTitle>
              <CardSubtitle>
                <a href="https://linkedin.com/in/mobinarablou"> 
                  <span className="text-primary mr-1 icon ion-logo-linkedin" />
                </a>
                Business
              </CardSubtitle>
              <CardText>
                {/*<span className="text-success mr-1 icon ion-md-map" />*/}
                Business guys
              </CardText>               
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/team/team-member.jpg"
              width="256"
              height="256"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Mark</CardTitle>
              <CardSubtitle>
                <a href="https://linkedin.com/in/mobinarablou"> 
                  <span className="text-primary mr-1 icon ion-logo-linkedin" />
                </a>
                Business
              </CardSubtitle>
              <CardText>
                {/*<span className="text-success mr-1 icon ion-md-map" />*/}
                Business guys
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/team/team-member.jpg"
              width="256"
              height="256"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                John{" "}
                {/* <span className="text-primary mr-1 icon ion-logo-facebook" />
                <span className="text-primary mr-1 icon ion-logo-twitter" /> */}
              </CardTitle>
              <CardSubtitle>
                <a href="https://linkedin.com/in/mobinarablou"> 
                  <span className="text-primary mr-1 icon ion-logo-linkedin" />
                </a>
                Technology
              </CardSubtitle>
              <CardText>
                {/*<span className="text-success mr-1 icon ion-md-map" />*/}
                Tech guys
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
        <p />

        <CardDeck>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/team/team-member.jpg"
              width="256"
              height="256"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Mobin</CardTitle>
              <CardSubtitle>
                <a href="https://linkedin.com/in/mobinarablou"> 
                  <span className="text-primary mr-1 icon ion-logo-linkedin" />
                </a>
                Technology
              </CardSubtitle>
              <CardText>
                {/*<span className="text-success mr-1 icon ion-md-map" />*/}
                Tech guys
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/team/team-member.jpg"
              width="256"
              height="256"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Tony</CardTitle>
              <CardSubtitle>
                <a href="https://linkedin.com/in/mobinarablou"> 
                  <span className="text-primary mr-1 icon ion-logo-linkedin" />
                </a>
                Business
              </CardSubtitle>
              <CardText>
                {/*<span className="text-success mr-1 icon ion-md-map" />*/}
                Business guys
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/team/team-member.jpg"
              width="256"
              height="256"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Zhang</CardTitle>
              <CardSubtitle>
                <a href="https://linkedin.com/in/mobinarablou"> 
                  <span className="text-primary mr-1 icon ion-logo-linkedin" />
                </a>
                Technology
              </CardSubtitle>
              <CardText>
                {/*<span className="text-success mr-1 icon ion-md-map" />*/}
                Tech guys
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      </Layout>
    );
  }
}
