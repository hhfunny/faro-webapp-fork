import React, { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [footerItem] = useState([
    "Donate with crypto!",
    "Support us!",
    "Contact: email",
  ]);

  const [Sites] = useState(['https://www.wikipedia.org', 'support', 'contact']);

  return (
    <footer>
      <div className="footer-content">
        <ul>
          {footerItem.map((item, index) => (
            <li key={index}>
              <a href="/" onClick={(e) => {
                e.preventDefault();
                window.open(Sites[index], '', 'width=500, height=500');
                console.log(Sites[index])
              }}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <p>Copyright FaroTech</p>
    </footer>
  );
};

export default Footer;