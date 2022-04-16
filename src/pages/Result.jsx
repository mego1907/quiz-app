import React from 'react'
import { useSelector } from 'react-redux'
import ResultSection from '../components/ResultSection'

const Result = () => {

  const result = useSelector(state => state.exam.result)
  const questions = useSelector(state => state.exam.questions)

  // get the result as percentage
  const resultAsPercentage = ((result / questions.length) * 100).toFixed(0)

  return (
    <div>
      <ResultSection result={resultAsPercentage} />
    </div>
  );
}

export default Result