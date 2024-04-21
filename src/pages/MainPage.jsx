import Projects from '../main-page-components/Projects.jsx';
import AboutUs from '../main-page-components/AboutUs.jsx';
import Footer from '../main-page-components/Footer.jsx';
import Slider from '../main-page-components/Slider.jsx';
import Teams from '../Teams.jsx';
import Logo from '../main-page-components/Logo.jsx';
import '../styles/App.css';

const MainPage = () => {

  return (
      <>
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
}

export default MainPage;

