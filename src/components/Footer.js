import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import {

    AiFillGithub,

    AiFillInstagram,

} from "react-icons/ai";

import {
  
    FaLinkedinIn,
  
    FaFacebook,
  
} from "react-icons/fa";
  
function Footer() {
  
    let date = new Date();
  
    let year = date.getFullYear();

    return (

        <Container fluid className="footer">

            <Row>

                <Col md="4" className="footer-copywright">

                    <h3>Designed and Developed by Vigneshwaran</h3>

                </Col>

                <Col md="4" className="footer-copywright">

                    <h3>Copyright © {year} </h3>

                </Col>

                <Col md="4" className="footer-body">

                    <ul className="footer-icons">

                        <li className="social-icons">

                            <a

                                href="https://github.com/vigneshwaranwh"

                                style={{ color: "white" }}

                                target="_blank" 

                                rel="noopener noreferrer"

                            >

                                <AiFillGithub/>

                            </a>

                        </li>

                        <li className="social-icons">

                            <a

                                href="https://www.linkedin.com/in/vigneshwaranwh/"

                                style={{ color: "white" }}

                                target="_blank" 

                                rel="noopener noreferrer"

                            >

                                <FaLinkedinIn/>

                            </a>

                        </li>

                        <li className="social-icons">

                            <a

                                href="https://www.instagram.com/vigneshwaranwh/"

                                style={{ color: "white" }}

                                target="_blank" 

                                rel="noopener noreferrer"

                            >

                                <AiFillInstagram/>

                            </a>
              
                        </li>

                        <li className="social-icons">

                            <a

                                href="https://www.facebook.com/vigneshwaranwh/"

                                style={{ color: "white" }}

                                target="_blank" 

                                rel="noopener noreferrer"

                            >

                                <FaFacebook/>

                            </a>
                
                        </li>

                    </ul>

                </Col>

            </Row>

        </Container>

    );

}

export default Footer;