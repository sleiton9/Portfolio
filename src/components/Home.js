import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">I'm Sebastian G. Leiton</h1>
          <h3>
            I'm a <span>electronic engineer</span> in training with an emphasis
            on controls and energy from the
            <span> Pontificia Universidad Javeriana</span>. IoT and sports
            lover. Let's{" "}
            <a className="smoothscroll" href="#about">
              start scrolling{" "}
            </a>
            and learn more{" "}
            <a className="smoothscroll" href="#about">
              about me
            </a>
            .
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/sebas.g.leiton"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/sebastián-garzón-leiton-aa76b91a4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/sleiton9/?hl=es-la"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
