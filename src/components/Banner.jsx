import {} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons'; 
import logojinwoo from "../assets/img/logo-jinwoo.png";
import { useState, useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";

const Banner = () => {
  const { texts } = useContext(LanguageContext);

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ texts.Banner.subtitle_1, texts.Banner.subtitle_2, texts.Banner.subtitle_3 ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  return (
    <div>
      <section className='banner' id='home'>
        <Container>
            <Row className="aling-items-center ">
            <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">{texts.Banner.title}</span>
                <h1>{texts.Banner.subtitle} <br/><span className="txt-rotate" dataPeriod="1000" data-rotate='[ {texts.Banner.subtitle}, "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>{texts.Banner.description}</p>
                  <button onClick={() => console.log('connect')}>{texts.Banner.button_bar} <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={logojinwoo} alt="Header Img"/>
                </div>}
            </TrackVisibility>
            </Col>
            </Row>
         
        </Container>
      </section>
    </div>
  )
}

export default Banner
