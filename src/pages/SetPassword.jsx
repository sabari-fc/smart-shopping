import React from 'react'

import AuthPage from './AuthPage'
import SetPasswordContainer from '../components/SetPasswordContainer'

import CartImage from '../images/login.png'


const SetPassword = () => {
  return (
    <AuthPage container={<SetPasswordContainer />} image={CartImage} />
  )
}

export default SetPassword