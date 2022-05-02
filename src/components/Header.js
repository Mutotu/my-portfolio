import { useNavigate } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";

import logo from "../images/logo.svg";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className='navigation'>
      <Container fluid>
        <div className='container-fluid'>
          <Row>
            <div className='row'>
              <Col>
                <div className='col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center'>
                  <div className='logo'>
                    <p onClick={() => navigation("/")}>
                      <img src={logo}></img>
                    </p>
                  </div>
                </div>

                <div className='col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right'>
                  <div className='primary-nav'>
                    <ul>
                      <li onClick={() => navigation("/")}>Home</li>
                      <li onClick={() => navigation("/portfolio")}>
                        Portfolio
                      </li>
                      <li onClick={() => navigation("/contact")}>Contact</li>
                    </ul>
                  </div>
                </div>
              </Col>
            </div>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Header;
