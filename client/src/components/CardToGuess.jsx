import React from 'react'

class CardToGuess extends React.Component {

  constructor(props) {
    super(props)
  }

  showWinner(event) {
    this.props.winnerClick()
  }

  render() {
    return(
      <div>
        <img className="cardToGuess" src={this.props.backOfCard} onClick={this.showWinner.bind(this)}/>
         </div>
      )
  }
}
export default CardToGuess

