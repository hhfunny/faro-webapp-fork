import { Link, Outlet } from "react-router-dom";
import './styles/BodyArea.css'

const Teams = () => {
  return (
    <div className='teams jetbrains-mono'>
      <div className='teams--title'>
        <h1>#Teams</h1>
        <p>Our teams</p>
      </div>
      <div className='teams--content '>
        <Link to='/robotics'>
          <div className='teams--left teams--item onhover--items'>
            <h1>Robotics</h1>
            <p>
              Robotics - this is where it all started.
              The robotics team is the oldest and best-known
              team at FaroTech. It consists of outstanding mechanics,
              engineers and programmers
              who work together to build innovative solutions.
            </p>
          </div>
        </Link>
        <Link to='/systems'>
          <div className='teams--right teams--item onhover--items'>
            <h1>Systems</h1>
            <p>
              Team responsible for IT infrastructure: Web technologies,
              Cloud infrastructure, smart Web Bots, IOT or even the Metaverse.
              In this team we work hard to create a modern, reliable IT environment.
            </p>
          </div>
        </Link>
        <Link to='/labs'>
          <div className='teams--left teams--item onhover--items'>
            <h1>Labs</h1>
            <p>
              The Labs team is dedicated to researching and developing solutions that will revolutionise the world.
              The team is working on the development of energy sources,
              fuels and artificial intelligence algorithms.
            </p>
          </div>
        </Link>
      </div>
      <Outlet/>
    </div>
  );
};

export default Teams;