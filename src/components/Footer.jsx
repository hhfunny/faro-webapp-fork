import { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [footerItem] = useState([
    "Donate with crypto!",
    "Support us!",
    "Contact: email",
  ]);

  return (
    <footer>
      <div className="footer-content">
        <p>Copyright FaroTech</p>
        <ul>
          {footerItem.map((item) => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;