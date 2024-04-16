import { Fade } from 'react-slideshow-image';
import { useState } from 'react';

import 'react-slideshow-image/dist/styles.css';
import  '../styles/Slider.css';



const Slider = () => {

  const properties = {
    prevArrow:
      <button className='slider--arrowprevbutton jetbrains-mono'>
        <p className='lete'>Previous</p>
      </button>,

    nextArrow:
      <button className='slider--arrownextbutton jetbrains-mono' id='button1'>
        <p className='rite'>Next</p>
      </button>
  }


  const [FadeImages] = useState([
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Nazwa firmy'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Nazwa firmy'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Nazwa firmy'
    },
    ]
  );

  return(
    <div className='slider--content'>
      <div className="slide-container slider--container">
        <Fade
          {...properties}
          transitionDuration={500}
          autoplay={false}
        >
          {FadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img
                style={{ width: '100%'}}
                src={fadeImage.url}
              />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  )
}

export default Slider;