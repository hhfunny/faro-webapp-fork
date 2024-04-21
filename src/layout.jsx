import {Outlet, Link} from 'react-router-dom'
import { useState } from 'react';

import './styles/Nav.css'


const Layout = () => {

  const [isNavVisible, setisNavVisible] = useState(false);
  const [Account, setAccount] = useState(null);

  const toggleNavBar = () => {
    setisNavVisible(!isNavVisible);
  }

  const connectToWallet = async () => {
    if (!Account) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } catch (error) {
        alert(`Couldn't connect to the wallet!\nMake sure you have the right extension installed in your browser!`);
      }
    }
  };

  const checkWallet = () => {
    return (
      Account ? (
        <button className='nav--connect-wallet-button' disabled>
          Wallet Connected
        </button>
      ) : (
        <button onClick={connectToWallet} className='nav--connect-wallet-button'>
          Connect Wallet
        </button>
      )
    )
  }

  return (
    <>
      <div className='nav--content'>
        <div className={`nav--bar ${isNavVisible ? 'active' : ''}`}>
          <div className="unbounded nav--title">
            <Link to='/'><p>FaroTech</p></Link>
          </div>
          <ul>
            <li>
              <p>About us</p>
            </li>
            <li>
              <p>Timeline</p>
            </li>
            <li>
              <p><a>Our supporters</a></p>
            </li>
            <li>
              <p>Contact us</p>
            </li>
            <li>
              {checkWallet()}
            </li>
          </ul>
        </div>
        <button className="nav--toggle jetbrains-mono" onClick={toggleNavBar}>
        Menu
      </button>
    </div>
    <Outlet/>
    </>
  )
}

export default Layout