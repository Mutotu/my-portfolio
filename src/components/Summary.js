import { Col, Row } from "react-bootstrap";
import developerSvg from "../images/developerdesign.svg";
import responsiveSvg from "../images/responsivedesign.svg";
import innovativeSvg from "../images/innovativesolutions.svg";
import passionSvg from "../images/passion.svg";

const Summary = () => {
  return (
    <div className='summary'>
      <Col fluid={"true"}>
        <Row>
          <Col className='summary-block' sm={12} md={6}>
            <Col sm={12} md={2}>
              <div className='development-img'>
                <img className='img-responsive' src={developerSvg}></img>
              </div>
            </Col>
            <Col sm={12} md={2}>
              <div className='col-sm-4 col-md-4'>
                <div className='development-description'>
                  <h3>Development and Design</h3>
                  <p>
                    I aim to put my creativity to the test, designing and
                    building unique, meaningful products for clients or merely
                    for my own interests.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className='summary-block' sm={12} md={6}>
            <Col sm={12} md={2}>
              <div className='development-img'>
                <img className='img-responsive' src={developerSvg}></img>
              </div>
            </Col>
            <Col sm={12} md={2}>
              <div className='col-sm-4 col-md-4'>
                <div className='development-description'>
                  <h3>Development and Design</h3>
                  <p>
                    I aim to put my creativity to the test, designing and
                    building unique, meaningful products for clients or merely
                    for my own interests.
                  </p>
                </div>
              </div>
            </Col>
          </Col>
        </Row>
      </Col>

      {/* <Col fluid>
        <Row>
          <div className='row'>
            <Col className='summary-block' sm={12} md={6}>
              <Col sm={12} md={2}>
                <div className='development-img'>
                  <img className='img-responsive' src={developerSvg}></img>
                </div>
              </Col>

              <Col sm={12} md={2}>
                <div className='col-sm-4 col-md-4'>
                  <div className='development-description'>
                    <h3>Development and Design</h3>
                    <p>
                      I aim to put my creativity to the test, designing and
                      building unique, meaningful products for clients or merely
                      for my own interests.
                    </p>
                  </div>
                </div>
              </Col>
            </Col>
            <Col className='summary-block' sm={12} md={6}>
              <Col sm={12} md={2}>
                <div className='responsive-summary'>
                  <div className='col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2'>
                    <div className='responsive-img'>
                      <img className='img-responsive' src={responsiveSvg}></img>
                    </div>
                  </div>

                  <div className='col-sm-4 col-md-4'>
                    <div className='responsive-description'>
                      <h3>Responsive Layouts</h3>
                      <p>
                        Development and design isn't merely putting information
                        on the site or preferred media outlet. I organize
                        content and present information in an engaging fashion,
                        driving new and unique layouts in tandem with novel
                        solutions and cool animations.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Col>
          </div>
        </Row>
        <div className='row'>
          <div className='ideas-summary'>
            <div className='col-sm-1 col-md-1'>
              <div className='idea-img'>
                <img className='img-responsive' src={innovativeSvg}></img>
              </div>
            </div>

            <div className='col-sm-4 col-md-4'>
              <div className='idea-description'>
                <h3>Ideas and Solutions</h3>
                <p>
                  There are still many problems that exist in today's society,
                  including laziness. Luckily, I hope to combat these issues by
                  innovating, developing easy-to-use programs, solutions, or
                  products.
                </p>
              </div>
            </div>
          </div>

          <div className='passion-summary'>
            <div className='col-sm-1 col-md-1 col-sm-offset-2 col-md-offset-2'>
              <img className='img-responsive' src={passionSvg}></img>
            </div>

            <div className='col-sm-4 col-md-4'>
              <div className='passion-description'>
                <h3>Passion and Dedication</h3>
                <p>
                  With my profound interest and commitment to my field of study,
                  my projects rarely go unfinished and my problems are never
                  left unresolved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Col> */}
    </div>
  );
};

export default Summary;
