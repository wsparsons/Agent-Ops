import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  View,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Button,
  Fa
} from "mdbreact";
import facebook from "../../assets/facebook.png";
import zillow from "../../assets/zillow.jpg";
import realtor from "../../assets/realtor.jpg";
import google from "../../assets/google.png";

class ProductPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Row className="justify-content-center p-5">
          <Col lg="6">
            <section>
              <Row className="d-flex justify-content-center">
                <Col md="3" lg="6" className="mb-1">
                  <Card className="d-flex mb-3 example hoverable z-depth-5">
                    <CardBody>
                      <CardTitle>Realtor.com</CardTitle>
                      <CardText>Lorem ipsum dolor sit amet.</CardText>
                    </CardBody>
                    <View zoom>
                      <img src={realtor} className="img-fluid" />
                    </View>
                    <CardFooter className="font-small">
                      <a>
                        <Fa icon="heart-o" className="mr-1" />
                        608
                      </a>
                      <a>
                        <Fa icon="minus-square-o" className="ml-3 mr-1" />
                        120
                      </a>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3" lg="6" className="mb-1">
                  <Card className="d-flex mb-3 example hoverable z-depth-5">
                    <CardBody>
                      <CardTitle>Zillow</CardTitle>
                      <CardText>Lorem ipsum dolor sit amet.</CardText>
                    </CardBody>
                    <View zoom>
                      <img src={zillow} className="img-fluid" />
                    </View>
                    <CardFooter className="font-small">
                      <a>
                        <Fa icon="heart-o" className="mr-1" />
                        608
                      </a>
                      <a>
                        <Fa icon="minus-square-o" className="ml-3 mr-1" />
                        120
                      </a>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <Row className="d-flex justify-content-center">
                <Col md="3" lg="6" className="mb-1">
                  <Card className="d-flex mb-3 example hoverable z-depth-5">
                    <CardBody>
                      <CardTitle>Facebook</CardTitle>
                      <CardText>Lorem ipsum dolor sit amet.</CardText>
                    </CardBody>
                    <View zoom>
                      <img src={facebook} className="img-fluid" />
                    </View>
                    <CardFooter className="font-small">
                      <a>
                        <Fa icon="heart-o" className="mr-1" />
                        608
                      </a>
                      <a>
                        <Fa icon="minus-square-o" className="ml-3 mr-1" />
                        120
                      </a>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="3" lg="6" className="mb-1">
                  <Card className="d-flex mb-3 example hoverable z-depth-5">
                    <CardBody>
                      <CardTitle>Google</CardTitle>
                      <CardText>Lorem ipsum dolor sit amet.</CardText>
                    </CardBody>
                    <View zoom>
                      <img src={google} className="img-fluid" />
                    </View>
                    <CardFooter className="font-small">
                      <a>
                        <Fa icon="heart-o" className="mr-1" />
                        608
                      </a>
                      <a>
                        <Fa icon="minus-square-o" className="ml-3 mr-1" />
                        120
                      </a>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </section>
          </Col>
          <Col lg="6" className="d-flex align-items-center">
            <Row className="p-5">
              <h1>Where are you buying online leads from?</h1>
              <hr />
              <p className="font-weight-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut ero labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
              <Button color="elegant" href="/data">
                Login
              </Button>
              <Button outline color="elegant" href="/data">
                Sign Up
              </Button>
            </Row>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default ProductPage;
