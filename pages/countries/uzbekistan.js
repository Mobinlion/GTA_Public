import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../../components/page";
import Layout from "../../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="Uzbekistan">
        <h1 className="display-2">Uzbekistan</h1>
        <p className="lead">
          Agriculture in Uzbekistan employs 28% of the country's labor force and
          contributes 24% of its GDP (2006 data).
        </p>
        <p>
          Crop agriculture requires irrigation and occurs mainly in river
          valleys and oases. Cultivable land is 4.5 million hectares, or about
          10% of Uzbekistan's total area, and it has to be shared between crops
          and cattle. Desert pastures cover fully 50% of the country, but they
          support only sheep.
        </p>
        <h2 className="mt-3">Agricultural production</h2>
        <p>
          Cotton is Uzbekistan's main cash crop, accounting for 17% of its
          exports in 2006.[1] With annual cotton production of about 1 million
          ton of fiber (4%-5% of world production) and exports of
          700,000-800,000 tons (10% of world exports), Uzbekistan is the 6th
          largest producer and the 2nd largest exporter of cotton in the
          world.[3] However, because of the risks associated with a one-crop
          economy as well as from considerations of food security for the
          population, Uzbekistan has been moving to diversify its production
          into cereals, while reducing cotton production. Thus, the area sown to
          cotton was reduced from 1.9 million hectares in 1990 to 1.4 million
          hectares in 2006, while the area under cereals increased from 1.0
          million to 1.6 million hectares (in part at the expense of areas
          allocated to feed crops).[2] Another cause behind moves to diversify
          may be environmental, because the large quantities of irrigation and
          fertilization needed to produce cotton have contributed to the drying
          up of the Aral Sea and to the severe pollution of the soil in the
          surrounding areas.
        </p>
        <p>
          The main cereals are wheat, barley, corn, and also rice, which is
          grown in intensively irrigated oases. Minor crops include sesame,
          onions, flax, and tobacco. Fresh fruits are mainly consumed
          domestically, while dried fruits are also exported. Uzbek melons,
          known for their long life and unique taste, are widely sought after in
          the large cities of the CIS.
        </p>
        <p>
          Pelts of the karakul sheep bred in Bukhara and its environs are a
          traditional export commodity, but their contribution to total exports
          today is negligible. The production of karakul pelts dropped from 1.4
          million pieces in 1990 to less than 700,000 pieces in 2004.[4] Cattle,
          sheep, and chickens are raised for meat. There are 3 million cows in
          Uzbekistan, and they produce 5 million liters of milk per year.[2] The
          achieved yields of around 1,600 kg of milk per cow per year are among
          the lowest in the CIS[5] (compared to 2,500 kg per cow per year for
          Russia, Ukraine, and Moldova) and dismally low compared to those in
          the EU countries or North America. The low milk yields are
          attributable to insufficient feed and reluctance of peasants to use
          artificial insemination for breed improvement.
        </p>
        <p>
          Although silkworms and mulberry trees have existed in Uzbekistan since
          the 4th century and the country is known for its colorfully patterned
          silks, the silk industry continues to be statistically insignificant.
        </p>
        <h2 className="mt-3">Changing farm structure</h2>
        <p>
          Up to 1991, agriculture in Uzbekistan (then Uzbek SSR), as in all
          other Soviet republics, was organized in a dual system, in which
          large-scale collective and state farms coexisted in a symbiotic
          relationship with quasi-private individual farming on subsidiary
          household plots. The process of transition to a market economy that
          began in independent Uzbekistan after 1992 led to the creation of
          three types of farms: the traditional household plots were renamed
          dehkan (or dehqon) farms (Uzbek: деҳқон хўжаликлари, Russian:
          дехканские хозяйства); the large-scale collective and former state
          farms were reclassified as shirkats (agricultural production
          cooperatives) or other corporate forms (joint-stock societies, limited
          liability companies, partnerships); and a new category of midsized
          peasant farms or “farmers” (Uzbek: фермер хўжаликлари, Russian:
          фермерские хозяйства) was introduced between the small dehkan farms
          and the large-scale shirkats.[6] As of 2006, "farmers" cultivate 75%
          of sown area, while dehkan farms cultivate 12.5% and various corporate
          farms control the remaining 12.5%. The situation is totally different
          with regard to livestock: 95% of cows is in dehkan farms, 4% in
          peasant farms, and just 1% in corporate farms. Dehkan farms produce
          62% of gross agricultural output, followed by 32% in peasant farms,
          and a mere 6% in corporate farms.
        </p>
      </Layout>
    );
  }
}
