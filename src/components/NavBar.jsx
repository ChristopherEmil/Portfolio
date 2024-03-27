import { CiLinkedin } from "react-icons/ci"; 
import { BsGithub } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 
import LanguageContext from "../context/LanguageContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { useContext } from "react";
import logo from "../assets/img/logo.png";
import pdfcv from "../assets/pdf/CV_Christopher_Emil.pdf"
function NavBar() {

  const { texts } = useContext(LanguageContext);
  const [activeLink, setActiveLink] = useState("home");
  const [scolled, seScrolled] = useState("false");
console.log(texts)
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }
  return (
    <Navbar expand="lg" className={scolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" /> 
         
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              {texts.NavBar.home}
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}
            >
              {texts.NavBar.skills}
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}
            >
              {texts.NavBar.projects}
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/christopher-emil-alcantara-baez-538782229/">
                {/* <img src={""} alt="Logo" /> */}
                <CiLinkedin />
              </a>
              <a href="https://github.com/ChristopherEmil">
                {/* <img src={""} alt="Logo" /> */}
                <BsGithub />
              </a>
              <a href="https://www.instagram.com/christopher_0510/">
                {/* <img src={""} alt="Logo" /> */}
                <BsInstagram />
                
              </a>
            
            </div>
            <button className="vvd" onClick={() => {
               const pdfUrl = pdfcv;

               // Crea un enlace temporal y simula un clic para iniciar la descarga
               const a = document.createElement('a');
               a.href = pdfUrl;
               a.download = 'CV_Christopher_Emil.pdf';
               document.body.appendChild(a);
               a.click();
           
               // Limpia el enlace temporal creado
               document.body.removeChild(a);
            }}>
              <span>{texts.NavBar.button_down}</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
