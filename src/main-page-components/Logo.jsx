import '../styles/Logo.css';
import LogoImage from '../assets/logo.png';

const Logo = () => {
  return (
    <div className='logo--container'>
      <div className='logo--title'>
        <p>FaroTech</p>
      </div>
      <div className='logo--content'>
        <img src={LogoImage}></img>
      </div>
    </div>
  );
};

export default Logo;
