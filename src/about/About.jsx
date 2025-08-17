import React from "react";
import "./about.css";

const About = () => {
    return (
        <div className="about">
        <h1>About CodeMine Technologies</h1>
            <div className="about-container">
                
                <div className="aboutInformation">
                <p>
                    At Codemine IT Solutions, we specialize in delivering cutting-edge IT
                    services to help businesses thrive in the digital age. Our team of
                    experts is dedicated to providing innovative, scalable, and secure
                    solutions tailored to your unique needs.
                </p>
                <p>
                    With years of experience in the industry, we pride ourselves on
                    offering exceptional customer service and technical expertise. Let us
                    help you achieve your business goals with our reliable IT solutions.
                </p>
                </div>
            
            <div className="aboutImageContainer">
                <img src="about1.png" alt="About Us" className="aboutImage"/>
            </div>
            </div>
        </div>
    );
};

export default About;