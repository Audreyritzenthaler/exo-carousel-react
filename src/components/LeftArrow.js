import React, { Component } from 'react';


class LeftArrow extends Component {
    render() {
      return(
        <div className='backArrow' onClick={this.props.goToPrevSlide}>
          <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-512.png" className='arrow' aria-hidden='true' alt="left arrow"></img>
        </div>
      )
    }
  }
  
  export default LeftArrow;