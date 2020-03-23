import React from "react";

class Resume extends React.Component {
  render() {
    return (
      <section id="resume">
        {/* Education
----------------------------------------------- */}
        <div className="d-flex justify-content-center">
          <div className="row education d-flex justify-content-center">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Pontificia Universidad Javeriana</h3>
                  <p className="info">
                    Bachelor's degree in electronic engineering<span>•</span>{" "}
                    <em className="date">January 2015 - Present</em>
                  </p>
                  <p>
                    I emphasize controls and energy, so automation and the
                    internet of things have caught my attention. I stand out for
                    my good grades, for this I have an average of 4.11. Teamwork
                    has been essential from the beginning, because in many of
                    the subjects projects have to be developed in groups. Also,
                    I attend the gym in a disciplined way and participate in the
                    classes they teach.
                  </p>
                  <br></br>
                </div>
              </div>{" "}
              {/* item end */}
              <div className="row item">
                <div className="twelve columns">
                  <h3>Escuela Tecnológica Instituto Técnico Central</h3>
                  <p className="info">
                    Technical diplona in systems <span>•</span>{" "}
                    <em className="date">January 2010 - December 2015</em>
                  </p>
                  <p>
                    At school I chose systems because of my passion for
                    technology and took my first steps in programming languages
                    and networks.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
        </div>
        {/* End Education */}
        {/* Work
----------------------------------------------- */}
        <div className="d-flex justify-content-center">
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  <h3>Pontificia Universidad Javeriana</h3>
                  <p className="info">
                    Proyecto social universitario <span>•</span>{" "}
                    <em className="date">February 2020 - Present</em>
                  </p>
                  <p>
                    Responsible for giving classes to vulnerable communities on
                    basic electronics and pre-ICFES, also guiding them in their
                    life project creating short, medium and long term goals.
                  </p>
                </div>
              </div>{" "}
              {/* item end */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End Work */}
        </div>
        {/* Skills
        
----------------------------------------------- */}
        <div className="d-flex justify-content-center">
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <p>
                Throughout university and college I have learned different
                programming languages and software management. As also
                autonomously I did courses on development of front-end web pages
              </p>
              <div className="bars">
                <ul className="skills">
                  <li>
                    <span className="bar-expand photoshop" />
                    <em>Python</em>
                  </li>
                  <li>
                    <span className="bar-expand css" />
                    <em>Microcontrollers programming (Arduino)</em>
                  </li>
                  <li>
                    <span className="bar-expand wordpress" />
                    <em>HTML/CSS/JavaScript/React JS</em>
                  </li>
                  <li>
                    <span className="bar-expand css" />
                    <em>Pspice Orcad (Circuit design)</em>
                  </li>
                  <li>
                    <span className="bar-expand html5" />
                    <em>C/C++</em>
                  </li>
                  <li>
                    <span className="bar-expand jquery" />
                    <em>CCTV/NFPA 72 (Building automation)</em>
                  </li>
                </ul>
              </div>
              {/* end skill-bars */}
            </div>{" "}
            {/* main-col end */}
          </div>{" "}
          {/* End skills */}
        </div>
      </section>
    );
  }
}

export default Resume;
