import Projects from './components/Projects.jsx';
import AboutUs from './components/AboutUs.jsx';
import Footer from './components/Footer.jsx';
import Teams from './components/Teams.jsx';
import Logo from './components/Logo.jsx';
import Top from './components/Top.jsx';
import './styles/App.css';


const App = () => {
  return (
    <>
      <Nav></Nav>
      <div className='mainContent'>
        <Logo></Logo>
        <AboutUs></AboutUs>
        <Teams></Teams>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
