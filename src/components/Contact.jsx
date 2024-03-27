import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

import LanguageContext from "../context/LanguageContext";
import { useContext } from "react";


const Contact = () => {
  
  const { texts } = useContext(LanguageContext);
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: ""
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText("Sending...")
    console.log(formDetails)
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });  
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
      setButtonText("Sent")
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    } 
  }
  return (
    <div>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <img src={contactImg} alt="" />
            </Col>
            <Col md={6}>
              <h2>{texts.Contact.title}</h2>
              <form onSubmit={handleSubmit}>
                <Row>
                  <Col sm={6} className="px-1">
                    <input
                      type="text"
                      value={formDetails.firstName}
                      placeholder={texts.Contact.input_1}
                      onChange={(e) =>
                        onFormUpdate("firstName", e.target.value)
                      }
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    {" "}
                    <input
                      type="text"
                      value={formDetails.lastName}
                      placeholder={texts.Contact.input_2}
                      onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    {" "}
                    <input
                      type="email"
                      value={formDetails.email}
                      placeholder={texts.Contact.input_3}
                      onChange={(e) => onFormUpdate("email", e.target.value)}
                    />
                  </Col>
                  <Col sm={6} className="px-1">
                    {" "}
                    <input
                      type="tel"
                      value={formDetails.phoneNumber}
                      placeholder={texts.Contact.input_4}
                      onChange={(e) =>
                        onFormUpdate("phoneNumber", e.target.value)
                      }
                    />
                  </Col>
                  <Col>
                    <textarea
                      rows="6"
                      placeholder={texts.Contact.input_5}
                      value={formDetails.message}
                      onChange={(e) => onFormUpdate("message", e.target.value)}
                    ></textarea>
                    <button type="submit"><span>{texts.Contact.button}</span></button>
                  </Col>
                  { status.message&&
                    <Col>
                        <p className={status.success===false ? "danger":"success"}>
                            {status.message}
                        </p>
                    </Col>
                  }
                </Row>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
