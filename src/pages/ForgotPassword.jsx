import React from 'react'
import AuthPage from './AuthPage'

import CartImage from '../images/login.png'

import ForgotPassContainer from '../components/ForgotPassContainer'

const ForgotPassword = () => {
  return (
    <AuthPage container={<ForgotPassContainer />} image={CartImage} />
  )
}

export default ForgotPassword