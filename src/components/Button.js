import React from 'react';
import '../App.css'

class Button extends React.Component {
  render() {
    return (
        <span>
          <div>
            <button className={this.props.classProp} >{this.props.buttonText}</button>
          </div>
        </span>
    );
  }
}

export default Button;