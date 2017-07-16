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
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-bUv--4XVPD_gfXbB1__ZC8OUX3efjSesRm4lClQfnmGq4oO",
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
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9SUalG02DoT6XETZOaCmRYSjrDnhTCEq06knBvnpk8Nnbu4C",
              faceUp: true,
              hair: "dark",
              glasses: true,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjeH_wdE5_9N5s8GgzrrWvranmEogX1WQ-3a86CXcBV9DQuVGBrQ",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw8zrKc9QG7T8pSdRur0S6pVF9Htzi_7MxFONUVTImRGXhBAOZ",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhHYhcqDwAnahzGhFPy3HvbzzRtPJgXJAzgvMpCUhMDDejYXtJmg",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuoRgfztUp7bGJkHG081a9EIY_zcJfqfMZh08hncThvsLes60YQ",
              faceUp: true,
              hair: "bald",
              glasses: false,
              hairLength: "none",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFd5ylieP0KiEv-CViqRXza7x_OIBETp8GDcSi1setW5Ewi_fN",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://www.famousbirthdays.com/headshots/maggie-wheeler-2.jpg",
              faceUp: true,
              hair: "dark",
              glasses: true,
              hairLength: "long",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_k1WGGh4Azb6sxtZyhcSgVGzVF1ENZggEQSjGb2r-fBdc8PSTBA",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "long",
              sex: "girl",
              beard: false
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
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGu4bB4Hku77NbjTm6EVHU8a3bxtuVwlYXUqZUkpViQ275asFWdQ",
              faceUp: true,
              hair: "bald",
              glasses: true,
              hairLength: "none",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNgOTKQhxpEdNECqkAwZ2NOp71r2ufHnNCdd36cN4LxOPe7ztCxg",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGc2-Kij8jmDREwTFHxL9nq56-NDtFJHiS10hmLw4isylGkWdA",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ZzMBBbNk9m8_gzv_49m_fJ1RSVPOE0vGLmMr6j9nuaMMcQmq",
              faceUp: true,
              hair: "black",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7b6RdBuhEHkzRw_5121Z2TglPeMQX5-dHaokqxFb4CEgV6TTh",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkdd5_q7Zo1Q7AAgMkGyjBORdPVEskCTEkAnZTVAvmarDb2nNr",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "long",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSIFtp3z010HmTvM7L4OiDDR9Vx8TD7a2pwjMFwW8JqgXQYidzQ",
              faceUp: true,
              hair: "blond",
              glasses: true,
              hairLength: "short",
              sex: "boy",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2w-3PFB9_GrQROi6Ra1lcuk5FVoTe45lIiTg-IaaZUA7uBrZsuw",
              faceUp: true,
              hair: "blond",
              glasses: true,
              hairLength: "short",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST22MTos8cSRGjCDJ28xFKp7l7iAzBhUmHXp6DRXJIoj0kLCE5zQ",
              faceUp: true,
              hair: "blond",
              glasses: false,
              hairLength: "short",
              sex: "girl",
              beard: false
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcLiOQWXO-ktF_yvGliit4BdRpL0NemfkK7Z99eW5gKS8Yr7OnHg",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "short",
              sex: "boy",
              beard: true
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoY0ttoukPVlnb7XqEFNaKFGaW2dd-dzlEtvbzdzK36zRJQ-uJ",
              faceUp: true,
              hair: "dark",
              glasses: false,
              hairLength: "long",
              sex: "girl",
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
