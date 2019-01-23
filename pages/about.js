import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">About</h1>
        <p className="lead">Green Thumb Agriculture.</p>

        <p>
          GreenThumb Agriculture is a community based three-sided online 
          marketplace that helps to connect the private investors, farmers and crop buyers.
          Private investors can
          help farmers on their much-needed financial support and at the same time reap
          rewards for their contributions. GreenThumb Agriculture was developed
          by OBORCHAIN, Blockchain and web publishing company based in Shanghai.
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
          GreenThumb Agriculture currently owns 100 hectares of farmland property
          which we use for farming. These farms are managed by experienced local farmers
          under the supervision of GTA's farm keepers and farm masters from the Department of Agriculture.
          
        </p>

        <p>
          Farmers provides land and man-power in the operation of the farms. They
          make sure that the crops and livestocks are properly taken care off, and will 
          be rewarded by the final sale of the produce.
        
        </p>

        <p>
          Through GreenThumb, we were able to help our farmers in their
          financial needs by providing them capital through the community of
          private investors. We have helped them and have guided them in finding the
          right markets for the products they produce. We provide them with
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
          crowdfunders, we were able to help our farmers.
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
          Our continuous growth and success and our driven passion in
          introducing farming with the aid of modern technology; thru the use of
          social media sites and applications, has ensured that online farming
          can be a profitable business.{" "}
        </p>
        <p>
          This is why GreenThumb was created. We wanted to help farmers have a
          stable livelihood and income. We aim to reintroduce farming to every
          Filipino’s around the world. We aim to bring GreenThumb closer to your
          home and to your heart.{" "}
        </p>
        <p>GreenThumb lets you experience the best of both worlds.</p>
      </Layout>
    );
  }
}
