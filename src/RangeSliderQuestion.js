import React, { useState } from 'react'
const RangeSliderQuestion = ({ question }) => {
  const { text, range } = question;
  const [rating, setRating] = useState(0);
  return (
    <div>
      <p>{text}</p>
      <input type="range" min="0" max={range} value={rating} class="slider" id="myRange" />
    </div>
  )
}

export default RangeSliderQuestion
