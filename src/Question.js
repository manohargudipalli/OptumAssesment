import React, { useState } from 'react'
import questions from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import RangeSliderQuestion from './RangeSliderQuestion';
const Question = () => {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const count = questions.length;
  const { type } = questions[index];

  const nextQuestion = () => {
    setIndex(prevIndex => prevIndex + 1);
  }

  const handleSelect = (e) => {
    setAnswer(e.target.value);
  }
  let question;
  switch (type) {
    case "multiple choice":
      question = <MultipleChoiceQuestion handleSelect={handleSelect} question={questions[index]} />
      break;
    case "numeric range":
      question = <RangeSliderQuestion question={questions[index]} />
      break;
    default:
      break;
  }
  return (
    <div>
      {question}
      <div>
        <button className='next-btn' onClick={nextQuestion}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default Question
