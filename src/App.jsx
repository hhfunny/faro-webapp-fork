import {BrowserRouter, Routes, Route} from 'react-router-dom';

import MainPage from './pages/MainPage.jsx'
import Teams from './Teams.jsx';
import LabsPage from './pages/LabsPage.jsx';
import Layout from './layout.jsx'
import RoboticsPage from './pages/RoboticsPage.jsx'
import './styles/App.css';
import SystemsPage from './pages/SystemsPage.jsx';

const App = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<MainPage />} />
          <Route path='teams' element={<Teams />} />
          <Route path='robotics' element={<RoboticsPage/>}/>
          <Route path='labs' element={<LabsPage />} />
          <Route path='systems' element={<SystemsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
};

export default App;
