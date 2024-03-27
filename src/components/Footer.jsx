import { AiOutlineMail } from "react-icons/ai"; 
import { AiOutlinePhone } from "react-icons/ai"; 
import { BiHomeAlt } from "react-icons/bi"; 
import {} from "react";
import { Col, Container, Row } from "react-bootstrap";
import FooterImg from "../assets/img/footer-bg.png";
import Logo from "../assets/img/logo-jinwoo.png";
import { CiLinkedin } from "react-icons/ci"; 
import { BsGithub } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import españa from '../assets/svg/es.svg'
import reinouni from '../assets/svg/gb.svg'

const Footer = () => {
  const { texts, handleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row className="align-item-center ">
            <Col sm={4}>
              {/* <img src={Logo} alt="footerimg" /> */}
              <h4>{texts.Footer.title_1}</h4>
            <ul>
              <li><BiHomeAlt /> Benquerencia,Toledo,45007 </li>
              <li><AiOutlinePhone /> +34 640657861</li>
              <li><AiOutlineMail /> cristoferesmil7@gmail.com</li>
             
            </ul>
            </Col>
            <Col sm={4} className="text-center">
            <h4>{texts.Footer.title_2}</h4>
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
            </Col>
            <Col sm={4} className="text-center">
            
              <h5>{texts.Footer.title_3}</h5>
              <div className="vvd_footer">
              <button  onClick={handleLanguage}><span><img src={españa} alt="es" /></span></button>
            <button  onClick={handleLanguage}><span><img src={reinouni} alt="en" /></span></button>
             
              
           </div>
           
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
