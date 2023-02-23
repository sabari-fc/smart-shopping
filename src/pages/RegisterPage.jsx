import React from 'react'
import RegisterContainer from '../components/RegisterContainer'

import RegisterImage from '../images/register.png'
import AuthPage from './AuthPage'

const RegisterPage = () => {
  return (
    <AuthPage image={RegisterImage} container={<RegisterContainer />} />
  )
}

export default RegisterPage