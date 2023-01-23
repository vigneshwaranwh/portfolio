import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";

import Particle from "../Particle";

import audio_player from "../../Assets/Projects/audio_player.png";

function Projects() {

    return (

        <Container fluid className="project-section">

            <Particle/>

            <Container>

                <h1 className="project-heading">

                    My Recent <strong className="purple">Works </strong>

                </h1>

                <p style={{ color: "white" }}>

                    Here are a few projects I've worked on recently.

                </p>

                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

                    <Col md={4} className="project-card">

                        <ProjectCard

                            imgPath={audio_player}

                            isBlog={false}

                            title="3D Audio Player"

                            ghLink="https://github.com/vigneshwaranwh/3D-Audio-Player"

                            demoLink="https://vigneshwaranwh.github.io/3D-Audio-Player/"

                        />

                    </Col>

                </Row>

            </Container>

        </Container>

    );

}

export default Projects;