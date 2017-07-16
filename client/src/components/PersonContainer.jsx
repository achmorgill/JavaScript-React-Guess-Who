import React from 'react'

class PersonContainer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log("personContainer", this.props.card)
    return(
      <div className="picture">
     <img className="images" src={this.props.card.img} />
      </div>
      )
  }
}
export default PersonContainer




