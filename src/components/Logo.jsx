import '../styles/Logo.css';
import LogoImage from '../assets/logo.png';

const Logo = () => {
  return (
    <div className='logoContainer'>
      <div className='logoTitle'>
        <p>FaroTech</p>
      </div>
      <div className='logoContent'>
        <img src={LogoImage}></img>
      </div>
    </div>
  );
};

export default Logo;
