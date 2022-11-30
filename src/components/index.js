import {Component} from 'react'
import './index.css'

import ReactPopUp from './PopUp'

class GamePage extends Component {
  state = {
    score: 0,
    userChoiceImageUrl: '',
    randomOpponentImageUrl: '',
    isGameOver: false,
    resultMessage: '',
  }

  onClickGameIcon = event => {
    const {choicesList} = this.props

    const randomOpponentChoice = choicesList[Math.floor(Math.random() * 3)]
    const userChoice = event.target.alt
    const opponentChoice = randomOpponentChoice.id

    this.setState({
      userChoiceImageUrl: event.target.src,
      randomOpponentImageUrl: randomOpponentChoice.imageUrl,
      isGameOver: true,
    })
    console.log(userChoice)
    console.log(opponentChoice)

    if (userChoice === opponentChoice) {
      this.setState({resultMessage: 'IT IS DRAW'})
    } else if (userChoice === 'ROCK' && opponentChoice === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (userChoice === 'ROCK' && opponentChoice === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (userChoice === 'PAPER' && opponentChoice === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (userChoice === 'PAPER' && opponentChoice === 'SCISSORS') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') {
      this.setState(prevState => ({
        score: prevState.score + 1,
        resultMessage: 'YOU WON',
      }))
    } else if (userChoice === 'SCISSORS' && opponentChoice === 'ROCK') {
      this.setState(prevState => ({
        score: prevState.score - 1,
        resultMessage: 'YOU LOSE',
      }))
    }
  }

  onClickPlayAgain = () => {
    this.setState({
      userChoiceImageUrl: '',
      randomOpponentImageUrl: '',
      isGameOver: false,
      resultMessage: '',
    })
  }

  render() {
    const {
      score,
      userChoiceImageUrl,
      randomOpponentImageUrl,
      isGameOver,
      resultMessage,
    } = this.state
    // console.log(userChoiceImageUrl)
    // console.log(randomOpponentImageUrl)

    const {choicesList} = this.props

    return (
      <div className="background-container">
        <div className="top-container">
          <h1 style={{fontSize: '20px', flexGrow: 1}}>
            ROCK <br />
            PAPER <br />
            SCISSORS
          </h1>

          <div className="score-container">
            <p style={{margin: 0}}>Score</p>
            <p style={{fontSize: '30px', margin: 0, fontFamily: 'Roboto'}}>
              {score}
            </p>
          </div>
        </div>

        <div className="game-container">
          {isGameOver ? (
            <div style={{flexDirection: 'column'}}>
              <div>
                <img
                  src={userChoiceImageUrl}
                  alt="your choice"
                  className="game-icon-img-prop"
                />

                <img
                  src={randomOpponentImageUrl}
                  alt="opponent choice"
                  className="game-icon-img-prop"
                />
              </div>

              <p style={{textAlign: 'center', color: 'white'}}>
                {resultMessage}
              </p>

              <div style={{textAlign: 'center'}}>
                <button
                  type="button"
                  className="play-again-button"
                  onClick={this.onClickPlayAgain}
                >
                  Play Again
                </button>
              </div>
            </div>
          ) : (
            <ul className="game-icons-container">
              {choicesList.map(eachItem => {
                /* console.log(`${eachItem.id.toLowerCase()}Button`) */
                console.log()

                return (
                  <li key={eachItem.id}>
                    <button
                      type="button"
                      style={{
                        backgroundColor: 'transparent',
                        borderStyle: 'none',
                      }}
                      onClick={this.onClickGameIcon}
                      data-testid={`${eachItem.id.toLowerCase()}Button`}
                    >
                      <img
                        src={eachItem.imageUrl}
                        alt={eachItem.id}
                        className="game-icon-img-prop"
                      />
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </div>

        <div style={{alignSelf: 'end'}}>
          <ReactPopUp />
        </div>
      </div>
    )
  }
}

export default GamePage
