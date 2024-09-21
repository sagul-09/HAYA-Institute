import React, { Component } from 'react';
import BackgroundSlideshow from 'react-background-slideshow';
import image1 from '../../assets/BackgroundImages/1.jpg';
import image2 from '../../assets/BackgroundImages/2.jpg';
import image3 from '../../assets/BackgroundImages/3.jpg';
import image4 from '../../assets/BackgroundImages/4.jpg';
import image5 from '../../assets/BackgroundImages/5.jpg';
import './Slider.css'

export default class BackgroundSlider extends Component {
  render() {
    return (
      <div className="background-slider">
        <BackgroundSlideshow images={[image1, image2, image3, image4, image5]} animationDelay={2000} />
      </div>
    );
  }
}