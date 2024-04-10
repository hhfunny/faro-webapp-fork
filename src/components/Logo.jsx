import '../styles/Logo.css';
import LogoImage from '../assets/logo.png';

const Logo = () => {
  return (
    <div className='logoContainer'>
      <div className='logoContent'>
        <div>
          <p>FaroTech</p>
          <img src={LogoImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Logo;
