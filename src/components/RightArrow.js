import React, { Component } from 'react';


class LeftArrow extends Component {
    render() {
      return(
        <div onClick={this.props.goToNextSlide}>
          <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/right-512.png" className='arrow' aria-hidden='true' alt="right arrow"></img>
        </div>
      )
    }
  }
  
  export default LeftArrow;