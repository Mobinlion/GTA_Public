import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">How Does It Work</h1>
        <h2>Investment</h2>
        <p>
          GreenThumb uses the concept of crowdfunding in assisting our farmers.
          How to participate?{" "}
        </p>
        <p>
          In every season GreenThumb will open a number of new farms, of which 
          the nature will depend on the the marketability of the products, and the
          proficiency of the farmers enrolled. These farms will then be open to be
          funded by the investors for a period of two months, before then investment window
          closes. Within this window of two months, investors are free to 
          choose a specific or a range of products to invest in. 
          The farms that received enough funding to reach the "softcap" or the "hardcap" will
          kicked off according to the execution plan after the two months period. 
        </p>
        <p>
          GTAers who have invested in the farms will
          receive reward only after the crops have been harvested and sold. Each
          community member must also acknowledge the risks involved in farming, as returns 
          on investment are not guaranteed and may vary.
          In the cases of extreme losses suffered from an unforeseen event such as super typhoon that 
          destroys the crop,
          , it is anticipated that investors will not
          be able to receive their returns immediately after the projected growth season. GTA will protect
          the interest of our investors by replaceing the seeds and replanting the crops with NO ADDITIONAL 
          cost. 
        </p>


        <h2>The Future</h2>
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
      </Layout>
    );
  }
}
