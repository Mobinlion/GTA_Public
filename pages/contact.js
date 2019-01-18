import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-6">Contact Us</h1>
        <p className="lead">Green Thumb Agriculture</p>

        <p>Here goes our Contact Us</p>
      </Layout>
    );
  }
}
