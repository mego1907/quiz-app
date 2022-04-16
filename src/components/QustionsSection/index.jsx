import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss"

import { useSelector, useDispatch } from "react-redux";
import { setCountCorrectAnswer, setCurrentQuestion } from "../../store/exam/examActions";

const QuestionsSection = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const currentQuestion = useSelector(state => state.exam.currentQuestion)
  const questions = useSelector(state => state.exam.questions)
  
  const [correctAnswers, setcorrectAnswers] = useState(0);
  const [showResult, setShowResult] = useState(false)

  dispatch(setCountCorrectAnswer(correctAnswers));


  const handleAnswer = (isCorrect) => {
    if(isCorrect) { 
      setcorrectAnswers(correctAnswers + 1)
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      dispatch(setCurrentQuestion(nextQuestion));
    } else {
      setShowResult(true);
    }
  }


  const showResultFunc = () => {
    dispatch(setCurrentQuestion(0));
    setcorrectAnswers(0);
    setShowResult(false);
    navigate("/result")
  }

  return (
    <div className="questions-section">
      <div className="questions-section__content">
        <div className="questions-section__content__question">
          <p>
            Question {currentQuestion + 1} / <span>{questions.length}</span>
          </p>
          <h3>{questions[currentQuestion].questionText}</h3>
        </div>
        <ul className="questions-section__content__answers">
          {questions[currentQuestion].answerOptions.map((answer, index) => {
            return (
              <li key={index} onClick={() => handleAnswer(answer.isCorrect)}>
                {answer.answerText}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className={`questions-section__result ${
          showResult ? "questions-section__result--active" : ""
        }`}
      >
        <button onClick={showResultFunc}>Show Result</button>
      </div>
    </div>
  );
}

export default QuestionsSection