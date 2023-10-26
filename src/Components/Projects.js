import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpeg";
import projImg2 from "../assets/img/project2.jpeg";
import projImg3 from "../assets/img/project3.jpeg";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Project 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Project 1",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Project 2",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Project 3",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Projects</h2>
                <p>My name is Nourhan Samy, i live in damanhour, this is the first project in react.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">1st Section</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">2nd Section</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">3rd Section</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>My name is Nourhan Samy, i live in damanhour, this is the first project in react.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>My name is Nourhan Samy, i live in damanhour, this is the first project in react.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}