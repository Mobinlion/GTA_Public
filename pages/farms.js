import SyntaxHighlighter from "react-syntax-highlighter";
import { atomDark as SyntaxHighlighterTheme } from "react-syntax-highlighter/dist/styles/prism";
import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-2">Farms</h1>
        <p className="lead">Green Thumb Agriculture.</p>
        <p>Here goes our farms</p>
      </Layout>
    );
  }
}
