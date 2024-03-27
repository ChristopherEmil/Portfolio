import { BsFillHouseDoorFill } from "react-icons/bs"; 
import {} from 'react'
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { BsGithub } from "react-icons/bs"; 
const ProjectCard = ({title, description, imgUrl,link,linkpage}) => {
  return (
    
      <Col sm={6} md={4}>
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="" />
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
                <span className="navbar-text">
            <div className="social-icon">
            {linkpage && (
                <a href={linkpage}>
                  <BsFillHouseDoorFill />
                </a>
              )}
              {link && (
                <a href={link}>
                  <BsGithub />
                </a>
              )}
             
            </div>
          </span>
            </div>
        </div>
      </Col>
    
  )
}

export default ProjectCard
