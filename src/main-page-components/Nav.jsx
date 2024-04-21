import { useState } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [account, setAccount] = useState(null);
  const [listTop] = useState([
    'About us',
    'Timeline',
    'Our supporters',
    'Contact us',
    'Connect Wallet'
  ]);
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  const connectToWallet = async () => {
    if (!account) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        alert(`Couldn't connect to the wallet!\nMake sure you have the right extension installed in your browser!`);
      }
    }
  };

  return (
    <div className="nav--content">
      <div className={`nav--bar ${isNavVisible ? 'active' : ''}`}>
        <div className="unbounded nav--title">
          <p>FaroTech</p>
        </div>
        <ul>
          {listTop.map((item, index) => (
            <li key={index}>
              {item === 'Connect Wallet' ? (
                account ? (
                  <button className="nav--connect-wallet-button" disabled>
                    Wallet Connected!
                  </button>
                ) : (
                  <button onClick={connectToWallet} className="nav--connect-wallet-button">
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
      <div className="nav--button-content">

      <button className="nav--toggle jetbrains-mono" onClick={toggleNavBar}>
        Menu
      </button>
      </div>
    </div>
  );
};

export default Nav;
