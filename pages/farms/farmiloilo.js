import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../../components/page";
import Layout from "../../components/layout";
import Link from 'next/link'
import dynamic from 'next/dynamic';
import { Carousel } from 'react-responsive-carousel';

import {
    Row,
    Col
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
        </Row>
        <style jsx>{`
      .FrameBorderRemove {
        border:none;
      }
    `}</style>
      </Layout>
    );
  }
}



