import React from 'react'
import PersonWrapper from '../components/PersonWrapper'
import QuestionContainer from '../components/QuestionContainer'
import CardToGuess from '../components/CardToGuess'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    
      this.state = {
        randomCard: {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1n6dGok6Ctpc0woc4jny2OLSRRcyPqjqBCZDemMCDkZx1XdDkg",
              faceUp: true,
              hair: "dark",
              glasses: true,
              hairLength: "long",
              sex: "girl",
              beard: false
            },
        backOfCard: "https://i.ebayimg.com/thumbs/images/g/JR0AAOSw9~5ZVXCA/s-l225.jpg",
        photoGrid: [
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1n6dGok6Ctpc0woc4jny2OLSRRcyPqjqBCZDemMCDkZx1XdDkg",
              faceUp: true,
              hair: "dark",
              glasses: true,
              hairLength: "long",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKzgt4yy7rbFA3KXaHW5Rl_PEQVhgvo0RzOi8x7rkvv-o-GNTvg",
              faceUp: true,
              hair: "bald",
              glasses: false,
              hairLength: "none",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp2iOo8GYvMae85j0eZBk96M0stT8_4snffVQM1EU5B6bST0S8A",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "http://2.darkroom.shortlist.com/980/8d8970a4b605c5f4bfc669f9b5a062bc:5b3f9a6af2e4130ac5414b99d6034969/del-boy-on-granddad-s-cooking",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJ6ap5Qu1omKbFyiVRMr2oxpoceG-Bh1_FUdFny-unX163BeS",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1n6dGok6Ctpc0woc4jny2OLSRRcyPqjqBCZDemMCDkZx1XdDkg",
              faceUp: true,
              hair: "dark",
              glasses: true,
              hairLength: "long",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKzgt4yy7rbFA3KXaHW5Rl_PEQVhgvo0RzOi8x7rkvv-o-GNTvg",
              faceUp: true,
              hair: "bald",
              glasses: false,
              hairLength: "none",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp2iOo8GYvMae85j0eZBk96M0stT8_4snffVQM1EU5B6bST0S8A",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "http://2.darkroom.shortlist.com/980/8d8970a4b605c5f4bfc669f9b5a062bc:5b3f9a6af2e4130ac5414b99d6034969/del-boy-on-granddad-s-cooking",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJ6ap5Qu1omKbFyiVRMr2oxpoceG-Bh1_FUdFny-unX163BeS",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1n6dGok6Ctpc0woc4jny2OLSRRcyPqjqBCZDemMCDkZx1XdDkg",
              faceUp: true,
              hair: "dark",
              glasses: true,
              hairLength: "long",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKzgt4yy7rbFA3KXaHW5Rl_PEQVhgvo0RzOi8x7rkvv-o-GNTvg",
              faceUp: true,
              hair: "bald",
              glasses: false,
              hairLength: "none",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp2iOo8GYvMae85j0eZBk96M0stT8_4snffVQM1EU5B6bST0S8A",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "http://2.darkroom.shortlist.com/980/8d8970a4b605c5f4bfc669f9b5a062bc:5b3f9a6af2e4130ac5414b99d6034969/del-boy-on-granddad-s-cooking",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJ6ap5Qu1omKbFyiVRMr2oxpoceG-Bh1_FUdFny-unX163BeS",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj1n6dGok6Ctpc0woc4jny2OLSRRcyPqjqBCZDemMCDkZx1XdDkg",
              faceUp: true,
              hair: "dark",
              glasses: true,
              hairLength: "long",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKzgt4yy7rbFA3KXaHW5Rl_PEQVhgvo0RzOi8x7rkvv-o-GNTvg",
              faceUp: true,
              hair: "bald",
              glasses: false,
              hairLength: "none",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp2iOo8GYvMae85j0eZBk96M0stT8_4snffVQM1EU5B6bST0S8A",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "http://2.darkroom.shortlist.com/980/8d8970a4b605c5f4bfc669f9b5a062bc:5b3f9a6af2e4130ac5414b99d6034969/del-boy-on-granddad-s-cooking",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJ6ap5Qu1omKbFyiVRMr2oxpoceG-Bh1_FUdFny-unX163BeS",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKzgt4yy7rbFA3KXaHW5Rl_PEQVhgvo0RzOi8x7rkvv-o-GNTvg",
              faceUp: true,
              hair: "bald",
              glasses: false,
              hairLength: "none",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKp2iOo8GYvMae85j0eZBk96M0stT8_4snffVQM1EU5B6bST0S8A",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "http://2.darkroom.shortlist.com/980/8d8970a4b605c5f4bfc669f9b5a062bc:5b3f9a6af2e4130ac5414b99d6034969/del-boy-on-granddad-s-cooking",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUJ6ap5Qu1omKbFyiVRMr2oxpoceG-Bh1_FUdFny-unX163BeS",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            }
          ]
        }
      }


    randomlySelectCard() {
      const number = Math.floor(Math.random()*5)
      console.log("randomlySelectCard", this.state.photoChoice[number])
      this.setState({randomCard: this.state.photoChoice[number]})
      return this.state.randomCard
    }
      

    handleOnClick(index) {
      console.log("handleOnClick - turn the card over", )
      const board = this.state.photoGrid
      board[index] = this.state.backOfCard;
      this.setState({photoGrid: board})
    }
    winningCard() {
      console.log("showcardtoguessClick", this.state.backOfCard)
      console.log("card to guess", this.state.cardToGuess.img)
      const winningCard = this.state.cardToGuess.img
      this.setState({backOfCard: winningCard})
    }

    render() {
      return(
        <div>
          <h1>Guess Who?</h1>
          <PersonWrapper photoGrid={this.state.photoGrid} handleOnClick={this.handleOnClick.bind(this)}/>
          <QuestionContainer question={this.state.questions}/>
          <CardToGuess cardToGuess={this.state.randomCard} backOfCard={this.state.backOfCard} winnerClick={this.winningCard.bind(this)}/>
        </div>
        )
    }


  }
  export default GameContainer
