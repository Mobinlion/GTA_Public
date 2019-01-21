import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../../components/page";
import Layout from "../../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props} title="UK">
        <h1 className="display-4">United Kingdom</h1>
        <h2>Agriculture in the United Kingdom</h2>
        <p>
          Agriculture in the UK is today intensive, highly mechanised, and
          efficient by European standards, producing about 60% of food needs
          with only 2% of the labour force. It contributes around 2% of GDP.
          Around two thirds of production is devoted to livestock, one third to
          arable crops. Agriculture is heavily subsidised by the European
          Union's Common Agricultural Policy and it is not known how large a
          sector it would be if the market was unregulated. The GDP from the
          farming sector is argued by some to be a small return on the subsidies
          given[citation needed] but is argued by others that subsidy boosts
          food security[citation needed] and therefore is justified in the same
          way defence spending is.
        </p>
        <p>
          The main crops that are grown are wheat, barley, oats, potatoes, sugar
          beets, fruits and vegetables. The livestock that is raised include
          cattle and sheep. In the drier east, farmers grow wheat, barley, oats,
          potatoes, and sugar beets.
        </p>
        <h2>History</h2>
        <p>
          Between the 16th century and the mid-19th century, Great Britain saw a
          massive increase in agricultural productivity and net output. (See:
          British Agricultural Revolution.) New agricultural practices like
          enclosure, mechanisation, four-field crop rotation and selective
          breeding enabled an unprecedented population growth, freeing up a
          significant percentage of the workforce, and thereby helped drive the
          Industrial Revolution. By the early 19th century, agricultural
          practices, particularly careful selection of hardy strains and
          cultivars, had so improved that yield per land unit was many times
          that seen in the Middle Ages and before. In the late nineteenth
          century a slump badly affected arable farming, known as the Great
          Depression, which is usually dated from 1873 to 1896. The depression
          was caused by the dramatic fall in grain prices following the opening
          up of the American prairies to cultivation in the 1870s and the advent
          of cheap transportation with the rise of steam ships.
        </p>
        <p>
          The 18th and 19th centuries also saw the development of glasshouses,
          or greenhouses, initially for the protection and cultivation of exotic
          plants imported to Europe and North America from the tropics.
          Experiments on plant hybridisation in the late 19th century yielded
          advances in the understanding of plant genetics, and subsequently, the
          development of hybrid crops. Storage silos and grain elevators
          appeared in the 19th century.
        </p>
      </Layout>
    );
  }
}
