import {} from "react";
import projImg1 from "../assets/img/project-img1.png";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp from '../assets/img/color-sharp2.png'
import educamaria from '../assets/img/educamariaimg.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

const Projects = () => {
  const { texts } = useContext(LanguageContext);
  const projects = [
    {
      title: "EducaMaria",
      description: "Design & Development",
      imgUrl: educamaria,
      type:"pages",
      linkpage:"https://educamaria.es/"
    },
    {
      title: "Full Stack Travel Pages",
      description: "Full Stack project created with NODE, React and MySQL.",
      imgUrl: projImg1,
      type:"practices",
      link: "https://github.com/ChristopherEmil/FullStackTravelPage"
    },
    {
      title: "Full Stack CRUD Pages",
      description: "Full Stack project created with NODE, React and MONGODB.",
      imgUrl: "https://miro.medium.com/v2/resize:fit:1200/1*mzMIXN2JodV2taEBzmUKLg.png",
      type:"practices"
    },
    {
      title: "CRUD Plugin WordPress",
      description: "Plugin to display, modify and delete database tables. Using php and MySql",
      imgUrl: "https://img.profesionalhosting.es/baseconocimiento/img/pluginswordpress.png",
      type:"practices",
      link:"https://github.com/ChristopherEmil/PluginBBDD"
    },
    {
      title: "Discord BOT 🤖",
      description: "Discord bot programmed with Node js",
      imgUrl: "https://externlabs.com/blogs/wp-content/uploads/2023/04/discord-bot-1.jpg",
      type:"hobbies",
      link:"https://github.com/ChristopherEmil/Discord-BOT"
    }
  ];
  return (
    <div>
      <section className="project" id="projects">
        <Container>
          <Row >
            <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

              <h2>{texts.Projects.title}</h2>
              <p>
              {texts.Projects.description}
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">

                  <Nav.Item>
                    <Nav.Link eventKey="first">{texts.Projects.subtitle_1}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">{texts.Projects.subtitle_2}</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">{texts.Projects.subtitle_3}</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                        {projects.map((project, index)=>{
                          if(project.type!="pages")return;
                            return(
                                
                                    <ProjectCard 
                                    key={index}
                                    {...project}/>
                               
                            )
                        } )}   
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                        {projects.map((project, index)=>{
                          if(project.type!="practices")return;
                            return(
                              <ProjectCard 
                              key={index}
                              {...project}/>
                            )
                        } )}   
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                        {projects.map((project, index)=>{
                          if(project.type!="hobbies")return;
                            return(
                              <ProjectCard 
                              key={index}
                              {...project}/>
                            )
                        } )}   
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
              </div>}
            </TrackVisibility>
            </Col>
          </Row>
        </Container>
        <img className="background-image-right" src={colorSharp}></img>
      </section>
    </div>
  );
};

export default Projects;
