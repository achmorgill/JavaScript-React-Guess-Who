import React from 'react'

class PersonContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="picture">
     <img className="images" src={this.props.card.img} onClick={this.props.handleOnClick}/>
      </div>
      )
  }
}
export default PersonContainer




