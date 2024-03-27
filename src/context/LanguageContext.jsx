import { createContext, useState } from "react";
const LanguageContext = createContext();

const initialLanguage = "es";
const translations = {
  es: {
    NavBar: {
      home: "Inicio",
      skills: "Habilidades",
      projects: "Projectos",
      button_down: "Descargar CV"
    },
    Banner: {
      title: "Bienvenido a mi Portafolio",
      subtitle: "Hola, Soy Christopher",
      subtitle_1: "Desarrollador web",
      subtitle_2: "Diseñador web",
      subtitle_3: "Diseñador UI/UX",
      description:
        "Mi nombre es Christopher Emil Alcantara Baez, tengo 23 años y actualmente resido en Toledo, España.Soy un desarrollador web con experiencia en una variedad de lenguajes y tecnologías, y estoy seguro de que mi experiencia y habilidades pueden ser valiosas para su equipo. ",
      button_bar: "Conectamos"
    },
    Skills: {
      title: "Mis habilidades",
      description: <span>Durante mi formación universitaria, adquirí habilidades en una variedad de lenguajes y tecnologías.<br/><br/>

-En cuanto a Frontend, tengo experiencia en el desarrollo de aplicaciones web utilizando HTML, CSS, Bootstrap, Tailwind, JavaScript, React y Vue. Tengo habilidades en la creación de sitios web modernos, atractivos y responsivos utilizando estas tecnologías y marcos de trabajo.<br/><br/>

-En cuanto a Backend, tengo experiencia en el desarrollo de aplicaciones utilizando PHP, Java, Java Server Pages (JSP), Java Server Faces (JSF), Java Persistence API (JPA),Spring Boot y MongoDB.<br/><br/>

También tengo experiencia en la creación de sitios web utilizando WordPress, y tengo habilidades en la creación de tiendas en línea utilizando WooCommerce. También tengo experiencia con plugins constructores de página como Salient y Elementor, además de también tener experiencia en la creación y modificación de temas y plugins.<br/>

      </span>
     ,
      subtitle_1: "Desarrollador web",
      subtitle_2: "Diseñador web",
      subtitle_3: "Diseñador UI/UX",
      subtitle_4: "Frontend",
      subtitle_5: "Librerias",
      subtitle_6: "Backend",
    },
    Projects: {
      title: "Mis projectos",
      description: <span>Bienvenido a la sección de proyectos de mi portafolio, donde te invito a explorar una colección diversa de trabajos que representan mi experiencia y habilidades como desarrollador web. Desde aplicaciones web dinámicas hasta sitios web elegantes y funcionales, cada proyecto exhibe mi pasión por crear experiencias digitales impactantes y de alta calidad. Con un enfoque en la innovación, la usabilidad y las últimas tecnologías, cada proyecto es el resultado de un proceso de desarrollo meticuloso y centrado en el usuario. A través de estos ejemplos, podrás ver mi capacidad para traducir ideas en código limpio y eficiente, así como mi compromiso con la excelencia técnica y la satisfacción del cliente. ¡Espero que disfrutes explorando estos proyectos tanto como yo disfruté creándolos!</span>,
      subtitle_1: "Paginas",
      subtitle_2: "Practicas",
      subtitle_3: "Entretenimiento"
    },
    Contact: {
      title: "Ponerse en contacto",
      input_1: "Nombre",
      input_2: "Apellido",
      input_3: "Corro Electronico",
      input_4: "Telefono",
      input_5: "Mensaje",
      button: "Enviar",
      button_sending: "Enviando...."
    },
    Footer:{
      title_1:"Contacto",
      title_2:"Redes",
      title_3:"Idiomas",

    }
  },
  en: {
    NavBar: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      button_down: "Dowmload CV"
    },
    Banner: {
      title: "Welcome to my Portfolio",
      subtitle: "Hi! I'm Christopher",
      subtitle_1: "Web Developer",
      subtitle_2: "Web Designer",
      subtitle_3: "UI/UX Designer",
      description: "My name is Christopher Emil Alcantara Baez, I am 23 years old and currently reside in Toledo, Spain. I am a web developer with experience in a variety of languages and technologies, and I am confident that my experience and skills can be valuable to your team. ",
      button_bar: "Let’s Connect"
    },
    Skills: {
      title: "Skills",
      description: <span>During my university education, I acquired skills in a variety of languages and technologies.<br/><br/>

      -As for Frontend, I have experience in developing web applications using HTML, CSS, Bootstrap, Tailwind, JavaScript, React and Vue. I have skills in creating modern, attractive and responsive websites using these technologies and frameworks.<br/><br/>
      
      -As for Backend, I have experience in developing applications using PHP, Java, Java Server Pages (JSP), Java Server Faces (JSF), Java Persistence API (JPA), Spring Boot and MongoDB.<br/><br />
      
      I also have experience building websites using WordPress, and I have skills in building online stores using WooCommerce. I also have experience with page builder plugins like Salient and Elementor, as well as having experience creating and modifying themes and plugins.<br/>
      
             </span>,
      subtitle_1: "Web Developer",
      subtitle_2: "Web Designer",
      subtitle_3: "UI/UX Designer",
      subtitle_4: "Frontend",
      subtitle_5: "Framework",
      subtitle_6: "Backend",
    },
    Projects: {
      title: "Skills",
      description: <span>Welcome to the projects section of my portfolio, where I invite you to explore a diverse collection of work that represents my experience and skills as a web developer. From dynamic web applications to elegant and functional websites, each project showcases my passion for creating high-quality, impactful digital experiences. With a focus on innovation, usability and the latest technologies, each project is the result of a meticulous, user-centered development process. Through these examples, you'll see my ability to translate ideas into clean, efficient code, as well as my commitment to technical excellence and customer satisfaction. I hope you enjoy exploring these projects as much as I enjoyed creating them!</span>,
      subtitle_1: "Pages",
      subtitle_2: "Practices",
      subtitle_3: "Hobbies"
    },
    Contact: {
      title: "Get In Touch",
      input_1: "First Name",
      input_2: "Last Name",
      input_3: "Email",
      input_4: "Phone",
      input_5: "Message",
      button: "Send",
      button_sending: "Sending...."
    },
    Footer:{
      title_1:"Contact",
      title_2:"Social networks",
      title_3:"Language",

    }
  }
};

// eslint-disable-next-line react/prop-types
const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [texts, setTexts] = useState(translations[language]);

  const handleLanguage = (e) => {
    // console.log(e.target.alt);
    if (e.target.alt === "es") {
      setLanguage("es");
      setTexts(translations.es);
    } else {
      setLanguage("en");
      setTexts(translations.en);
    }
  };

  const data = { texts, handleLanguage };
  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LanguageProvider };
export default LanguageContext;
