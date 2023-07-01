import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Arockiya Stephen </span>
                 and I'm from <span className="yellow"> Kallakurichi, Tamilnadu, India.</span>
                <br />
                <br />
                I have been employed at Colakin Pvt for the past two years, where I have gained valuable experience and contributed to the growth and success of the company. During my tenure, I have actively participated in various projects and acquired a range of professional skills.
                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack developer,</b>  
                  I thrive on embracing new challenges and continually expanding my skillset. With a strong passion for both front-end and back-end development, I am dedicated to delivering high-quality solutions that meet the evolving needs of businesses and end-users.                 
                   <br />
                   Throughout my career, I have consistently demonstrated my ability to effectively navigate the complexities of full-stack development. By seamlessly integrating my knowledge of front-end technologies, such as HTML, CSS, JavaScript and React with my expertise in back-end frameworks and languages like Python, Java and Node.js I have successfully created robust and scalable applications.
                   <br/>
                   <span className="yellow">Docker:</span> I am proficient in containerization using Docker, allowing for the efficient deployment and scaling of applications across different environments. With Docker, I ensure consistency and portability in software delivery, facilitating seamless collaboration and deployment processes.
                   <br/>
                   <span className="yellow">Elasticsearch:</span>  I have experience working with Elasticsearch, a powerful search and analytics engine. Leveraging Elasticsearch, I enable fast and accurate data retrieval, indexing, and search functionalities in applications, enhancing the overall user experience.
                   <br/>
                   <span className="yellow">Keycloak:</span>  I have utilized Keycloak, an open-source identity and access management solution, to implement secure authentication and authorization mechanisms in applications. With Keycloak, I ensure the protection of sensitive data and seamless user management, providing a smooth and secure user experience.
                   <br/>
                   <span className="yellow">Kong API Gateway:</span>  I have worked with Kong API Gateway to manage and secure APIs in a microservices architecture. By utilizing Kong, I enable API traffic control, authentication, rate limiting, and other important functionalities, ensuring the reliable and secure communication between services.
                   <br/>
                   <span className="yellow">Grafana:</span>   I have employed Grafana, a powerful open-source analytics and visualization platform, to create insightful dashboards and monitor key metrics in real-time. With Grafana, I enable data-driven decision-making, providing stakeholders with valuable insights into the performance and behavior of applications.
                   <br/>
                   <span className="yellow">Queueing technologies (RabbitMQ, Kafka):</span>    I have worked with RabbitMQ and Kafka, popular message queueing technologies, to enable reliable and asynchronous communication between distributed systems. By implementing message queuing, I ensure scalability, fault tolerance, and efficient data processing in complex architectures.
                   <br/>
                   <span className="yellow">Databases (MySQL, MongoDB, PostgreSQL):</span>   I have extensive experience working with diverse databases, including MySQL, MongoDB, and PostgreSQL. By leveraging these database technologies, I design efficient data models, implement data storage and retrieval functionalities, and ensure data integrity and security.
                   <br/>
                   <span className="yellow"> Developed Kong Plugin:</span>    I have successfully designed and implemented a robust Kong plugin specifically aimed at preventing XSS (Cross-Site Scripting) and SQL injection attacks. This plugin serves as a powerful security measure to safeguard applications against these common vulnerabilities.
                   <br/>
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/arockiyastephenl"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://twitter.com/ArockiyaSt67929"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="twitter"
                    >
                      <AiOutlineTwitter />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/arockiya-stephen-29302216b/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/arockiya_stephen/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About