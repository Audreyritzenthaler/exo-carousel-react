import React, { Component } from "react"
import DataCarousel from "./DataCarousel"
import LeftArrow from "./LeftArrow"
import RightArrow from "./RightArrow"
import './Slide.css'

class Slide extends Component {
    constructor(props) {
      super(props);
      this.state = {landing: DataCarousel};
    }
    
    render() {
      return(
        <section>
        {
          this.state.landing.map((s, index) =>
            <div className={
              index === this.props.activeIndex ? 'active' : 'inactive'}
              key={index}>
                <div className="bg">
                  <img className="imgCarousel" src={s.image} alt={s.alt}></img>
                </div>
                <div className="arrows">
                  <LeftArrow
                      goToPrevSlide={() => this.props.goToPrevSlide()}
                    />
                    <RightArrow
                      goToNextSlide={() => this.props.goToNextSlide()}
                    />
                </div>
                <div>
                  <p className="description">{s.description}</p>
                </div>
                <div className="nameAndJob">
                  <b>{s.name}</b>
                  <p className="job">{s.job}</p>
                </div>
            </div>
          ) }
          </section>
      )
    }
  }
  
  export default Slide;