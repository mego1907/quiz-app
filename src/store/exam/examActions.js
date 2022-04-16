import { useNavigate } from "react-router-dom"
import { SET_SHOW_SCORE, SET_CURRENT_QUESTION, SET_COUNT_CORRECT_ANSWER } from "./examTypes"

export const setCurrentQuestion = (current) => {
  return {
    type: "SET_CURRENT_QUESTION",
    payload: current,
  }
}

export const setCountCorrectAnswer = (result) => {
  return {
    type: "SET_COUNT_CORRECT_ANSWER",
    payload: result,
  };
}

export const setShowScore = (show) => {
  return {
    type: "SET_SHOW_SCORE",
    payload: show,
  }
}