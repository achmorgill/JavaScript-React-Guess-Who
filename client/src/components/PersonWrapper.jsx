import React from 'react'
import PersonContainer from './PersonContainer'

class PersonWrapper extends React.Component{

  render() {

      const gameToRender = this.props.photoGrid.map(( picture, index  ) => {
        console.log(picture)
      return <PersonContainer card={picture} index={index} key={index} handleOnClick={this.props.handleOnClick}/>
    })

    return (
      <div id="gameWrapper">
        {gameToRender}
      </div>
      )
  }

}
export default PersonWrapper

  