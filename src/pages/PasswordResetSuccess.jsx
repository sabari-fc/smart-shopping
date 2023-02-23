import React from 'react'
import ResetSuccessContainer from '../components/ResetSuccessContainer'

import AuthPage from './AuthPage'

import CartImage from '../images/login.png'



const PasswordResetSuccess = () => {

  return (
    <AuthPage container={<ResetSuccessContainer />} image={CartImage} />
  )
}

export default PasswordResetSuccess