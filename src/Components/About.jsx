/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/people-walking.jpg";

const imageAltText = "Aerial view photography of group of people walking on gray and white pedestrian lane";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a BTech Information Technology and Communications student studying at " + 
  "the Durban University of Technology. I create occasionally build the simple " + 
  "app using the Power Platforms' Power Apps and Power Automate. " +
  "I discovered an interest in UI/UX design as a result of building Power Apps, " + 
  "so every now and then I dabble on designing the simple UI. " +
  "I also have an interest in animation, a skill I will hopefully learn in the near future.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Power Apps",
  "Power Automate",
  "User experience",
  "User interface",
  "Animation"
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Keen on using my skillset to streamline complicated \
   operations and producing solutions that are functional and effective.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
