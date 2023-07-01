import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import push from "../assets/projects/push-notification.jpg";
import moniter from "../assets/projects/moniterinh-lerting.jpg";
import kongplugin from "../assets/projects/kong-plugin.jpg";
import token from "../assets/projects/token-exchange.png";
import chat from "../assets/projects/chat-with-ai.jpg";
import yt from "../assets/projects/yt.jpg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kongplugin}
              isBlog={false}
              title="Kong Plugin: Prevent SQL injuction and XSS Attack"
              description="SQL injection is a type of attack where an attacker inserts malicious SQL code into a web application's input fields or parameters, which can then be executed by the application's database. This can allow the attacker to access sensitive information or manipulate the database in unintended ways.

              Similarly, cross-site scripting (XSS) is a type of attack where an attacker injects malicious scripts into a web application, which are then executed by unsuspecting users who visit the affected page. This can allow the attacker to steal sensitive user data or perform actions on the user's behalf.
              
              To prevent these types of attacks, the security plugin you are describing likely intercepts incoming HTTP requests to the web application and scans the request body for any potentially malicious SQL code or scripts. If any such code or scripts are detected, the plugin will block the request and return a 400 bad request error, indicating that the request was malformed or contained malicious code.
              
              If no malicious code or scripts are detected, the plugin will allow the request to proceed to the upstream server, which will process the request and return a response. The security plugin will then inspect the response from the upstream server to ensure that it does not contain any malicious code or scripts before sending it back to the user."
              ghLink="https://github.com/arockiyastephenl/kong-prevent-SQL-XSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={push}
              isBlog={false}
              title="Push Notification"
              description="We use the pushgateway to solve the problem of monitoring short-lived or batch jobs in a pull-based monitoring system. In a pull-based system, the monitoring system pulls metrics data from the monitored targets. However, short-lived or batch jobs that run for a short period of time do not have enough time for the monitoring system to pull data from them before they terminate. This leads to a gap in the monitoring data, which can make it difficult to troubleshoot issues.

              The pushgateway solves this problem by allowing jobs to push their metrics data to the gateway, which acts as an intermediary between the job and the monitoring system. The pushgateway buffers the metrics data until the monitoring system is ready to collect it. This ensures that the monitoring system has access to all the data, even from short-lived or batch jobs.
              
              Another benefit of using the pushgateway is that it reduces the load on the monitoring system. Instead of the monitoring system constantly polling for data, the pushgateway acts as a buffer, reducing the number of requests the monitoring system needs to make. This improves the scalability of the monitoring system, as it can handle more monitored targets without being overloaded."
              ghLink="https://github.com/arockiyastephenl/push-notfication"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={moniter}
              isBlog={false}
              title="Monitoring and Alerting"
              description="Monitoring and alerting refer to the process of continuously tracking and analyzing system metrics and data in real-time to detect and alert on various types of issues or anomalies. Monitoring involves collecting and analyzing data from various sources such as servers, networks, applications, and services, while alerting involves notifying IT teams of issues or events that require immediate attention or remediation.
              Monitoring and alerting tools are used to help ensure the reliability and availability of computer systems, networks, and applications. These tools are designed to detect and alert on various types of events and issues, such as system failures, errors, performance degradation, security threats, and other anomalies.
              Prometheus collects the metrics data from the different sources using its powerful query language, PromQL, which allows users to easily query and analyze collected metrics."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={token}
              isBlog={false}
              title="Keycloak Token Exchange"
              description=" Keycloak Token Exchange is a powerful feature that allows for secure and controlled exchange of authentication and authorization tokens between clients and services within a Keycloak-protected ecosystem.

              With Keycloak Token Exchange, clients can request an access token or an authorization token from Keycloak, which they can then exchange for a different type of token. This enables clients to obtain specialized tokens that can be used to access specific services or resources.
              
              The Token Exchange process involves the client presenting its initial token to Keycloak, along with any required additional information or scopes. Keycloak then validates the token, checks the requested scopes, and issues a new token with the appropriate permissions and attributes.
              This feature is particularly useful in scenarios where a client needs to access different services or resources with varying levels of authorization. It eliminates the need for clients to manage multiple sets of credentials and simplifies the authentication and authorization process.

Keycloak Token Exchange provides enhanced security by centralizing token management and ensuring that only authorized parties can request and obtain tokens. It also offers flexibility and scalability in managing access to protected resources within a Keycloak-secured environment."
              ghLink="https://github.com/arockiyastephenl/keycloak-token-exchange"
              // demoLink="https://avanishsri31.github.io/Drum-Kit-Project.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="Chat with AI"
              description="A cutting-edge chat bot with AI, developed using React, showcases my expertise in creating intelligent and interactive web applications. By leveraging React's powerful frontend capabilities, I have seamlessly integrated AI technologies to deliver a dynamic and engaging user experience.

              This chat bot harnesses the power of Natural Language Processing (NLP) and machine learning algorithms to understand and respond intelligently to user queries. It can handle a wide range of conversations, providing accurate and contextually relevant information.
              
              With React's component-based architecture, I have built a user-friendly interface that offers real-time chat functionality. Users can easily interact with the chat bot, receiving prompt and personalized responses that cater to their specific needs.
              
              To enhance the AI capabilities, I have integrated popular libraries such as TensorFlow.js or Hugging Face's Transformers. These technologies empower the chat bot to learn and adapt, improving its conversational skills over time."
              ghLink="https://github.com/arockiyastephenl/chat-with-ai"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yt}
              isBlog={false}
              title="Youtube audio to Text Converter"
              description="Streamlit, a versatile Python library, empowers developers to effortlessly create interactive web applications for various tasks, including audio-to-text conversion. With its user-friendly design, I have harnessed Streamlit to build a seamless and efficient audio-to-text application.

              Through the integration of popular speech recognition APIs, such as Google Cloud Speech-to-Text or IBM Watson Speech to Text, my Streamlit app can transcribe audio files into accurate and editable text. Users can simply upload audio files in various formats and receive real-time transcriptions with impressive accuracy.
              
              The Streamlit interface features a clean and intuitive design, allowing users to easily upload their audio files, view the transcription progress, and access the final text output.
              
              To enhance user experience, I have included options for language selection, enabling the app to handle multilingual audio files. Moreover, users can adjust settings like confidence threshold and transcription speed, tailoring the output to their specific preferences.
              
              To ensure data privacy and security, I have integrated encryption mechanisms, protecting sensitive audio files during the transcription process."
              ghLink="https://github.com/arockiyastephenl/yt-audio-to-text"
              demoLink="https://drive.google.com/file/d/1UpHwpX0TMuXPi1LDwxasG-gm3422XmwQ/view"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;
