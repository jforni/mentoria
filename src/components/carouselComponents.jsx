import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carrusel1 from '../assets/images/carrusel1.png';
import carrusel2 from '../assets/images/carrusel2.png';
import carrusel3 from '../assets/images/carrusel3.png';
import carrusel4 from '../assets/images/carrusel4.png';
import '../styles/carouselComponents.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='Carrusel'>
      <Carousel.Item className='item-carrusel'>
        <img src={carrusel1} alt="primer-imagen-carrusel" className='img-carrousel'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-carrusel'>
        <img src={carrusel2} alt="segunda-imagen-carrusel" className='img-carrousel' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-carrusel'>
        <img src={carrusel3} alt="tercera-imagen-carrusel" className='img-carrousel' />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-carrusel'>
        <img src={carrusel4} alt="cuarta-imagen-carrusel" className='img-carrousel'/>
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;