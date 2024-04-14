import { useState } from "react";
import "../styles/Nav.css";

const Nav = () => {
  const [listTop] = useState([
    'About us',
    'Timeline',
    'Our supporters',
    'Contact us',
  ]);

  // State to control the visibility of the navBar
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the navBar visibility
  const toggleNavBar = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="content">
      {/* Add a button to toggle the navBar */}
      <button className="nav-toggle" onClick={toggleNavBar}>
        Menu
      </button>
      {/* Add the 'active' class based on the isNavVisible state */}
      <div className={`navBar ${isNavVisible ? 'active' : ''}`}>
        <div className="unbounded title">
          <p>FaroTech</p>
        </div>
        <ul>
          {listTop.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;