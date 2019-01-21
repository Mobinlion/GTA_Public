//import SyntaxHighlighter from "react-syntax-highlighter";
//import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";
import Link from "next/link";
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
              <CardTitle>Joe's farm</CardTitle>
              <CardSubtitle>Alicia, Isabela</CardSubtitle>
              <CardText>100+ Hectares</CardText>
              <Button>OPEN</Button>
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
              <CardSubtitle>Shanhgai, China</CardSubtitle>
              <CardText>100+ Hectares</CardText>
              <Button>OPEN</Button>
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
              <CardTitle>John's farm</CardTitle>
              <CardSubtitle>Termez, Uzbekistan</CardSubtitle>
              <CardText>100+ Hectares</CardText>
              <Button>OPEN</Button>
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
              <CardSubtitle>Canada</CardSubtitle>
              <CardText>100+ Hectares</CardText>
              <Button>OPEN</Button>
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
              <CardSubtitle>Canada</CardSubtitle>
              <CardText>100+ Hectares</CardText>
              <Button>OPEN</Button>
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
              <CardSubtitle>Hubei, China</CardSubtitle>
              <CardText>100+ Hectares</CardText>
              <Button>OPEN</Button>
            </CardBody>
          </Card>
        </CardDeck>

        {/*<DynamicComponentWithNoSSR />*/}
      </Layout>
    );
  }
}
