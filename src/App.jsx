import Top from './components/Top.jsx';
import AboutUs from './components/AboutUs.jsx';
import Logo from './components/Logo.jsx';
import Teams from './components/Teams.jsx';

import './styles/App.css';

const App = () => {
  return (
    <>
      <Top></Top>
      <div className='mainContent'>
        <Logo></Logo>
        <AboutUs></AboutUs>
        <Teams></Teams>
      </div>
    </>
  );
};

export default App;
