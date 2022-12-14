import {Component} from 'react'
import {FaDivide} from 'react-icons/fa'
import './index.css'

class Calculator extends Component {
  state = {displayNumber: 100}

  render() {
    const {displayNumber} = this.state
    return (
      <div className="main-container">
        <div className="display-container">{displayNumber}</div>
        <div className="key-container">
          <div className="number-key">
            <h1>AC</h1>
          </div>
          <div className="number-key">
            <h1>+/-</h1>
          </div>
          <div className="number-key">
            <h1>%</h1>
          </div>
          <div className="number-key">
            <FaDivide />
          </div>
        </div>
        <div className="key-container">
          <div className="number-key">
            <h1>7</h1>
          </div>
          <div className="number-key">
            <h1>8</h1>
          </div>
          <div className="number-key">
            <h1>9</h1>
          </div>
          <div className="number-key">
            <h1>X</h1>
          </div>
        </div>
        <div className="key-container">
          <div className="number-key">
            <h1>4</h1>
          </div>
          <div className="number-key">
            <h1>5</h1>
          </div>
          <div className="number-key">
            <h1>6</h1>
          </div>
          <div className="number-key">
            <h1>-</h1>
          </div>
        </div>
        <div className="key-container">
          <div className="number-key">
            <h1>1</h1>
          </div>
          <div className="number-key">
            <h1>2</h1>
          </div>
          <div className="number-key">
            <h1>3</h1>
          </div>
          <div className="number-key">
            <h1>+</h1>
          </div>
        </div>
        <div className="key-container">
          <div className="number-key">
            <h1>AC</h1>
          </div>
          <div className="number-key">
            <h1>+/-</h1>
          </div>
          <div className="number-key">
            <h1>%</h1>
          </div>
          <div className="number-key">
            <FaDivide />
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator
