import React from 'react'
import QuestionsSection from '../components/QustionsSection'

import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import LoginToSeeTheQuestions from '../components/LoginToSeeTheQuestions'

const Exam = () => {

  const questions = useSelector(state => state.exam.questions)

    const { loginWithRedirect, logout, user, isLoading, isAuthenticated } = useAuth0();

    if(isLoading) { 
      return <div>Loading...</div>
    }

  return (
    <div className='exam'>
      {isAuthenticated ? <QuestionsSection questions={questions} /> : <LoginToSeeTheQuestions />}
    </div>
  )
}

export default Exam