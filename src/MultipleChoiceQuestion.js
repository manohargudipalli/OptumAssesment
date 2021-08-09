import React from 'react'

const MultipleChoiceQuestion = ({ question, handleSelect }) => {
  const { text, options } = question;

  return (
    <div>
      <p className='info'>{text}</p>
      {options.map((option, index) => (
        <div key={index} className="option" >
          <input type="radio" onSelect={() => handleSelect} />
          <label>{option} </label>
        </div>
      ))
      }
    </div>
  )
}

export default MultipleChoiceQuestion
