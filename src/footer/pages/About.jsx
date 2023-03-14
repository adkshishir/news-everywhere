import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Us</h1>

      <p>
        Welcome to our news website! We are dedicated to bringing you the latest
        news and information from around the world.
      </p>

      <h2>Our Team</h2>

      <p>
        Our team is made up of experienced journalists and editors who are
        passionate about delivering high-quality news content. We have a diverse
        range of backgrounds and expertise, allowing us to cover a wide range of
        topics and perspectives.
      </p>

      <h2>Our Mission</h2>

      <p>
        Our mission is to provide accurate, timely, and unbiased news coverage
        to our readers. We believe in the importance of journalism in promoting
        transparency, accountability, and informed decision-making.
      </p>

      <h2>Contact Us</h2>

      <p>
        If you have any questions or comments, please don't hesitate to contact
        us at:
        <Link to="/contact"> Contact</Link>
      </p>
    </>
  );
};

export default About;
