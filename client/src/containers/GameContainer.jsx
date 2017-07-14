import React from 'react'
import PersonContainer from '../components/PersonContainer'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state - {
      photoGrid: [
        pic1: {glasses: "no", hair: "black", gender; "boy", beard: "no"},
        pic1: {glasses: "yes", hair: "blond", gender; "girl", beard: "no"},
        pic1: {glasses: "yes", hair: "black", gender; "boy", beard: "yes"},
        pic1: {glasses: "no", hair: "none", gender; "boy", beard: "yes"}
    }

  }
  render() {
    return(
      <div>
      <h1>Guess Who?</h1>
      <PersonContainer />
      </div>
      )
  }
  

}
export default GameContainer
constructor(props) {
  super(props)
  this.state = {
    boardGrid: [ null, null, null, null, null, null, null, null, null],
    noOfClicks: 0,
    winner: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],
    gameWinner: ""
  }