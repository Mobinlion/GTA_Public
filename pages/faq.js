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
      accordion: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
                      www.greenthumbfarm.now.sh Note that you can register any time.
                      Click Signup/Login button and fill up the
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
                      available farms/products. 
                      
                      To fund a farm or choose a
                      product, kindly click OUR FARMS tab at the top left corner
                      of the website, then select available farm to fund. After
                      selecting a farm, you can now choose the product you
                      desire to fund. Then enter the number of product plots and
                      the total computation will then appear at the bottom of
                      the form. After that, just click "Add to Basket" button.
                      You can add or remove products in your basket as long as
                      you are not placing it. 
                      
                      If you have remaining balance in
                      your account, the total product cost will automatically be
                      deducted from the total amount of GTA Balance. You
                      can also choose whether you would like to have a notarized
                      contract or not. Notary fee is P250. 
                      
                      You can fund
                      different products/ farms in a cycle. 
                      
                      Contract - After checkout and agreeing to the Terms and Conditions, a
                      contract will be sent to you through Message Center within
                      an average of 3-7 working days. Delays will sometimes
                      depend on the number of contracts we are sending. 

                      Contract or notarized
                      contract is per cycle. Even if you have chosen to invest in 
                      multiple products, you will be receiving only one "1" contract for
                      the current cycle. 
                      
                      Payment - You will be able to fund your Vault once registered 
                      and logged into your account. We are offering a variety of methods
                      for funding your Vault. You will be able to see the fund at the 
                      balance of your vault within 3 working day after payment has been made.
                      
                      Reflecting Products - After the
                      confirmation/validation of checkout, your products and
                      transaction history will be posted on your account before
                      the start of the real farming. 
                      
                      Harvesting - Harvesting is
                      based on the tagging of your products. Sales profit
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
                        When can I make the deposit?
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[2]}
                    data-parent="#accordion"
                    id="collapseThree"
                  >
                    <CardBody>
                      Deposit of fund into your Vault can be made anytime, 
                      but please bear in mind to allow 3 working days before
                      it appears on your Vault's balance.
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
                      No, there will be no registration fee.
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
                      the product requests will automatically remove. 
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
                      the contract) and Bitcoin payment. For investment coming 
                      from areas in lack of transaction feasibility, please
                      notify our staff for additional assistance.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading9">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(8)}
                      aria-expanded={this.state.accordion[8]}
                      aria-controls="collapse9"
                    >
                      <h5 className="m-0 p-0">
                        When is the deadline of payment?
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[8]}
                    data-parent="#accordion"
                    id="collapse9"
                  >
                    <CardBody>
                      You may choose to make the payment anytime before the 
                      deadline indicated on the information page, as long as 
                      the investment window is still open.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading10">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(9)}
                      aria-expanded={this.state.accordion[9]}
                      aria-controls="collapse10"
                    >
                      <h5 className="m-0 p-0">Acknowledgement of payment</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[9]}
                    data-parent="#accordion"
                    id="collapse10"
                  >
                    <CardBody>
                      Payment will be confirmed
                      within 3 working days. If you don't received any confirmation
                      in your Message Box within 4
                      working days, you may call us immediately, delays may due
                      to a large number of tickets that we are responding.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading12">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(11)}
                      aria-expanded={this.state.accordion[11]}
                      aria-controls="collapse12"
                    >
                      <h5 className="m-0 p-0">
                        Receiving of notarized contract
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[11]}
                    data-parent="#accordion"
                    id="collapse12"
                  >
                    <CardBody>
                      Notarized Contracts will be sent at Message Centre within
                      the month of the start of the real farming.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading13">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(12)}
                      aria-expanded={this.state.accordion[12]}
                      aria-controls="collapse13"
                    >
                      <h5 className="m-0 p-0">
                        Return of investment differences
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[12]}
                    data-parent="#accordion"
                    id="collapse13"
                  >
                    <CardBody>
                      Sales profit will depend on the crops/livestocks produce,
                      quantity, quality and price market.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading14">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(13)}
                      aria-expanded={this.state.accordion[13]}
                      aria-controls="collapse14"
                    >
                      <h5 className="m-0 p-0">Profit Distribution</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[13]}
                    data-parent="#accordion"
                    id="collapse14"
                  >
                    <CardBody>
                     Profit distribution is on an Investor First basis. We 
                     are grateful for every GTAer’s contribution to making 
                     agriculture great again, therefore we strive to protect 
                     the interests and benefits of our funders. The profit will 
                     be used to first pay off the investors’ invested capital 
                     first, based on their share of investment. The remaining/net 
                     profit (Gross Profit - Investment) will be distributed 
                     between Investor/Farmer/GTA at 50/30/20 respectively.

                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading15">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(14)}
                      aria-expanded={this.state.accordion[14]}
                      aria-controls="collapse15"
                    >
                      <h5 className="m-0 p-0">How can I withdraw my money?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[14]}
                    data-parent="#accordion"
                    id="collapse15"
                  >
                    <CardBody>
                    Withdrawal request can be made at anytime. 
                    Submission of withdrawal request can be send directly 
                    using your GTA account. Just log in to your account. Click 
                    the withdraw button at the bottom of the Vault Summary. 
                    Enter the amount you want to withdraw then submit. If you 
                    are using someone's bank account attach a copy of authorization 
                    letter from the account owner then submit your request. 
                    Kindly update your profile to fill up your bank details/money 
                    remittance details. To protect our investors security, 
                    money will be only withdrawn to the registered banking 
                    details in our investor profile page.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading16">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(15)}
                      aria-expanded={this.state.accordion[15]}
                      aria-controls="collapse16"
                    >
                      <h5 className="m-0 p-0">
                        When will I received the money I withdraw?
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[15]}
                    data-parent="#accordion"
                    id="collapse16"
                  >
                    <CardBody>
                      Withdrawal Requests are processed in the order of occurence.
                      The fund will be arrive at the designated address within 10 working days
                      after the submission has been made.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading17">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(16)}
                      aria-expanded={this.state.accordion[16]}
                      aria-controls="collapse17"
                    >
                      <h5 className="m-0 p-0">How can I contact you?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[16]}
                    data-parent="#accordion"
                    id="collapse17"
                  >
                    <CardBody>
                      You can contact us through message center, call us at
                      (+86)15549443821 or (+86)111 222 3333 or visit us at our
                      main office located at #555 Shanghai, China. You can also
                      contact us on our Facebook page but our response may be
                      delayed.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading19">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(18)}
                      aria-expanded={this.state.accordion[18]}
                      aria-controls="collapse19"
                    >
                      <h5 className="m-0 p-0">
                        What is the best product to invest in?
                      </h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[18]}
                    data-parent="#accordion"
                    id="collapse19"
                  >
                    <CardBody>
                      The best product to invest in is the Rice Crop. Why?
                      Because, GTA has complete technology for the production
                      of good quality rice from planting, harvesting, milling,
                      up to packaging. GTA also has a large number of rice
                      growers or farmers registered to be funded by GTAers.
                      The ROI of rice is estimated from 10% to 20%.
                    </CardBody>
                  </Collapse>
                </Card>

                <Card className="mb-0">
                  <CardHeader id="heading20">
                    <Button
                      block
                      color="link"
                      className="text-left m-0 p-0"
                      onClick={() => this.toggleAccordion(19)}
                      aria-expanded={this.state.accordion[19]}
                      aria-controls="collapse20"
                    >
                      <h5 className="m-0 p-0">Why rice?</h5>
                    </Button>
                  </CardHeader>
                  <Collapse
                    isOpen={this.state.accordion[19]}
                    data-parent="#accordion"
                    id="collapse20"
                  >
                    <CardBody>
                      Rice has been a staple of Filipino diet since time and
                      memorial. GTA offers Rice product to be funded due to
                      high and steady demand since Filipinos eat rice every day.
                      Furthermore, the following reasons should be regarded as
                      basis for the production of rice:  • GTA serves over a
                      thousand farmers that are in need of capital investment on
                      the production of rice.  • Although rice undergoes a lot
                      of processes before going to market, it only requires
                      minimal marketing because consumers are already familiar
                      with the product.  • Despite the fact that the quality of
                      rice deteriorates after three months; it does not spoils
                      easily as those of the vegetable products offered for the
                      last cycles.  • GTA also invests on post-harvest
                      facilities to ensure the quality of rice. We at GTA
                      Agri-Community Corp., would like to take part on the
                      contribution for higher rice production and be the leader
                      of the movement for Philippines to be a rice sufficient
                      country and we believe that without you, this will not be
                      possible. 
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
