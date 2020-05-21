import React, { Component } from 'react'
import right from "./imageCourousel/icon-next.svg"


class LeftArrow extends Component {
    render() {
      return(
        <div onClick={this.props.goToNextSlide}>
          <img src={right} className='arrow right' aria-hidden='true' alt="right arrow"></img>
        </div>
      )
    }
  }
  
  export default LeftArrow;