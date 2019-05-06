//import SyntaxHighlighter from "react-syntax-highlighter";
//import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import dynamic from "next/dynamic";
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

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/farmMaps/Map"),
  {
    ssr: false
  }
);

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-4">Farms</h1>
        <CardDeck>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/farmpics/farm_1.jpg"
              width="256"
              height="180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Joe's livestock farm</CardTitle>
              <CardSubtitle>
                <span className="text-danger mr-1 icon ion-md-pin" />
                Iloilo, Philippines
              </CardSubtitle>
              <CardText>
                <span className="text-success mr-1 icon ion-md-map" />
                1000+ Hectares <p>Farm Rating:</p>
                <StarRatings
                  rating={4.6}
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="7px"
                  starRatedColor="green"
                />
              </CardText>              
              
              <a style={{textDecoration: 'none'}} href="../farms/farmiloilo"><Button color="success" block>
                OPEN
              </Button>
              </a>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/farmpics/farm_2.jpg"
              width="256"
              height="180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Mark's farm</CardTitle>
              <CardSubtitle>
                <span className="text-danger mr-1 icon ion-md-pin" />
                Shanhgai, China
              </CardSubtitle>
              <CardText>
                <span className="text-success mr-1 icon ion-md-map" />
                200+ Hectares <p>Farm Rating:</p>
                <StarRatings
                  rating={0.0}
                  starDimension="20px"
                  starSpacing="7px"
                  starRatedColor="yellow"
                />
              </CardText>
              <Button color="success" block>
                OPEN
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/farmpics/farm_3.jpg"
              width="256"
              height="180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>
                John's farm{" "}
                {/* <span className="text-primary mr-1 icon ion-logo-facebook" />
                <span className="text-primary mr-1 icon ion-logo-twitter" /> */}
              </CardTitle>
              <CardSubtitle>
                <span className="text-danger mr-1 icon ion-md-pin" />
                Termez, Uzbekistan
              </CardSubtitle>
              <CardText>
                <span className="text-success mr-1 icon ion-md-map" />
                400+ Hectares <p>Farm Rating:</p>
                <StarRatings
                  rating={0.0}
                  starDimension="20px"
                  starSpacing="7px"
                  starRatedColor="yellow"
                />
              </CardText>
              <Button color="success" block>
                OPEN
              </Button>
            </CardBody>
          </Card>
        </CardDeck>
        <p />

        <CardDeck>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/farmpics/farm_4.jpg"
              width="256"
              height="180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Mobin's farm</CardTitle>
              <CardSubtitle>
                <span className="text-danger mr-1 icon ion-md-pin" />
                London, UK
              </CardSubtitle>
              <CardText>
                <span className="text-success mr-1 icon ion-md-map" />
                100+ Hectares <p>Farm Rating:</p>
                <StarRatings
                  rating={0.0}
                  starDimension="20px"
                  starSpacing="7px"
                  starRatedColor="yellow"
                />
              </CardText>
              <Button color="success" block>
                OPEN
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/farmpics/cow_farm.jpg"
              width="256"
              height="180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Tony's farm</CardTitle>
              <CardSubtitle>
                <span className="text-danger mr-1 icon ion-md-pin" />
                Toronto, Canada
              </CardSubtitle>
              <CardText>
                <span className="text-success mr-1 icon ion-md-map" />
                600+ Hectares <p>Farm Rating:</p>
                <StarRatings
                  rating={0.0}
                  starDimension="20px"
                  starSpacing="7px"
                  starRatedColor="yellow"
                />
              </CardText>
              <Button color="success" block>
                OPEN
              </Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="../static/farmpics/farm_1.jpg"
              width="256"
              height="180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Zhang's farm</CardTitle>
              <CardSubtitle>
                <span className="text-danger mr-1 icon ion-md-pin" />
                Hubei, China
              </CardSubtitle>
              <CardText>
                <span className="text-success mr-1 icon ion-md-map" />
                1200+ Hectares  <p>Farm Rating:</p>
                <StarRatings
                  rating={0.0}
                  starDimension="20px"
                  starSpacing="7px"
                  starRatedColor="yellow"
                />
              </CardText>
              <Button color="success" block>
                OPEN
              </Button>
            </CardBody>
          </Card>
        </CardDeck>

        {/*<DynamicComponentWithNoSSR />*/}
      </Layout>
    );
  }
}
