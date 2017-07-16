import React from 'react'
import PersonWrapper from '../components/PersonWrapper'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    
      this.state = {
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
            }
          ]
        }
      }

    render() {
      return(
        <div>
        <h1>Guess Who?</h1>
        <PersonWrapper photoGrid={this.state.photoGrid}/>
        </div>
        )
    }


  }
  export default GameContainer

