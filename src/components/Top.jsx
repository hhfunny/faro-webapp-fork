import { useState } from 'react';
import '../styles/Top.css';

const Top = () => {
  const [ListTop] = useState([
    'About us',
    'Timeline',
    'Our supporters',
    'Contact us',
  ]);

  return (
    <div className='content'>
      <div className='navBar'>
        <div className='unbounded title'>
          <p>FaroTech</p>
        </div>
        <ul>
          {ListTop.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Top;
