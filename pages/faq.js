import Page from "../components/page";
import Layout from "../components/layout";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  Fade,
  Row
} from "reactstrap";

export default class extends Page {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [1, 0, 0, 0, 0, 0, 0, 0],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300
    };
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }
  render() {
    return (
      <Layout {...this.props}>
        <h1 className="display-6">Frequently Asked Questions</h1>
        <p className="lead">Green Thumb Agriculture</p>
        <div className="animated fadeIn">
          <Row>
            <CardBody>
              <div id="accordion">
                <Card className="mb-0">
                  <CardHeader id="headingOne">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(0)}
                      aria-expanded={this.state.accordion[0]}
                      aria-controls="collapseOne"
                    >
                      <h5 className="m-0 p-0">How can I join?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[0]}
                    data-parent="#accordion"
                    id="collapseOne"
                    aria-labelledby="headingOne"
                  >
                    <CardBody>
                      You can be a GreenThumber once you register at
                      www.greenthumb.farm. Note that you can register any time.
                      Click Sign up / Sign in button and fill up the
                      registration form. Once registered, you can choose
                      available farms and products to fund.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="headingTwo">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(1)}
                      aria-expanded={this.state.accordion[1]}
                      aria-controls="collapseTwo"
                    >
                      <h5 className="m-0 p-0">What is the process?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[1]}
                    data-parent="#accordion"
                    id="collapseTwo"
                  >
                    <CardBody>
                      Choose Product - After having successfully register an
                      account, you can be able to fund a farm or choose a
                      product. Some products are unavailable and some farms are
                      not open for the current cycle. You can only fund
                      available farms/products. To fund a farm or choose a
                      product, kindly click OUR FARMS tab at the top left corner
                      of the website, then select available farm to fund. After
                      selecting a farm, you can now choose the product you
                      desire to fund. Then enter the number of product plots and
                      the total computation will then appear at the bottom of
                      the form. After that, just click "Add to Basket" button.
                      You can add or remove products in your basket as long as
                      you are not placing it. If you have remaining balance in
                      your account, the total product cost will automatically be
                      deducted from the total amount of FarmOners Balance. You
                      can also choose whether you would like to have a notarized
                      contract or not. Notary fee is P250. You can fund
                      different products/ farms in a cycle. Just make sure to
                      request it all at once to receive your contract on time.
                      Once contract is receive, you cannot add more products for
                      the current cycle. Contract - After product request, a
                      contract will be sent to you through Message Center within
                      an average of 3-7 working days. Delays will sometimes
                      depend on the number of contracts we are sending. Do not
                      proceed to payment, if you don’t have the contract.
                      Payment details will be indicated in the contract. After
                      receiving the contract, kindly affix your signature and
                      send it to us by replying to the same ticket where the
                      contact was sent. After sending it, send your proof
                      payment "scanned copy/photo" using the payment form. If
                      you are using your balance to fund a farm "reinvest", you
                      need to send your signed contract to us within 6 working
                      days to confirm your request. Contract or notarized
                      contract is per cycle. Even with have multiple product
                      requests, you will be receiving only one "1" contract for
                      the current cycle. Payment - Your payment will be
                      confirmed after you send your signed contract and proof of
                      payment/details. We will be confirming your payment within
                      5-7 working days on the same ticket where you have sent
                      it. If you don't received any confirmation within 7
                      working days you may call us immediately, delays may due
                      to a large number of tickets that we are responding. For
                      late payments - You can refund your payment after it was
                      posted on your account, but ₱200.00 will be deducted from
                      the total payment. For immediate refund, 10% will be
                      deducted from the total payment. For excess payments -
                      Excess payments will be posted on your FarmOn account, but
                      ₱200.00 will be deducted from the total payment when
                      refunded. Reflecting Products - After the
                      confirmation/validation of payment, your products and
                      transaction history will be posted on your account before
                      the start of the real farming. Harvesting - Harvesting is
                      based on the tagging of your products. "First Pay, First
                      Out" and duration of the selected products. Sales profit
                      will depend on the crops/livestocks produced and price
                      market. Once product is harvested it will posted on
                      Product History of your account.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="headingThree">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(2)}
                      aria-expanded={this.state.accordion[2]}
                      aria-controls="collapseThree"
                    >
                      <h5 className="m-0 p-0">
                        Can I make payment in advance?
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[2]}
                    data-parent="#accordion"
                    id="collapseThree"
                  >
                    <CardBody>
                      Advance payment made even without a contract is strictly
                      not refundable. With this, we advise every FarmOner to
                      avoid paying in advance.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="headingFour">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(3)}
                      aria-expanded={this.state.accordion[3]}
                      aria-controls="collapseFour"
                    >
                      <h5 className="m-0 p-0">Is there a registration fee?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[3]}
                    data-parent="#accordion"
                    id="collapseFour"
                  >
                    <CardBody>
                      Yes, there is a one-time registration fee of P300.00 for
                      all first timers. The fee will be included on the
                      contract.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="headingFive">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(4)}
                      aria-expanded={this.state.accordion[4]}
                      aria-controls="collapseFive"
                    >
                      <h5 className="m-0 p-0">What is all about Cart?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[4]}
                    data-parent="#accordion"
                    id="collapseFive"
                  >
                    <CardBody>
                      The cart is where all your product requests are placed for
                      every cycle. New product requests will only remain for 10
                      days. Without placing your orders/requests after 10 days
                      the product requests will automatically remove. Once you
                      have placed your request, you will be receiving your
                      contract (within 3-7 working days) for the current cycle
                      and you cannot add products any more.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="headingSix">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(5)}
                      aria-expanded={this.state.accordion[5]}
                      aria-controls="collapseSix"
                    >
                      <h5 className="m-0 p-0">When is the next cycle?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[5]}
                    data-parent="#accordion"
                    id="collapseSix"
                  >
                    <CardBody>
                      We do not have tentative date for the coming cycles. Once
                      the cycle is closed, it will usually take more than 2 or 3
                      months before the next cycle opens. If date was confirmed
                      by the management, we will immediately post it on our
                      Facebook page or website.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="headingSeven">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(6)}
                      aria-expanded={this.state.accordion[6]}
                      aria-controls="collapseSeven"
                    >
                      <h5 className="m-0 p-0">
                        When will I receive my contract?
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[6]}
                    data-parent="#accordion"
                    id="collapseSeven"
                  >
                    <CardBody>
                      The contract will be sent to you through Message Center
                      within 3-7 working days from the day you requested the
                      products. Delays will sometimes depend on the number of
                      contracts we are sending.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading8">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(7)}
                      aria-expanded={this.state.accordion[7]}
                      aria-controls="collapse8"
                    >
                      <h5 className="m-0 p-0">
                        What are the method of payment available?
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[7]}
                    data-parent="#accordion"
                    id="collapse8"
                  >
                    <CardBody>
                      Payment details indicated in the contract shall be paid
                      through BDO Bank Deposit, Online Banking, Fund Transfer,
                      Remittance or Cash Payment (Office address indicated in
                      the contract).
                    </CardBody>
                  </Collapse>
                </Card>
              </div>
            </CardBody>
          </Row>
        </div>
      </Layout>
    );
  }
}
