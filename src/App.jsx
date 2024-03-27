import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {LanguageProvider} from './context/LanguageContext'
function App() {

  return (
    <>
    <LanguageProvider>
    <div className='App'>     
    <NavBar></NavBar>
    <Banner></Banner>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
</div>
</LanguageProvider>
    </>
  )
}

export default App
