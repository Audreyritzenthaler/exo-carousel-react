import React, { Component } from 'react'
import left from "./imageCourousel/icon-prev.svg"


class LeftArrow extends Component {
    render() {
      return(
        <div onClick={this.props.goToPrevSlide}>
          <img src={left} className='arrow left' aria-hidden='true' alt="left arrow"></img>
        </div>
      )
    }
  }
  
  export default LeftArrow;