import { useState } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [account, setAccount] = useState(null); // State to store the connected account
  const [listTop] = useState([
    'About us',
    'Timeline',
    'Our supporters',
    'Contact us',
    'Connect Wallet'
  ]);
  const [isNavVisible, setIsNavVisible] = useState(false); // State to control the visibility of the navBar

  // Function to toggle the navBar visibility
  const toggleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  // Function to connect to MetaMask
  const connectToMetamask = async () => {
    try {
      // Requesting access to the user's MetaMask account
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      // Updating state with the connected account
      setAccount(accounts[0]);
    } catch (error) {
      console.error('Error connecting to Metamask:', error);
    }
  };

  return (
    <div className="content">
      <button className="nav-toggle" onClick={toggleNavBar}>
        Menu
      </button>
      <div className={`navBar ${isNavVisible ? 'active' : ''}`}>
        <div className="unbounded title">
          <p>FaroTech</p>
        </div>
        <ul>
          {listTop.map((item, index) => (
            <li key={index} onClick={item === 'Connect Wallet' ? connectToMetamask : undefined}>
              <p>{item === 'Connect Wallet' && account ? `Connected: ${account}` : item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
