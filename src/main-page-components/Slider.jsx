import { Slide } from 'react-slideshow-image';
import { useState } from 'react';

import 'react-slideshow-image/dist/styles.css';
import '../styles/Slider.css';



const Slider = () => {

  const properties = {
    prevArrow:
      <button className='slider--arrowprevbutton jetbrains-mono'>{'<'}</button>,
    nextArrow: 
      <button className='slider--arrownextbutton jetbrains-mono'>{'>'}</button>
  }


  const [SupportersInfo] = useState([
    {
      title: 'Supporter name 1',
      description: 'Supporter description 1'
    },
    {
      title: 'Supporter name 2',
      description: 'Supporter description 2' 
    },
    {
      title: 'Supporter name 3',
      description: 'Supporter description 3'
    },
  ]);

  return(
    <div className='slider--content'>
      <div className="slide-container slider--container">
        <Slide
          {...properties}
          transitionDuration={200}
          autoplay={false}
        >
          {SupportersInfo.map((fadeImage, index) => (
            <div className='fade--item jetbrains-mono' key={index}>
              <h2>{fadeImage.title}</h2>
              <p>{fadeImage.description}</p>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  )
}

export default Slider;
