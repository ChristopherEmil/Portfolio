import { DiReact } from "react-icons/di"; 
import {} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
//import meter1 from '../assets/img/meter1.svg'
import colorSharp from "../assets/img/color-sharp.png";
import SkillProgress from "./SkillProgress";
import { Flat, Heat, Nested } from "@alptugidin/react-circular-progress-bar";
import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";

const Skills = () => {
  const { texts } = useContext(LanguageContext);
  const skills = [
    {
      title: texts.Skills.subtitle_1,
      percentage: "95"
    },
    {
      title: texts.Skills.subtitle_2,
      percentage: "90"
    },
    {
      title: texts.Skills.subtitle_3,
      percentage: "90"
    }
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <section className="skill" id="skills">
        <Container>
          <Row className="aling-items-center ">
            <Col>
              <div className="skill-bx">
                <h2>{texts.Skills.title}</h2>
                <p>{texts.Skills.description}</p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {skills.map((skill, index) => {
                    return <SkillProgress key={index} {...skill} />;
                  })}
                  
                </Carousel>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item-code">
                  <Nested
                  circles={[
                    { text: "Javascript", value: 95, color: "#fde047" },
                    { text: "Typescript", value: 60, color: "#0ea5e9" },
                    { text: "HTML", value: 95, color: "#c2410c" },
                    { text: "CSS", value: 90, color: "#7c3aed" },
                    { text: "SASS", value: 80, color: "#c026d3" }
                  ]}
                  sx={{
                    bgColor: "#cbd5e1"
                  }}
                />
                <h5>{texts.Skills.subtitle_4}</h5>
                  </div>
                  <div className="item-code">
                  <Nested
                  circles={[
                    { text: "React", value: 95, color: "#29CBFF" },
                    { text: "VUE", value: 80, color: "#17C200" },
                    { text: "Angular", value: 60, color: "#FF1B1B" },
                  ]}
                  sx={{
                    bgColor: "#cbd5e1"
                  }}
                />
                <h5>{texts.Skills.subtitle_5}</h5>
                  </div>
                  <div className="item-code">
                  <Nested
                  circles={[
                    { text: "SQL", value: 87, color: "#6685A7" },
                    { text: "JAVA", value: 80, color: "#A93223" },
                    { text: "NODEJS", value: 90, color: "#238900" },
                    { text: "PHP", value: 80, color: "#0079B1" },
                  ]}
                  sx={{
                    bgColor: "#cbd5e1"
                  }}
                />
                <h5>{texts.Skills.subtitle_6}</h5>
                  </div>
                </Carousel>
               {/*  <div className="skill-bx-code">
                <Nested
                  circles={[
                    { text: "Javascript", value: 95, color: "#fde047" },
                    { text: "Typescript", value: 60, color: "#0ea5e9" },
                    { text: "HTML", value: 95, color: "#c2410c" },
                    { text: "CSS", value: 90, color: "#7c3aed" },
                    { text: "SASS", value: 80, color: "#c026d3" }
                  ]}
                  sx={{
                    bgColor: "#cbd5e1"
                  }}
                />
                <Nested
                  circles={[
                    { text: "Javascript", value: 95, color: "#fde047" },
                    { text: "Typescript", value: 60, color: "#0ea5e9" },
                    { text: "HTML", value: 95, color: "#c2410c" },
                    { text: "CSS", value: 90, color: "#7c3aed" },
                    { text: "SASS", value: 80, color: "#c026d3" }
                  ]}
                  sx={{
                    bgColor: "#cbd5e1"
                  }}
                />
              </div> */}
              </div>
              
            </Col>
          </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </div>
  );
};

export default Skills;
