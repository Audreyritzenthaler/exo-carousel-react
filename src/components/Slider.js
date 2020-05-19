import React, { Component } from 'react';
import Slide from './Slide';
import DataCarousel from './DataCarousel';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

class Slider extends Component {
    state = {
      activeIndex: 0,
      length: DataCarousel.length
    };

  goToPrevSlide = () => {
    let index = this.state.activeIndex;
    let length = this.state.length;
    
    if(index < 1) {
      index = length - 1;
    }
    else {
      index--;
    }
    this.setState({
      activeIndex: index
    });
    console.log("lol");
  }
  
  goToNextSlide = () => {
      let index = this.state.activeIndex;
      let length = this.state.length;
      
      if(index === length - 1) {
        index = 0
      }
      else {
        index++;
      }
      this.setState({
        activeIndex: index
      });
    }


  render() {
    return (
      <div className='slider'>
        <div className='slider-items'>
          <LeftArrow
            goToPrevSlide={() => this.goToPrevSlide()}
          />
        <div className='slider-text'>
          <Slide
            activeIndex={this.state.activeIndex}
          />
        </div>
          <RightArrow
            goToNextSlide={() => this.goToNextSlide()}
          />
        </div>
      </div>
    );
    }}

    export default Slider;