import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../../components/page";
import Layout from "../../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">China</h1>
        <p className="lead">
          Agriculture is a vital industry in China, employing over 300 million
          farmers.
        </p>
        <p>
          China ranks first in worldwide farm output, primarily producing rice,
          wheat, potatoes, tomato, sorghum, peanuts, tea, millet, barley,
          cotton, oilseed and soybeans.
        </p>

        <h3>History</h3>
        <p>
          The development of farming over the course of China's history has
          played a key role in supporting the growth of what is now the largest
          population in the world. Analysis of stone tools by Professor Liu Li
          and others has shown that the origins of Chinese agriculture is rooted
          in the pre-agricultural Paleolithic. During this time,
          hunter-gatherers harvested wild plants with the same tools that would
          later be used for millet and rice.
        </p>
        <h3>Farming method improvements</h3>
        <p>
          Due to China's status as a developing country and its severe shortage
          of arable land, farming in China has always been very labor-intensive.
          However, throughout its history, various methods have been developed
          or imported that enabled greater farming production and efficiency.
          They also utilized the seed drill to help improve on row farming.
        </p>
        <p>
          During the Spring and Autumn period (722–481 BC), two revolutionary
          improvements in farming technology took place. One was the use of cast
          iron tools and beasts of burden to pull plows, and the other was the
          large-scale harnessing of rivers and development of water conservation
          projects. The engineer Sunshu Ao of the 6th century BC and Ximen Bao
          of the 5th century BC are two of the oldest hydraulic engineers from
          China, and their works were focused upon improving irrigation
          systems.[8] These developments were widely spread during the ensuing
          Warring States period (403–221 BC), culminating in the enormous Du
          Jiang Yan Irrigation System engineered by Li Bing by 256 BC for the
          State of Qin in ancient Sichuan.
        </p>
        <p>
          For agricultural purposes the Chinese had invented the
          hydraulic-powered trip hammer by the 1st century BC, during the
          ancient Han Dynasty (202 BC-220 AD).[9] Although it found other
          purposes, its main function was to pound, decorticate, and polish
          grain that otherwise would have been done manually. The Chinese also
          innovated the square-pallet chain pump by the 1st century AD, powered
          by a waterwheel or oxen pulling on a system of mechanical wheels.[10]
          Although the chain pump found use in public works of providing water
          for urban and palatial pipe systems,[11] it was used largely to lift
          water from a lower to higher elevation in filling irrigation canals
          and channels for farmland.
        </p>
        <p>
          During the Eastern Jin (317–420) and the Northern and Southern
          Dynasties (420–589), the Silk Road and other international trade
          routes further spread farming technology throughout China. Political
          stability and a growing labor force led to economic growth, and people
          opened up large areas of wasteland and built irrigation works for
          expanded agricultural use. As land-use became more intensive and
          efficient, rice was grown twice a year and cattle began to be used for
          plowing and fertilization. By the Tang Dynasty (618–907), China had
          become a unified feudal agricultural society. Improvements in farming
          machinery during this era included the moldboard plow and watermill.
          Later during the Yuan Dynasty (1271–1368), cotton planting and weaving
          technology were extensively adopted and improved. While around 750,
          75% of China's population lived north of the river Yangtze, by 1250,
          75% of the population lived south of the river. Such large-scale
          internal migration was possible due to the introduction of
          quick-ripening strains of rice from Vietnam suitable for
          multi-cropping.[13] The Qing, Ming and Yuan dynasties had seen the
          rise of collective help organizations between farmers.[14] In 1909 US
          Professor of Agriculture Franklin Hiram King made an extensive tour of
          China (as well as Japan and briefly Korea) and he described
          contemporary agricultural practices. He favourably described the
          farming of China as 'permanent agriculture' and his book 'Farmers of
          Forty Centuries', published posthumously in 1911, has become an
          agricultural classic and has been a favoured reference source for
          organic farming advocates. The book has inspired many
          community-supported agriculture farmers in China to conduct ecological
          farming.[15]
        </p>
      </Layout>
    );
  }
}
