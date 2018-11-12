import React, { Component } from "react";
import {
  Row,
  Col,
  Collapse,
  NavItem,
  NavbarToggler,
  Navbar,
  NavbarNav,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Card,
  CardBody,
  Fa,
  Button,
  Input
} from "mdbreact";
import facebook from "../../assets/facebook.png";
import zillow from "../../assets/zillow.jpg";

class DataPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="flexible-navbar" light expand="md" scrolling>
          <NavbarToggler onClick={this.onClick} />
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              <NavItem>
                <a
                  className="nav-link navbar-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Fa icon="life-buoy grey-text" />
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link navbar-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Fa icon="comments grey-text" />
                </a>
              </NavItem>
              <NavItem>
                <a
                  className="nav-link navbar-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Fa icon="bell grey-text" />
                </a>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle nav caret>
                    Joe Doe
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="/data">Data</DropdownItem>
                    <DropdownItem href="/home/dashboard">
                      Dashboard
                    </DropdownItem>
                    <DropdownItem href="/product">Sign Out</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
              <NavItem>
                <img
                  className="avatar"
                  alt="avatar"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg"
                />
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
        <Row className="d-flex justify-content-around p-5">
          <Col lg="4" className="p-3 animated fadeInLeft">
            <Row className="d-flex justify-content-center mt-5">
              <Fa icon="check-circle blue-text" size="5x" />
            </Row>
            <br />
            <Row>
              <h1>Confirm your data.</h1>
            </Row>
            <br />
            <Row>
              <h5>Excepteur sint occaecat cupidatat non</h5>
            </Row>
            <br />
            <Row>
              <p className="font-weight-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quiepakis nostrud exercitation ullamco
                laboris nsi ut aliquip ex ea comepmodo consetquat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cfgillum
                dolore eutpe fugiat nulla pariatur.
              </p>
              <br />
              <p className="font-weight-light">
                Excepteur sint occaecat cupidatat non proident, sunt inpeku
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Row>
          </Col>
          <Col lg="5">
            <Card className="mt-4 animated zoomIn">
              <Row>
                <Col>
                  <CardBody className="form">
                    <Row className="d-flex align-items-baseline">
                      <Col lg="2">
                        <img className="avatar" alt="avatar" src={zillow} />
                      </Col>
                      <Col lg="4">
                        <p className="blue-text">Zillow</p>
                      </Col>
                      <Col lg="4">
                        <p className="blue-text">1h ago</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Annual Investment" value="$100,000" />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Commission Split" value="60%" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Total Leads" value="200" />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Total Closings" value="5" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Home Price" value="$450,000" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <a href="/home">
                          <Fa icon="plus-circle blue-text" size="2x" />
                        </a>
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
              </Row>
            </Card>
            <Card className="mt-4 animated zoomIn">
              <Row>
                <Col>
                  <CardBody className="form">
                    <Row className="d-flex align-items-baseline">
                      <Col md="2">
                        <img className="avatar" alt="avatar" src={facebook} />
                      </Col>
                      <Col md="4">
                        <p className="blue-text">Facebook</p>
                      </Col>
                      <Col md="4">
                        <p className="blue-text">1h ago</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Annual Investment" value="$100,000" />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Commission Split" value="60%" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Total Leads" value="200" />
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Total Closings" value="5" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <div className="md-form mb-0">
                          <Input label="Home Price" value="$450,000" />
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="d-flex justify-content-center">
                        <a href="/home">
                          <Fa icon="plus-circle blue-text" size="2x" />
                        </a>
                      </Col>
                    </Row>
                  </CardBody>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default DataPage;
