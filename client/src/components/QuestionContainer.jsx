import React from 'react'

class QuestionContainer extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <div>
        <select id="question"> 
          <option>Do they have glasses?</option>
          <option>Are they bald?</option>
          <option>Are they female?</option>
          <option>Are they male?</option>
          <option>Do they have dark hair</option>
          <option>Do they have blond hair?</option>
          <option>Do they have facial hair?</option>
          <option>Do they have long hair?</option>
          <option>Do they have short hair?</option>
        </select>
      </div>
      )
  }
}
export default QuestionContainer

