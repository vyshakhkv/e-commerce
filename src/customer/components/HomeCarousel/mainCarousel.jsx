import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';

const mainCarousel = () => {
    var items = mainCarouselData.map((item)=><img className='cursor-pointer' role='presentation' src={item.image}  alt=''/>)
  return (
        <AliceCarousel
        var items = {items}
        controlsStrategy="alternate"
        disableButtonsControls
        autoPlay
        autoPlayInterval={2000}
        infinite
    />
  )
}

export default mainCarousel