//import SyntaxHighlighter from "react-syntax-highlighter";
//import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";
import Link from 'next/link'
import dynamic from 'next/dynamic';
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

const DynamicComponentWithNoSSR = dynamic(() => import('../components/farmMaps/Map'), {
  ssr: false
});

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">Farms</h1>
        <p className="lead">Green Thumb Agriculture.</p>
        <p>Joe's Farms</p>
        <Row>
          <Col xs="12" md="9" lg="4"> {/*increase lg="5" to show 2 farms per row*/}
          <Link href="/farms/farmiloilo"><a><img src="../static/farmpics/farm_1.jpg" width="100%" height="88%" /> </a></Link> 
          </Col>
          <Col xs="12" md="9" lg="4">
          <Link href="/farms/farmiloilo"><a><img src="../static/farmpics/farm_2.jpg" width="100%" height="88%" /> </a></Link>
          </Col>
          <Col xs="12" md="9" lg="4">
          <Link href="/farms/farmiloilo"><a><img src="../static/farmpics/farm_3.jpg" width="100%" height="88%" /> </a></Link>
          </Col>
          <Col xs="12" md="9" lg="4">
          <Link href="/farms/farmiloilo"><a><img src="../static/farmpics/farm_4.jpg" width="100%" height="88%" /> </a></Link> 
          </Col>
          <Col xs="12" md="9" lg="4">
          <Link href="/farms/farmiloilo"><a><img src="../static/farmpics/cow_farm.jpg" width="100%" height="88%" /> </a></Link> 
          </Col>
        </Row>
        
        {/*<DynamicComponentWithNoSSR />*/}
      </Layout>
    );
  }
}