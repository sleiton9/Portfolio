import React from "react";
import Profile from "../images/profilepic.jpg";

class About extends React.Component {
  render() {
    return (
      <div id="about" className="d-flex justify-content-center">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={Profile} alt="Profile" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
            I am an electronic engineer in training with an emphasis on controls and energy from the Pontificia Universidad Javeriana. I have knowledge in programming languages such as: C ++, Python and JavaScript. I have independently learned the web page design on the front end using the React JS library. I speak the English language and I also excel in project innovation.
I am related to sports, which is why I am known for working as a team, and also for being very disciplined. I am interested in the area of internet of things and building automation.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Sebastián Garzón Leiton</span>
                  <br />
                  <span>
                    Colombia, Bogotá
                    <br />
                    Fontibón
                  </span>
                  <br />
                  <span>+57 3057724580</span>
                  <br />
                  <span>sebas_garzon@hotmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://1drv.ms/b/s!Au3vsOe8MhL7dyVxXiYg6LhCYEg?e=k0OxrZ" className="button"  target="_blank"
                rel="noopener noreferrer">
                    <i className="fa fa-download" />
                    Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
