import Projects from './main-components/Projects.jsx';
import AboutUs from './main-components/AboutUs.jsx';
import Footer from './main-components/Footer.jsx';
import Slider from './main-components/Slider.jsx';
import Teams from './main-components/Teams.jsx';
import Logo from './main-components/Logo.jsx';
import Nav from './main-components/Nav.jsx';
import './styles/App.css';


const App = () => {
  return (
    <>
      <Nav></Nav>
      <div className='app--mainContent'>
        <Logo></Logo>
        <AboutUs></AboutUs>
        <Teams></Teams>
        <Projects></Projects>
        <Slider></Slider>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
