import {Component} from 'react'
import './index.css'

class Navbar extends Component {
  state = {counter: 6}

  componentDidMount() {
    this.uniqueId = setInterval(this.setTimer, 1000)
  }

  setTimer = () => {
    const {counter} = this.state
    if (counter === 0) {
      clearInterval(this.uniqueId)
    } else {
      this.setState(prevState => ({counter: prevState.counter - 1}))
    }
  }

  render() {
    const {counter} = this.state

    return (
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
        <div className="score-timer-container">
          <h1 className="score-heading">Score : 1</h1>
          <div className="time-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer"
            />
            <h1 className="score-heading">{counter} sec</h1>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
