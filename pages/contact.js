import Page from "../components/page";
import Layout from "../components/layout";

export default class extends Page {
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-6">Contact Us</h1>
        <p className="lead">Main Office Address</p>
        <p>#577 Bund, Shanghai, China</p>
        <p className="lead">Office Hours</p>
        <p>
          Our office is open Monday to Friday from 8:00AM to 5:00PM (GMT +8:00)
        </p>

        <p className="lead">Contacts</p>
        <p>
          <b>Phone:</b> +86 1111 222 3344
          <br />
          <b>Email:</b> info@greenthumb.farm
        </p>
      </Layout>
    );
  }
}
