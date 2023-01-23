import React from "react";

import { Col, Row } from "react-bootstrap";

import {

    FaAngular,

    FaGithub,

} from "react-icons/fa";

import {

    DiJava,
  
    DiJavascript1,
  
    DiReact,
  
    DiNodejs,
  
    DiMongodb,
  
    DiPython,
  
    DiGit,
  
    DiScala,
  
} from "react-icons/di";

function Techstack() {

    return (
  
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiJava/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiJavascript1/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <FaAngular/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiReact/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiNodejs/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiPython/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiScala/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiMongodb/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <DiGit/>
  
            </Col>
  
            <Col xs={4} md={2} className="tech-icons">
  
                <FaGithub/>
  
            </Col>
  
        </Row>
  
    );
  
}
  
export default Techstack;