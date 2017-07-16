import React from 'react'

class PersonContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  onCardClick(event) {
    this.props.handleOnClick(this.props.index)
  }

  render() {
    return(
      <div className="picture">
     <img className="images" src={this.props.card.img} onClick={this.onCardClick.bind(this)}/>
      </div>
      )
  }
}
export default PersonContainer




