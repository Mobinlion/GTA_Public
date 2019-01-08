import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">Invest</h1>
        <h2>Green Thumb Agriculture.</h2>
        <p>
          GreenThumb uses the concept of crowdfunding in assisting our farmers.
          How does crowdfunding works?{" "}
        </p>
        <p>
          In every cycle GreenThumb will open a new project, which will then be
          funded by the contributions given by our crowdfunding community. Our
          crowdfunders will then choose a specific product from the list which
          GreenThumb will be posting. With the aid of the given contribution,
          our farmers can start the production.
        </p>
        <p>
          Members who have given their contribution for that project will
          receive reward only if the project has been deemed successful. Each
          community members must also acknowledge the risks involved in farming.
          Factors like climate change and natural disasters are some of the
          risks involved.
        </p>

        <h2>How we manage the risk?</h2>
        <p>Profits are not guaranteed but risks are managed! </p>
        <p>
          With the equipment of new methodologies and techniques in farming, we
          were able to enhance the production of our products. Easy to grow
          lowland crops and vegetables (such as papaya, petsay, string beans,
          legumes, varieties of pepper and others) are our main products. Along
          with crops, livestocks (such as pigs, goats, ducks, and chickens) are
          being domesticated.
        </p>
        <p>How do we manage climate change and natural disasters? </p>
        <p>
          GreenThumb has its ways on battling climate change and natural
          disasters. Take for example El Niño (a natural occurring phenomenon
          which causes warming. This warming causes a shift in the atmospheric
          circulation with rainfall becoming reduced over the areas affected),
          GreenThumb has built water its own reservoirs to facilitate this
          issue. It enables our farmers to water the plants despite of water
          scarcity.{" "}
        </p>
        <p>
          La Niña is also another occurring phenomenon. It is the counterpart of
          El Niño. This phenomenon causes heavy rains which leads to massive
          flooding’s on affected areas. GreenThumb builds drainage canals to
          expel the excess waters accumulating. This ensures that the plant
          won’t drown and be destroyed. Some of our farms are strategically
          located on high areas to avoid the effects of La Niña.{" "}
        </p>
        <p>
          We also planted guard plants which protects our crops from strong wind
          currents which can destroy our plants.{" "}
        </p>
        <p>
          Despite the changing seasons, GreenThumb will continue to develop and
          look for solutions, in battling the serious effects of climate change.{" "}
        </p>
        <p>
          If in case the farm has been devastated by natural calamities; (such
          as earthquakes, storms, flooding’s, and uncontrolled pestilence)
          GreenThumb will replant crops as well as raise livestock again to
          ensure that the community’s demand will be met.
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
