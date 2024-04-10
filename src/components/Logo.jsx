import '../styles/Logo.css';
import LogoImage from '../assets/logo.png';

const Logo = () => {
  return (
    <>
      <div className='logoContent'>
        <div>
          <p>FaroTech</p>
          <img src={LogoImage}></img>
        </div>
      </div>
    </>
  );
};

export default Logo;
