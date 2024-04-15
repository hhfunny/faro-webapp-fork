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
  const connectToWallet = async () => {
    if (!account) { // Check if account is not already connected
      try {
        // Requesting access to the user's MetaMask account
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        // Updating state with the connected account
        setAccount(accounts[0]);
      } catch (error) {
        alert(`Couldn't connect to the wallet!\nMake sure you have the right extension installed in your browser!`);
      }
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
            <li key={index}>
              {item === 'Connect Wallet' ? (
                account ? (
                  <button className="connect-wallet-button" disabled>
                    Wallet Connected!
                  </button>
                ) : (
                  <button onClick={connectToWallet} className="connect-wallet-button">
                    Connect Wallet
                  </button>
                )
              ) : (
                <p>{item}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
