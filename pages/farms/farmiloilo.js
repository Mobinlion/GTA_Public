import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../../components/page";
import Layout from "../../components/layout";
import Link from 'next/link'
import dynamic from 'next/dynamic';
import Iframe from 'react-iframe';

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


  const DynamicComponentWithNoSSR = dynamic(() => import('../../components/farmMaps/Map'), {
    ssr: false
  });



export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">iloilo livestock farm</h1>
        <Row>
         <Col xs="12" md="5" lg="4">
            <p className="lead">Farm Owner: Joe</p>
            <p className="lead">Farm Location: Iloilo, Philippines</p>
            <p className="lead">Types of Crops Grown: Sugarcane, Barley, Sweet potato</p> 
            <p></p>
         </Col>
         <Col xs="12" md="7" lg="8"> {/*increase lg="5" to show 2 farms per row*/}
            <DynamicComponentWithNoSSR />
         </Col>
        </Row>
        <h3>Invest Now:</h3>
        <div><Iframe url="https://degron.io/opencart/index.php?route=product/product&product_id=40"
        width="80%"
        height="1024px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        scrolling="yes"
        allowFullScreen/>
        </div>
      </Layout>
    );
  }
}



