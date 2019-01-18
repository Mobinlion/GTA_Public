import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-6">Frequently Asked Questions</h1>
        <p className="lead">Green Thumb Agriculture</p>

        <p>Here goes our frequently asked questions</p>
      </Layout>
    );
  }
}
