import React, { Component } from "react"
import DataCarousel from "./DataCarousel"
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
                <img className="imgCarousel" src={s.image} alt={s.alt}></img>
            </div>
          ) }
          </section>
      )
    }
  }
  
  export default Slide;