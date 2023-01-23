import React from "react";

import Card from "react-bootstrap/Card";

import { ImPointRight } from "react-icons/im";

function AboutCard() {

    return (

        <Card className="quote-card-view">

            <Card.Body>

                <blockquote className="blockquote mb-0">

                    <p style={{ textAlign: "justify" }}>

                        Hi Everyone, I am <span className="purple">Vigneshwaran </span>

                        from <span className="purple"> Tamilnadu, India.</span>

                        <br/>
            
                        <br/>
        
                        Working as a <span className="purple"> Software Developer </span> at  <span className="purple">HCL Technologies </span>

                        <br/>

                        <br/>

                        Apart from coding, some other activities that I love to do!

                    </p>

                    <ul>

                        <li className="about-activity">

                            <ImPointRight/> Badminton

                        </li>

                        <br/>

                        <li className="about-activity">

                            <ImPointRight/> Coding

                        </li>

                        <br/>

                        <li className="about-activity">

                            <ImPointRight/> Travelling

                        </li>

                        <br/>

                    </ul>
    
                    <p style={{ color: "rgb(155 126 172)" }}>

                        "Strive to build things that make a difference!"{" "}

                    </p>

                    <footer className="blockquote-footer">Vigneshwaran</footer>

                </blockquote>

            </Card.Body>    

        </Card>

    );

}

export default AboutCard;