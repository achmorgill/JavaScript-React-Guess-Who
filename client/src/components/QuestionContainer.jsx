import React from 'react'

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <select id="question"> 
          <option value="glasses">Do they have glasses?</option>
          <option value="bald">Are they bald?</option>
          <option value="female">Are they female?</option>
          <option value="male">Are they male?</option>
          <option value="dark-hair">Do they have dark hair</option>
          <option value="blond-hair">Do they have blond hair?</option>
          <option value="beard">Do they have facial hair?</option>
        </select>
      </div>
      )
  }
}
export default QuestionContainer

