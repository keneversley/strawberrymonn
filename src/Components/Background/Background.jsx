import React, { useState, useEffect } from 'react';
import './Background.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const images = [image1, image2, image3, image4, image5, image6, image7]; // Array of images

export const Background = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (

    <Carousel  
    autoPlay    // Enables automatic slide transitions
            infiniteLoop // Allows slides to loop endlessly
            interval={3000} // Sets the interval between slides in milliseconds (3 seconds)
            showThumbs={false} // Hides thumbnail navigation (optional)
            showStatus={false} // Hides slide status indicator (optional)
            showIndicators={true} // Shows dots as indicators (optional)
     >
    <div>
        <img src={image1} alt="Slide 1" />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={image2} alt="Slide 2" />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={image3} alt="Slide 3" />
        <p className="legend">Legend 3</p>
    </div>
    <div>
        <img src={image4} alt="Slide 4" />
        <p className="legend">Legend 4</p>
    </div>
    <div>
        <img src={image5} alt="Slide 5" />
        <p className="legend">Legend 5</p>
    </div>
    <div>
        <img src={image6} alt="Slide 6" />
        <p className="legend">Legend 6</p>
    </div>
    <div>
        <img src={image7} alt="Slide 7" />
        <p className="legend">Legend 7</p>
    </div>
</Carousel>

   
  );
};

export default Background;
