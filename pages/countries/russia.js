import Link from "next/link";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../../components/page";
import Layout from "../../components/layout";

export default class extends Page {
  static async getInitialProps({ req, query }) {
    let props = await super.getInitialProps({ req });
    props.slug = query.id;
    return props;
  }

  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">Russia</h1>
        <p className="lead">Agriculture in Russia</p>
        <p>
          survived a severe transition decline in the early 1990s as it
          struggled to transform from a command economy to a market-oriented
          system. Following the breakup of the Soviet Union in 1991, large
          collective and state farms – the backbone of Soviet agriculture – had
          to contend with the sudden loss of state-guaranteed marketing and
          supply channels and a changing legal environment that created pressure
          for reorganization and restructuring. In less than ten years,
          livestock inventories declined by half, pulling down demand for feed
          grains, and the area planted to grains dropped by 25%.
        </p>
        <p>
          The use of mineral fertilizer and other purchased inputs plummeted,
          driving yields down. Most farms could no longer afford to purchase new
          machinery and other capital investments. Following a nearly ten-year
          period of decline, Russian agriculture has experienced gradual ongoing
          improvement. The transition to a more market-oriented system has
          introduced an element of fiscal responsibility, which has resulted in
          increased efficiency as farmers try to maintain productivity while
          adjusting the resource constraints. The relatively smaller corporate
          farms and family farms that have emerged and grown stronger in the new
          market environment are now producing in aggregate value more than the
          total output of large corporate farms that first succeeded the
          traditional collectives.
        </p>
        <h3>Ownership and farm structure</h3>
        <p>
          A combine in the Rostov Oblast. After the collectivization in the
          Soviet Union, until the 1980s, most agricultural land in Russia was in
          state ownership, and the transition to a market-oriented economy had
          to start with privatisation of land and farm assets.[1] Russia's
          agricultural privatisation programme can be traced back to 1989–90,
          when Soviet legislation under Gorbachev allowed, first, the creation
          of non-state business enterprises in the form of cooperatives; and
          second, legalized private ownership of land by individuals (the
          November 1990 Law of Land Reform). While household plots cultivated by
          employees of collective farms and other rural residents had played a
          key role in Russian agriculture since the 1930s, legislation enabling
          independent private farms outside the collectivist framework was
          passed only in November 1990.
        </p>
        <p>
          The Law on Peasant Farms adopted in December 1990 was followed by laws
          and decrees that defined the legal organizational forms of large
          agricultural enterprises, the legal aspects of land ownership, and the
          procedures for certifying and exercising ownership rights.
          Specifically, agricultural land was denationalized, and its ownership
          (together with the ownership of other farm assets) was legally
          transferred from the state to the ownership of kolkhozes. But at the
          same time imposed a ten-year moratorium on buying and selling
          privately owned land
        </p>
        <p>
          The new legal environment created expectations among Western scholars
          and Russian reform advocates that family farms would emerge in large
          numbers and the large-scale collective farms would be restructured.
          But as it turned out, few peasants were interested in establishing
          individual farms, and management and operating practices inside large
          agricultural enterprises remained largely unchanged despite formal
          reorganization.[1] The lack of enthusiasm for the creation of private
          farms was attributed to inadequate rural infrastructure, which did not
          provide processing and marketing services for small producers and also
          to the fear that families striking out on their own might lose
          eligibility for social services that were traditionally provided by
          the local corporate farm instead of the municipality.
        </p>
        <p>
          Starting in 1993, privatized kolkhoz and sovkhoz became corporate
          farms. These farms were legally reorganized as common stock companies,
          limited liability partnerships, or agricultural production
          cooperatives and turned over, usually in their entirety, to the joint
          ownership of agricultural workers and pensioners. These farms
          continued to operate largely as they had done under the Soviet system.
          Today, the term "corporate farm" is an all-inclusive phrase describing
          the various organizational forms that arose in the process of
          privatisation without involving distribution of physical parcels of
          land to individuals. In diametric opposition to corporate farms is the
          individual farm sector, which consists of the traditional household
          plots and the newly formed peasant farms.
        </p>
        <p>
          The land-code reform of 2002, advanced by the administration of
          Vladimir Putin, called for the ownership of real estate objects to
          henceforth follow ownership of the attached land plot; granted
          exclusive right to purchase or lease state-owned land to the owner of
          the attached real estate object; gave to private owners of buildings
          on land plots owned by other private parties the preemptive right to
          purchase the land; and prohibited the future privatization of real
          estate objects without the concurrent privatization of the attached
          plot. Russian agriculture today is characterized by three main types
          of farms. Two of these farm types – corporate farms and household
          plots – existed all through the Soviet period (the former are
          basically the successors of the Soviet collective and state farms).
          The third type – peasant farms – began to emerge only after 1990,
          during the post-Soviet transition. The evolution of Russian
          agriculture since 1990 shows a significant change of resources and
          production from the formerly dominant corporate farms to the
          individual farming sector. During 2006, household plots and peasant
          farms combined controlled about 20% of agricultural land and 48% of
          cattle,[3] up from 2% of agricultural land and 17% of cattle in 1990.
          The share of the individual sector in gross agricultural output
          increased from 26% in 1990 to 59% in 2005. Producing 59% of
          agricultural output on 20% of land, individual farms achieve a much
          greater productivity than corporate farms.
        </p>
      </Layout>
    );
  }
}
